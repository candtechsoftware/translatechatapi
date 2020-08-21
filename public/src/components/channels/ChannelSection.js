import React from 'react';
import ChannelForm from './ChannelForm';
import ChannelList from './ChannelList';
import PropTypes from 'prop-types';

const ChannelSection = ({channels, setChannel, addChannel, activeChannel }) => {
  return (
    <div className="support panel panel-primary">
      <div className="panel-heading">
        <strong>Channels</strong>
      </div>
      <div className="panel-body">
        <ChannelList channels={channels} setChannel={setChannel} />
        <ChannelForm addChannel={addChannel} />
      </div>
    </div>
  );
};

ChannelSection.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  addChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired,
};

export default ChannelSection;
