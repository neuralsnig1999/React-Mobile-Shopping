import React, { useEffect, useState } from "react";
import Header from "./header";

const List = () => {
  const [dataList, setDataList] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/mobiles")
      .then((res) => res.json())
      .then((data) => {
        setDataList(data);
        console.log("data", data);
      });
  }, []);

  const addCart = (item) => {
    console.log("cart", cart);
    const arr = [...cart];
    arr.push(item);
    setCart(arr);
  };
  return (
    <>
      <Header cart={cart} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Mobiles</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {dataList.map((item, index) => {
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "solid 1px",
                  width: "25%",
                  margin: "20px",
                }}
              >
                <img src={item.imagesrc} alt="mobile" />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <p>{item.name}</p>
                  <p>Price: {item.price}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "1px",
                    padding: "12px",
                  }}
                >
                  <button>View</button>
                  <button onClick={() => addCart(item.id)}>Add to cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default List;
