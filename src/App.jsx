import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.less";
import { Card, Button } from "antd";
import Meta from "antd/lib/card/Meta";
import data from "./mockData/data";

function App() {
	const [products, setProducts] = useState(
		useSelector((state) => state.products),
	);
	const [cart, setCart] = useState(useSelector((state) => state.cart));
	const dispatch = useDispatch();

	useEffect(() => {
		setProducts(data);
		dispatch({ type: "GET_ALL_PRODUCTS", payload: data });
	}, [dispatch]);

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
	const removeFromCart = (item) => {
		try {
			const state = cart;
			const index = state.findIndex((el) => el.item.title === item.title);
			if (cart.length === 0) {
				console.log("Cart is Empty");
			}
			if (index >= 0 && state[index].count > 1) {
				state[index] = { ...state[index], count: state[index].count - 1 };
				setCart(state);
				dispatch({ type: "REMOVE_FROM_CART", payload: state });
			} else {
				const newState = cart.filter((el) => el.item.title !== item.title);
				console.log(newState);
				setCart(newState);
				dispatch({ type: "REMOVE_FROM_CART", payload: newState });
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			{products
				? products.map((item) => (
						<div>
							<Card
								onClick={() => addToCart(item)}
								style={{ width: 240 }}
								cover={<img alt={item.title} src={item.image} />}
							>
								<Meta title={item.title} description={item.description} />
							</Card>
							<Button type="primary" onClick={() => removeFromCart(item)}>
								Subtract
							</Button>
						</div>
				  ))
				: "No Products available"}
		</div>
	);
}

export default App;
