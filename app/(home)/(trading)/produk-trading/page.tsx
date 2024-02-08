import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <section className="">
            <div className='relative h-[300px]'>
                <Image
                    alt=""
                    loading="lazy"
                    width={1200}
                    height={800}
                    decoding="async"
                    data-nimg={1}
                    className="h-full w-full object-cover absolute z-10 brightness-[0.4]"
                    src="/images/trading/TradingdiVplus.jpeg"
                    style={{ color: "transparent" }}
                />
                <div className="relative z-20 flex flex-col items-center justify-center h-full max-sm:px-[20px]">
                    <h1 className="max-lg:text-[30px] lg:text-[60px] font-Montserrat font-bold text-white text-center">
                        Mengapa Trading dengan Broker <br />
                        Rekomendasi Vplus?
                    </h1>
                    <p className="text-white text-[20px] font-Open_Sans mt-[25px] text-center">
                        Trading 24/5 di pasar terbesar di dunia, Fix Spread dan Komisi Rendah.
                    </p>
                </div>
            </div>
            <div className='flex m-5 justify-center'>
                <div className="w-[1100px] sm:p-[25px] overflow-x-auto">
                    <div className="flex gap-1 font-Montserrat max-sm:mt-[25px] max-sm:grid max-sm:grid-cols-2 sticky left-0">
                        <button className="bg-[#37e773] text-white py-[10px] px-[25px] font-bold max-sm:rounded-tl-lg sm:rounded-l-lg grow hover:bg-[#3a336f] hover:text-white">
                            Forex
                        </button>
                        <button className="bg-[#f1c50e] py-[10px] px-[25px] font-bold grow hover:bg-[#3a336f] hover:text-white max-sm:rounded-tr-lg">
                            Metal
                        </button>
                        <button className="bg-[#f1c50e] py-[10px] px-[25px] font-bold grow hover:bg-[#3a336f] hover:text-white max-sm:rounded-bl-lg">
                            Energy
                        </button>
                        <button className="bg-[#f1c50e] py-[10px] px-[25px] font-bold max-sm:rounded-br-lg sm:rounded-r-lg grow hover:bg-[#3a336f] hover:text-white ">
                            Index
                        </button>
                    </div>
                    <div className="block sm:rounded-lg shadow-md mt-5">
                        <table className="min-w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase font-Open_Sans ">
                                <tr>
                                    <th
                                        scope="col"
                                        className="sticky left-0 z-10 px-6 py-3 rounded-tl-lg bg-slate-300"
                                    >
                                        Instrumental
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Contract Size
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Commision
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Margin
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Pip / Spread
                                    </th>
                                    <th scope="col" className="px-6 py-3 rounded-tr-lg bg-slate-300">
                                        Sesi Trading
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white "
                                    >
                                        EURUSD
                                    </th>
                                    <td className="px-6 py-4">100000 EUR</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00030</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-gray-100 border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-gray-100 "
                                    >
                                        USDJPY
                                    </th>
                                    <td className="px-6 py-4">100000 USD</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.001/0.030</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white "
                                    >
                                        GBPUSD
                                    </th>
                                    <td className="px-6 py-4">100000 GBP</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00030</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-gray-100 border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-gray-100 "
                                    >
                                        USDCHF
                                    </th>
                                    <td className="px-6 py-4">100000 USD</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00030</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white "
                                    >
                                        NZDUSD
                                    </th>
                                    <td className="px-6 py-4">100000 NZD</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00030</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-gray-100 border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-gray-100 "
                                    >
                                        USDCAD
                                    </th>
                                    <td className="px-6 py-4">100000 USD</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00030</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white "
                                    >
                                        AUDUSD
                                    </th>
                                    <td className="px-6 py-4">100000 AUD</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00030</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-gray-100 border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-gray-100 "
                                    >
                                        EURJPY
                                    </th>
                                    <td className="px-6 py-4">100000 EUR</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.001/0.040</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white "
                                    >
                                        GBPJPY
                                    </th>
                                    <td className="px-6 py-4">100000 GBP</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.001/0.070</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-gray-100 border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-gray-100 "
                                    >
                                        AUDJPY
                                    </th>
                                    <td className="px-6 py-4">100000 AUD</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.001/0.040</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white "
                                    >
                                        CHFJPY
                                    </th>
                                    <td className="px-6 py-4">100000 CHF</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.001/0.040</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-gray-100 border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-gray-100 "
                                    >
                                        EURGBP
                                    </th>
                                    <td className="px-6 py-4">100000 EUR</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00040</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white "
                                    >
                                        AUDNZD
                                    </th>
                                    <td className="px-6 py-4">100000 AUD</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00100</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-gray-100 border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-gray-100 "
                                    >
                                        EURAUD
                                    </th>
                                    <td className="px-6 py-4">100000 EUR</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00080</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white "
                                    >
                                        EURCAD
                                    </th>
                                    <td className="px-6 py-4">100000 EUR</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00080</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-gray-100 border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-gray-100 "
                                    >
                                        EURCHF
                                    </th>
                                    <td className="px-6 py-4">100000 EUR</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00080</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white "
                                    >
                                        GBPAUD
                                    </th>
                                    <td className="px-6 py-4">100000 GBP</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00080</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-gray-100 border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-gray-100 "
                                    >
                                        GBPCHF
                                    </th>
                                    <td className="px-6 py-4">100000 GBP</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00070</td>
                                    <td className="px-6 py-4 ">05:00 - 04:00</td>
                                </tr>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white rounded-bl-lg"
                                    >
                                        NZDJPY
                                    </th>
                                    <td className="px-6 py-4">100000 NZD</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4"> 0.001/0.100</td>
                                    <td className="px-6 py-4 rounded-br-lg">05:00 - 04:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="hidden sm:rounded-lg shadow-md mt-5">
                        <table className="min-w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase font-Open_Sans ">
                                <tr>
                                    <th
                                        scope="col"
                                        className="sticky left-0 z-10 px-6 py-3 rounded-tl-lg bg-slate-300"
                                    >
                                        Instrumental
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Contract Size
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Commision
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Margin
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Pip / Spread
                                    </th>
                                    <th scope="col" className="px-6 py-3 rounded-tr-lg bg-slate-300">
                                        Sesi Trading
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white "
                                    >
                                        XAUUSD
                                    </th>
                                    <td className="px-6 py-4">100 Troy Ounce</td>
                                    <td className="px-6 py-4">$5</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.01</td>
                                    <td className="px-6 py-4 ">06:00 - 04:00</td>
                                </tr>
                                <tr className="bg-gray-100 border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-gray-100 rounded-bl-lg"
                                    >
                                        XAGUSD
                                    </th>
                                    <td className="px-6 py-4">5000 Troy Ounce</td>
                                    <td className="px-6 py-4">$5</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.01</td>
                                    <td className="px-6 py-4 rounded-br-lg">06:00 - 04:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="hidden sm:rounded-lg shadow-md mt-5">
                        <table className="min-w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase font-Open_Sans ">
                                <tr>
                                    <th
                                        scope="col"
                                        className="sticky left-0 z-10 px-6 py-3 rounded-tl-lg bg-slate-300"
                                    >
                                        Instrumental
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Contract Size
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Commision
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Margin
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Pip / Spread
                                    </th>
                                    <th scope="col" className="px-6 py-3 rounded-tr-lg bg-slate-300">
                                        Sesi Trading
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white rounded-bl-lg"
                                    >
                                        OIL
                                    </th>
                                    <td className="px-6 py-4">1000 Barrels</td>
                                    <td className="px-6 py-4">$5</td>
                                    <td className="px-6 py-4">$250</td>
                                    <td className="px-6 py-4">0.01</td>
                                    <td className="px-6 py-4 rounded-br-lg">06:00 - 04:15</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="hidden sm:rounded-lg shadow-md mt-5">
                        <table className="min-w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase font-Open_Sans ">
                                <tr>
                                    <th
                                        scope="col"
                                        className="sticky left-0 z-10 px-6 py-3 rounded-tl-lg bg-slate-300"
                                    >
                                        Instrumental
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Contract Size
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Commision
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Margin
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-slate-300">
                                        Pip / Spread
                                    </th>
                                    <th scope="col" className="px-6 py-3 rounded-tr-lg bg-slate-300">
                                        Sesi Trading
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white "
                                    >
                                        DOW30
                                    </th>
                                    <td className="px-6 py-4">100000 EUR</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00030</td>
                                    <td className="px-6 py-4 ">06:00 - 04:15</td>
                                </tr>
                                <tr className="bg-gray-100 border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-gray-100 "
                                    >
                                        SP500
                                    </th>
                                    <td className="px-6 py-4">100000 USD</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.001/0.030</td>
                                    <td className="px-6 py-4 ">06:00 - 04:15</td>
                                </tr>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white "
                                    >
                                        NASDAQ100
                                    </th>
                                    <td className="px-6 py-4">100000 GBP</td>
                                    <td className="px-6 py-4">$1.1</td>
                                    <td className="px-6 py-4">$100</td>
                                    <td className="px-6 py-4">0.00001/0.00080</td>
                                    <td className="px-6 py-4 ">06:00 - 04:15</td>
                                </tr>
                                <tr className="bg-gray-100 border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-gray-100 "
                                    >
                                        NIKKEI
                                    </th>
                                    <td className="px-6 py-4">5 USD</td>
                                    <td className="px-6 py-4">$5</td>
                                    <td className="px-6 py-4">$160</td>
                                    <td className="px-6 py-4">5</td>
                                    <td className="px-6 py-4 ">06:30 - 13:25/14:15 - 01:00</td>
                                </tr>
                                <tr className="bg-white border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-white "
                                    >
                                        HANGSENG
                                    </th>
                                    <td className="px-6 py-4">5 USD</td>
                                    <td className="px-6 py-4">$5</td>
                                    <td className="px-6 py-4">$160</td>
                                    <td className="px-6 py-4">1</td>
                                    <td className="px-6 py-4 ">08:15 - 11:00/12:00 - 15:30</td>
                                </tr>
                                <tr className="bg-gray-100 border-b 1 font-Montserrat">
                                    <th
                                        scope="row"
                                        className="sticky left-0 z-10 px-6 py-4 font-Open_Sans text-sm font-medium text-gray-900 bg-gray-100 rounded-bl-lg"
                                    >
                                        KOSPI
                                    </th>
                                    <td className="px-6 py-4">5 USD</td>
                                    <td className="px-6 py-4">$5</td>
                                    <td className="px-6 py-4">$160</td>
                                    <td className="px-6 py-4">0.05</td>
                                    <td className="px-6 py-4 rounded-br-lg">07:00 - 13:35</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-[1100px] flex flex-col font-Open_Sans max-lg:p-[25px]">
                    <p className="text-[30px] font-bold mb-3">Mekanisme Transaksi</p>
                    <ul className="list-disc">
                        <li>
                            Untuk setiap transaksi, Nasabah maksimum hanya dapat membeli atau
                            menjual 50 lot / klik.
                        </li>
                        <li>
                            Amanat didasarkan pada harga sedia beli (bid) dan harga sedia jual
                            (offer) yang diberikan secara on-line oleh Penyelenggara SPA dan dapat
                            di monitor oleh Nasabah secara langsung dan/atau melalui Perusahaan.
                        </li>
                        <li>
                            Waktu Eksekusi paling lama 1 (satu) detik sejak order diterima sampai
                            dengan order direspon oleh sistem perdagangan Penyelenggara Sistem
                            Perdagangan Alternatif.
                        </li>
                        <li>Tidak ada requote.</li>
                        <li>
                            Harga yang terjadi sesuai dengan harga pasar dan dalam rentang yang
                            wajar.
                        </li>
                    </ul>
                </div>
            </div>
        </section>


    )
}

export default page