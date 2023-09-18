function ToggleSwitch({ isOn, onToggle }) {
  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={onToggle} />
      <span className="slider"></span>
    </label>
  );
}


<ToggleSwitch isOn={isSwitchOn} onToggle={() => setSwitchOn(!isSwitchOn)} />
