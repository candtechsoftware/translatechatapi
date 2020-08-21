import React, {useState} from 'react';
import PropTypes from 'prop-types';
const ChannelForm = ({addChannel}) => {
  const [chan, setChan] = useState('');

  const onChange = e => {
    setChan(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addChannel(chan);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          className="form-control"
          placeholder="Add Channel"
          type="text"
          name="chan"
          value={chan}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired,
};

export default ChannelForm;
