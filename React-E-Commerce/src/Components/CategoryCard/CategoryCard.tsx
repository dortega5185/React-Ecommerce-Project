// import { Link } from "react-router-dom";

interface CategoryProps {
  categoryName: string;
  categoryImage: string;
  categoryAlt: string;
}

export default function CategoryCard({
  categoryName,
  categoryImage,
  categoryAlt,
}: CategoryProps) {
  return (
    <div className="category-card">
      <img
        src={categoryImage}
        alt={categoryAlt}
        className="category-card__image"
      />
      <h4 className="category-card__header">{categoryName}</h4>
    </div>
  );
}
