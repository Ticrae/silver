import React from "react";
import "./ExploreMenu.css";
import { furniture_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Gallery</h1>
      <p className="explore-menu-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        eaque quibusdam qui odit dicta aperiam iusto? Iste eaque, corrupti
        nesciunt facilis, ratione in tenetur ad placeat aspernatur assumenda
      </p>
      <div className="explore-menu-list">
        {furniture_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.furniture_name ? "All" : item.furniture_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.furniture_name ? "active" : ""}
                src={item.furniture_image}
                alt=""
              />
              <p>{item.furniture_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
