import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { formatCurrencty } from "../utilities/formatCurrency";


type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
}

export const StoreItem: FC<StoreItemProps> = ({ id, name, price, imgUrl }) => {
    return (
        <>
            <Card>
                <Card.Img
                    src={imgUrl}
                    variant="top"
                    height="200px"

                    style={{
                        objectFit: "cover",
                    }}
                />

                <Card.Body className=" d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between  align-baseline     mb-4">
                        <span className="fs-2">{name}</span>
                        <span className="ms-2 text-muted">{ formatCurrencty(price) }</span>

                    </Card.Title>
                </Card.Body>

            </Card>
        </>
    )

}