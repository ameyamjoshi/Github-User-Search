import React, { useEffect, useState } from 'react'
import "./Users.css"
function User() {
    const [User, setUser] = useState([])
    async function getData() {
        let x = await fetch("https://api.github.com/users");
        
        setUser(await x.json()) ;
        console.log({User})
        
      }
    useEffect(() => {
        getData();
        
    }, [])
    return (
        <div className="container">
           {User.map((user)=>{
             return(
                 <div className="card">
                <img src={user.avatar_url} alt="Messed up the path" width="200px"/>
                <div className="desc">
                <span>{user.login}</span>
                <a href={user.html_url}>Visit Github</a>
                </div>
                 </div>
            )  

           })
           }
        </div>
       
    )
}

export default User
