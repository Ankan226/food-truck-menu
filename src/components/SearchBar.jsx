import "./SearchBar.css";

function SearchBar({ value, onSearchChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="menu-search" className="search-bar__label">
        Search the menu
      </label>
      <input
        id="menu-search"
        type="text"
        className="search-bar__input"
        placeholder="Search by name, e.g. 'tacos'"
        value={value}
        onChange={(event) => onSearchChange(event.target.value)}
        aria-describedby="menu-search-hint"
      />
      <span id="menu-search-hint" className="search-bar__hint">
        Filters items live as you type.
      </span>
    </div>
  );
}

export default SearchBar;