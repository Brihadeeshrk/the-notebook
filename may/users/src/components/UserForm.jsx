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
    setUserDetails({ name: "", email: "" });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "0px auto",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid gray",
      }}
    >
      <h2>Add a User</h2>

      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column", margin: "0px auto" }}
      >
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={onChange}
            value={userDetails.name}
          />
        </div>

        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label style={{ marginRight: "10px" }}>Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={onChange}
            value={userDetails.email}
          />
        </div>

        <button style={{ marginBottom: "30px" }} type="submit">
          Add user
        </button>
      </form>
    </div>
  );
};

UserForm.propTypes = {
  onUserAdd: PropTypes.func.isRequired,
};

export default UserForm;
