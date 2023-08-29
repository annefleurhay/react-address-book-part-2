// import { useState, useEffect } from "react";
// import ContactList from "./ContactList";
// //import { useNavigate } from "react-router-dom";
// //import ContactDetails from "./ContactDetails";

// function ContactIndex() {
//     const [contact, setContact] = useState([])

//     async function PeopleData() {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/')
//         const json = await response.json()
//         setContact(json)
        
//     }
//     useEffect(()=>{
//         PeopleData()
//     }, [])

//     // Dit is nieuw
//
//     const addContact = (newContact) => {
//         setContact([...contact, newContact])
//     }
//     //

// return (
//         <> 
//         <ContactList contacts={contact} addContact={addContact}/>
//         {/* prop van add contact toegevoegd stap 2*/}
//         </>

// )
// }
// export default ContactIndex