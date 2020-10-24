import React from "react"
import "./style.css"

function ContactCard(props){
    return (
        <div className="contactCard">
            <img src={props.imgUrl} alt="Webbie Cat" width="250px" height="250px"/>
            <h1>{props.name}</h1>
            <p>Mobile Number:{props.phone}</p>
            <p>email address:{props.mail}</p>
        </div>
    )
}
export default ContactCard