import React, { useEffect, useState } from "react";

const AddToCart = (props) => {
  console.log("add to cart props", props);
  const [carted, setCarted] = useState([]);
  useEffect(() => {
      const items = props.match.params.ids.split("|").map(x => +x);
      console.log('items', items);
      const arr = [...carted];
      fetch("http://localhost:3001/mobiles")
      .then((res) => res.json())
      .then((data) => {
        for(let i = 0; i<data.length;i++){
            console.log("working", data[i].id)
            if(items.includes(data[i].id)){
                console.log("arrrrr", arr);
                arr.push(data[i]);
            };
        };
        setCarted(arr);
      });
      
  }, []);

  return (
    <div
      style={{
        display: " flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        margin: '12px'
      }}
    >
    {console.log("carteddd", carted)}
      <h3>Cart Details</h3>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:"12px"}}>
         {carted.map((item, index) => {
              return (
                <div key={index}>
                <h4>{item.name}</h4>
                </div>
              )
        
          })}

      </div>
    </div>
  );
};

export default AddToCart;
