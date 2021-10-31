import { Product } from "./Product";

export const Products = (props) => {
  const productName = [
    {
      name: "Watch",
      description:
        "During most of its history the watch was a mechanical device, driven by clockwork, powered by winding a mainspring, and keeping time with an oscillating balance wheel.",
    },
    {
      name: "Necklace",
      description:
        "A necklace is an article of jewellery that is worn around the neck.",
    },
    {
      name: "Glasses",
      description:
        "Glasses, also known as eyeglasses or spectacles, are vision eyewear, consisting of glass or hard plastic lenses ",
    },
    {
      name: "Earrings",
      description:
        "An earring is a piece of jewelry attached to the ear via a piercing in the earlobe or another external part of the ear",
    },
    {
      name: "Ring",
      description:
        "Circular, decorative or symbolic ornament worn on fingers, toes, arm or neck",
    },
    {
      name: "Hair ornament",
      description:
        "Has appeared throughout the history of craft work, particularly those made to be used for private worship or mourning",
    },
  ];

  return (
    <div className="wrapp">
      <div className="titleProduct">Product</div>
      <p></p>
      {productName.map((item) => {
        return <Product name={item.name} desc={item.description} />;
      })}
    </div>
  );
};
