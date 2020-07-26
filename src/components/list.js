import React, { useEffect, useState } from "react";

const List = () => {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/mobiles")
      .then((res) => res.json())
      .then((data) => {
        setDataList(data);
        console.log("data", data);
      });
  }, []);
  return (
    <div>
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
              {console.log("itemmmm", item)}
              <img src={item.imagesrc} alt="mobile" />
              <p>{item.name}</p>
              <p>Price: {item.price}</p>
              <div style={{display:'flex', justifyContent:'space-around', margin:'12px', padding:'12px'}}>
                <button>View</button>
                <button>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
