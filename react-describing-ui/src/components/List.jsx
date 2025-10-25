import { people } from './data.js';
import { getImageUrl } from './utils.js';

// This component loops (maps) over "people" to render a list
export default function List() {
  const listItems = people.map(person =>
    <li key={person.id} style={{ marginBottom: '12px' }}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
        style={{ width: '60px', borderRadius: '8px', marginRight: '8px' }}
      />
      <p style={{ display: 'inline-block', verticalAlign: 'top' }}>
        <b>{person.name}</b> — {person.profession}, known for {person.accomplishment}
      </p>
    </li>
  );

  return (
    <article style={{ padding: '1rem' }}>
      <h1>Scientists</h1>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {listItems}
      </ul>
    </article>
  );
}
