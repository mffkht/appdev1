// ✅ Pure version: the output depends only on the props given
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSetPure() {
  return (
    <section>
      <h1>Pure Tea Set</h1>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </section>
  );
}
