import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';


import Header from './header';
 import heroimg from './img/hero-img.png'
 import TrackPax from './img/Why TrackPax.png'
 import journey from './img/journey.png'
 import logo from './img/logo.png'
 import salider from './img/salider.png'
 import yes from './img/yes.png'
import Sidebar from './sidebar';
import Popup2 from './popup2';
import { baseurl } from './baseurl';
import Popup4 from './popup4';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from './popup';
 



const List1 = () => {

    const [data, setdata]= useState([]);

    const [list, setlist]= useState([]);




    const storedUserId = localStorage.getItem('userid');





    const fetchData = async () => {
        try {
          // Log the retrieved data to the console
          console.log('Retrieved data from local storage LIST!:', storedUserId);
    
          const response = await axios.get(`${baseurl}/getpackagedetails`, {
            params: {
              id:storedUserId
            }
          });
    
         
        
          console.log('hhhhhhh',response.data.error);
        } catch (error) {
          console.log('cocnsnlsfhdh',error);
        }
      };

      let table_details;

      const [storedUserId1, setStoredUserId1] = useState('');
      

      const Package_Details = async () => {
        try {
          // Log the retrieved data to the console
          console.log('Retrieved data from local storage:NN', storedUserId);
          
          let id = storedUserId.slice(1, -1);
          const response = await axios.get(`${baseurl}/getuserpackagedetails/${id}`)
          
          
       
        
          console.log(response.data,"Package Details");
          table_details=response.data
          console.log(table_details,"respopopo")
          setdata(table_details);
        } catch (error) {

        
          console.log(error);
        }
      };



      const getuserlist = async()=>{

        try {

          let id = storedUserId.slice(1, -1);
          const response = await axios.get(`${baseurl}/getlistname/${id}`)

          console.log(response.data.list,"TARARARA")
          setlist(response.data.list)

          
        } catch (error) {
          
          console.log(error)
        }



      }



    useEffect(() => {
      
      
        fetchData();
        Package_Details();
        getuserlist();

        auto_change_status();




      }, []); // Empty dependency array to run once on mount
      
    

      const auto_change_status=()=>{

        axios.get(`${baseurl}/auto_change_status`)
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{

          console.log(error)
        })

      }
   














    const [tracking_id,settracking_id]=useState()

    const [showpopup2, setshowpopup2] = useState(false) 
    const [title,settitle]=useState()
   
    const [showpopup1, setshowpopup1] = useState(false) 
    const [showpopup, setshowpopup] = useState(false)

    const toggle =()=>{

        setshowpopup(true)

    }

    const toggle1 =()=>{

        setshowpopup1(true)

    }
    const [destination_country,setdestination_country]= useState('United States')
    const [tracking_number,settracking_number]= useState()
    const [package_title,setpackage_title]= useState()
    const [selectlist, setselectlist]=useState()

    const[show1,setShow1]=useState(false)

    

    const [selectedList, setSelectedList] = useState();

    const [selectedListName, setselectedListName] = useState()

  const handleChange = (event) => {
    setSelectedList(event.target.value);
    
  };



  const [selectedList1, setSelectedList1] = useState('1');

  const handleChange1 = (event) => {
    setSelectedList1(event.target.value);
  };


  const notify = (message) => toast.error(message);





    const create_new_package = async (e)=>{
      console.log('data' , tracking_number);
        e.preventDefault()

        console.log(tracking_number,"trackingnumber",selectedList,package_title,storedUserId )

    

          if(tracking_number == null|| package_title == null || selectedList == null){
            notify('Please Select all Fields'); 
          }
          else{

         
          
        try {

            const formData = {
    sub: JSON.parse(storedUserId),
    tracking_number: tracking_number,
    selectlist: selectedList,
    package_title: package_title,
    destination_country: destination_country,
    shipments: [
        {
            "trackingId": `${tracking_number}`,
            "destinationCountry": `${destination_country}`
        }
    ]
};

        
  
            // Make a POST request using axios
            const response = await axios.post(`${baseurl}/api/track-shipment`,formData );
            // http://localhost:5000/api/track-shipment

            // window.location.reload();


                if(response)
                {
                    console.log(formData,response.data,"TS")
                    // window.location.reload();

                    if(response.data.message==='Data already exists with the same sub and tracking_number')
                      {
                        toast.error("Package Already Exists.",{position:'top-center'})
                      }
                      else if(response.data.message==='New List created successfully')
                        {
                          toast.success("New List Created Successfully.",{position:'top-center'})

                          setTimeout(() => {
                              window.location.reload()
                          }, 1000);


                        }
                }
           
          } catch (error) {
            // Handle errors
            console.error('Error:', error.message);

            if(error.message)
              {

                setShow1(true)

                // setTimeout(() => {
                //   setShow1(false)
                // }, 4000);

              }



            // notify(error.message); 
            // Display an error message to the user
            console.log('An error occurred. Please try again later.' , error);
          }
        }
        








    }



    
    const [listname,setlist_name]= useState()
    const [selectlist1, setselectlist1]=useState()



    const create_new_list = async (e)=>{
        e.preventDefault()

     

    


        try {

            const formData={
                sub:JSON.parse(storedUserId),
                selectlist:1,
                listname:listname
            }
        
  
            // Make a POST request using axios
            const response = await axios.post(`${baseurl}/createnewlist  `,formData );
                if(response)
                {
                    console.log(formData)
                    window.location.reload()
                }
           
          } catch (error) {
            // Handle errors
            console.error('Error:', error.message);
            // Display an error message to the user
            console.log('An error occurred. Please try again later.');
          }








    }



    const See_All_details = async (e)=>{

      console.log(e,"uuid")

      await Get_Single_Parcel_Details(e)

    }






    const [Get_Single_Parcel_DetailsArr,setGet_Single_Parcel_DetailsArr]=useState([])

    const [show,setshow]= useState(false)

    
    const Get_Single_Parcel_Details = async (e) => {
      try {
        // Log the retrieved data to the console
        console.log('Get_Single_Parcel_Details', e);
  
        const response = await axios.get(`${baseurl}/Get_Single_Parcel_Details`, {
          params: {
            id: e
          }
        });
  
        // Set data after successful retrieval
      
        console.log(response.data,"Get_Single_Parcel_Details");
        setGet_Single_Parcel_DetailsArr(response.data)
        setshow(true)
        // table_details=response.data
        // console.log(table_details,"respopopo")
        // setdata(table_details);
      } catch (error) {
        console.log(error);
      }
    };


    const Change_Title = async(e)=>{

      e.preventDefault()
  
      console.log(tracking_number,tracking_id,title,"edit title tracking number")
  
        if(title === undefined)
          {
            toast.warning('Enter List Name',{position:'top-center'})
          }

          else{

            const formData = {
                tracking_number:tracking_number,
                id:tracking_id,
                title:title
        
            }
        
            await axios.post(`${baseurl}/changepackagetitle`,formData)
            .then((response)=>{
        
                if(response.data.success===true)
                {
                  toast.success("List Title Changed Successfully!",{position:'top-center'})

                    setTimeout(() => {
                      
                      window.location.reload()
                    }, 1000);
                }
        
            })
            .catch((error)=>{
        
                console.log(error)
        
            })
          }


  
  
  
   } 


   const handleShow=(e,i)=>{


    setshowpopup2(true)

    settracking_number(e)
    settracking_id(i)

    // console.log(tracking_number,tracking_id)


  };
    

    






    return (


        <div>
          <ToastContainer />


      {
        show1 && 
        
        
        
        <div className='my-old-popup'> 
        <Popup/>
        </div>

      }





<div className='tracklist'>
            {
            show&&
<Popup4 Get_Single_Parcel_DetailsArr={Get_Single_Parcel_DetailsArr}/>
          }


            </div>
        



<section class="sidebar-page-1">

<div class="main-page-1">
    <h2>Dashboard</h2>
    {/* <button onClick={notify}>Notify!</button> */}

    <div class="package-btn-box">
        <button onClick={toggle}>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.8 1.18667 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8 0 21.3333 0ZM18.6667 13.3333H13.3333V18.6667H10.6667V13.3333H5.33333V10.6667H10.6667V5.33333H13.3333V10.6667H18.6667V13.3333Z" fill="white"/>
                </svg>
                
            <p >Add new package</p>
        </button>
        <button class="Create-List"><svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.4 6.85714H0V10.2857H20.4V6.85714ZM20.4 0H0V3.42857H20.4V0ZM27.2 13.7143V6.85714H23.8V13.7143H17V17.1429H23.8V24H27.2V17.1429H34V13.7143H27.2ZM0 17.1429H13.6V13.7143H0V17.1429Z" fill="black"/>
            </svg>
            <p onClick={toggle1}>Create new List</p></button>
        
    </div>


    <div class="bound-box">
        <div class="bound-list-1">
            <p>In-bound list packages</p>
        </div>


<div class="scrllo">
<table class="bound-table">
            <tr>
                <th>EPackage ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Details</th>
                <th>Edit</th>
                
            </tr>
          
            {data.map(item => (
      <tr key={item.id}>
        <td>{item.tracking_number}</td>
        <td>{item.package_title}</td>
        <td>{item.status !=null? item.status:'pending'}</td>
        <td><button onClick={()=>{See_All_details(item.tracking_number)}} className='button-see'>See Details</button></td>
        <td><button onClick={()=>{handleShow(item.tracking_number,item.id)}} className='button-see'>Edit</button></td>
        {/* Add more table cells for other fields if needed */}
      </tr>
    ))}



       
        </table>
</div>
                        
    </div>
</div>
</section>


                  
{
    showpopup&&
    <div className='popop'>
    {/* <Header /> */}

    
<div class="popup-2">
<form action=""  onSubmit={create_new_package}>
<div class="form-head">
    <p>Add new package</p>
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>(setshowpopup(false))}>
        <path d="M1 1L16 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M16 1L1 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        
        
</div>
{/* setData({...data, sub:g_obj.sub }) */}
<div class="form-body">
    <div class="input-group">
        <label for="">Enter package tracking number</label>
        <input type="text" onChange={(e)=>(settracking_number(e.target.value))}/>
    </div>

    <div class="input-group">
        <label for="">Title for your package</label>
        <input type="text" onChange={(e)=>(setpackage_title(e.target.value))}/>
    </div>

    {/* <div class="input-group">
        <label for="">Enter Destination Country</label>
        <input type="text"  onChange={(e)=>(setdestination_country(e.target.value))}/>
    </div> */}
{/* 
    <div className="input-group">
      <label htmlFor="hello">Select List</label>
      <select name="hello" id="hello" value={selectedList} onChange={handleChange}>
        {
          list.map((e,i)=>(
            <option value="1" key={i}>{e.listname}</option>


          ))
        }

        
      
      </select>
    </div> */}


<div className="input-group">
      <label htmlFor="hello">Select List</label>
      <select name="hello" id="hello" value={selectedList} onChange={handleChange}>
        <option>Select List</option>
        {
          list.map((e,i)=>(
            <option value={e.listname} key={i}>{e.listname}</option>


          ))
        }

        
      
      </select>
    </div>


    <div class="form-btn-box">
        <button>Submit Now</button>
        <button class="Cancel"onClick={()=>(setshowpopup(false))}>Cancel</button>
    </div>
</div>
</form>
</div>




</div>

}



{showpopup1 &&

<div className='popop'>
                {/* <Header /> */}

                
    <div class="popup-2">
        <form action="" onSubmit={create_new_list}>
            <div class="form-head">
                <p>Create new List</p>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{setshowpopup1(false)}}>
                    <path d="M1 1L16 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <path d="M16 1L1 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    
                    
            </div>

            <div class="form-body">
                <div class="input-group">
                    <label for="">Give your list a name</label>
                    <input type="text" onChange={(e)=>setlist_name(e.target.value)}/>
                </div>

                {/* <div className="input-group noneed">
      <label htmlFor="hello">Select List</label>
      <select name="hello" id="hello" value={selectedList} onChange={handleChange}>
        <option value="1">Default (inbound) List</option>
        <option value="2">Default (inbound) List1</option>
        <option value="3">Default (inbound) List2</option>
        <option value="4">Default (inbound) List3</option>
      </select>
    </div> */}



                <div class="form-btn-box">
                    <button>Submit Now</button>
                    <button class="Cancel" onClick={()=>{setshowpopup1(false)}}>Cancel</button>
                </div>
            </div>
        </form>
    </div>




        </div>
}





{showpopup2 &&

<div className='popop'>
                {/* <Header /> */}

                
    <div class="popup-2">
        <form action="" onSubmit={Change_Title}>
            <div class="form-head">
                <p>Edit List</p>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{setshowpopup2(false)}}>
                    <path d="M1 1L16 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <path d="M16 1L1 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    
                    
            </div>

            <div class="form-body">
                <div class="input-group">
                    <label for="">Add new title name</label>
                    <input type="text" onChange={(e)=>{settitle(e.target.value)}}/>
                </div>

       



                <div class="form-btn-box">
                    <button>Submit Now</button>
                    <button class="Cancel" onClick={()=>{setshowpopup2(false)}}>Cancel</button>
                </div>
            </div>
        </form>
    </div>




        </div>
}

      




 





        </div>
    )

}

export default List1