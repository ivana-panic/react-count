import { useState } from "react";

export const Product = (props) => {
  const [count, setCount] = useState(0);

  const productCounter = (value, action, amount = 1) => {
    switch (action) {
      case "add":
        setCount(value + amount);
        break;
      case "substract":
        setCount(value - amount);
        break;
    }
  };

  return (
    <div>
      <div>
        {props.name} {count}
      </div>
      <div>{props.desc}</div>
      <div
        onClick={() => {
          productCounter(count, "add");
        }}
      >
        +
      </div>
      <div
        onClick={() => {
          productCounter(count, "substract");
        }}
      >
        -
      </div>
    </div>
  );
};
