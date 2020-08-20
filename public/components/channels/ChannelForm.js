import React, {useState} from 'react';
import PropTypes from 'prop-types';

const ChannelForm = ({}) => {
  const [formData, setFormData] = useState({
    channel: '',
  });

  const {channel} = formData;
  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onSubmit = e => {
    e.preventDefault();
    addChannel(channel);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="channel"
        value={channel}
        onChange={onChange}
        required
      />
    </form>
  );
}; 

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired,
};

export default ChannelForm;
