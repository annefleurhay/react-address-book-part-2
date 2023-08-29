import { useState } from "react"
import { useContext } from "react"
import DataContext from "./DataContext"
    //addcontact achter form is nieuw
function Form( { addContact} ){
    const contact = useContext(DataContext)
    //console.log(contact + ' nope')
   
    const [newContact, setNewContact] = useState({
        id: contact.length + 1,
        name: '',
        address: {
        city: '',
        street: ''
        },
        
        //het heeft iets te maken met dat de waarde niet goed wordt geladen in de property address.street en address.city ze worden geladen in city en street maar niet het genestelde object

        //de id waarde wordt pas toegepast als je eerst de contactlijst hebt doorgenomen oke dit pobleem lijkt opgelost te zijn

    })
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(newContact)
            //hieronder is nieuw
        addContact(newContact)
        //dit hierboven toegevoegd stap 3
        setNewContact({
        id: contact.length + 2,
        name: '',
        address: {
            city: '',
            street: ''
            },
        })
        
    }

    //input feelds werken niet 

    //hieronder is wat het was
    // const handleChange = (event) => {
    //     const {name, value,} = event.target
    //     setNewContact({...newContact, [name]: value})
    // }

    const handleChange = (event) => {
        const { name, value } = event.target;


        // const handleChange = (event) => {
        //     const { name, type, value, checked} = event.target
            
        //     if (type === 'checkbox') {
              
        //       const updatedTime = {
        //         ...rateDuck.spendTime, [value]: checked
        //         // the actual value of checked is changed
        //       }
        //       // if (value === 'swimming') {
        //       //   updatedTime.swimming = checked
        //       // } The long way to show what the code above this does, you'd have to add this for all of them, this is just an example so you'll understand tomorrow morning.
              
        //       setRateDuck({...rateDuck, spendTime: updatedTime }) 
             
        //     } else {
        //       setRateDuck({...rateDuck, [name]: value })
        //     }


    //     if (name === 'street') {
    //         console.log('hello')
    //         prevContact['address'] [name] = value
    // }


   
        setNewContact((prevContact) => ({
            //if statement
            
          ...prevContact,
          [name]: value ?? prevContact[name],
        }));
      };
        //hierboven is nieuw en de tekst na ?? ook
        
    // if (!contact) {
    //     return null
    // }

    //functies die submit aanpakken
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