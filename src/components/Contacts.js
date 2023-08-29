import { useNavigate, useParams, useLocation } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import DataContext from "./DataContext"

function Contacts() {

    const { contact } = useContext(DataContext)
    const [ user, setUser] = useState({})
    const navigate= useNavigate()
    const { id } = useParams()
    const location = useLocation()

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
            
            
        </div>
    )
}

export default Contacts
