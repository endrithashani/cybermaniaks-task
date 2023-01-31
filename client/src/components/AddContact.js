import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddContact = () => {
    const [name,setName] = useState("")
    const [lastName,setlastName] = useState("")
    const [address,setAddress] = useState("")
    const [city,setCity] = useState("")
    const [country,setCountry] = useState("")
    const [email,setEmail] = useState("")
    const [number,setNumber] = useState("")

    const [val,setVal]=useState([]);
    const [em,setEm]=useState([]);

    const handleAddEm=()=>{
        const listInputs=[...em,[]]
        setEm(listInputs)
     }
     const handleChangeEm=(onChangeValue,i)=>{
         const listInput=[...em]
         listInput[i]=onChangeValue.target.value;
         setEm(listInput)
     }
     


    const handleAdd=()=>{
       const abc=[...val,[]]
       setVal(abc)
    }
    const handleChange=(onChangeValue,i)=>{
        const inputdata=[...val]
        inputdata[i]=onChangeValue.target.value;
        setVal(inputdata)
    }
    
    const navigate = useNavigate()

    const saveUser = async(e) =>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/contacts',{
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
        <div className='column if-flex is-half is-align-items-center '>
            <p className='is-size-5 has-text-weight-bold mt-2 mb-3'>Register new contact</p>
            <form onSubmit={saveUser}>
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
            <label className='label'>Email</label>
            <div className='field '>
                <div className='control is-expanded is-flex'>
                    <input 
                    type='email' 
                    className='input' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter the Email'
                    />
                <button className="button is-info ml-1" href='add' onClick={()=>handleAddEm()}>
                    Add
                </button>
                </div>
                <div className="control">
                {em.map((data,i)=>{
                return(
               <div className='control is-expanded'>
                    <input className="input is-align-items-left" value={data} onChange={e=>handleChangeEm(e,i)} />
               </div>
                 )
                })}
                </div>
            </div>
            <label className='label'>Number</label>
            <div className='field '>
                <div className='control is-expanded is-flex'>
                    <input 
                    type='text' 
                    className='input' 
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder='Enter the Number'
                    />
                <button className="button is-info ml-1" href='add' onClick={()=>handleAdd()}>
                    Add
                </button>
                </div>
                <div className="control">
                {val.map((data,i)=>{
                return(
               <div className='control is-expanded'>
                    <input className="input is-align-items-left" value={data} onChange={e=>handleChange(e,i)} />
               </div>
                 )
                })}
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                    <button type='submit' className='button is-info'>Save</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddContact