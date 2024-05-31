import axios from 'axios';
import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';
import icon3 from './img/icon3.png';
import icon4 from './img/icon4.png';
import icon8 from './img/settingupdate.png';
import React, { useEffect, useState } from 'react';
import { baseurl } from './baseurl';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = (data) => {
    const [isActive, setIsActive] = useState(true);

    const toggleSidebar = () => {
        // Check if window width is less than or equal to 768
        if (window.innerWidth <= 768) {
            setIsActive(!isActive);
        }
    };

    // const toggleSidebar = () => {
    //     // Get the width of the screen
    //     // var documentWidth = window.innerWidth;
    
    //     // // Check if screen width is less than 1024
    //     // if (documentWidth < 1024) {
    //     //     setIsActive(false);
    //     // } else {
    //     //     // Toggle the sidebar if screen width is 1024 or greater
    //     //     setIsActive(!isActive);
    //     // }
    // };

    const [selectedList, setselectedList] = useState()
    const storedUserId = localStorage.getItem('userid');

    const handleChange = (selectedValue, listname, subValue) => {
        setselectedList(selectedValue);
        routelist(subValue, listname); // Assuming routelist is a function to handle route navigation with the provided listname and subValue
    };
    

    const [list, setlist]= useState([]);





    const getuserlist = async()=>{

        try {

          let id = storedUserId.slice(1, -1);
          const response = await axios.get(`${baseurl}/getlistname/${id}`)

          console.log(response.data.list,"TARARARA Sidebar")
          setlist(response.data.list)

          
        } catch (error) {
          
          console.log(error)
        }



      }

useEffect(()=>{
    getuserlist()


},[])



    const navigate = useNavigate()
    const routelist = (e,i)=>{

        console.log("routeist",e)
        navigate(`/userlist/${e}/${i}`)

      window.location.reload()



    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsActive(false);
            }
            
            else{
                setIsActive(true)
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Emp




    return (
        <div className='dss'>
              <nav className={`sidebar ${isActive ? 'active' : ''}`}>
                <ul>
                    <li >
                        <a className="toggle" >
                            <span className="icon">
                                <input id="checkbox2" type="checkbox" onClick={toggleSidebar}/>
                                <label className="toggle toggle2" htmlFor="checkbox2">
                                    <div id="bar4" className="bars"></div>
                                    <div id="bar5" className="bars"></div>
                                    <div id="bar6" className="bars"></div>
                                </label>
                            </span>
                            <span className="title">Collapse</span>
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard">
                            <span className="icon"><img src={icon2} alt=""/></span>
                            <span className="title">Dashboard</span>
                        </a>
                    </li>
                    <li>


                        
                        <a href="profilepage">
                            <span className="icon"><img src={icon3} alt=""/></span>
                            <span className="title">Profile</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            {/* <span className="icon"><img src={icon4} alt="" /></span>
                            <span className="title">
                            <label htmlFor="hello">Select List</label>
                            <select name="hello" id="hello" value={selectedList} onChange={handleChange}>
        {
          list.map((e,i)=>(
            <option value={e.listname} key={i}>{e.listname}</option>


          ))
        }

        
     
      </select>
                            </span> */}

<span className="icon"><img src={icon4} alt="" /></span>
<span className="title">
    <select className='selectoption' name="hello" id="hello" value={selectedList} onChange={(e) => { handleChange(e.target.value, e.target.selectedOptions[0].dataset.listname, e.target.selectedOptions[0].dataset.sub) }}>
        {/* <option value="volvo">Select List</option>
        <option value="saab">Select List1</option>
        <option value="opel">Select List2</option>
        <option value="audi">Select List3</option> */}
         <option>Select list</option>
        {
               
            list.map((e, i) => (
                // <Link to={`/userlist/${e.sub}`}>
                <option value={e.listname} key={i} data-listname={e.listname} data-sub={e.sub}>{e.listname}</option>
                // </Link>
            ))
        }
    </select>
</span>
                        </a>

                        
                                 
                    </li>


                    <li>


                                                    
                            <a href="/setting">
                                <span className="icon"><img src={icon8} alt=""/></span>

                                
                                <span className="title">Settings </span>
                            </a>
                            </li>


                    
                </ul>
            </nav>

            <div>

            </div>
            
        </div>
    );
}

export default Sidebar;














