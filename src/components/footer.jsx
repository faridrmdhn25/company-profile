import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaGooglePlay, FaApple } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdTranslate } from "react-icons/md";

const Footer = () => {
    return (
        <footer className='bg-[#101820] text-white px-[130px] py-[100px] flex flex-col gap-10'>
            <div className='flex flex-col gap-[60px]'>
                <img src='gojek-horizontal-logo-white (1).svg' className='w-[10%]' />
                <div className='flex justify-between flex-wrap gap-y-10'>
                    <div className="flex flex-col gap-[30px] text-left">
                        <p className="font-semibold text-[18px]">Perusahaan</p>
                        <ul className="flex flex-col gap-[20px] list-none">
                            <li>Tentang</li>
                            <li>Produk</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[30px] text-left">
                        <p className="font-semibold text-[18px]">Gabung</p>
                        <ul className="flex flex-col gap-[20px] list-none">
                            <li>Mitra Driver</li>
                            <li>Mitra Usaha</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[30px] text-left">
                        <p className="font-semibold text-[18px]">Karir</p>
                        <ul className="flex flex-col gap-[20px] list-none">
                            <li>Palajar</li>
                            <li>Profesional</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[30px] text-left">
                        <p className="font-semibold text-[18px]">Hubungi Kami</p>
                        <ul className="flex flex-col gap-[20px] list-none">
                            <li>Bantuan</li>
                            <li>Lokasi Kami</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[60px]">
                        <div className='flex flex-col gap-[30px]'>
                            <p className="font-semibold text-[18px]">Connect with Us</p>
                            <div className='flex gap-[20px]'>
                                <FaFacebookF size={30} />
                                <FaTwitter size={30} />
                                <FaInstagram size={30} />
                                <FaYoutube size={30} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[30px]'>
                            <p className="font-semibold text-[18px]">Download the app</p>
                            <div className='flex gap-[20px]'>
                                <FaGooglePlay size={30} />
                                <FaApple size={30} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-none h-px bg-gradient-to-r from-transparent via-white/20 to-transparent' />
            </div>

            <div className='flex justify-between flex-wrap gap-6'>
                <ul className='grid grid-cols-2 gap-[20px] list-none underline'>
                    <li>Pemberitahuan Privasi</li>
                    <li>Syarat & Ketentuan</li>
                    <li>Atribusi Data</li>
                    <li>Cookie Settings</li>
                </ul>
                <div className='flex items-center gap-[16px]'>
                    <FaLocationDot size={20} />
                    <select className='bg-transparent text-white rounded-full text-[16px] font-light leading-5 px-[20px] py-[12px] border border-white w-[280px]'>
                        <option className="bg-[#0f1318] border-none rounded-4xl">Indonesia</option>
                        <option className="bg-[#0f1318] border-none">Singapore</option>
                    </select>
                </div>
                <div className='flex items-center gap-[16px]'>
                    <MdTranslate size={20} />
                    <select className='bg-transparent text-white rounded-full text-[16px] font-light leading-5 px-[20px] py-[12px] border border-white w-[280px]'>
                        <option className="bg-[#0f1318] border-none">Bahasa Indonesia</option>
                        <option className="bg-[#0f1318] border-none">English</option>
                    </select>
                </div>
            </div>

            <div>
                <p>© 2023 Gojek | Gojek adalah merek milik PT GoTo Gojek Tokopedia Tbk. Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik Indonesia.</p>
            </div>
        </footer>
    )
}

export default Footer;
