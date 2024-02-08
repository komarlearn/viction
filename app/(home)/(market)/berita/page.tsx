import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div className="flex justify-center">
            <div className="w-[620px] flex flex-col items-center h-screen border-r border-l border-slate-200">
                <div className="flex w-full px-[20px] border-b items-center py-4">
                    <h1 className="text-xl font-bold">Berita</h1>
                </div>
                <a
                    className="w-full"
                    href="/berita/Tips%20Memilih%20Broker%20Forex%20yang%20Aman"
                >
                    <div className="flex py-[15px] px-[20px] border-b border-slate-200 w-full justify-between max-sm:gap-2">
                        <div className="left-0 flex flex-col justify-between">
                            <h1 className="text-[16px] font-semibold md:pr-[80px] font-Open_Sans">
                                Tips Memilih Broker Forex yang Aman
                            </h1>
                            <div className="flex">
                                <p className="text-[12px] w-max text-slate-500 font-Open_Sans">
                                    www.vplus.id | Jan 29th, 2024
                                </p>
                            </div>
                        </div>
                        <Image
                            alt=""
                            loading="lazy"
                            width={180}
                            height={100}
                            decoding="async"
                            data-nimg={1}
                            className=" object-cover rounded-lg max-sm:w-[112px] max-sm:h-[60px] sm:max-md:w-[140px] sm:max-md:h-[70px] md:max-lg:w-[180px] md:max-lg:h-[100px] lg:max-xl:w-[180px] lg:max-xl:h-[100px] xl:w-[180px] xl:h-[100px]"
                            src="/images/market/1706584853629_tips memilih broker yang aman.jpg"
                            style={{ color: "transparent" }}
                        />
                    </div>
                </a>
                <a
                    className="w-full"
                    href="/berita/MetaTrader%205%20PLATFORM%20TRADING%20POPULER%20SAAT%20INI"
                >
                    <div className="flex py-[15px] px-[20px] border-b border-slate-200 w-full justify-between max-sm:gap-2">
                        <div className="left-0 flex flex-col justify-between">
                            <h1 className="text-[16px] font-semibold md:pr-[80px] font-Open_Sans">
                                MetaTrader 5 PLATFORM TRADING POPULER SAAT INI
                            </h1>
                            <div className="flex">
                                <p className="text-[12px] w-max text-slate-500 font-Open_Sans">
                                    Vplus | Oct 14th, 2023
                                </p>
                            </div>
                        </div>
                        <Image
                            alt=""
                            loading="lazy"
                            width={180}
                            height={100}
                            decoding="async"
                            data-nimg={1}
                            className=" object-cover rounded-lg max-sm:w-[112px] max-sm:h-[60px] sm:max-md:w-[140px] sm:max-md:h-[70px] md:max-lg:w-[180px] md:max-lg:h-[100px] lg:max-xl:w-[180px] lg:max-xl:h-[100px] xl:w-[180px] xl:h-[100px]"
                            src="/images/market/1695957748520_Carousel3.png"
                            style={{ color: "transparent" }}
                        />
                    </div>
                </a>
            </div>
        </div>

    )
}

export default page