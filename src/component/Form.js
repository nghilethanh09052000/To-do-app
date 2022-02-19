import { useState } from 'react';
import {BsPlusCircleFill} from 'react-icons/bs';
import {db} from '../firebase'
import { collection, addDoc } from 'firebase/firestore';
const Form = ({handleStatus,status}) => {
    const [name, setName] = useState("");
    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(name!==""){
            await addDoc(collection(db,"todos"),{
                name:name,
                status:"Doing"
            });
            setName("")
        }
    }
    return (
    <div>
        <header>Nghi's Todo List</header>
            <div className="inputField">
                <input 
                    type="text" 
                    value={name}
                    placeholder="Enter todo"
                    onChange={(e)=>setName(e.target.value)}
                />
                <div className='buttonRight'>
                    <button onClick={handleSubmit} >
                        <BsPlusCircleFill/>
                    </button>
                    <div className='select'>
                        <select onChange={(e)=> handleStatus(e.target.value)}>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                </div>
            </div>
    </div>  
    );
}
 
export default Form;