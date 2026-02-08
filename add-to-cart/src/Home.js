import React from "react";
import Itemcard from "./Itemcard";
import data from "./data";

const Home = () => {
    return (
        <>
            <div className="header-section">
                <h1 className="text-center main-title">Fresh Fruits Collection</h1>
                <p className="text-center subtitle">Choose from our selection of delicious and healthy fruits</p>
            </div>
            <section className="py-4 container products-section">
                <div className="row justify-content-center g-4">

                    {data.productData.map((item) => {
                        return (
                            <Itemcard 
                                key={item.id}
                                img={item.img} 
                                title={item.title} 
                                desc={item.desc}
                                price={item.price}
                                item={item}
                            />
                        )
                    })}

                </div>
            </section>
        </>
    );
};
export default Home;