import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
//import ContactList from './components/ContactList';
import ContactIndex from './components';
import ContactDetails from './components/ContactDetails';
import Form from './components/Form';


function App() {
    
    return (
        <>
        
        <h1>Menu</h1>
        <ul>
            <li>
            <Link to='/contactlist'>Contacts list</Link>
            </li>
            
            <Link to='/newcontact'>New contact</Link>
            <li>

            </li>
            

        </ul>
        <Routes>
            <Route path='/contactlist' element={<ContactIndex/>}/>
            <Route path='/contactlist/details/:id' element={<ContactDetails/>}/>
            <Route path='/newcontact' element={<Form/>}/>

        </Routes>
        
        
        
        </>
    );
}

export default App;
