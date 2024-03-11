import { useState } from "react";
import { AddCategories } from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategories onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        // <div key={category}>
        //   <h4>{category} </h4>
        //   <li> {category} </li>
        // </div>
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
