//import ContactDetails from "./ContactDetails"
import { Link } from "react-router-dom"
//import Contacts from "./Contacts"
import { useContext } from "react"
import DataContext from "./DataContext"
function ContactList(){
    const contact  = useContext(DataContext)
      
    console.log(contact)
    
    return (
        <div>
            <h1>Contacts</h1>
            <ul>
                {contact.map(person=> {
            return (
                <li key={person.id}>
                    {person.name}
                    <button><Link to={`/contactlist/details/${person.id}`} state={{person}}>Details</Link></button>
    
                </li>
            )
        })
    }
            </ul>
        </div>

    )
    
}


export default ContactList
 