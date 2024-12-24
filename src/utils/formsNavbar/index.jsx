import { useNavigate } from "react-router-dom";
import { isAdmin, logout } from "../../utils/auth";

function Header() {
  const navigate = useNavigate();
  const admin = isAdmin();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <h1>Event Registration</h1>
      <div>
        {admin ? (
          <>
            <button className="btn" onClick={() => navigate("/form-builder")}>
              Form Builder
            </button>
            <button
              className="btn"
              onClick={handleLogout}
              style={{ marginLeft: "10px" }}
            >
              Logout
            </button>
          </>
        ) : (
          <button className="btn" onClick={() => navigate("/login")}>
            Admin Login
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
