import { useCart } from "../context/CartContext.jsx";
import {useState} from "react";

export default function AddToCartButton({ menu }) {
  const { addToCart } = useCart();
  const [addedCount, setAddedCount] = useState(0);
  return (
    <div className="mt-3">
      <button type="button" onClick={() => {
        addToCart(menu);
        setAddedCount((previous) => previous + 1);
      }} className="w-full rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700">
        Add to Cart
      </button>
      <p role="status" className="mt-1 text-sm text-green-700">
        {addedCount > 0 ? `${addedCount} ditambahkan ke keranjang.` : ""}
      </p>
    </div>
  );
}