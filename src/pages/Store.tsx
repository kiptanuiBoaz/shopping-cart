import React from "react";
import { Row, Col } from "react-bootstrap"
import StoreItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {StoreItems.map((item) => {
          return (
            <Col key={item.id}  >
              <StoreItem {...item} />
            </Col>

          )
        })}
      </Row>
    </>
  )
}