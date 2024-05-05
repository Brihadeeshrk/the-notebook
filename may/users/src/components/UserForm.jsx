import React from "react";
import PropTypes from "prop-types";

const UserForm = ({ onUserAdd }) => {
  const [userDetails, setUserDetails] = React.useState({ name: "", email: "" });

  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onUserAdd(userDetails);
  };

  return (
    <div>
      <h2>Add a User</h2>

      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={onChange}
          value={userDetails.name}
        />

        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={onChange}
          value={userDetails.email}
        />
      </form>
    </div>
  );
};

UserForm.propTypes = {
  onUserAdd: PropTypes.func.isRequired,
};

export default UserForm;
