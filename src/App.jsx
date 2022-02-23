import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import "./App.less";
import {Card} from "antd";
import Meta from "antd/lib/card/Meta";

function App() {

  const [num, setNum] = useState(useSelector(state => state.test[0].hello))

  const dispatch = useDispatch()

  const handleChange = (number) => {
    setNum(number)
    dispatch({
      type: "TEST",
      payload: number
    })
  }

  return (
    <div className="App">
      <h1>Test</h1>
      <p><span style={{margin: "10px 20px", cursor: "pointer"}} onClick={() => handleChange(num + 1)}>+</span><span style={{cursor: "pointer"}} onClick={() => handleChange(num - 1)}>-</span></p>
      <p style={{margin: "10px 20px"}}>{num}</p>
      <Card
          style={{ width: 240 }}
          cover={<img alt="example" src="/images/blueberry.png" />}
      >
          <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
}

export default App;
