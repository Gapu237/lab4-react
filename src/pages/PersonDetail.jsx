
import { useParams, useOutletContext } from "react-router";

export default function PersonDetail() {
  const { id } = useParams();
  const people = useOutletContext();

  const person = people.find(
    (p) => p.id === id
  );

  if (!person) {
    return <h2>404 - Person Not Found</h2>;
  }

  return (
    <div>
      <h2>Person Details</h2>

      <dl className="person-details">
        <dt>Name:</dt>
        <dd>{person.name}</dd>

        <dt>Role:</dt>
        <dd>{person.role}</dd>
      </dl>
    </div>
  );
}
