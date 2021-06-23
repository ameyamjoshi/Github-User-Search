import React, { useEffect, useState } from "react";

function SearchData() {
    async function fetchData(ip) {
        console.log(ip.ip)
        let x = await fetch(`https://api.github.com/users/${ip.ip}`);
    
        setUserInfo(await x.json());
        console.log({ UserInfo });
      }
   
  const [ip, setip] = useState("");
  const handleSubmit = (e) => {
      e.prevetDefault();
    console.log("Submitted");
  };
  useEffect(() => {
   console.log("UseEffect Called")
    fetchData({ip});
   
}, [ip])
const [UserInfo, setUserInfo] = useState("")
  return (
    <div>
      <h3>Search User by UserName</h3>
      <input
        placeholder='type username here'
        onChange={(e) => {setip(e.target.value)
                       console.log(e.target.value) 
        }}></input>
      <button onClick={()=>setip(ip)}>Find User</button>
      {ip}
      { UserInfo.created_at }
    </div>
  );
}

export default SearchData;
