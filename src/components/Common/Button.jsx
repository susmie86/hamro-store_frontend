import { useNavigate } from "react-router-dom";

function Button({ children, type, classname, onClick, style }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (type === "button") {
      onClick();
    }
    if (type === "action") {
      onClick();
    }
  };
  return (
    <button type={type} className={`btn ${classname}`} style={style} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
