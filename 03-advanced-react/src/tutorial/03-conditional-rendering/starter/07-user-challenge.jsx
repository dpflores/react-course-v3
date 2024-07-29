import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const loginUser = () => {
    setUser({ name: "elovermac" });
  };
  const logoutUser = () => {
    setUser(null);
  };
  return (
    <div>
      <h2>user challenge</h2>
      {user ? (
        <Login name={user.name} handleLogout={logoutUser} />
      ) : (
        <Logout handleLogin={loginUser} />
      )}
    </div>
  );
};

const Login = ({ name, handleLogout }) => {
  return (
    <div>
      <h4>Hello there, user {name}</h4>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const Logout = ({ handleLogin }) => {
  return (
    <div>
      <h4>Please Login</h4>
      <button className="btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default UserChallenge;
