import { useState } from "react"
    //addcontact achter form is nieuw
function Form( { addContact}){
    const [newContact, setNewContact] = useState({
        name: '',
        street: '',
        city: '', 


    })
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(newContact)
            //hieronder is nieuw
        addContact(newContact)
        //dit hierboven toegevoegd stap 3
        setNewContact({
        name: '',
        street: '',
        city: '', 
        
        })
        
    }
    const handleChange = (event) => {
        const {name, value,} = event.target
        setNewContact({...newContact, [name]: value})
    }



    //functies die submit aanpakken
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                <label>Name:<input
                    type="text"
                    name="name"
                    value={newContact.firstName}
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