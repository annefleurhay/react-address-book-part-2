import { useNavigate, useParams, useLocation } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import DataContext from "./DataContext"

function Contacts() {

    const { contact } = useContext(DataContext)
    const [ user, setUser] = useState({})
    const navigate= useNavigate()
    const { id } = useParams()
    const location = useLocation()
    // const person = contact.filter(p=> p.id === id)[0]
    // console.log(person)
    // useEffect(()=> {
    //     setUser(person.find(p => p.id === Number(id)))
    // // }, [person, id])
    // useEffect(() => {
    //     if (person && person.length > 0) {
    //         const userFound = person.find(p => p.id === Number(id));
    //         if (userFound) {
    //             setUser(userFound);
    //         } else {
               
    //             // Gebruiker niet gevonden, je kunt hier een foutmelding tonen of iets anders doen
    //         }
    //     }
    // }, [person, id]);
    // console.log(person)

    useEffect(()=> {
        if (location.state) {
            setUser(location.state.person)
        }
    },[]) 
    if (!user.address) {
        return <p>Loading..</p>
    }

    return (
        <div>
            <h1>Name: {user.name}</h1>
            <p>City: {user.address.city}</p>
            <p>Street: {user.address.street}</p>
            
            
            <button onClick={()=> navigate ('/contactlist')}>Go back</button>
            
            {/* <Link to={`/contactlist/details/${person.id}`}></Link> */}
            {/* {person.name} {person.email} {person.address.street} */}
      
         {/* <li>Straat:</li>
        // <li>Stad:</li>
        //     <p>test</p> */}
        </div>
    )
}

export default Contacts
