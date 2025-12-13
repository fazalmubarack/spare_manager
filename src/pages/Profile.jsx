import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile({ user, logoutUser }) {
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="profile-page">
        <h2>Please login to view profile</h2>
      </div>
    );
  }

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-avatar">
          {user.username.charAt(0).toUpperCase()}
        </div>

        <h2>{user.username}</h2>
        {/* <p className="role">{user.email}</p> */}
        <p className="role">Customer</p>

        <div className="profile-actions">
          <button onClick={() => navigate("/orders")}>
            My Orders
          </button>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
