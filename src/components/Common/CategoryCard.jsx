import { useNavigate } from "react-router-dom";

function CategoryCard({ title, icon }) {
  const navigate = useNavigate();
  const viewProductByCategory = () => {
    navigate(`/products/${title}`);
  };
  return (
    <div className="category-card" onClick={viewProductByCategory}>
      <div className="card-img">{icon}</div>
      <div className="card-title">{title}</div>
    </div>
  );
}

export default CategoryCard;
