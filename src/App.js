import './App.css';
import{useState} from 'react';

function App() {
  let[status,setStatus]=useState(false)
  let[pstatus,setPstatus]=useState(false)
  let[menueStatus,setMenueStatus]=useState(false)
  return (
    <div className="App">
      <button className={'micon'} onClick={()=>setMenueStatus(!menueStatus)}>
        {menueStatus?<span>&times;</span>:<span>&#9776;</span>}
        </button>
      <div className={`menue ${menueStatus?'activeMenue':''}`}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
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
