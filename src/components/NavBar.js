export default function NavBar() {
  return (
    <div className="navbar">
      <h1 className="nav-text">UrCurrency</h1>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#container">Converter</a>
          </li>
          <li>
            <a href="#">Rates</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
