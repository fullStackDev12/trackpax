import React from "react";
import Sidebar from "../sidebar";
import HeaderInner from "../headerinner";
import { useParams } from "react-router-dom";
import List_Data from "./ListData";



const Dynamic_List = ()=>{


    const { sub,listname } = useParams();


    console.log(sub,listname,"Dynamic-List")
    


return(

    <div>

<HeaderInner />
    <Sidebar/>


<List_Data  sub={sub} listname={listname}/>





    </div>
)


}


export default Dynamic_List;