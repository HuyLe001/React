import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;

    return (
        <section className="py-4 container cart-section">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5 className="mb-4">Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
                    
                    {items.map((item, index) => {
                        return (
                            <div key={index} className="cart-item-row">
                                <div className="cart-item-content">
                                    <img src={item.img} className="cart-item-img" alt={item.title} />
                                    <span className="cart-item-title">{item.title}</span>
                                    <span className="cart-item-price">{item.price}</span>
                                    <span className="cart-item-quantity">Quantity ({item.quantity})</span>
                                    <div className="cart-item-actions">
                                        <button
                                            className="btn btn-info"
                                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                        >-</button>
                                        <button
                                            className="btn btn-info ms-2"
                                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                        >+</button>
                                        <button
                                            className="btn btn-danger ms-2"
                                            onClick={() => removeItem(item.id)}
                                        >Remove Item</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="col-12 d-flex justify-content-end align-items-center mt-4">
                    <h2 className="me-4">Total Price: $ {cartTotal}</h2>
                    <button
                        className="btn btn-danger btn-lg"
                        onClick={() => emptyCart()}
                    >Clear Cart</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;