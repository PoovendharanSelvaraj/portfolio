import "../styles.css";
import { FaHtml5 } from "react-icons/fa";
import { SiWhatsapp, SiGmail } from "react-icons/si";
import { useState } from "react";

export const Contact = () => {
const [connect,setConnect]=useState({
  email:"",
  mobile:""
});
  const handleChange=(event)=>{
        const {name,value}=event.target;

        setConnect((connect=>{
          return {
            ...connect, 
            [name] : value
          }
        }))
  }
  const handleClick=(event)=>{
    event.preventDefault();
    console.log(connect)
  }
  return (
    <div id="contact" >
      <h1>Contact</h1>
      <div  className="contacts">
        <div>
          <a href="">
            <SiWhatsapp fontSize="70px" />
          </a>
          <h3>+918883489091</h3>
        </div>
        <div>
          <a href="https://mail.google.com/">
            <SiGmail fontSize="70px" />
          </a>
          <h3>poovendharan@gmail.com</h3>
        </div>
        <div className="form">
          <form onSubmit={handleClick} action="">
            <h3>Connect with me</h3>
            <input onChange={handleChange} name="email" type="email" value={connect.email} placeholder="Enter your mail address" />
            <input onChange={handleChange} name="mobile" type="number" value={connect.mobile} placeholder="Enter your number"/>           
            <input className="submit" type="submit" />         
          </form>
        </div>
        
      </div>
      <div className="footer">
        <h5>created by Povendharan S</h5>
        </div>
    </div>
  );
};
