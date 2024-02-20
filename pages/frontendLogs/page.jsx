import React from "react";

const MenuPage = () => {
  const menuItems = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item * 4}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
