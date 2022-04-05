import React, { useState } from "react";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import "../Style/Product.css";
import InputTag from "../Common/InputTag";
import ProdUctes from "../Common/ProdUctes";
function Product() {
  let [productes, setProductes] = useState([]);

  let filterProduct = (e) => {
    setProductes(ProdUctes(e));
    console.log(productes);
  };
  let [type, setType] = useState([]);
  let [typeaction, setTypeaction] = useState(true);
  let selectWarehouse = (e) => {
    if (e.target.value === "Warehouse1") {
      setTypeaction(false);
      setType([
        { value: "A", text: "TypeA" },
        { value: "B", text: "TypeB" },
        { value: "C", text: "TypeC" },
      ]);
    } else if (e.target.value === "Warehouse2") {
      setTypeaction(false);
      setType([
        { value: "D", text: "TypeD" },
        { value: "E", text: "TypeE" },
        { value: "F", text: "TypeF" },
      ]);
    } else if (e.target.value === "Warehouse3") {
      setTypeaction(false);
      setType([
        { value: "G", text: "TypeG" },
        { value: "H", text: "TypeH" },
        { value: "I", text: "TypeI" },
      ]);
    }
  };
  let [balance, setBalance] = useState({ display: "none" });
  let productBalance = (e) => {
    if (e.target.checked) {
      setBalance({ display: "block" });
    } else {
      setBalance({ display: "none" });
    }
  };
  let [showGrid, setShowGrid] = useState(false);
  let [radiofun, setRadioFun] = useState(false);
  return (
    <>
      <div className="productes">
        <h3>Product</h3>
        <div>
          <Container>
            <p className="basicInfo">
              <FontAwesomeIcon
                icon={faFileAlt}
                color=" #75d4e0"
                style={{ marginRight: "8px" }}
              />
              Basic Information
            </p>
            <div className="warehouse">
              <form action="">
                <div>
                  <label for="warehouse" required>
                    Warehouse <sup>*</sup>
                  </label>
                  <br />
                  <select
                    name="warehouse"
                    onClick={(e) => {
                      selectWarehouse(e);
                    }}
                  >
                    <option value="default" disabled selected>
                      Select Warehouse
                    </option>
                    <option value="Warehouse1">Warehouse1 </option>
                    <option value="Warehouse2">Warehouse2</option>
                    <option value="Warehouse3">Warehouse3</option>
                  </select>
                </div>
                <div>
                  <label for="type">
                    Type <sup>*</sup>
                  </label>
                  <br />
                  <select
                    name="type"
                    required
                    disabled={typeaction}
                    onChange={(e) => {
                      filterProduct(e.target.value);
                    }}
                  >
                    <option value="default" disabled selected>
                      Select Uom Type
                    </option>
                    {type.map((item) => {
                      return <option value={item.value}>{item.text}</option>;
                    })}
                  </select>
                </div>
                <div>
                  <br></br>
                  <input
                    type="checkbox"
                    name="balance"
                    onClick={(e) => {
                      productBalance(e);
                    }}
                  />
                  <label for="balance"> Show Zero Balance</label>
                </div>
              </form>
            </div>
            <div className="product">
              <div>
                <label>Product Classification</label>
                <div className="radioButton">
                  <p>
                    <input
                      type="radio"
                      name="product"
                      onClick={() => {
                        setRadioFun(false);
                      }}
                    />{" "}
                    All Product
                  </p>
                  <p>
                    <input
                      type="radio"
                      name="product"
                      onClick={() => {
                        setRadioFun(true);
                      }}
                    />{" "}
                    Specific Product
                  </p>
                </div>
              </div>
              <div style={balance}>
                <label htmlFor="">
                  Product <sup>*</sup>
                </label>
                <br />

                {radiofun ? (
                  <InputTag product={productes}></InputTag>
                ) : (
                  <InputTag product={[]}></InputTag>
                )}
              </div>
            </div>
            <div className="search">
              <button
                onClick={() => {
                  if (showGrid == false) {
                    setShowGrid(true);
                  } else {
                    setShowGrid(false);
                  }
                }}
              >
                Search
              </button>
            </div>
            <p className="basicInfo">
              <FontAwesomeIcon
                icon={faFileAlt}
                color=" #75d4e0"
                style={{ marginRight: "8px" }}
              />
              Product Detailes
            </p>
            {/* <table>
              <thead>
                <th>Product</th>
                <th>On-Hand</th>
                <th>Type</th>
              </thead>
              <tbody>
                <td>
                  <input type="search" />
                </td>
                <td>
                  <input type="search" />
                </td>
                <td>
                  <input type="search" />
                </td>
              </tbody>
              {showGrid &&
                productes.map((item) => {
                  return (
                    <tbody>
                      <td>{item.name}</td>
                      <td>{item.quntity}</td>
                      <td>Type{item.type}</td>
                    </tbody>
                  );
                })}
            </table> */}
            <div>
<div  className="grid">
<div><p  className="gridheader">Product</p>
<div> <input type="search" />
{showGrid &&
                productes.map((item) => {
                  return (
                    <div>
                     {item.name}
                      
                    </div>
                  );
                })}
</div>

</div>
<div><p className="gridheader">On-hand</p>
<input type="search" />
{showGrid &&
                productes.map((item) => {
                  return (
                    <div>
                     {item.quntity}
                      
                    </div>
                  );
                })}
</div>
<div><p className="gridheader">Type</p>
<input type="search" />
{showGrid &&
                productes.map((item) => {
                  return (
                    <div className="result">
                    Type {item.type}
                      
                    </div>
                  );
                })}
</div>
</div>


            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Product;
