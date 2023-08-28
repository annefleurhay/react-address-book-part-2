//import ContactDetails from "./ContactDetails"
import { Link } from "react-router-dom"
//import Contacts from "./Contacts"
import { useContext } from "react"
import DataContext from "./DataContext"
function ContactList(){
    const contact  = useContext(DataContext)
      //.contacts toegevoegd
    //const {addContact} = props.addContact //dit ook toegevoegd

    //console.log(props.contacts)
    console.log(contact , 'hiero')
    

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

        //         </ul>
        // </div>
        
        // {/* <Form addContact={contacts.addContact}/> */}
        
            
            
            // (<div key={index}>
            
            // {/* <Contacts person={person}/> */}
            // <li>{person.name} </li>
            // {/* <li>{person.email}</li> */}
            // {/* <Link to='/contactlist/details/:id'><button>Details</button></Link> */}
            // <Link to={`/contactlist/details/${person.id}`}><button>Details</button></Link>
            
            
            // {/* <ContactDetails contacts={props.contacts}/> */}
            // {/* <h1>HIER BEN IK </h1> */}
            // {/* <li>{person.email}</li> */}
            // {/* Link naar contactdetails zodat de contactinformatie zichtbaar is. */}
            // </div>))}
        // </>

    )
    
}


export default ContactList

//have the actual mapping in here and use this in the index so it shows the people
//index would be possible for retrieving the people
//contactlist would be responsible for mapping over them 