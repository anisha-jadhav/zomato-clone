import "./App.css";
import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// import pages
import Checkout from "./pages/Checkout";
import GoogleAuth from "./pages/Google.Auth";
import Home from "./pages/Home.Page";
import Restaurant from "./pages/Restaurant.page";

// import components
import Menu from "./components/Restaurant/Menu";
import OrderOnline from "./components/Restaurant/OrderOnline";
import Photos from "./components/Restaurant/Photos";
import Overview from "./components/Restaurant/Overview";
import Reviews from "./components/Restaurant/Reviews";

//layouts
import RestaurantLayout from "./layouts/Restaurant.layout";

// redux
import { useDispatch } from "react-redux";
import { getMySelf } from "./redux/reducers/user/user.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMySelf());
  }, [localStorage]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/delivery" />} />
        <Route path="/:type" element={<Home />} />
        {/* <Route path="/restaurant/:id" element={<RedirectRestaurant />} /> */}
        <Route path="/google/:token" element={<GoogleAuth />} />
        <Route
          path="/restaurant/:id"
          element={
            <RestaurantLayout>
              <Restaurant />
            </RestaurantLayout>
          }
        >
          <Route path="overview" element={<Overview />} />
          <Route path="order-online" element={<OrderOnline />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="menu" element={<Menu />} />
          <Route path="photos" element={<Photos />} />
        </Route>

        <Route path="checkout/orders" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
