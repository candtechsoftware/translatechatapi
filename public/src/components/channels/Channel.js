import React from 'react';
import PropTypes from 'prop-types';


const Channel = ({channel, setChannel, activeChannel }) =>{
  const onClick = e => {
    e.preventDefault();
    setChannel(channel); 
  }
  const active = channel === activeChannel ? 'active': '';
  return (
    <li className={active}>
      <a onClick={onClick}>
        {channel.name}
      </a> 
    </li>
  )
};

Channel.propTypes = {
  channel: PropTypes.object.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
}

export default Channel; 
