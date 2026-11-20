
import { Link, Outlet } from "react-router";
import { people } from "../data/people";

export default function People() {
  return (
    <div className="people-grid">
      <section>
        <h2>People List</h2>

        {people.map((person) => (
          <p key={person.id}>
            <Link to={person.id}>
              {person.name}
            </Link>
          </p>
        ))}
      </section>

      <section>
        <Outlet context={people} />
      </section>
    </div>
  );
}
