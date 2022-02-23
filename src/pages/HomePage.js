import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "antd";
import Meta from "antd/lib/card/Meta";
import data from "../mockData/data";
import { Link } from "react-router-dom";

const HomePage = () => {
	const [products, setProducts] = useState(
		useSelector((state) => state.products),
	);
	const [cart, setCart] = useState(useSelector((state) => state.cart));
	const dispatch = useDispatch();
	useEffect(() => {
		setProducts(data);
		dispatch({ type: "GET_ALL_PRODUCTS", payload: data });
	}, [dispatch]);

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
							<Link to={item.title}>
								<Card
									onClick={() => {}}
									style={{ width: 240 }}
									cover={<img alt={item.title} src={item.image} />}
								>
									<Meta title={item.title} description={item.description} />
								</Card>
								<Button type="primary" onClick={() => removeFromCart(item)}>
									Subtract
								</Button>
							</Link>
						</div>
				  ))
				: "No Products available"}
		</div>
	);
};

export default HomePage;
