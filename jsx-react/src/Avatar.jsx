import React from 'react'
import Items from './Items'

function Avatar() {
   const width ="200px";
   const height ="200px";
   const src ="https://res.cloudinary.com/atapas/image/upload/v1721647736/youtube/logo/YT-800-D_-_Bangla_px6glg.png";
   const alt ="tapaScript বাংলা";

   const today = new Date();
   function getDay(date) {
    return new Intl.DateTimeFormat('en', { weekday: 'long' }).format(date);
   }
   const stylename={
    color:"red",
    backgroundColor:"yellow",
    padding:"20px"
   }
   
  return (
    <div>
      <h1>tapaScript</h1>
      <h2 style={stylename}> today is {getDay(today)}</h2>
  <img width={width} height={height} src={src} alt={alt} />
  <Items/>
    </div>
  )
}

export default Avatar
