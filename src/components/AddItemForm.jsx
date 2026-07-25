import { useState } from "react";
import { sanitizeText } from "../utils/sanitize.js";
import "./AddItemForm.css";

const CATEGORIES = ["Mains", "Sides", "Drinks"];

const emptyForm = { name: "", price: "", category: "Mains", description: "" };

function AddItemForm({ onAddItem }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  function handleChange(field, rawValue) {
    setForm((prev) => ({ ...prev, [field]: rawValue }));
  }

  function validate(values) {
    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Item name is required.";
    }

    const priceNumber = Number(values.price);
    if (!values.price.trim() || Number.isNaN(priceNumber) || priceNumber <= 0) {
      nextErrors.price = "Enter a price greater than 0.";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    // Invalid inputs must block submission.
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const newItem = {
      id: `itm-${Date.now()}`,
      name: sanitizeText(form.name),
      description: sanitizeText(form.description) || "No description yet.",
      category: form.category,
      price: Number(form.price),
    };

    onAddItem(newItem);

    // Telemetry Simulation requirement: log a console analytics ping
    // whenever adding a menu item completes.
    console.log("[Analytics] User interacted with React Components");

    setForm(emptyForm);
    setErrors({});
  }

  return (
    <form className="add-item-form" onSubmit={handleSubmit} noValidate>
      <h2 className="add-item-form__title">Add a menu item</h2>

      <div className="add-item-form__row">
        <div className="field">
          <label htmlFor="item-name">Item name</label>
          <input
            id="item-name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={errors.name ? "field--error" : ""}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "item-name-error" : undefined}
          />
          {errors.name && (
            <span id="item-name-error" className="field__error" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="item-price">Price (USD)</label>
          <input
            id="item-price"
            type="number"
            step="0.01"
            min="0"
            value={form.price}
            onChange={(e) => handleChange("price", e.target.value)}
            className={errors.price ? "field--error" : ""}
            aria-invalid={Boolean(errors.price)}
            aria-describedby={errors.price ? "item-price-error" : undefined}
          />
          {errors.price && (
            <span id="item-price-error" className="field__error" role="alert">
              {errors.price}
            </span>
          )}
        </div>
      </div>

      <div className="add-item-form__row">
        <div className="field">
          <label htmlFor="item-category">Category</label>
          <select
            id="item-category"
            value={form.category}
            onChange={(e) => handleChange("category", e.target.value)}
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="field field--wide">
          <label htmlFor="item-description">Description (optional)</label>
          <input
            id="item-description"
            type="text"
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="add-item-form__submit">
        Add item
      </button>
    </form>
  );
}

export default AddItemForm;