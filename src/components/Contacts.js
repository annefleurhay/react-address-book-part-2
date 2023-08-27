import { Link } from "react-router-dom"

function Contacts(props) {

    const { person } = props

    return (
        <div>
            <li key={person.id}>
            <h3>
            {/* <Link to={`/contactlist/details/${person.id}`}></Link> */}
            {person.name} {person.email} {person.address.street}
      </h3></li>
        {/* <li>Straat:</li>
        <li>Stad:</li>
            <p>test</p> */}
        </div>
    )
}

export default Contacts
