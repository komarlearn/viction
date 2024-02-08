import React from 'react'

const page = () => {
    return (
        <div><section className="bg-[#37e773] h-full pb-10">
            <div className="xl:w-[1140px] mx-auto xl:py-16 max-xl:mx-4 md:max-lg:mx-10 max-md:pt-4 md:pt-10 ">
                <div className="border-4 border-[#f1c50e] flex justify-center rounded-3xl xl:p-[30px] max-md:p-[15px] md:max-xl:p-[15px]">
                    <p className="lg:text-[16px] max-md:text-[12px] font-Open_Sans text-black">
                        Dengan dana virtual, asah skill trading anda dengan simulasi di akun
                        demo dan memastikan kesiapan anda saat membuka Akun Real.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center mt-10">
                    <h1 className="uppercase text-[36px] font-Open_Sans text-black font-bold mb-5">
                        Demo Akun
                    </h1>
                    <div className="bg-white p-[30px] rounded-2xl xl:w-[711px]">
                        <form className="flex flex-col w-full gap-4" id="demoAkunForm">
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
                                    className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic max-xl:placeholder:text-[13px] focus:outline-none border-1 border-slate-300 focus:border-[#f1c50e] focus:ring-[#f1c50e] focus:ring-2"
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
                                        className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic max-xl:placeholder:text-[13px] focus:outline-none border-1 border-slate-300 focus:border-[#f1c50e] focus:ring-[#f1c50e] focus:ring-2"
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
                                        className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic max-xl:placeholder:text-[13px] border-1 border-slate-300 focus:outline-none focus:border-[#f1c50e] focus:ring-[#f1c50e] focus:ring-2"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#37e773] drop-shadow-2xl hover:bg-white rounded-lg hover:text-[#37e773] hover:ring-2 hover:ring-[#f1c50e] py-3 text-black font-Open_Sans font-semibold"
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