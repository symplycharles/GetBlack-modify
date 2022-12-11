import { foodCategoriesData } from "../../data/foodCategoriesData";
import FoodCategoriesItem from "./FoodCategoriesItems";

function FoodCategories() {
  return (
    <>
      <h2 className="font-bold text-2xl mb-3 pl-6 md:mx-4">
        Food categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 place-items-center mx-4">
        {foodCategoriesData.map((foodCategory) => (
          <FoodCategoriesItem
            key={foodCategory.id}
            foodCategory={foodCategory}
          />
        ))}
      </div>
    </>
  );
}

export default FoodCategories;
