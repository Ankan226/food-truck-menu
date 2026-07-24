import "./MenuItem.css";

function MenuItem({ item }) {
  return (
    <li className="menu-item">
      <div className="menu-item__top">
        <h3 className="menu-item__name">{item.name}</h3>
        <span className="menu-item__price">${item.price.toFixed(2)}</span>
      </div>
      <p className="menu-item__description">{item.description}</p>
      <span className="menu-item__category">{item.category}</span>
    </li>
  );
}

export default MenuItem;