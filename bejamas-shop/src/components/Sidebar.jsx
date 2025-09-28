import React from "react";

const Sidebar = ({ filters, onUpdateFilters }) => {
  const handleCategoryChange = (category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];

    onUpdateFilters({
      ...filters,
      categories: newCategories,
    });
  };

  const handlePriceChange = (priceRange) => {
    const newPriceRanges = filters.priceRanges.includes(priceRange)
      ? filters.priceRanges.filter((p) => p !== priceRange)
      : [...filters.priceRanges, priceRange];

    onUpdateFilters({
      ...filters,
      priceRanges: newPriceRanges,
    });
  };

  return (
    <>
      <section className="filter-category">
        <h3>Category</h3>
        <ul>
          <li>
            <label>
              <input
                type="checkbox"
                value="People"
                checked={filters.categories.includes("People")}
                onChange={() => handleCategoryChange("People")}
              />{" "}
              People
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Premium"
                checked={filters.categories.includes("Premium")}
                onChange={() => handleCategoryChange("Premium")}
              />{" "}
              Premium
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Pets"
                checked={filters.categories.includes("Pets")}
                onChange={() => handleCategoryChange("Pets")}
              />{" "}
              Pets
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Food"
                checked={filters.categories.includes("Food")}
                onChange={() => handleCategoryChange("Food")}
              />{" "}
              Food
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Landmark"
                checked={filters.categories.includes("Landmark")}
                onChange={() => handleCategoryChange("Landmark")}
              />{" "}
              Landmarks
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Cities"
                checked={filters.categories.includes("Cities")}
                onChange={() => handleCategoryChange("Cities")}
              />{" "}
              Cities
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Nature"
                checked={filters.categories.includes("Nature")}
                onChange={() => handleCategoryChange("Nature")}
              />{" "}
              Nature
            </label>
          </li>
        </ul>
      </section>

      <section className="filter-price">
        <h3>Price range</h3>
        <ul>
          <li>
            <label>
              <input
                type="checkbox"
                value="under-20"
                checked={filters.priceRanges.includes("under-20")}
                onChange={() => handlePriceChange("under-20")}
              />{" "}
              Lower than $20
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="20-100"
                checked={filters.priceRanges.includes("20-100")}
                onChange={() => handlePriceChange("20-100")}
              />{" "}
              $20 - $100
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="100-200"
                checked={filters.priceRanges.includes("100-200")}
                onChange={() => handlePriceChange("100-200")}
              />{" "}
              $100 - $200
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="over-200"
                checked={filters.priceRanges.includes("over-200")}
                onChange={() => handlePriceChange("over-200")}
              />{" "}
              More than $200
            </label>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
