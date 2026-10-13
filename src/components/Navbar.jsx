import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const { cartItems } = useCart();
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 bg-white px-8 py-4 shadow-sm">
      <a href="/">KantinKita</a>
      <div className="flex gap-6">
        <div>
          <a href="/test">Cart</a>
        </div>
        <div className="text-white"></div>
      </div>
    </nav>
  )
}