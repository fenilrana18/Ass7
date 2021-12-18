import { useState, useEffect } from "react";

export const Cart = () => {
  const [productsArray, setProductsArray] = useState([
    { name: "Tea", qty: 0, price: 100 },
    { name: "Coffee", qty: 0, price: 240 },
    { name: "Honey", qty: 0, price: 330 },
    { name: "Butter", qty: 0, price: 410 },
    { name: "Gems", qty: 0, price: 100 },
    { name: "Chocolate", qty: 0, price: 550 }
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  var [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    setTotalPrice(productsArray.reduce((r, t) => r + t.price * t.qty, 0));
    setTotalQty(productsArray.reduce((r, t) => r + t.qty, 0));
  }, [productsArray]);

  const handleClick = (index, qty) => {
    var chnageqty = [...productsArray];
    chnageqty[index] = { ...chnageqty[index], qty: qty };
    setProductsArray(chnageqty);
  };

  return (
    <div>
      <div>
        <h1>Cart</h1>
      </div>
      {productsArray?.map((item, i) => (
        <div key={i}>
          <h2>
            {item.name} = Price:{item.price} Qty:{item.qty}
          </h2>
          <div>
            <button onClick={() => handleClick(i, item.qty + 1)}>+</button>
            <button
              onClick={() =>
                item.qty !== 0 ? handleClick(i, item.qty - 1) : null
              }
            >
              -
            </button>
          </div>
        </div>
      ))}
      <div>
        <h2>Total Item:{totalQty}</h2>
        <h2>total Amount:{totalPrice}</h2>
      </div>
    </div>
  );
};
