import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

const Channel = ({channel, setChannel }) => {
  const onCLick = e => {
    e.preventDefault();
    setChannel(channel);
  }

  return (
      <li> 
          <a onCLick={onClick}>
            {channel.name}
          </a>
      </li>
  )
}

Channel.propTypes = {
  channel: React.PropTypes.object.isRequired,
  setChannel: React.PropTypes.func.isRequired,
}

export default Channel;
