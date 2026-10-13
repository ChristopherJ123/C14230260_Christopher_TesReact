import { semuaMenu } from "./data/menu";
import MenuCard from "./components/MenuCard";
import {useState} from "react";
import SearchBar from "./components/SearchBar.jsx";
import Modal from "./components/Modal.jsx";
import MenuForm from "./components/MenuForm.jsx";

export default function App() {
  const [menus, setMenus] = useState(semuaMenu);
  const [query, setQuery] = useState("");
  const [kategori, setKategori] = useState("semua kategori");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const semuaKategori = ["semua kategori", ...new Set(menus.map(menu => menu.kategori))];

  function handleAddMenu(menu) {
    const newId = Math.max(...menus.map(m => m.id), 0) + 1;
    const newMenu = { ...menu, id: newId };
    setMenus((previous) => [newMenu, ...previous]);
    setIsModalOpen(false);
  }

  const filteredMenu = menus
    .filter(menu => menu.nama.toLowerCase().includes(query.toLowerCase()))
    .filter(menu => kategori === "semua kategori" || menu.kategori === kategori);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 40 }}>
      <div className="flex w-full justify-between mb-4 items-center">
        <h1>KantinKita</h1>
        <button onClick={() => setIsModalOpen(true)}>Tambah Produk</button>
      </div>
      <div className="grid gap-4 grid-cols-2">
        <SearchBar query={query} onQueryChange={setQuery}/>
        <select className="w-full bg-white py-2 px-4 shadow mb-4 rounded-2xl" value={kategori} onChange={(event) => setKategori(event.target.value)}>
          {semuaKategori.map((kategori) => <option key={kategori} value={kategori}>{kategori}</option>)}
        </select>
      </div>
      {filteredMenu.length === 0 ? <p>Produk tidak ditemukan.</p> : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredMenu.map((menu) => <MenuCard key={menu.id} menu={menu} onSelect={() => {}} />)}
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <MenuForm onAdd={handleAddMenu} />
      </Modal>
    </div>
  );
}
