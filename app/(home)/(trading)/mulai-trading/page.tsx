import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <section className="relative h-[300px]">
            <Image
                alt=""
                loading="lazy"
                width={1200}
                height={800}
                decoding="async"
                data-nimg={1}
                className="h-full w-full object-cover absolute z-10 brightness-[0.4]"
                style={{ color: "transparent" }}
                src="/images/trading/TradingdiVplus.jpeg"
            />
            <div className="relative z-20 flex flex-col items-center justify-center h-full">
                <h1 className="max-sm:text-[30px] sm:text-[60px] font-Montserrat font-bold text-white text-center">
                    Trading di Broker Pilihan Vplus
                </h1>
                <p className="text-white text-[20px] font-Open_Sans mt-[25px] text-center">
                    Fix Spread dan Komisi Rendah
                </p>
            </div>

            <div className="flex flex-wrap bg-[#37e773] justify-center">
                <div className="bg-[#37e773] h-[300px] w-[360px] p-[30px] flex flex-col items-center justify-center">
                    <Image
                        alt=""
                        loading="lazy"
                        width={128}
                        height={128}
                        decoding="async"
                        data-nimg={1}
                        className=""
                        src="/images/trading/7864733-64171209.png"
                        style={{ color: "transparent" }}
                    />
                    <p className="text-[20px] font-Open_Sans text-white mt-[40px] text-center">
                        Lebih dari 70 Produk Trading
                    </p>
                </div>
                <div className="bg-[#37e773] h-[300px] w-[360px] p-[30px] flex flex-col items-center justify-center">
                    <Image
                        alt=""
                        loading="lazy"
                        width={128}
                        height={128}
                        decoding="async"
                        data-nimg={1}
                        className=""
                        src="/images/trading/6484995-c143c2a1.png"
                        style={{ color: "transparent" }}
                    />
                    <p className="text-[20px] font-Open_Sans text-white mt-[40px] text-center">
                        Trading Condition Kompetitif
                    </p>
                </div>
                <div className="bg-[#37e773] h-[300px] w-[360px] p-[30px] flex flex-col items-center justify-center">
                    <Image
                        alt=""
                        loading="lazy"
                        width={128}
                        height={128}
                        decoding="async"
                        data-nimg={1}
                        className=""
                        src="/images/trading/1456874-711af156.png"
                        style={{ color: "transparent" }}
                    />
                    <p className="text-[20px] font-Open_Sans text-white mt-[40px] text-center">
                        Diawasi &amp; Berlisensi
                    </p>
                </div>
                <div className="bg-[#37e773] h-[300px] w-[360px] p-[30px] flex flex-col items-center justify-center">
                    <Image
                        alt=""
                        loading="lazy"
                        width={128}
                        height={128}
                        decoding="async"
                        data-nimg={1}
                        className=""
                        src="/images/trading/1746650-7612fe7f.png"
                        style={{ color: "transparent" }}
                    />
                    <p className="text-[20px] font-Open_Sans text-white mt-[40px] text-center">
                        Keamanan Dana Terjamin
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center w-full">
                <div className="w-[570px] h-[385px] p-[30px] flex flex-col justify-center">
                    <p className="text-[30px] font-Open_Sans font-bold">Real Account</p>
                    <p className="text-[16px] font-Open_Sans mt-[20px]">
                        Isi detail pribadi anda di formulir pendaftaran kami dan depositkan dana
                        anda dengan aman kemudian mulai trading.
                    </p>
                    <a href="/real-akun">
                        <button className="bg-[#1b7bea] font-Open_Sans mt-[20px] w-max rounded-lg py-[10px] px-[30px] text-[#37e773] font-semibold hover:bg-[#37e773] hover:text-white">
                            Buka Akun Real
                        </button>
                    </a>
                </div>
                <div className="w-[570px] h-[385px] p-[30px] flex flex-col justify-center">
                    <div className="bg-gradient-to-br from-[#37e773] to-purple-500 h-[300px] w-full rounded-xl flex flex-col p-[30px]">
                        <div className="flex flex-row items-center gap-2">
                            <Image
                                alt=""
                                loading="lazy"
                                width={30}
                                height={30}
                                decoding="async"
                                data-nimg={1}
                                className="w-[36px] h-[36px]"
                                src="/images/trading/favicon.png"
                                style={{ color: "transparent" }}
                            />
                            <p className="text-[30px] font-Open_Sans text-white font-bold">
                                Vplus
                            </p>
                        </div>
                        <div className="mt-[20px]">
                            <div className="justify-between text-[16px] font-Open_Sans text-white flex">
                                <p>Komisi</p>
                                <p>$1.1 per lot</p>
                            </div>
                            <div className="justify-between text-[16px] font-Open_Sans text-white flex">
                                <p>Spread</p>
                                <p>Fix &amp; Floating</p>
                            </div>
                            <div className="justify-between text-[16px] font-Open_Sans text-white flex">
                                <p>Leverage</p>
                                <p>1:400</p>
                            </div>
                            <div className="justify-between text-[16px] font-Open_Sans text-white flex">
                                <p>Min. Deposit</p>
                                <p>$500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center w-full">
                <div className="w-[570px] h-[220px] p-[30px] flex flex-col justify-start">
                    <p className="text-[30px] font-Open_Sans font-bold">Demo Account</p>
                    <p className="text-[16px] font-Open_Sans mt-[20px]">
                        Dengan dana virtual, asah skill trading anda dengan simulasi di akun
                        demo dan memastikan kesiapan anda saat membuka Akun Real.
                    </p>
                </div>
                <div className="w-[570px] h-[220px] p-[30px] flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                        <Image
                            alt=""
                            loading="lazy"
                            width={128}
                            height={128}
                            decoding="async"
                            data-nimg={1}
                            className="w-[20px] h-[20px]"
                            src="/images/trading/1828643-46f230bf.png"
                            style={{ color: "transparent" }}
                        />
                        <p className="text-[20px] font-Open_Sans">
                            Hingga $10.000 ​dana virtual
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            alt=""
                            loading="lazy"
                            width={128}
                            height={128}
                            decoding="async"
                            data-nimg={1}
                            className="w-[20px] h-[20px]"
                            src="/images/trading/1828643-46f230bf.png"
                            style={{ color: "transparent" }}
                        />
                        <p className="text-[20px] font-Open_Sans">Masa Aktif 1 Bulan</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            alt=""
                            loading="lazy"
                            width={128}
                            height={128}
                            decoding="async"
                            data-nimg={1}
                            className="w-[20px] h-[20px]"
                            src="/images/trading/1828643-46f230bf.png"
                            style={{ color: "transparent" }}
                        />
                        <p className="text-[20px] font-Open_Sans">Tersedia di semua platform</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            alt=""
                            loading="lazy"
                            width={128}
                            height={128}
                            decoding="async"
                            data-nimg={1}
                            className="w-[20px] h-[20px]"
                            src="/images/trading/1828643-46f230bf.png"
                            style={{ color: "transparent" }}
                        />
                        <p className="text-[20px] font-Open_Sans">Forex, Indeks, Komoditi</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center mx-auto bg-[#37e773] ">
                <div className="w-[285px] h-[458px] max-[1140px]:h-full p-[30px] flex flex-col justify-start">
                    <p className="text-[60px] font-Open_Sans text-white text-center">1</p>
                    <h3 className="text-[16px] font-Open_Sans text-white font-bold mt-[20px]">
                        Registrasi ke Client Area
                    </h3>
                    <p className="text-[16px] font-Open_Sans text-white mt-[20px]">
                        Anda akan mendapatkan akun demo secara otomatis. Trading futures dengan
                        margin memiliki tingkat risiko yang tinggi. Oleh karena itu, Anda perlu
                        memiliki Akun Demo untuk membantu Anda memahami apakah transaksi
                        tersebut cocok untuk Anda.
                    </p>
                </div>
                <div className="w-[285px] h-[458px] max-[1140px]:h-full p-[30px] flex flex-col justify-start">
                    <p className="text-[60px] font-Open_Sans text-white text-center">2</p>
                    <h3 className="text-[16px] font-Open_Sans text-white font-bold mt-[20px]">
                        Buka Akun Real
                    </h3>
                    <p className="text-[16px] font-Open_Sans text-white mt-[20px]">
                        Lengkapi formulir online dan ceritakan sedikit tentang diri Anda, latar
                        belakang keuangan Anda, dan unggah dokumen identitas Anda.
                    </p>
                </div>
                <div className="w-[285px] h-[458px] max-[1140px]:h-full p-[30px] flex flex-col justify-start">
                    <p className="text-[60px] font-Open_Sans text-white text-center">3</p>
                    <h3 className="text-[16px] font-Open_Sans text-white font-bold mt-[20px]">
                        Deposit
                    </h3>
                    <p className="text-[16px] font-Open_Sans text-white mt-[20px]">
                        Kerjasama mendalam dengan bank, deposit yang cepat, keamanan dana, tanpa
                        biaya tambahan.
                    </p>
                </div>
                <div className="w-[285px] h-[458px] max-[1140px]:h-full p-[30px] flex flex-col justify-start">
                    <div className="h-[90px] flex justify-center items-center">
                        <Image
                            alt=""
                            loading="lazy"
                            width={128}
                            height={128}
                            decoding="async"
                            data-nimg={1}
                            className="w-[60px] h-[60px]"
                            src="/images/trading/992704-0a3834e1.png"
                            style={{ color: "transparent" }}
                        />
                    </div>
                    <h3 className="text-[16px] font-Open_Sans text-white font-bold mt-[20px]">
                        Trading
                    </h3>
                    <p className="text-[16px] font-Open_Sans text-white mt-[20px]">
                        Trading lengkap forex, index dan komoditi yang populer
                    </p>
                </div>
            </div>
        </section>

    )
}

export default page