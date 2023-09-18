A simple tooltip that appears on hover.

function Tooltip({ content, children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className="tooltip-content">{content}</div>}
    </div>
  );
}


<Tooltip content="This is a tooltip!">
  <button>Hover over me</button>
</Tooltip>
