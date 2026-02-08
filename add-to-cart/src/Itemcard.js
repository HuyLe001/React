import React from "react";
import {useCart} from "react-use-cart";

const Itemcard = (props) => {
    const {addItem} = useCart();
    return (
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} className="card-img-top img-fluid" alt={props.title} />
                <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title mb-2">{props.title}</h5>
                    <p className="card-text text-muted mb-3">{props.desc}</p>
                    <p className="price-tag mb-3">${props.price}</p>
                    <button className="btn btn-success mt-auto" onClick={() => addItem(props.item)}>
                        <span>🛒</span> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Itemcard;