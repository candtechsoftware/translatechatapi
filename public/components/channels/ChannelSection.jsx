import React from 'react';
import ChannelForm from './ChannelForm';
import ChannelList from './ChannelList';
import PropTypes from 'prop-types';

const ChannelSection = () => {
  return (
    <div>
      <ChannelList {...props} />
      <ChannelForm {...props} />
    </div>
  );
};

ChannelSection.proptTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  addChannel: PropTypes.func.isRequired,
};

export default ChannelSection;
