function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}


<Button label="Click me" onClick={() => console.log("Button clicked!")} />
