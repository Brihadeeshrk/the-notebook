import PropTypes from "prop-types";

const UserList = ({ users }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "20px auto",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid gray",
      }}
    >
      <table style={{ width: "100%", border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td style={{ textAlign: "center" }}>{user.name}</td>
              <td style={{ textAlign: "center" }}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
