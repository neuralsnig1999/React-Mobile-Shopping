import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  table: {
    // minWidth: 550,
    padding: "15px",
  },
});

const AddToCart = (props) => {
  console.log("add to cart props", props);
  const [carted, setCarted] = useState([]);
  const [total, setTotal] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    console.log("jkiKK");
    const items = props.match.params.ids.split("|").map((x) => +x);
    console.log("items", items);
    if (items.length !== 0) {
      const arr = [...carted];
      fetch("http://localhost:3001/mobiles")
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            // console.log("working", data[i].id)
            if (items.includes(data[i].id)) {
              console.log("arrrrr", arr);
              data[i].quantity = 1;
              arr.push(data[i]);
              setTotal(total+data[i].price);
            }
          }
          setCarted(arr);
        });
    }
  }, []);
  const handleQuantity = (id, e) => {
    const arr = [...carted];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        setTotal(total+(e-arr[i].quantity)*arr[i].price);
        arr[i].quantity = e;
      }
    }
    setCarted(arr);
  };
  const handleRemove = (id) => {
    const arr = [...carted];
    const popIndex = arr.findIndex(x => x.id === id);
    arr.splice(popIndex,1);
    setCarted(arr);
  }
  return (
    <>
      <div
        style={{
          display: " flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "center",
          margin: "12px",
        }}
      >
        {console.log("carteddd", carted)}
        {carted.length === 0 ? (
          <h3>Cart is Empty</h3>
        ) : (
          <>
            <h3>Cart Details</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "12px",
              }}
            >
              {" "}
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Device
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bold" }}>
                        Model
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bold" }}>
                        Quantity
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bold" }}>
                        Price
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ fontWeight: "bold" }}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {carted.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell component="th" scope="row">
                          <img
                            src={item.imagesrc}
                            alt="item"
                            style={{ width: "100px", height: "100px" }}
                          />
                        </TableCell>
                        <TableCell align="right">
                          {item.modelNumber + " " + item.name}
                        </TableCell>
                        <TableCell align="right">
                          {" "}
                          <input
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantity(item.id, e.target.value)
                            }
                          />{" "}
                        </TableCell>
                        <TableCell align="right">
                          {item.quantity * item.price}
                        </TableCell>
                        <TableCell align="right">
                          <button onClick={() => handleRemove(item.id)} >remove</button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            margin: "20px",
            padding: "10px",
          }}
        >
          <h4 style={{ margin: "30px" }}>Total:</h4>
          <p>Rs. {total}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            style={{ width: "15%", color: "blacl", backgroundColor: "grey" }}
          >
            PLace Order
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
