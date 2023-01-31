import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const EditContact = () => {
    const [name,setName] = useState("")
    const [lastName,setlastName] = useState("")
    const [address,setAddress] = useState("")
    const [city,setCity] = useState("")
    const [country,setCountry] = useState("")
    const [email,setEmail] = useState("")
    const [number,setNumber] = useState("")
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(()=>{
        getUserById()
    },[]);

    const getUserById = async() =>{
        const response = await axios.get(`http://localhost:5000/contacts/${id}`)
        setName(response.data.name)
        setlastName(response.data.lastName)
        setAddress(response.data.address)
        setCity(response.data.city)
        setCountry(response.data.country)
        setEmail(response.data.email)
        setNumber(response.data.number)
    }
    const updateUser = async(e) =>{
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:5000/contacts/${id}`,{
                name,
                lastName,
                address,
                city,
                country,
                email,
                number
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='columns is-justify-content-center'>
        <div className='column is-half'>
        <p className='is-size-5 has-text-weight-bold mt-2 mb-3'>Update contact</p>
            <form onSubmit={updateUser}>
            <div className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                    <input 
                    type='text'  
                    className='input' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter the Name'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Last Name</label>
                <div className='control'>
                    <input 
                    type='text' 
                    className='input' 
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    placeholder='Enter Last Name'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Address</label>
                <div className='control'>
                    <input 
                    type='text' 
                    className='input' 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder='Enter Address'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>City</label>
                <div className='control'>
                    <input 
                    type='text' 
                    className='input' 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='Enter city'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Country</label>
                <div className='control'>
                    <input 
                    type='text' 
                    className='input' 
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder='Enter country'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                    <input 
                    type='email' 
                    className='input' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter the Email'
                    />
                </div>
            </div>
            <div className='field is-grouped'>
                <div className='control is-expanded'>
                <label className='label'>Number</label>
                    <input 
                    type='text' 
                    className='input' 
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder='Enter the Number'
                    />
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                    <button type='submit' className='button is-info'>Update</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default EditContact