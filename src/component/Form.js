import {BsPlusCircleFill,BsFillFilterCircleFill} from 'react-icons/bs';

const Form = () => {
    return (
    <div>
        <header>Nghi's Todo List</header>
            <div className="inputField">
                <input type="text" />
                <button>
                    <BsPlusCircleFill/>
                </button>
                <button>
                    <BsFillFilterCircleFill/>
                </button>
            </div>
    </div>  
    );
}
 
export default Form;