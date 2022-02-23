import React from "react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const DetailProductPage = ({ item }) => {
	const [cart, setCart] = useState(useSelector((state) => state.cart));
	const dispatch = useDispatch();
	const addToCart = (item) => {
		try {
			const state = cart;
			const index = state.findIndex((el) => el.item.title === item.title);
			const cartItem = {
				item: item,
				count: 1,
			};
			if (cart.length === 0) {
				setCart([cartItem]);
				dispatch({ type: "ADD_TO_CART", payload: cartItem });
			}
			if (index >= 0) {
				state[index] = { ...state[index], count: state[index].count + 1 };
				setCart(state);
				dispatch({ type: "ADD_TO_CART", payload: state });
			} else {
				const newState = [...cart, cartItem];
				setCart(newState);
				dispatch({ type: "ADD_TO_CART", payload: newState });
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			{item ? (
				<>
					<div>
						<img src={item.image} alt={item.title} />
					</div>
					<section>
						<h1>item.title</h1>
						<p>1 each</p>
					</section>
					<section>
						<div>
							<p>+</p>
							{item.count}
							<p>-</p>
						</div>
						<div>{item.price}</div>
					</section>
					<section>
						<h3>Product Description</h3>
						<p>{item.description}</p>
					</section>
					<section>
						<div>Fav</div>
						<button onClick={() => addToCart(item)}>Add to Cart</button>
					</section>
				</>
			) : (
				<div>Error reading Element</div>
			)}
		</div>
	);
};

export default DetailProductPage;
