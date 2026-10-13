import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addToCart(product) {
    // Functional update selalu membaca state terbaru.
    setItems((previous) => {
      const exists = previous.some(
        (item) => item.product.id === product.id
      );

      return exists
        ? previous.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        : [...previous, { product, quantity: 1 }];
    });
  }

  function updateQuantity(id, quantity) {
    if (!Number.isSafeInteger(quantity) || quantity < 1) return;

    setItems((previous) =>
      previous.map((item) =>
        item.product.id === id
          ? { ...item, quantity }
          : item
      )
    );
  }

  function removeFromCart(id) {
    setItems((previous) =>
      previous.filter((item) => item.product.id !== id)
    );
  }

  function clearCart() {
    setItems([]);
  }

  // Nilai turunan dihitung dari items.
  const totalQuantity = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice =
    items.reduce(
      (total, item) =>
        total +
        Math.round(item.product.price * 100) * item.quantity,
      0
    ) / 100;

  return (
    <CartContext.Provider
      value={{
        items,
        totalQuantity,
        totalPrice,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart harus digunakan di dalam CartProvider"
    );
  }

  return context;
}
