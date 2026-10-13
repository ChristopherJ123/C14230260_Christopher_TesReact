import { useEffect, useRef } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();
    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div role="dialog" aria-modal="true" aria-label="Tambah produk" className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Tutup modal" className="float-right text-gray-500">✕</button>
        {children}
      </div>
    </div>
  );
}