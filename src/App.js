import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import ContactList from './components/ContactList';
import ContactIndex from './components';
import ContactDetails from './components/ContactDetails';
import Form from './components/Form';
import Contacts from './components/Contacts';


function App() {
    
    return (
        <>
        
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
            <Route path='/contactlist' element={<ContactIndex/>}/>
            <Route path='/contactlist/details/:id' element={<Contacts/>}/>
            <Route path='/newcontact' element={<Form/>}/>

        </Routes>
        
        
        
        </>
    );
}

export default App;
