import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import SignUp from './components/SignUp';
import Login from './components/Login'
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import PrivateComponent from "./components/PrivateComponent";
// import { } from "./components/AddProduct"  
// import ProductList from './components/ProductList';
// import UpdateProduct from './components/UpdateComponent';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/" element={<Shop />} />
              {/* <Route path="/" element={<ProductList />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/logout" element={<h1> Logout Component</h1>} />
              <Route path="/profile" element={<h1>Profile Component</h1>} />
              {/* <Route path="/add" element={<AddProduct />} /> */}
              {/* <Route path="/update/:id" element={<UpdateProduct />} /> */}
          
            </Route>
            
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
