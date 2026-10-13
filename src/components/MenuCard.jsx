// Arrow function sebagai pembanding function declaration.
import AddToCartButton from "./AddToCardButton.jsx";

const MenuCard = ({ menu, onSelect }) => (
  <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md" onClick={() => onSelect(menu)}>
    <h2>{menu.nama}</h2>
    <p className="price">Rp. {menu.harga}</p>
    <AddToCartButton menu={menu}/>
  </article>
);

export default MenuCard;
