import Home from "./components/routes/home/home-component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    //Routes URL that passing component
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default App;
