import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Form from './components/Form';
import Contacts from './components/Contacts';
import DataContext from './components/DataContext';
import ContactList from './components/ContactList';
import { useState, useEffect } from 'react';


function App() {
const [contact, setContact] = useState([])

    async function PeopleData() {
        try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/')
        if (!response.ok) {
            throw new Error('No luck')
        }
        const json = await response.json()
        setContact(json)
        
    } catch (error) {
        console.error(error)
    }}
    
    useEffect(()=>{
        PeopleData()
    }, [])

  
    const addContact = (newContact) => {
        newContact.id = contact.length + 1
        setContact([...contact, newContact])
    }
    

    
    
    return (
        <>
        <DataContext.Provider value={contact}>
        
        <h1>Menu</h1>
        <ul>
            <li>
            <Link to='/contactlist'>Contacts</Link>
            </li>

            <li>
            <Link to='/newcontact'>New contact</Link>
            </li>
            

        </ul>
        <Routes>
            <Route path='/contactlist' element={<ContactList/>}/>
            <Route path='/contactlist/details/:id' element={<Contacts/>}/>
            <Route path='/newcontact' element={<Form addContact={addContact} />}/>

        </Routes>

        </DataContext.Provider>
        
        
        </>
    );
}

export default App;
