function BtnSwitch({
  num,
  activeWindow,
  setWindow,
  textContent,
  svgPath,
  key,
}) {
  const isOpen = num === activeWindow;

  function handleToogle() {
    setWindow(isOpen ? null : num);
  }
  return (
    <button id={isOpen ? "active" : "inactive"} onClick={handleToogle}>
      <img src={svgPath} alt="svg" width={22} />
      {textContent}
    </button>
  );
}

export default BtnSwitch;
