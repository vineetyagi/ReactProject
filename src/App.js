import logo from './logo.svg';
import './App.css';
import{useState} from 'react';

function App() {
  let[status,setStatus]=useState(false)
  let[pstatus,setPstatus]=useState(false)
  return (
    <div className="App">
      <button onClick={()=>setStatus(!status)}>
        {
          (status)
          ?
          'Hide'
          :
          'Show'
        }
      </button>
      <br/>
      {
        (status)
        ?
        <div>
        <input type={(pstatus)?'text':'password'} />
        <br/>
        <button onClick={()=>setPstatus(!pstatus)}>{(pstatus)?'Hide Password':'Show Password'}</button>
        </div>
        :
        <p>Click on the button</p>
      }
    </div>
  );
}

export default App;
