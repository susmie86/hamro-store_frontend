function CategoryCard({ title, icon }) {
  return (
    <div className='category-card'>
      <div className='card-img'>{icon}</div>
      <div className='card-title'>{title}</div>
    </div>
  );
}

export default CategoryCard;
