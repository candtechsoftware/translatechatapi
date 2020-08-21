import React from 'react';
import Channel from './Channel';
import PropTypes from 'prop-types';
const ChannelList = ({channels, setChannel, activeChannel}) => {
  return (
    <ul>
      {channels.map(chan => (
        <Channel
          channel={chan}
          key={chan.id}
          setChannel={setChannel}
          activeChannel={activeChannel}
        />
      ))}
    </ul>
  );
};

ChannelList.prototypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired,
};

export default ChannelList;
