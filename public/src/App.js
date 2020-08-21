import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ChannelSection from './components/channels/ChannelSection';
import './App.css';

function App() {
  const [channels, setChannels ] = useState([]); 
  const [active, setActive ] = useState({})
  const addChannel = (name) => {
    setChannels([...channels, {id: channels.length, name: name}]) 
    //TODO Connect to Server 
  }

  const setChannel = (chan) => {
    setActive(chan)
  }
  return (
    <div className="App">
      <div className='nav'> 
      <ChannelSection 
        channels={channels}
        addChannel={addChannel} 
        setChannel={setChannel}
        activeChannel={active}
      />
      </div>
   </div>
  );
}

export default App;
