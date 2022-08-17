import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { auth } from "../Config/Config";
import { useHistory } from "react-router-dom";
import './button.css'
export const Navbar = ({ user, totalProducts }) => {
  const history = useHistory();

  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };
  const handleAddProd = () => {
    // console.log('click')
    history.push("/add-products");
  };
  const sh = {
    cursor: "pointer",
  };
  return (
    <div className="navbar">
      <div className="leftside">
        <div className="logo">
          <h3
            onClick={() => {
              history.push("/");
            }}
            style={sh}
          >
            SHOPEE 🌴
          </h3>
        </div>
      </div>
      <div className="rightside">
        {!user && (
          <>
            <div>
              <Link className="navlink" to="signup">
                SIGN UP
              </Link>
            </div>
            <div>
              <Link className="navlink" to="login">
                LOGIN
              </Link>
            </div>
          </>
        )}

        {user && (
          <>
            <div>
              <Link className="navlink" to="/">
                {user}
              </Link>
            </div>
            <div className="cart-menu-btn">
              <Link className="navlink" to="cart">
                <Icon icon={shoppingCart} size={20} />
              </Link>
              <span className="cart-indicator">{totalProducts}</span>
            </div>
            <div class="frame" onClick={handleLogout}>
            <button class="custom-btn btn-15">Logout</button>
            </div>
            {user === "admin" && (
              <div class="frame">
                <button class="custom-btn btn-12" onClick={handleAddProd}>
                  <span>Products!</span>
                  <span>ADD</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
