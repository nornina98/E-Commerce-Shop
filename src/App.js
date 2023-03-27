import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home-component.jsx";
import Navigation from "./components/routes/navigation/navigation-component.jsx";
import Authentication from "./components/routes/authentication/authentication-component.jsx";
import Shop from "./components/routes/shop/shop-component.jsx";
import Checkout from "./components/routes/checkout/checkout-component.jsx";
import { checkUserSession } from "./store/user/user-action.ts";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    //Routes URL that passing component and it's nested!
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
