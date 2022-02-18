import './App.css';
import Form from './component/Form';
import Todolist from './component/Todolist';
import {db} from './firebase'
function App() {
  
  return (
    <div className="App">
      <Form/>
      <Todolist/>
    </div>
  );
}

export default App;
