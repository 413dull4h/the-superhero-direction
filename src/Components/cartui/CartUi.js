import React from 'react';
import './CartUi'

const CartUi = (props) => {
    const { name, img } = props.item
    return (
        <div>
            <div className="row">
                <div className="col-8"><p>{name}</p></div>
                <div className="col-4"><img className="cartImg" src={img} alt="" /></div>
            </div>
        </div>
    );
};

export default CartUi;