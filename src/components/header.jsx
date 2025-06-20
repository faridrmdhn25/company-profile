const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-[#101820] text-white z-[999] h-[100px] px-10 flex justify-between items-center">
            <a href="#">
                <img src="gojek-horizontal-logo-white.svg" width="112" alt="Gojek Logo" />
            </a>
            <nav className="flex items-center gap-[40px]">
                <p className="font-semibold text-[17px] cursor-pointer">Beranda</p>

                <select className="bg-transparent text-white font-semibold text-[17px] cursor-pointer border-none focus:outline-none">
                    <option >Gabung jadi Mitra</option>
                    <option className="bg-[#0f1318]">Mitra Pengemudi</option>
                    <option className="bg-[#0f1318]">MItra Pedagang</option>
                </select>

                <p className="font-semibold text-[17px] cursor-pointer">GoCrop</p>
                <p className="font-semibold text-[17px] cursor-pointer">Karir</p>

                <select className="w-[120px] bg-transparent text-white font-semibold text-[17px] cursor-pointer border-none focus:outline-none">
                    <option hidden>Perusahaan</option>
                    <option className="bg-[#0f1318]">Tentang</option>
                    <option className="bg-[#0f1318]">Ruang Wartawan</option>
                    <option className="bg-[#0f1318]">Keamanan</option>
                    <option className="bg-[#0f1318]">Keberlanjutan</option>
                </select>

                <p className="font-semibold text-[17px] cursor-pointer">Produk</p>
                <p className="font-semibold text-[17px] cursor-pointer">Blog</p>
                <p className="font-semibold text-[17px] cursor-pointer">Bantuan</p>

                <select className="w-[40px] bg-transparent text-white font-semibold text-[17px] cursor-pointer border-none focus:outline-none">
                    <option hidden>ID</option>
                    <option className="bg-[#0f1318]">Bahasa Indonesia</option>
                    <option className="bg-[#0f1318]">Bahasa Inggris</option>
                </select>
            </nav>
        </header>
    );
};

export default Header;
