let guest = 0;

function Cup() {
  // ❌ Bad: this mutates a variable outside the function (impure)
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSetImpure() {
  return (
    <section>
      <h1>Impure Tea Set</h1>
      <Cup />
      <Cup />
      <Cup />
    </section>
  );
}
