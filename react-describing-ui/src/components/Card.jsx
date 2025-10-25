// The Card component uses the special "children" prop to display nested content.
export default function Card({ children }) {
  return (
    <div
      className="card"
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '200px',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}
