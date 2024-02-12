import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <section className="flex justify-center">
                <div className="flex flex-col items-center justify-center w-[1100px] h-[200px] my-[25px] relative">
                    <Image
                        alt=""
                        loading="lazy"
                        width={1280}
                        height={266}
                        decoding="async"
                        data-nimg={1}
                        className="absolute z-10 object-cover object-top w-full h-full rounded-3xl brightness-50"
                        src="/images/company/bgtanyajawab.jpeg"
                        style={{ color: "transparent" }}
                    />
                    <div className="relative z-20 flex flex-col items-center justify-center h-full max-sm:px-3">
                        <h1 className="max-sm:text-[30px] sm:text-[60px] font-Montserrat font-bold text-white text-center">
                            Tanya Jawab Vplus
                        </h1>
                        <p className="text-white max-sm:text-[14px] sm:text-[20px] font-Open_Sans text-center">
                            Temukan jawaban paling sering ditanyakan berkaitan dengan trading
                            bersama Vplus.
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex justify-center mb-[25px]">
                <div className="w-[1100px] h-full flex max-sm:flex-col justify-center max-sm:items-center sm:items-start gap-10">
                    <Image
                        alt=""
                        loading="lazy"
                        width={771}
                        height={1280}
                        decoding="async"
                        data-nimg={1}
                        className="w-[240px] max-sm:w-[200px]"
                        src="/images/company/logotanyajawab.png"
                        style={{ color: "transparent" }}
                    />
                    <div className="flex flex-col gap-4 grow max-sm:px-4">
                        <div className="flex gap-1 font-Montserrat max-sm:text-[11px]">
                            <button className="bg-[#3a336f] text-white py-[10px] px-[25px] font-bold rounded-l-lg grow hover:bg-[#3a336f] hover:text-white">
                                Akun
                            </button>
                            <button className="bg-[#37e773] py-[10px] px-[25px] font-bold grow hover:bg-[#3a336f] hover:text-white">
                                Trading
                            </button>
                            <button className="bg-[#37e773] py-[10px] px-[25px] font-bold rounded-r-lg grow hover:bg-[#3a336f] hover:text-white">
                                Deposit &amp; Penarikan
                            </button>
                        </div>
                        <div className="max-sm:px-4">
                            <div className="w-full h-full block">
                                <ul className="list-decimal ">
                                    <li>
                                        <span className="font-bold">
                                            Berapa biaya minimal untuk bergabung di Vplus?
                                        </span>
                                        <br />
                                        <span className="text-[#37e773]">Jawab</span> : Minimal
                                        <span className="font-bold"> $500</span> untuk untuk akun mini
                                        <span> Low Spread Low Commision</span>
                                        <span className="font-bold"> (VLS)</span>.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Apakah ada dokumen yang diperlukan untuk bergabung di Vplus?
                                        </span>
                                        <br />
                                        <span className="text-[#37e773]">Jawab</span> : Kartu Identitas
                                        (eKTP/SIM/Paspor) yang masih berlaku, Foto Terbaru, Cover Buku
                                        Tabungan.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Adakah akun demo untuk saya coba?
                                        </span>
                                        <br />
                                        <span className="text-[#37e773]">Jawab</span> : Untuk pembukaan
                                        akun demo bisa anda lakukan di halaman home website ini dengan
                                        mengisi informasi yang diminta. anda akan menerima rincian login
                                        akun demo setelah mengirim informasi yang diminta, dengan nominal
                                        dana<span className="font-bold"> $10.000</span>.
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full h-full hidden">
                                <ul className="list-decimal ">
                                    <li>
                                        <span>
                                            <span className="font-bold">
                                                Platform apa yang dipakai untuk trading di Vplus?
                                            </span>
                                            <br />
                                            <span>
                                                <span className="text-[#37e773]">Jawab </span>
                                                <span>
                                                    : Metatrader 5, tersedia di PC maupun Android dan iOS.
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Tipe Akun apa yang tersedia di Vplus?
                                        </span>
                                        <br />
                                        <span className="text-[#37e773]">Jawab</span> : Akun Reguler, Akun
                                        Mini dan Akun Mini<span>Low Spread Low Commision</span>
                                        <span className="font-bold"> (VLS)</span>.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Apa saja Produk yang ditawarkan oleh Vplus?
                                        </span>
                                        <br />
                                        <span className="text-[#37e773]">Jawab</span> : Forex, Komoditi
                                        dan Index.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Berapa minimal volume untuk 1 x transaksi?
                                        </span>
                                        <br />
                                        <span className="text-[#37e773]">Jawab</span> : Transaksi di Vplus
                                        mulai dari 0.1 lot.
                                    </li>
                                    <li>
                                        <span className="font-bold">Berapa Spread di Vplus?</span>
                                        <br />
                                        <span className="text-[#37e773]">Jawab</span> : Spread di Vplus
                                        mulai dari 0.0.
                                        <br />
                                    </li>
                                    <li>
                                        <span className="font-bold">Apa yang dimaksud dengan SWAP?</span>
                                        <br />
                                        <span className="text-[#37e773]">Jawab</span> : Swap adalah biaya
                                        yang dikenakan pada saat posisi trading kamu menginap.
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full h-full hidden">
                                <ul className="list-decimal ">
                                    <li>
                                        <span className="font-bold">
                                            Bagaimana cara melakukan deposit di Vplus?
                                        </span>
                                        <br />
                                        <span className="text-[#37e773]">Jawab</span> : Kamu bisa
                                        melakukan transfer melalui ATM, Internet Banking, Mobile Banking
                                        maupun Pemindahan Buku di teller dari Rekening milik kamu sendiri.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Apakah boleh menggunakan rekening milik orang lain?
                                        </span>
                                        <br />
                                        <span className="text-[#37e773]">Jawab</span> : Sesuai dengan
                                        ketentuan Bappebti tentang Anti Pencucian Uang, Vplus tidak
                                        menerima deposit dari pihak ketiga. Bila tetap ingin menggunakan
                                        rekening milik orang lain, kami sarankan untuk membuka akun atas
                                        nama orang tersebut.
                                    </li>
                                    <li>
                                        <span>
                                            <span className="font-bold text-white">
                                                Apakah ada biaya untuk Deposit dan Penarikan?
                                            </span>
                                            <br />
                                            <span>
                                                <span className="text-[#37e773]">Jawab</span> : Vplus tidak
                                                mengenakan biaya administrasi apapun.
                                            </span>
                                            <br />
                                        </span>
                                    </li>
                                    <li>
                                        <span className="font-bold">Berapa lama waktu Penarikan?</span>
                                        <br />
                                        <span className="text-[#f1c50e]">Jawab</span> : Penarikan sebelum
                                        jam 12.00 WIB akan diproses di hari yang sama, jika penarikan
                                        dilakukan setelah jam 12.00 WIB akan diproses di hari kerja
                                        berikutnya.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default page