import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <section className="flex justify-center">
            <div className="w-[1100px] h-full flex max-md:flex-col justify-between items-center py-[25px] gap-10 p-5">
                <div className="w-full h-full max-sm:px-4 sm:px-10 py-5 text-white bg-gradient-to-tr from-[#37e773] to-purple-500 rounded-3xl">
                    <h1 className="text-[40px] font-Montserrat font-bold max-sm:text-center">
                        Trading dengan <br />
                        <span className="text-[#f1c50e] font-extrabold">MetaTrader 5</span>
                    </h1>
                    <div className="w-full pt-4">
                        <p className="text-[16px] font-Open_Sans tracking-wide">
                            Aplikasi trading terpopuler dengan lebih dari 38 indikator analisa,
                            instant klik, dan dukungan algoritma trading yang bisa membantu
                            memaksimalkan profit. Aplikasi trading terupdate untuk transaksi di
                            semua instrumen trading. Meta Trader 5 menawarkan fitur-fitur unggulan
                            seperti:
                        </p>
                    </div>
                    <div className="flex w-full gap-3 py-4">
                        <ul className="list-disc font-Open_Sans text-[16px] list-inside">
                            <li>
                                Tampilan paling <span className="italic">user friendly</span>
                            </li>
                            <li>
                                Kemudahan menilai volatilitas pasar dengan fitur Depth of Market
                                (DOM)
                            </li>
                            <li>Buy &amp; Sell hanya dengan satu klik</li>
                            <li>Variasi tampilan timeframe hingga 21 timeframe</li>
                            <li>Membuka 100 chart sekaligus</li>
                            <li>Terdapat kalender ekonomi</li>
                            <li>Tersedia 38 indikator teknikal dan 44 objek analisa</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full h-full">
                    <Image
                        alt=""
                        loading="lazy"
                        width={1099}
                        height={306}
                        decoding="async"
                        data-nimg={1}
                        className="h-full"
                        style={{ color: "transparent" }}
                        src="/images/trading/metatrader5.png"
                    />
                    <Image
                        alt=""
                        loading="lazy"
                        width={1341}
                        height={592}
                        decoding="async"
                        data-nimg={1}
                        className="h-full"
                        style={{ color: "transparent" }}
                        src="/images/trading/device1.png"
                    />
                    <div className="mt-3">
                        <div>
                            <p className="text-[16px] font-Open_Sans font-bold">
                                Unduh untuk PC Desktop/Laptop
                            </p>
                            <div className="flex max-sm:justify-center">
                                <a
                                    target="_blank"
                                    href="https://download.mql5.com/cdn/web/pt.victory.international/mt5/victoryinternational5setup.exe"
                                >
                                    <Image
                                        alt=""
                                        loading="lazy"
                                        width={300}
                                        height={116}
                                        decoding="async"
                                        data-nimg={1}
                                        className="w-[133px] h-full hover:scale-110 duration-300"
                                        style={{ color: "transparent" }}
                                        src="/images/trading/downloadwindowslogo.png"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.pkg.zip?utm_source=vifx.co.id&utm_campaign=vifx.co.id"
                                >
                                    <Image
                                        alt=""
                                        loading="lazy"
                                        width={300}
                                        height={116}
                                        decoding="async"
                                        data-nimg={1}
                                        className="w-[133px] h-full hover:scale-110 duration-300"
                                        style={{ color: "transparent" }}
                                        src="/images/trading/downloadmaclogo.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div>
                            <p className="text-[16px] font-Open_Sans font-bold">
                                Unduh untuk Smartphone
                            </p>
                            <div className="flex max-sm:justify-center">
                                <a
                                    target="_blank"
                                    href="https://download.mql5.com/cdn/mobile/mt5/android?server=VictoryInternational-DEMO,VictoryInternational-REAL&utm_source=vifx.co.id&utm_campaign=vifx.co.id"
                                >
                                    <Image
                                        alt=""
                                        loading="lazy"
                                        width={1200}
                                        height={417}
                                        decoding="async"
                                        data-nimg={1}
                                        className="w-[133px] h-full hover:scale-110 duration-300"
                                        style={{ color: "transparent" }}
                                        src="/images/trading/playstorelogo.png"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://download.mql5.com/cdn/mobile/mt5/ios?server=VictoryInternational-DEMO,VictoryInternational-REAL&utm_source=vifx.co.id&utm_campaign=vifx.co.id"
                                >
                                    <Image
                                        alt=""
                                        loading="lazy"
                                        width={1200}
                                        height={407}
                                        decoding="async"
                                        data-nimg={1}
                                        className="w-[133px] h-full hover:scale-110 duration-300"
                                        style={{ color: "transparent" }}
                                        src="/images/trading/appstorelogo.png"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default page