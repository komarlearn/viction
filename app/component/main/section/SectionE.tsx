import React from 'react'
import Image from 'next/image'
const SectionE = () => {
    return (
        <section className="relative h-full">
            <div className="bg-[#37e773] absolute z-10 w-full h-full" />
            <Image
                alt=""
                loading="lazy"
                width={1920}
                height={1080}
                decoding="async"
                data-nimg={1}
                className="h-[427px] w-full brightness-[.4] absolute z-10"
                style={{ color: "transparent" }}
                src="/images/home/sectionE/4e7f28cb-e9a6-4d5c-a40f-edcf9e022f52.jpeg"
            />
            <div className="xl:w-[1140px] mx-auto relative z-20">
                <div className="flex flex-col items-center lg:pt-[100px] max-lg:pt-[30px] px-[20px] pb-[30px]">
                    <h2 className="font-Montserrat text-white font-bold max-md:text-[32px] md:max-xl:text-[39px] xl:text-[48px] text-center">
                        Vplus helps you understand trading
                    </h2>
                    <p className="text-[20px] font-Open_Sans text-white mt-[37px] text-center">
                        Berbagai produk trading yang perlu anda ketahui.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <a href="/produk-trading">
                            <div className="duration-300 drop-shadow-2xl hover:scale-110">
                                <div className="w-[261px] bg-[#37e773] h-[20px]" />
                                <div className="flex flex-col items-center bg-white rounded-b-3xl h-[351px] w-[261px] py-[30px] px-[20px]">
                                    <h2 className="text-[36px] font-Montserrat text-black font-bold">
                                        Forex
                                    </h2>
                                    <h3 className="uppercase text-[16px] font-Open_Sans mt-[16px] tracking-wider font-semibold">
                                        Mata Uang asing
                                    </h3>
                                    <p className="text-[16px] font-Open_Sans mt-[16px] text-slate-600 text-center">
                                        EURUSD, GBPUSD, NZDUSD, AUDUSD, USDJPY, USDCHF, USDCAD dan
                                        beberapa mata uang lainnya.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="/produk-trading">
                            <div className="duration-300 drop-shadow-2xl hover:scale-110">
                                <div className="w-[261px] bg-[#37e773] h-[20px]" />
                                <div className="flex flex-col items-center bg-white rounded-b-3xl h-[351px] w-[261px] py-[30px] px-[20px]">
                                    <h2 className="text-[36px] font-Montserrat text-black font-bold">
                                        Index
                                    </h2>
                                    <h3 className="uppercase text-[16px] font-Open_Sans mt-[16px] tracking-wider font-semibold">
                                        GABUNGAN SAHAM
                                    </h3>
                                    <p className="text-[16px] font-Open_Sans mt-[16px] text-slate-600 text-center">
                                        Nasdaq100, SP500, Dowjones dan Index Asia.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="/produk-trading">
                            <div className="duration-300 drop-shadow-2xl hover:scale-110">
                                <div className="w-[261px] bg-[#37e773] h-[20px]" />
                                <div className="flex flex-col items-center bg-white rounded-b-3xl h-[351px] w-[261px] py-[30px] px-[20px]">
                                    <h2 className="text-[36px] font-Montserrat text-black font-bold">
                                        Komoditi
                                    </h2>
                                    <h3 className="uppercase text-[16px] font-Open_Sans mt-[16px] tracking-wider font-semibold">
                                        HASIL ALAM
                                    </h3>
                                    <p className="text-[16px] font-Open_Sans mt-[16px] text-slate-600 text-center">
                                        XAUUSD, XAGUSD, OIL
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SectionE