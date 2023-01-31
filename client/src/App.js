import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/NavBar/Nav';
import ContactList from "./components/ContactList";
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <div className="container is-align-content-center">
     <Routes>
      <Route path="/" element={<ContactList/>}/>
      <Route path="add" element={<AddContact/>}/>
      <Route path="edit/:id" element={<EditContact/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
