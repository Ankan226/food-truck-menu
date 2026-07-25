import MenuItem from "./MenuItem.jsx";
import EmptyState from "./EmptyState.jsx";
import "./MenuList.css";

function MenuList({ items, searchTerm }) {
  if (items.length === 0) {
    return (
      <EmptyState
        title="No items found"
        message={
          searchTerm
            ? `Nothing matches "${searchTerm}". Try a different search term.`
            : "There are no menu items yet. Add one using the form above."
        }
      />
    );
  }

  return (
    <ul className="menu-list">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default MenuList;