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

    if (isEmpty) return (
        <div className="empty-cart-container">
            <div className="empty-cart-content">
                <div className="empty-cart-icon">🛒</div>
                <h1 className="empty-cart-title">Your Cart is Empty</h1>
                <p className="empty-cart-text">Add some delicious fruits to your cart!</p>
            </div>
        </div>
    );

    return (
        <section className="py-4 container cart-section">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="cart-header mb-4">
                        <h3 className="cart-title">🛒 Shopping Cart</h3>
                        <p className="cart-info">{totalUniqueItems} {totalUniqueItems === 1 ? 'product' : 'products'} • {totalItems} {totalItems === 1 ? 'item' : 'items'} total</p>
                    </div>
                    
                    {items.map((item, index) => {
                        return (
                            <div key={index} className="cart-item-row">
                                <div className="cart-item-content">
                                    <img src={item.img} className="cart-item-img" alt={item.title} />
                                    <div className="cart-item-details">
                                        <h6 className="cart-item-title">{item.title}</h6>
                                        <p className="cart-item-price">${item.price}</p>
                                    </div>
                                    <div className="cart-item-quantity-wrapper">
                                        <label className="quantity-label">Quantity</label>
                                        <div className="quantity-controls">
                                            <button
                                                className="btn btn-quantity"
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            >−</button>
                                            <span className="quantity-value">{item.quantity}</span>
                                            <button
                                                className="btn btn-quantity"
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            >+</button>
                                        </div>
                                    </div>
                                    <div className="cart-item-total">
                                        <label className="total-label">Subtotal</label>
                                        <p className="item-total-price">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <button
                                        className="btn btn-remove"
                                        onClick={() => removeItem(item.id)}
                                        title="Remove item"
                                    >✕</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="col-12 cart-footer mt-4">
                    <div className="cart-total-section">
                        <h3 className="total-price-label">Total:</h3>
                        <h2 className="total-price-value">${cartTotal.toFixed(2)}</h2>
                    </div>
                    <button
                        className="btn btn-clear-cart"
                        onClick={() => emptyCart()}
                    >
                        <span>🗑️</span> Clear Cart
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cart;