import ContactDetails from "./ContactDetails"
import { Link } from "react-router-dom"
function ContactList(props){
    const {contacts} = props

    //console.log(props.contacts)
    console.log(contacts , 'hiero')
    

   
    return (
        <>
        <h1>Contacts</h1>
        {contacts.map((person)=>
            (<>
            <li>{person.name} </li>
            <li>{person.email}</li>
            <Link to='/contactlist/details/:id'><button>Details</button></Link>
            
            {/* <ContactDetails contacts={props.contacts}/> */}
            {/* <h1>HIER BEN IK </h1> */}
            {/* <li>{person.email}</li> */}
            {/* Link naar contactdetails zodat de contactinformatie zichtbaar is. */}
            </>)
            
    )}
        </>

    )
    
}


export default ContactList

//have the actual mapping in here and use this in the index so it shows the people
//index would be possible for retrieving the people
//contactlist would be responsible for mapping over them 