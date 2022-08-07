import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as FS from "./filters.styled";

import { categories } from "../../../../data/categories";

type SelectedFilters = {
  Categories: string[];
  Ratings: [];
};
type FiltersProps = {
  category?: any;
  setFilters: (value: any) => void;
};
export const Filters: React.FC<FiltersProps> = ({ category, setFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    Categories: category ? [category] : [],
    Ratings: [],
  });

  useEffect(() => {
    if (category) {
      setSelectedFilters({
        Categories: category ? [category] : [],
        Ratings: [],
      });
      setFilters({
        Categories: category ? [category] : [],
        Ratings: [],
      });
    }
  }, [category]);

  const filters: any = {
    Categories: categories.map((category) => category.name),
    Ratings: [1, 2, 3, 4, 5],
  };
  const handleChange = (type: string, event: any): void => {
    let copy = { ...selectedFilters };
    if ((selectedFilters as any)[type].includes(event.target.value)) {
      (copy as any)[type] = (copy as any)[type]?.filter(
        (value: any) => value !== event.target.value
      );
      setSelectedFilters(copy);
    } else {
      (copy as any)[type].push(event.target.value);
      setSelectedFilters(copy);
    }
  };

  const reset = (): void => {
    setSelectedFilters({
      Categories: [],
      Ratings: [],
    });
    setFilters({
      Categories: [],
      Ratings: [],
    });
  };
  const applyFilter = (): void => {
    setFilters(selectedFilters);
  };
  return (
    <FS.FiltersWrapper>
      <div className="flex-box">
        <h3>Filters</h3> <a onClick={reset}>Reset</a>
      </div>
      {Object.keys(filters).map((filter: any) => (
        <>
          {" "}
          <h4>{filter}</h4>
          {filters[filter]?.map((value: any) => (
            <div>
              <Checkbox
                name={value}
                value={value}
                checked={(selectedFilters as any)[filter]?.includes(
                  value.toString()
                )}
                onChange={(event): void => handleChange(filter, event)}
              />
              <span>
                {filter === "Ratings"
                  ? [
                      [...Array(value)].map((star) => (
                        <span>
                          <img
                            height="14px"
                            width="14px"
                            src="./icons/star.png"
                          />
                        </span>
                      )),
                    ]
                  : value}
              </span>
            </div>
          ))}
        </>
      ))}
      <button onClick={applyFilter}>Apply</button>
    </FS.FiltersWrapper>
  );
};
