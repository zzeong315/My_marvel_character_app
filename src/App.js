import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./routers/Detail";
import Home from "./routers/Home";

function App() {
  return (
    <BrowserRouter>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/150px-Marvel_Logo.svg.png" style={{padding: "20px 0 0 20px"}}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/character/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
