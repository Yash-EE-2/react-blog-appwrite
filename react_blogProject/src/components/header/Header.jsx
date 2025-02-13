import React, { act } from "react";
import { Link } from "react-router-dom";
import {Logo, Container, LogoutBtn} from "../index";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "logout",
      slug: "/logout",
      active: authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    }
  ];

  return (
    <header>
      <Container>
        <nav>
           <div>
            <Link to="/">
              <Logo />
            </Link>

           </div>
           <ul className="flex ml-auto">
            {navItems.map((item) => 
            item.active ? (
              <li key = {item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="inline-block px-6 py-2 text-sm font-medium text-white hover:bg-blue-200 rounded-full duration-200">
                  {item.name}
                </button>
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </li>
            ) : null )}
           </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;