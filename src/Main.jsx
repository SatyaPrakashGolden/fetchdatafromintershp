import UserData from "./compoents/UserData";
import { useEffect, useState } from "react";
const API="https://api.tvmaze.com/search/shows?q=all";
const Main =() =>{
    const [users, setUsers]=useState([]);
    const fetchUsers=async (url)=>{
        try{
            const res=await fetch (url);
            const data=await res.json();
            if(data.length>0)
            {
                setUsers(data);
            }
            console.log(data);
        }catch(e){
            console.log(e.message);
        }
    }
useEffect(()=>{
    fetchUsers(API);
},[])
return <>
<table>
    <thead>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Lanuage</th>
        <th>Address</th>
        </tr>
    </thead>
    <tbody>
        <UserData users={users} />
    </tbody>
</table>
</>
}
export default Main;