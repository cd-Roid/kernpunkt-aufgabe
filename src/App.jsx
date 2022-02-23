import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.less";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import data from "./mockData/data";

function App() {
	const [products, setProducts] = useState(useSelector((state) => state.test));
	const dispatch = useDispatch();

	useEffect(() => {
		setProducts(data);
		dispatch({ type: "GET_ALL_PRODUCTS", payload: data });
	}, [dispatch]);

	return (
		<div className="App">
			{products
				? products.map((item) => (
						<div>
							<Card
								style={{ width: 240 }}
								cover={<img alt={item.title} src={item.image} />}
							>
								<Meta title={item.title} description={item.description} />
							</Card>
						</div>
				  ))
				: "No Products available"}
		</div>
	);
}

export default App;
