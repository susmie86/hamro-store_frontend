import { useNavigate } from "react-router-dom";

function Button({ children, type, classname, onClick }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (type === "button") {
      navigate("/");
    }
    if (type === "action") {
      onClick();
    }
  };
  return (
    <button type={type} className={`btn ${classname}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
