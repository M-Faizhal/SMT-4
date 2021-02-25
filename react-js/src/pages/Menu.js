import { useState } from "react";
import Tabel from "./Tabel";

function Menu() {
    const titel = "Daftar Menu Restoran"
    const [menus, setMenu] = useState(
        [
            {
                idmenu: 1, 
                idkategori: 1, 
                menu: "Apel Manalagi", 
                gambar: "apel.jpg", 
                harga: 3000
            },
            {
                idmenu: 2, 
                idkategori: 1, 
                menu: "Pisang Raja", 
                gambar: "pisang.jpg", 
                harga: 5000
            },
            {
                idmenu: 3, 
                idkategori: 2, 
                menu: "Nasi Padang", 
                gambar: "nasipadang.jpg", 
                harga: 20000
            },
            {
                idmenu: 4, 
                idkategori: 2, 
                menu: "Nasi Ayam", 
                gambar: "nasiayam.jpg", 
                harga: 15000
            },
            {
                idmenu: 5, 
                idkategori: 3, 
                menu: "Es Teh", 
                gambar: "esteh.jpg", 
                harga: 5000
            },
            {
                idmenu: 66, 
                idkategori: 3, 
                menu: "Es Jeruk", 
                gambar: "esjeruk.jpg", 
                harga: 7000
            },
        ]
    )
    return (
    <div className="App">
        <Tabel menu = {menus} titel = {titel} />
        <Tabel menu = {menus.filter((data)=>(data.idkategori === 3))} titel = "MENU BUAH" />
    </div>
    );
}

export default Menu;