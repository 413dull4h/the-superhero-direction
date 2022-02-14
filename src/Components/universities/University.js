import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import SinVersity from './singleVersity/SinVersity';
import './University.css';

const University = () => {

    const [versitisy, setVersitisy] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./Universities.JSON')
            .then(res => res.json())
            .then(data => setVersitisy(data))
    }, [])
    const handleTotalCost = (id) => {
        const filter = versitisy.find(item => item.id === id);
        setCart([...cart, filter])
    }


    return (
        <div className="Universities">
            <div className="row">
                <div className="University col-10">
                    {/* <h1>Universities</h1> */}
                    {
                        versitisy.map(vers => <SinVersity versitisy={vers}
                            key={vers.id} handleTotalCost={handleTotalCost}
                        ></SinVersity>)
                    }

                </div>

                <div className="TotalCost col-2">
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </div>
    );
};

export default University;