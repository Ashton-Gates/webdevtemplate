A collapsible content panel.

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}


<Accordion title="Click to expand">
  <p>This is the content inside the accordion.</p>
</Accordion>
