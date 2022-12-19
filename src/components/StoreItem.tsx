import React, { FC } from "react";
import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";



type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
}

export const StoreItem: FC<StoreItemProps> = ({ id, name, price, imgUrl }) => {
 
    const {getItemQuantity ,increaseCartQuantity, decreaseCartQuantity,removeFromCart} = useShoppingCart()
    const quantity: number = getItemQuantity(id);

    return (
        <>
            <Card className="h-100">
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
                        <span className="ms-2 text-muted">{formatCurrency(price)}</span>

                    </Card.Title>
                </Card.Body>
                <div className="mt-auto">
                    {quantity === 0 ? (
                    <Button  onClick={ ()=> increaseCartQuantity(id)} className="w-100"> Add To Cart</Button>) :(
                        <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>hi
                            <div
                                className="d-flex align-items-center justify-content-center "
                                style={{ gap: ".5rem" }}
                            >
                                <Button  onClick={()=>decreaseCartQuantity(id)} size="sm">-</Button>
                                <div>
                                    <span className="fs-3" >{quantity}</span>
                                    in cart
                                    
                                </div>
                                <Button onClick={()=>increaseCartQuantity(id)}>+ </Button>
                            </div>
                            <Button  onClick={()=>removeFromCart} variant="danger" >Remove</Button>
                        </div>
                        )}
                </div>
            </Card>
        </>
    )

}