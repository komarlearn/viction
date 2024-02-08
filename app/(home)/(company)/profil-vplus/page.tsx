import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <section className="flex justify-center">
                <div className="w-[1140px] flex max-sm:flex-col justify-center items-center h-full gap-[40px] py-[25px]">
                    <div className="relative w-[250px] h-[100px]">
                        <div className="bg-[#f1c50e] w-[250px] h-[100px] relative z-10">
                            <div className="absolute z-20 flex flex-col justify-center left-5">
                                <p className="leading-none font-extrabold uppercase text-[66px] font-Antonio">
                                    About Vplus
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-5 shrink max-sm:mt-2">
                        <p className="font-bold font-Open_Sans text-[20px]">Vplus.id</p>
                        <p className="font-Open_Sans">
                            Vplus Platinum 8 pertama kali dibentuk pada tahun 2020 dinaungi oleh PT
                            Victory International Futures yang sepenuhnya diatur oleh BAPPEBTI.
                            Vplus di sini memberikan berbagai layanan untuk memberdayakan klien
                            dalam rencana trading dan investasi klien.
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex justify-center">
                <div className="w-[1140px] flex flex-col justify-center items-center h-full py-[40px] max-lg:px-5 max-sm:gap-8">
                    <div className="flex gap-10 max-sm:flex-col">
                        <div className="flex flex-col items-center justify-center w-full font-Open_Sans shrink">
                            <h1 className="text-[40px] font-bold uppercase">our vision</h1>
                            <p className="text-[11px] font-bold uppercase mb-[25px]">
                                (solusi trading yang lebih efisien)
                            </p>
                            <p className="text-left max-sm:text-center">
                                Sebagai layanan digital yang diasosiasikan oleh PT Victory
                                International Futures, Vplus memberikan wawasan trading yang dinamis,
                                pengetahuan profesional yang mendalam, dan kemampuan dalam memimpin
                                pasar yang akan membantu nasabah kami untuk siap dalam menghadapi
                                tantangan trading.
                            </p>
                        </div>
                        <div className="relative max-sm:w-[270px] max-sm:h-[220px] sm:w-[300px] sm:h-[250px]">
                            <div className="bg-[#f1c50e] max-sm:w-[220px] max-sm:h-[220px] sm:w-[250px] sm:h-[250px] rounded-full absolute z-10 right-0 top-0" />
                            <Image
                                alt=""
                                loading="lazy"
                                width={983}
                                height={714}
                                decoding="async"
                                data-nimg={1}
                                className=" w-[250px] absolute z-20 left-0 bottom-0"
                                src="/images/company/company-profile1.png"
                                style={{ color: "transparent" }}
                            />
                        </div>
                    </div>
                    <div className="flex gap-10 max-sm:flex-col">
                        <div className="relative max-sm:w-[270px] max-sm:h-[220px] sm:w-[300px] sm:h-[250px] max-sm:hidden">
                            <div className="bg-[#3a336f] max-sm:w-[220px] max-sm:h-[220px] sm:w-[250px] sm:h-[250px] rounded-full absolute z-10 left-0 top-0" />
                            <Image
                                alt=""
                                loading="lazy"
                                width={1000}
                                height={737}
                                decoding="async"
                                data-nimg={1}
                                className=" w-[250px] absolute z-20 right-0 bottom-0"
                                src="/images/company/company-profile2.png"
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center w-full font-Open_Sans shrink">
                            <h1 className="text-[40px] font-bold uppercase">our mission</h1>
                            <p className="text-[11px] font-bold uppercase mb-[25px]">
                                (edukasi trader)
                            </p>
                            <p className="text-right max-sm:text-center">
                                Vplus ​berkomitmen untuk meletakkan dasar yang tepat untuk para trader
                                dalam mencapai tujuan trading dan menghasilkan potensi keuntungan
                                sebanyak mungkin dari market.
                            </p>
                        </div>
                        <div className="relative max-sm:w-[270px] max-sm:h-[220px] sm:w-[300px] sm:h-[250px] sm:hidden">
                            <div className="bg-[#3a336f] max-sm:w-[220px] max-sm:h-[220px] sm:w-[250px] sm:h-[250px] rounded-full absolute z-10 left-0 top-0" />
                            <Image
                                alt=""
                                loading="lazy"
                                width={1000}
                                height={737}
                                decoding="async"
                                data-nimg={1}
                                className=" w-[250px] absolute z-20 right-0 bottom-0"
                                src="/images/company/company-profile2.png"
                                style={{ color: "transparent" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default page