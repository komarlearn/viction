import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <div className="flex justify-center max-md:px-4">
                <div className="md:w-[1100px] h-full flex justify-between items-center py-[25px]">
                    <div className="w-full bg-gradient-to-tr from-[#37e773] to-purple-500 flex flex-col justify-center items-center pt-[20px] pb-[25px] rounded-3xl max-md:px-4">
                        <h1 className="uppercase text-white font-Montserrat text-[60px] font-extrabold max-sm:text-center">
                            vplus career
                        </h1>
                        <p className="uppercase text-white font-Open_Sans text-[16px] font-extrabold max-sm:text-center">
                            Gabung Dengan Kami!
                        </p>
                        <p className="uppercase text-white font-Open_Sans text-[16px] font-extrabold max-sm:text-center">
                            Berkarir dengan broker yang aman dan terpercaya
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-[1100px] h-full flex flex-col justify-between items-center py-[25px]">
                    <div className="bg-[#f1c50e] py-[25px] px-[45px] rounded-full h-min min-[848px]:hidden">
                        <p className="uppercase font-extrabold font-Montserrat text-[40px] text-white">
                            benefits
                        </p>
                    </div>
                    <div className="flex items-center justify-between w-full max-sm:flex-col">
                        <div className="w-[230px] h-[300px] relative flex justify-center p-[15px]">
                            <div className="bg-[#37e773] absolute z-10 bottom-0 h-[200px] w-full rounded-2xl drop-shadow-2xl flex items-center flex-col" />
                            <div className="relative top-0 z-20 flex flex-col items-center ">
                                <div className="bg-slate-800 w-[150px] h-[150px] rounded-full flex items-center justify-center">
                                    <Image
                                        alt=""
                                        loading="lazy"
                                        width={783}
                                        height={544}
                                        decoding="async"
                                        data-nimg={1}
                                        className="w-[96px]"
                                        style={{ color: "transparent" }}
                                        src="/images/vcareer/Logo1.png"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-Montserrat text-white font-bold mt-[20px] text-center uppercase">
                                        allowance &amp; bonus
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#37e773] py-[25px] px-[45px] rounded-full h-min max-[848px]:hidden">
                            <p className="uppercase font-extrabold font-Montserrat text-[50px] text-white">
                                benefits
                            </p>
                        </div>
                        <div className="w-[230px] h-[300px] relative flex justify-center p-[15px]">
                            <div className="bg-[#37e773] absolute z-10 bottom-0 h-[200px] w-full rounded-2xl drop-shadow-2xl flex items-center flex-col" />
                            <div className="relative top-0 z-20 flex flex-col items-center ">
                                <div className="bg-slate-800 w-[150px] h-[150px] rounded-full flex items-center justify-center">
                                    <Image
                                        alt=""
                                        loading="lazy"
                                        width={855}
                                        height={1018}
                                        decoding="async"
                                        data-nimg={1}
                                        className="w-[75px]"
                                        style={{ color: "transparent" }}
                                        src="/images/vcareer/Logo4.png"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-Montserrat text-white font-bold mt-[20px] text-center uppercase">
                                        unlimited insentif
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center sm:gap-[100px] w-full items-center max-sm:flex-col">
                        <div className="w-[230px] h-[300px] relative flex justify-center p-[15px]">
                            <div className="bg-[#37e773] absolute z-10 bottom-0 h-[200px] w-full rounded-2xl drop-shadow-2xl flex items-center flex-col" />
                            <div className="relative top-0 z-20 flex flex-col items-center ">
                                <div className="bg-slate-800 w-[150px] h-[150px] rounded-full flex items-center justify-center">
                                    <Image
                                        alt=""
                                        loading="lazy"
                                        width={1037}
                                        height={880}
                                        decoding="async"
                                        data-nimg={1}
                                        className="w-[85px]"
                                        style={{ color: "transparent" }}
                                        src="/images/vcareer/Logo3.png"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-Montserrat text-white font-bold mt-[20px] text-center uppercase">
                                        performace bonus
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-[230px] h-[300px] relative flex justify-center p-[15px]">
                            <div className="bg-[#37e773] absolute z-10 bottom-0 h-[200px] w-full rounded-2xl drop-shadow-2xl flex items-center flex-col" />
                            <div className="relative top-0 z-20 flex flex-col items-center ">
                                <div className="bg-slate-800 w-[150px] h-[150px] rounded-full flex items-center justify-center">
                                    <Image
                                        alt=""
                                        loading="lazy"
                                        width={1068}
                                        height={648}
                                        decoding="async"
                                        data-nimg={1}
                                        className="w-[100px]"
                                        style={{ color: "transparent" }}
                                        src="/images/vcareer/Logo2.png"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-Montserrat text-white font-bold mt-[20px] text-center uppercase">
                                        internal workshop
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:mt-[60px] flex justify-center">
                <div className="flex justify-center items-center flex-col bg-[#37e773] max-md:px-4 max-sm:py-6 w-full sm:py-[25px]">
                    <div>
                        <h1 className="font-Montserrat font-bold text-center sm:text-[40px] max-sm:text-[27px]">
                            Temukan Peluang Anda bersama Vplus
                        </h1>
                        <p className="font-Montserrat max-md:mt-4">
                            Temukan lowongan di Platform berikut :
                        </p>
                        <div className="mt-[10px] flex justify-between max-md:mt-4 max-sm:flex-col gap-4">
                            <div className="justify-between gap-4 flex flex-col ">
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/company/vplus-platinum-8-indonesia/"
                                >
                                    <div className="flex items-center gap-3 duration-300 w-max hover:scale-110 group">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            role="img"
                                            viewBox="0 0 24 24"
                                            className="w-[30px] h-[30px] text-slate-700 group-hover:text-slate-100"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title />
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        <p className="font-semibold underline text-slate-700 group-hover:text-slate-100">
                                            VPlus Platinum 8 Indonesia
                                        </p>
                                    </div>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/company/victory-international-platinum-8/"
                                >
                                    <div className="flex items-center gap-3 duration-300 w-max hover:scale-110 group">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            role="img"
                                            viewBox="0 0 24 24"
                                            className="w-[30px] h-[30px] text-slate-700 group-hover:text-slate-100"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title />
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        <p className="font-semibold underline text-slate-700 group-hover:text-slate-100">
                                            Vplus.id
                                        </p>
                                    </div>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://id.indeed.com/cmp/Pt.-Victory-International-Platinum-8/jobs"
                                >
                                    <div className="flex items-center gap-3 duration-300 w-max hover:scale-110 group">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            role="img"
                                            viewBox="0 0 24 24"
                                            className="w-[30px] h-[30px] text-slate-700 group-hover:text-slate-100"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title />
                                            <path d="M11.566 21.5633v-8.762c.2553.0231.5009.0346.758.0346 1.2225 0 2.3739-.3206 3.3506-.8928v9.6182c0 .8219-.1957 1.4287-.5757 1.8338-.378.4033-.8808.6049-1.491.6049-.6007 0-1.0766-.2016-1.468-.6183-.3781-.4032-.5739-1.01-.5739-1.8184zM11.589.5659c2.5447-.8929 5.4424-.8449 7.6186.987.405.3687.8673.8334 1.0515 1.3806.2207.6913-.7695-.073-.9057-.167-.71-.4532-1.4182-.8334-2.2127-1.0946C12.8614.3873 8.8122 2.709 6.2945 6.315c-1.0516 1.5939-1.7367 3.2721-2.299 5.1174-.0614.2017-.1094.4647-.2207.6413-.1113.2036-.048-.5453-.048-.5702.0845-.7623.2438-1.4997.4414-2.237C5.3292 5.3375 7.897 2.0655 11.5891.5658zm4.9281 7.0587c0 1.6686-1.353 3.0224-3.0205 3.0224-1.6677 0-3.0186-1.3538-3.0186-3.0224 0-1.6687 1.351-3.0224 3.0186-3.0224 1.6676 0 3.0205 1.3518 3.0205 3.0224Z" />
                                        </svg>
                                        <p className="font-semibold underline text-slate-700 group-hover:text-slate-100">
                                            PT. Victory International Platinum 8
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div className="flex justify-center items-center flex-col gap-2">
                                <p className="font-Open_Sans font-semibold">Click or Scan Me!</p>
                                <a target="_blank" href="http://bit.ly/CVOnlineVplus">
                                    <Image
                                        alt=""
                                        loading="lazy"
                                        width={1600}
                                        height={1600}
                                        decoding="async"
                                        data-nimg={1}
                                        className="w-[120px] hover:scale-110 duration-300"
                                        style={{ color: "transparent" }}
                                        src="/images/vcareer/qrReqruitment.jpeg"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default page