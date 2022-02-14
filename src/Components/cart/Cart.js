import React from 'react';
import CartUi from '../cartui/CartUi';

const Cart = (props) => {

    const total = props.cart.reduce((init, current) => { return init + current.cost }, 0)
    // const total = parseFloat(props.cart[1]) * 4;
    console.log(total);
    // const name = props.cart[0]
    return (
        <div className="pe-5">

            <h3 class="text-start">Cost to Complete B.Sc : BDT {total}</h3>
            <h3 class="text-start">University clicked:{props.cart.length}</h3>
            {
                props.cart.map((item, index) => <CartUi key={index} item={item}></CartUi>
                )
            }
        </div>
    );
};

export default Cart;