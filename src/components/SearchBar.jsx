export default function SearchBar({ query, onQueryChange }) {
  return (
    <div>
      <input id="search" className="w-full bg-white py-2 px-4 shadow mb-4 rounded-2xl" type="search" placeholder="Cari produk..." value={query}
             onChange={(event) => onQueryChange(event.target.value)} />
    </div>
  );
}