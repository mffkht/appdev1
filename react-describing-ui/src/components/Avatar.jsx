import { getImageUrl } from './utils.js';

// The Avatar component receives props: "person" and "size"
export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      style={{ borderRadius: '8px' }}
    />
  );
}
