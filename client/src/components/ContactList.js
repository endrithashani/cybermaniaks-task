import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const ContactList = () => {
    const [users,setUser] = useState([])

    useEffect(()=>{
        getUsers()
    },[])


    const getUsers = async() =>{
        const response = await axios.get('http://localhost:5000/contacts')
        setUser(response.data)
    }

    const deleteUser = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/contacts/${id}`);
        getUsers();
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div className="columns is-flex is-flex-direction-column is-align-items-center  mt-5 is-fluid">
      <div className='container is-flex is-justify-content-space-around is-fluid'>
            <p className='is-size-4 has-text-weight-bold'>Contacts</p>
            <Link to='add' className='button is-info is-small'>
              Add Contacts
            </Link>
      </div>
      <div className="column mt-5 ">
        <table className="table is-bordered is-striped is-narrow is-hoverable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                  <tr key={user._id}>
                     <td>{user.name}</td>
                     <td>{user.lastName}</td>
                     <td>{user.address}</td>
                     <td>{user.city}</td>
                     <td>{user.country}</td>
                     <td>{user.email}</td>
                     <td>{user.number}</td>
                     <td>
                        <Link to={`edit/${user._id}`} className='button is-success is-small'>Edit</Link>
                     </td>
                     <td>
                     <button 
                     onClick={() => deleteUser(user._id)}
                     className='button is-danger is-small'>
                      Delete
                      </button>
                     </td>
                 </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default ContactList
