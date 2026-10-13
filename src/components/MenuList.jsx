import MenuCard from "./MenuCard.jsx";

export default function MenuList({ menu: menus }) {
  return (
    <>
      <p>{menus.length} menu ditemukan</p>
      {menus.length === 0 && <p>Tidak ada menu yang cocok.</p>}
      <div className="grid">
        {menus.map((menu) => <MenuCard key={menu.id} menu={menu} />)}
      </div>
    </>
  )
}