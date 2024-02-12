import React from 'react'
import Image from 'next/image'

const SectionC = () => {
    return (
        <section className="bg-[#37e773] max-xl:mt-[20px] xl:mt-[60px] xl:py-[40px]">
            <div className="pt-[30px] flex justify-center items-center max-lg:flex-col mx-auto sm:max-lg:w-[545px] xl:w-[1140px] md:max-xl:px-[30px] max-[1141px]:pb-[30px]">
                <div className="w-max">
                    <h1 className="font-Montserrat font-bold w-max max-xl:text-[30px] max-sm:text-center xl:text-[60px]">
                        Platform Trading
                    </h1>
                    <div className="flex justify-center w-max mt-[20px] max-sm:flex-col max-sm:gap-5">
                        <div className="w-[266px] flex flex-col justify-between">
                            <div>
                                <h3 className="text-[20px] font-Open_Sans font-bold">Web Trader</h3>
                                <ul className="list-disc font-Open_Sans">
                                    <li>Tidak perlu tambahan software</li>
                                    <li>Eksekusi Cepat</li>
                                    <li>Order dalam 1x klik</li>
                                </ul>
                            </div>
                            <a href="/real-akun">
                                <button className="max-md:mt-5 md:mt-[40px] py-[18px] px-[40px] rounded-xl bg-[white] w-max max-sm:w-full">
                                    <p className=" text-[#37e773] font-Open_Sans text-[12px] uppercase font-bold">
                                        lebih lanjut
                                    </p>
                                </button>
                            </a>
                        </div>
                        <div className="w-[266px] flex flex-col justify-between">
                            <div>
                                <h3 className="text-[20px] font-Open_Sans font-bold">
                                    Trade on Mobile &amp; PC
                                </h3>
                                <ul className="list-disc font-Open_Sans">
                                    <li>Lebih dari 50 Indikator Teknikal yang sudah terinstal</li>
                                    <li>Lebih dari 20 Alat Analisa Chart</li>
                                    <li>3 Tipe Chart &amp; 9 Timeframe</li>
                                </ul>
                            </div>
                            <a href="/real-akun">
                                <button className="max-sm:mt-5 md:mt-[20px] py-[18px] px-[40px] rounded-xl bg-[white] max-sm:w-full">
                                    <p className=" text-[#37e773] font-Open_Sans text-[12px] uppercase font-bold">
                                        lebih lanjut
                                    </p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="xl:w-max max-sm:w-full max-md:px-3 max-md:pt-3">
                    <Image
                        alt=""
                        loading="lazy"
                        width={678}
                        height={368}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src="/images/home/sectionC/metatrader-5-multi-asset-platform_2x-removebg-preview.png"
                    />
                </div>
            </div>
        </section>

    )
}

export default SectionC