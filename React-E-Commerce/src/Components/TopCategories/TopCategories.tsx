import images from "../../images";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function TopCategories() {
  const popularCategories = [
    {
      name: "Furniture",
      image: images.furnitureCategory,
      alt: "An assortment of furniture",
    },
    {
      name: "Hand Bag",
      image: images.handBagCategory,
      alt: "An assortment of hand bags",
    },
    {
      name: "Books",
      image: images.booksCategory,
      alt: "An assortment of books",
    },
    {
      name: "Tech",
      image: images.techCategory,
      alt: "An assortment of popular tech",
    },
    {
      name: "Sneakers",
      image: images.sneakersCategory,
      alt: "An assortment of sneakers",
    },
    {
      name: "Travel",
      image: images.travelCategory,
      alt: "An assortment of travel items",
    },
  ] as const;
  return (
    <section className="shop-top-categories">
      <div className="shop-top-categories__container">
        <h3 className="shop-top-categories__header">Shop our Top Categories</h3>
        <div className="shop-top-categories__cards">
          {popularCategories?.map((categoryCard) => {
            return (
              <CategoryCard
                categoryName={categoryCard.name}
                categoryImage={categoryCard.image}
                categoryAlt={categoryCard.alt}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
