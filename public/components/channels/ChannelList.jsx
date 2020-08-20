import React from 'react';
import Channel from './Channel';
import PropTypes from 'prop-types';

const ChannelList = ({channels, setChannel}) => {
  return (
    <ul>
      {channels.map(chan => {
        <Channel channel={chan} setChannel={setChannel} />;
      })}
    </ul>
  );
};

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
};

export default ChannelList;
