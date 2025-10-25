import { getImageUrl } from './utils.js';
import Avatar from './Avatar.jsx';
import Card from './Card.jsx';

// Parent component: passes props down to Avatar through JSX attributes
export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
      <h3>Katsuko Saruhashi</h3>
      <p>Japanese geochemist who researched CO₂ levels in seawater and the atmosphere.</p>
    </Card>
  );
}
