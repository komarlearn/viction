import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            <section className="bg-[#37e773] h-full">
                <div className="flex flex-wrap justify-center items-center mx-auto bg-[#37e773] ">
                    <div className="w-[285px] h-[458px] max-[1140px]:h-full p-[30px] flex flex-col justify-start">
                        <p className="text-[60px] font-Open_Sans text-black text-center">1</p>
                        <h3 className="text-[16px] font-Open_Sans text-black font-bold mt-[20px]">
                            Registrasi ke Client Area
                        </h3>
                        <p className="text-[16px] font-Open_Sans text-black mt-[20px]">
                            Anda akan mendapatkan akun demo secara otomatis. Trading futures dengan
                            margin memiliki tingkat risiko yang tinggi. Oleh karena itu, Anda perlu
                            memiliki Akun Demo untuk membantu Anda memahami apakah transaksi
                            tersebut cocok untuk Anda.
                        </p>
                    </div>
                    <div className="w-[285px] h-[458px] max-[1140px]:h-full p-[30px] flex flex-col justify-start">
                        <p className="text-[60px] font-Open_Sans text-black text-center">2</p>
                        <h3 className="text-[16px] font-Open_Sans text-black font-bold mt-[20px]">
                            Buka Akun Real
                        </h3>
                        <p className="text-[16px] font-Open_Sans text-black mt-[20px]">
                            Lengkapi formulir online dan ceritakan sedikit tentang diri Anda, latar
                            belakang keuangan Anda, dan unggah dokumen identitas Anda.
                        </p>
                    </div>
                    <div className="w-[285px] h-[458px] max-[1140px]:h-full p-[30px] flex flex-col justify-start">
                        <p className="text-[60px] font-Open_Sans text-black text-center">3</p>
                        <h3 className="text-[16px] font-Open_Sans text-black font-bold mt-[20px]">
                            Deposit
                        </h3>
                        <p className="text-[16px] font-Open_Sans text-black mt-[20px]">
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
                        <h3 className="text-[16px] font-Open_Sans text-black font-bold mt-[20px]">
                            Trading
                        </h3>
                        <p className="text-[16px] font-Open_Sans text-black mt-[20px]">
                            Trading lengkap forex, index dan komoditi yang populer
                        </p>
                    </div>
                </div>
                <div className="xl:w-[1140px] mx-auto pb-[30px]">
                    <div className="flex flex-col items-center justify-center my-10">
                        <div className="bg-white p-[30px] rounded-2xl xl:w-[711px]">
                            <form className="flex flex-col w-full gap-4">
                                <div>
                                    <div className="block mb-2">
                                        <label
                                            className="font-medium text-gray-900 dark:text-gray-300 text-[16px]"
                                            data-testid="flowbite-label"
                                            htmlFor="nama"
                                        >
                                            NAMA
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="nama"
                                        placeholder="Masukan nama Anda"
                                        className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic max-xl:placeholder:text-[13px] focus:outline-none border-1 border-slate-300 focus:border-[#1b7bea] focus:ring-[#1b7bea] focus:ring-2"
                                    />
                                </div>
                                <div className="flex gap-2 max-sm:flex-col">
                                    <div className="w-1/2 max-sm:w-full">
                                        <div className="block mb-2">
                                            <label
                                                className="font-medium text-gray-900 dark:text-gray-300 text-[16px]"
                                                data-testid="flowbite-label"
                                                htmlFor="telepon"
                                            >
                                                NOMOR TELEPON
                                            </label>
                                        </div>
                                        <input
                                            id="telepon"
                                            type="text"
                                            placeholder="Masukan No. telepon yang valid"
                                            className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic max-xl:placeholder:text-[13px] focus:outline-none border-1 border-slate-300 focus:border-[#1b7bea] focus:ring-[#1b7bea] focus:ring-2"
                                        />
                                    </div>
                                    <div className="w-1/2 max-sm:w-full">
                                        <div className="block mb-2">
                                            <label
                                                className="font-medium text-gray-900 dark:text-gray-300 text-[16px]"
                                                data-testid="flowbite-label"
                                                htmlFor="email"
                                            >
                                                EMAIL
                                            </label>
                                        </div>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Masukan email yang aktif"
                                            className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic max-xl:placeholder:text-[13px] border-1 border-slate-300 focus:outline-none focus:border-[#1b7bea] focus:ring-[#1b7bea] focus:ring-2"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#37e773] drop-shadow-2xl hover:bg-black rounded-lg hover:text-[#37e773] hover:ring-2 hover:ring-[#1b7bea] py-3 text-black font-Open_Sans font-semibold"
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default page