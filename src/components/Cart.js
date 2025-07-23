import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeFromCart, clearCart } from '../features/cart/cartSlice'

const Cart = () => {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const total = items.reduce((sum,item) => sum + item.price * item.quantity, 0);

  return (
    <div>
        <h2>Cart</h2>
        {items.length === 0 ? <h3>Cart is Empty! 🥲</h3> : (
            <>
            {items.map(item => (
                <div key={item.id}>
                    <h4>{item.title}(x{item.price})</h4>
                    <p>${item.price * item.quantity}</p>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>))}
        
                <h3>Total: ${total}</h3>
                <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
                </>
            )}
    </div>
  );
};

export default Cart;




