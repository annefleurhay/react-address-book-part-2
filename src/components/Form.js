import { useState } from "react"
import { useContext } from "react"
import DataContext from "./DataContext"
import { useNavigate } from "react-router-dom"
    
function Form( { addContact} ){
    const navigate = useNavigate()
    const contact = useContext(DataContext)
    
    const [newContact, setNewContact] = useState({
        id: contact.length + 1,
        name: '',
        address: {
        city: '',
        street: ''
        },
         })

      const handleChange = (event) => {
        const {name, value} = event.target;
        setNewContact((prevContact) => {
            const newPerson = {...prevContact}
            if(name ==='street' || name === 'city') {
                newContact.address[name]= value
            } else { 
                newContact[name] = value

            }
            return newPerson
        })
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedContact = {
          ...newContact,
          id: contact.length + 1,
        };
        addContact(updatedContact);
        navigate('/contactlist')
        
      };
      
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                <label>Name:<input
                    type="text"
                    name="name"
                    value={newContact.name}
                    onChange={handleChange}
                /></label>
                </li>

            
                <li>
                <label>Street:<input
                    type="text"
                    name="street"
                    value={newContact.street}
                    onChange={handleChange}
                /></label>
                </li>

                <li>
                <label>City:<input
                    type="text"
                    name="city"
                    value={newContact.city}
                    onChange={handleChange}
                /></label> 
                </li>
                <li>
                <input type="submit" value="Add"  />
                </li>
            </ul>
            
        </form>
    )
}

export default Form