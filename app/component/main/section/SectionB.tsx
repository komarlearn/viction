import React from 'react'

const SectionB = () => {
    return (
        <section className="relative h-max">
            <div className="xl:w-[1140px] mx-auto pt-[65px]">
                <h2 className="font-Montserrat font-bold text-center max-sm:text-[30px] max-sm:mb-[30px] sm:text-[60px] sm:mx-[60px] sm:mb-[50px] max-[390px]:mx-[10px]">
                    Start trading with 4 steps
                </h2>
                <div className="flex flex-wrap items-center justify-center w-full gap-9 max-sm:p-3">
                    <div className="w-[545px] h-[271px] bg-[#1b7bea] p-[30px] rounded-3xl flex flex-col justify-between max-lg:h-max ">
                        <p className="text-white font-Open_Sans text-[20px] max-sm:text-center">
                            Buka akun dengan mengisi email, nomor handphone dan data pribadi.
                        </p>
                        <a className="flex max-sm:justify-center" href="/real-akun">
                            <button className="bg-[#37e773] mt-[20px] py-[18px] px-[30px] rounded-xl">
                                <p className="font-Open_Sans text-[12px] uppercase text-[#1b7bea] font-bold">
                                    Daftar
                                </p>
                            </button>
                        </a>
                    </div>
                    <div className="w-[545px] h-[271px] bg-[#37e773] p-[30px] rounded-3xl flex flex-col justify-between max-lg:h-max">
                        <p className="text-black font-Open_Sans text-[20px] max-sm:text-center">
                            Verifikasi identitas dan data pribadi anda melalui tatap muka atau
                            video call dengan wakil pialang berjangka berlisensi.
                        </p>
                        <a className="flex max-sm:justify-center" href="/real-akun">
                            <button className="bg-white mt-[20px] py-[18px] px-[30px] rounded-xl">
                                <p className="font-Open_Sans text-[12px] uppercase text-[#1b7bea] font-bold">
                                    Verifikasi
                                </p>
                            </button>
                        </a>
                    </div>
                    <div className="w-[545px] h-[271px] bg-[#37e773] p-[30px] rounded-3xl flex flex-col justify-between max-lg:h-max">
                        <p className="text-black font-Open_Sans text-[20px] max-sm:text-center">
                            Lakukan deposit di bank - bank yang sudah terdaftar di{/* */}{" "}
                            <span className="font-bold"> BAPPEBTI </span>sebagai rekening terpisah
                            broker.
                        </p>
                        <a className="flex max-sm:justify-center" href="/real-akun">
                            <button className="bg-white mt-[20px] py-[18px] px-[30px] rounded-xl">
                                <p className="font-Open_Sans text-[12px] uppercase text-[#1b7bea] font-bold">
                                    Deposit
                                </p>
                            </button>
                        </a>
                    </div>
                    <div className="w-[545px] h-[271px] bg-[#1b7bea] p-[30px] rounded-3xl flex flex-col justify-between max-lg:h-max">
                        <p className="text-white font-Open_Sans text-[20px] max-sm:text-center">
                            Dapatkan keuntungan dengan trading Forex, Emas, Minyak dan Indeks.
                        </p>
                        <a className="flex max-sm:justify-center" href="/real-akun">
                            <button className="bg-[#37e773] mt-[20px] py-[18px] px-[30px] rounded-xl">
                                <p className="font-Open_Sans text-[12px] uppercase text-[#1b7bea] font-bold">
                                    Trading
                                </p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SectionB