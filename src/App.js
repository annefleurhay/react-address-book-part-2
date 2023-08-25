import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import ContactList from './components/ContactList';
import ContactIndex from './components';

function App() {
    return (
        <>
        <h1>Menu</h1>
        <ul>
            <li>
                <Link to='/contactlist'>Contacts list</Link>
            </li>

        </ul>
        <Routes>
            <Route path='/contactlist' element={<ContactIndex/>}/>
            {/* <Route path='/contactlist/contactdetails/:id' element={<ContactDetails/>}/> */}

        </Routes>
        
        
        
        </>
    );
}

export default App;
