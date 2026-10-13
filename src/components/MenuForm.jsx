import {useState} from "react";

export default function MenuForm({ onAdd }) {
 // tidak pake multi state
  // const [nama, setNama] = useState("");
 // const [harga, setHarga] = useState("");
 // const [kategori, setKategori] = useState("");
 // const [stok, setStok] = useState("");
 const NILAI_AWAL = {
   nama: "",
   harga: "",
   kategori: "",
   stok: "",
 }
 const [form, setForm] = useState(NILAI_AWAL);

 function handleChange(event) {
   const { nama, harga, kategori, stok } = event.target;
   setForm((previous) => ({ ...previous, [nama]: nama, [harga]: harga, [kategori]: kategori, [stok]: stok}));
 }

 function handleFormSubmission(event) {
   event.preventDefault();
   const parsedHarga = Number(form.harga.replace(/[^0-9]/g, ""))
   const parsedStok = Number(form.stok.replace(/[^0-9]/g, ""))

   if (form.nama.length < 3) {
     alert("Nama minimal harus 3 karakter.")
     return;
   }
   if (!form.kategori.trim()) {
     alert("Kategori wajib dipilih.")
     return;
   }
   if (isNaN(parsedHarga) || parsedHarga <= 0) {
     alert("Harga harus lebih dari 0.")
     return;
   }
   if (isNaN(parsedStok) || parsedStok <= 0) {
     alert("Stok harus lebih dari 0.")
     return;
   }
   onAdd(form);
   setForm(NILAI_AWAL);
 }

 return (
   <form onSubmit={handleFormSubmission} className="space-y-4">
     <h2 className="text-xl font-bold">Tambah Produk</h2>
     <input aria-label="Nama produk" type="text" placeholder="Nama produk" value={form.nama} onChange={handleChange} className="w-full rounded-lg border p-2" />
     <input aria-label="Harga" type="number" placeholder="Harga" value={form.harga} onChange={handleChange} className="w-full rounded-lg border p-2" />
     <input aria-label="Kategori" type="text" placeholder="Kategori" value={form.kategori} onChange={handleChange} className="w-full rounded-lg border p-2" />
     <input aria-label="Stok" type="number" placeholder="Stok" value={form.stok} onChange={handleChange} className="w-full rounded-lg border p-2" />
     <button type="submit" className="w-full rounded-lg bg-green-600 p-2 text-white hover:bg-green-700">Simpan Produk</button>
   </form>
 )
}