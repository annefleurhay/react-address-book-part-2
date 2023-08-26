import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Contacts from "./Contacts"
//Zorg ervoor dat alle informatie eerst hiernaartoe wordt verplaatst


function ContactDetails(props) {
    console.log(props)
    // const [contact, setContact] = useState({})
    // const navigate = useNavigate()
    
    // useEffect(()=> {
    //     setContact()
    // })
    
    

    return (
        <div> 
        
        <Contacts props={Contacts} />
        


        </div>
       
       
    )
    // Naam 
    // Adres 
    // Stad //verwijs door naar contacts

}

export default ContactDetails