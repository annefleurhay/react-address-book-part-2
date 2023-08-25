import { useState, useEffect } from "react";
import ContactList from "./ContactList";
//import { useNavigate } from "react-router-dom";

function ContactIndex() {
    const [contact, setContact] = useState([])

    async function PeopleData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/')
        const json = await response.json()
        setContact(json)
        
    }
    useEffect(()=>{
        PeopleData()
    }, [])

return (
        <>
        
        <ContactList contacts={contact}/>

        </>

)
}
export default ContactIndex