import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseurl } from "../baseurl";
import Popup4 from "../popup4";




const List_Data= ({sub,listname})=>{
    const [showpopup1, setshowpopup1] = useState(false)   
const [data_list,setdata_list]=useState([]);
const [name,setname]=useState()
 const [Get_Single_Parcel_DetailsArr,setGet_Single_Parcel_DetailsArr]=useState([])
 const [show,setshow]= useState(false)
 const [title,settitle]=useState()
 const [tracking_number,settracking_number]=useState()
 const [tracking_id,settracking_id]=useState()



    useEffect(()=>{

        getlistdata()


    },[])


 const getlistdata= ()=>{

    axios.get(`${baseurl}/getlistdata/${sub}/${listname}`)
        
            // params:{
            //      sub:sub,
            //      listname:listname


            // }
        

    // }

    .then((response)=>{

        
        setdata_list(response.data.list)
        console.log(response.data,"Get_ListData")
        setname(response.data.list[0].selectlist)


    })
    .catch((error)=>{


        console.log(error)



    })





 } 

 const See_All_details = async (e)=>{

    console.log(e,"uuid")

    await Get_Single_Parcel_Details(e)

  } 
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
  const handleShow=(e,i)=>{


    setshowpopup1(true)

    settracking_number(e)
    settracking_id(i)

    // console.log(tracking_number,tracking_id)


  };


 const Change_Title = async(e)=>{

    e.preventDefault()

    console.log(tracking_number,tracking_id,"edit title tracking number")


    const formData = {
        tracking_number:tracking_number,
        id:tracking_id,
        title:title

    }

    await axios.post(`${baseurl}/changepackagetitle`,formData)
    .then((response)=>{

        if(response.data.success===true)
        {
            window.location.reload()
        }

    })
    .catch((error)=>{

        console.log(error)

    })



 } 





return (


    <div>


<div className='tracklist'>
            {
            show&&
<Popup4 Get_Single_Parcel_DetailsArr={Get_Single_Parcel_DetailsArr}/>
          }


            </div>



   
            
    
    
    
    <section class="sidebar-page-1">
    
    <div class="main-page-1">
        <h2>{name?name:'Dashboard'}</h2>
    
       
    
    
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
              
               

                

              {  data_list.map((e,i)=>(

<tr key={i}>
            <td>{e.tracking_number}</td>
            <td>{e.package_title}</td>
            <td>{e.status !=null? e.status:'pending'}</td>



            <td><button onClick={()=>{See_All_details(e.tracking_number)}} className='button-see'>See Details</button></td>
           
            <td><button onClick={()=>{handleShow(e.tracking_number,e.id)}} className='button-see'>Edit</button></td>
          </tr>


              ))

            } 



          
      
    
    
    
           
            </table>
    </div>
                            
        </div>
    </div>
    </section>
    
    
                      
   
        <div className='popop'>
        
    
        
    <div class="popup-2">


    
    </div>
    
    
    
    
    </div>
    
    
    
    
    
   


    {showpopup1 &&

<div className='popop'>
                {/* <Header /> */}

                
    <div class="popup-2">
        <form action="" onSubmit={Change_Title}>
            <div class="form-head">
                <p>Edit List</p>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{setshowpopup1(false)}}>
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
                    <button class="Cancel" onClick={()=>{setshowpopup1(false)}}>Cancel</button>
                </div>
            </div>
        </form>
    </div>




        </div>
}

    
    
    
    
    
    
          
    
    
    
    
     
    
    
    
    
    
            </div>

)



}


export default List_Data
