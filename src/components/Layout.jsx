
import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <header>
        <h2>Lab 4 - Multi-Route SPA Architecture</h2>

        <nav>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/people"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Ex 1.2.2 - People
          </NavLink>

          <NavLink
            to="/form"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Ex 1.3 - Form
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
