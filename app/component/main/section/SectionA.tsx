import React from 'react'
import Image from 'next/image'

const SectionA = () => {
    return (
        <section className="flex justify-center">
            <div className="z-10 absolute bg-[#37e773] w-full max-sm:h-[200px] sm:h-[600px]" />
            <div className="z-20 mx-auto mt-5 xl:w-[1140px]">
                <div>
                    <div className="flex justify-center gap-10 mb-5">
                        <button className="p-2 bg-black rounded-full opacity-50 hover:opacity-100">
                            <Image
                                alt=""
                                loading="lazy"
                                width={24}
                                height={24}
                                decoding="async"
                                data-nImage={1}
                                style={{ color: "transparent" }}
                                src="/images/home/sectionA/chevron-left.70aa1909.svg"
                            />
                        </button>
                        <button className="p-2 bg-black rounded-full opacity-50 hover:opacity-100">
                            <Image
                                alt=""
                                loading="lazy"
                                width={24}
                                height={24}
                                decoding="async"
                                data-nImage={1}
                                style={{ color: "transparent" }}
                                src="/images/home/sectionA/chevron-right.4b9ead53.svg"
                            />
                        </button>
                    </div>
                    <div className="relative flex">
                        <div className="relative flex flex-col overflow-hidden">
                            <div
                                className="flex transition-transform relative duration-500 left-0 max-sm:w-full max-sm:h-full sm:max-md:w-[640px] sm:max-md:h-[640px] md:max-lg:w-[737px] md:max-lg:h-[737px] lg:w-[837px] lg:h-[837px] "
                                style={{ transform: "translateX(-200%)" }}
                            >
                                <Image
                                    alt=""
                                    loading="lazy"
                                    width={1080}
                                    height={1080}
                                    decoding="async"
                                    data-nImage={1}
                                    className="max-sm:rounded-[20px] sm:max-md:rounded-[50px] md:max-lg:rounded-[50px] lg:max-xl:rounded-[50px] xl:rounded-[50px] max-sm:min-w-full max-sm:h-full sm:max-md:min-w-[640px] sm:max-md:h-[640px] md:max-lg:min-w-[737px] md:max-lg:h-[737px] lg:min-w-[837px] lg:h-[837px]"
                                    style={{ color: "transparent" }}
                                    src="/images/home/sectionA/Carousel1.png"
                                />
                                <Image
                                    alt=""
                                    loading="lazy"
                                    width={1080}
                                    height={1080}
                                    decoding="async"
                                    data-nImage={1}
                                    className="max-sm:rounded-[20px] sm:max-md:rounded-[50px] md:max-lg:rounded-[50px] lg:max-xl:rounded-[50px] xl:rounded-[50px] max-sm:min-w-full max-sm:h-full sm:max-md:min-w-[640px] sm:max-md:h-[640px] md:max-lg:min-w-[737px] md:max-lg:h-[737px] lg:min-w-[837px] lg:h-[837px]"
                                    style={{ color: "transparent" }}
                                    src="/images/home/sectionA/Carousel2.png"
                                />
                                <Image
                                    alt=""
                                    loading="lazy"
                                    width={1080}
                                    height={1080}
                                    decoding="async"
                                    data-nImage={1}
                                    className="max-sm:rounded-[20px] sm:max-md:rounded-[50px] md:max-lg:rounded-[50px] lg:max-xl:rounded-[50px] xl:rounded-[50px] max-sm:min-w-full max-sm:h-full sm:max-md:min-w-[640px] sm:max-md:h-[640px] md:max-lg:min-w-[737px] md:max-lg:h-[737px] lg:min-w-[837px] lg:h-[837px]"
                                    style={{ color: "transparent" }}
                                    src="/images/home/sectionA/Carousel3.png"
                                />
                            </div>
                        </div>
                        <div className="absolute right-0 flex flex-col overflow-hidden max-sm:top-40 sm:max-xl:top-64 xl:top-40 ">
                            <div
                                className="flex transition-transform duration-[800ms] max-sm:w-[250px] sm:max-md:w-[300px] md:w-[530px]"
                                style={{ transform: "translateX(-200%)" }}
                            >
                                <div className="bg-white rounded-3xl max-sm:opacity-80 max-md:p-[15px] md:max-xl:p-[20px] xl:p-[30px] drop-shadow-md h-fit max-sm:min-w-[250px] sm:max-md:min-w-[300px] md:min-w-[530px]">
                                    <p className="text-[#37e773] font-Montserrat font-bold max-md:text-[30px] md:max-xl:text-[50px] xl:text-[50px] max-md:leading-8 md:leading-none xl:mt-[13px]">
                                        Reward Logam Mulia
                                    </p>
                                    <p className="font-Open_Sans xl:mt-[27px] max-md:mt-[10px] md:mt-[15px] max-sm:text-[10px] sm:max-md:text-[14px] md:text-[18px]">
                                        Dapatkan Reward Logam Mulia seberat 5 Gram dengan bergabung
                                        menjadi nasabah Vplus dan bertransaksi sebanyak-banyaknya.
                                    </p>
                                </div>
                                <div className="bg-white rounded-3xl max-sm:opacity-80 max-md:p-[15px] md:max-xl:p-[20px] xl:p-[30px] drop-shadow-md h-fit max-sm:min-w-[250px] sm:max-md:min-w-[300px] md:min-w-[530px]">
                                    <p className="text-[#37e773] font-Montserrat font-bold max-md:text-[30px] md:max-xl:text-[50px] xl:text-[50px] max-md:leading-8 md:leading-none xl:mt-[13px]">
                                        Autochartist
                                    </p>
                                    <p className="font-Open_Sans xl:mt-[27px] max-md:mt-[10px] md:mt-[15px] max-sm:text-[10px] sm:max-md:text-[14px] md:text-[18px]">
                                        Salah satu paket yang dimiliki oleh autochartist dirancang untuk
                                        memenuhi kebutuhan trader modern, untuk itu dengan kalian
                                        bergabung sebagai nasabah di VPlus dan melakukan transaksi
                                        minimal $2000 kalian akan mendapatkan gratis autochartist.
                                    </p>
                                </div>
                                <div className="bg-white rounded-3xl max-sm:opacity-80 max-md:p-[15px] md:max-xl:p-[20px] xl:p-[30px] drop-shadow-md h-fit max-sm:min-w-[250px] sm:max-md:min-w-[300px] md:min-w-[530px]">
                                    <p className="text-[#37e773] font-Montserrat font-bold max-md:text-[30px] md:max-xl:text-[50px] xl:text-[50px] max-md:leading-8 md:leading-none xl:mt-[13px]">
                                        MetaTrader5
                                    </p>
                                    <p className="font-Open_Sans xl:mt-[27px] max-md:mt-[10px] md:mt-[15px] max-sm:text-[10px] sm:max-md:text-[14px] md:text-[18px]">
                                        Platform unggulan Trader Profesional untuk bertransaksi di
                                        perdagangan berjangka dengan harga yang sesuai di Pasar Global.
                                        Menyediakan beragam produk keuangan, Komoditas, Mata Uang Asing,
                                        Index Saham dan Futures. Memiliki fitur-fitur unggulan demi
                                        meningkatkan pengalaman transaksi para trader dalam perdagangan
                                        berjangka.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-wrap items-start justify-center mt-10">
                    <div className="px-[20px] py-[35px] w-[276px] flex flex-col justify-start ">
                        <div className="mx-auto w-[145px] h-[145px] relative">
                            <div className="bg-[#37e773] absolute w-[118px] h-[118px] rounded-full mr-[-1px] ml-[28px] z-10" />
                            <Image
                                alt=""
                                loading="lazy"
                                width={128}
                                height={128}
                                decoding="async"
                                data-nImage={1}
                                className="w-[96px] z-20 absolute bottom-0"
                                style={{ color: "transparent" }}
                                src="/images/home/sectionA/115968-9536d100.png"
                            />
                        </div>
                        <h4 className="text-[20px] font-Montserrat mt-[30px] text-[#37e773] font-semibold uppercase text-center">
                            Rekomendasi Broker Berlisensi
                        </h4>
                        <p className="text-[14px] mt-[12px] font-Open_Sans text-[#808080] text-center">
                            Vplus membantu para trader menemukan broker yang legal dan berlisensi.
                            <br />
                        </p>
                    </div>
                    <div className="px-[20px] py-[35px] w-[276px] flex flex-col justify-start">
                        <div className="mx-auto w-[145px] h-[145px] relative">
                            <div className="bg-[#37e773] absolute w-[118px] h-[118px] rounded-full mr-[-1px] ml-[28px] z-10" />
                            <Image
                                alt=""
                                loading="lazy"
                                width={128}
                                height={128}
                                decoding="async"
                                data-nImage={1}
                                className="w-[96px] z-20 absolute bottom-0"
                                style={{ color: "transparent" }}
                                src="/images/home/sectionA/3720937-25304779.png"
                            />
                        </div>
                        <h4 className="text-[20px] font-Montserrat mt-[30px] text-[#37e773] font-semibold uppercase text-center">
                            Analisa Market
                        </h4>
                        <p className="text-[14px] mt-[12px] font-Open_Sans text-[#808080] text-center">
                            Vplus memberikan saran profesional kepada trader untuk bertransaksi di
                            pialang yang sudah teregulasi oleh pemerintah.
                            <br />
                        </p>
                    </div>
                    <div className="px-[20px] py-[35px] w-[276px] flex flex-col justify-start">
                        <div className="mx-auto w-[145px] h-[145px] relative">
                            <div className="bg-[#37e773] absolute w-[118px] h-[118px] rounded-full mr-[-1px] ml-[28px] z-10" />
                            <Image
                                alt=""
                                loading="lazy"
                                width={128}
                                height={128}
                                decoding="async"
                                data-nImage={1}
                                className="w-[96px] z-20 absolute bottom-0"
                                style={{ color: "transparent" }}
                                src="/images/home/sectionA/2282272-6bebec51.png"
                            />
                        </div>
                        <h4 className="text-[20px] font-Montserrat mt-[30px] text-[#37e773] font-semibold uppercase text-center">
                            Kalender Ekonomi
                        </h4>
                        <p className="text-[14px] mt-[12px] font-Open_Sans text-[#808080] text-center">
                            Memuat jadwal berbagai peristiwa ekonomi yang berdampak pada pasar
                            keuangan seperti rilis data ekonomi, kebijakan moneter, dan acara
                            penting lainnya.
                            <br />
                        </p>
                    </div>
                    <div className="px-[20px] py-[35px] w-[276px] flex flex-col justify-start">
                        <div className="mx-auto w-[145px] h-[145px] relative">
                            <div className="bg-[#37e773] absolute w-[118px] h-[118px] rounded-full mr-[-1px] ml-[28px] z-10" />
                            <Image
                                alt=""
                                loading="lazy"
                                width={128}
                                height={128}
                                decoding="async"
                                data-nImage={1}
                                className="w-[96px] z-20 absolute bottom-0"
                                style={{ color: "transparent" }}
                                src="/images/home/sectionA/171561-65ca5712.png"
                            />
                        </div>
                        <h4 className="text-[20px] font-Montserrat mt-[30px] text-[#37e773] font-semibold uppercase text-center">
                            Edukasi
                        </h4>
                        <p className="text-[14px] mt-[12px] font-Open_Sans text-[#808080] text-center">
                            Tersedia Edukasi Trading dari Tenaga Profesional Vplus yang sudah
                            sangat berpengalaman
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SectionA