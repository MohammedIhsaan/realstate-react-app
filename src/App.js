import { Route, Routes } from "react-router";
import "./App.css";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/create-listing' element={<CreateListing />} />
        <Route path='/edit-listing' element={<EditListing />} />
        <Route path='/category/:categoryName' element={<Category />} />
        <Route
          path='/category/:categoryName/:listingId'
          element={<Listing />}
        />
      </Routes>
    </>
  );
}

export default App;
