
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="lab-home">
      <h1>Lab 4 - React Router</h1>
      <p>Multi-Route SPA Architecture</p>

      <div className="exercise-list">
        <section>
          <h2>Exercise 1.1</h2>
          <h3>Performance & Resiliency</h3>
          <p>React.lazy, Suspense and Skeleton.</p>
          <Link to="/people/1">View Demo</Link>
        </section>

        <section>
          <h2>Exercise 1.2</h2>
          <h3>React Router v7</h3>
          <p>Declarative Routes and Route syntax.</p>
          <Link to="/people">View Demo</Link>
        </section>

        <section>
          <h2>Exercise 1.2.1</h2>
          <h3>Nested Layout Architecture</h3>
          <p>Layout, Outlet and active NavLink.</p>
          <Link to="/people">View Demo</Link>
        </section>

        <section>
          <h2>Exercise 1.2.2</h2>
          <h3>Master-Detail View</h3>
          <p>CSS Grid, useParams and 404 handling.</p>
          <Link to="/people/1">View Demo</Link>
        </section>

        <section>
          <h2>Exercise 1.3</h2>
          <h3>Validation Anti-Patterns</h3>
          <p>Refactoring InputField and SimpleForm.</p>
          <Link to="/form">View Demo</Link>
        </section>
      </div>
    </div>
  );
}
