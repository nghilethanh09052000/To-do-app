import {BsFillTrashFill} from 'react-icons/bs';
import {TiTick} from 'react-icons/ti';
const Todo = ({todo,handleComplete,handleDelete}) => {
    
    return ( 
    <div className='todoList'>
            <li className={`${todo.status==='Done' ? "Done" : ''} `}>{todo.name}</li>
            <div className='button'>
              { todo.status==="Doing" &&
                <button onClick={()=> handleComplete(todo)}><TiTick id='i'/></button>
              }  
                <button onClick={() => handleDelete(todo)}><BsFillTrashFill id='i'/></button>
          </div>
        </div>
     );
}
 
export default Todo;