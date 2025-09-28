import React from "react";

const FilterSortBar = ({ onFilterToggle }) => {
  return (
    <div className="filter-sort-bar">
      <div className="filter-sort-wrapper">
        <h2>
          Photography / <span>Premium Photos</span>
        </h2>

        <button className="filter-toggle" onClick={onFilterToggle}>
          <img src="/assets/Group.svg" alt="filter icon" />
        </button>

        <div className="sort-controls">
          <img src="/assets/sort.svg" alt="sort icon" />
          <p>Sort By:</p>
          <button>
            <img src="/assets/Vector 16.svg" alt="dropdown arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSortBar;
