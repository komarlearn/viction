import React from 'react'

const page = () => {
    return (
        <div>
            <section className="flex justify-center max-md:px-4">
                <div className="md:w-[1100px] h-full flex justify-between items-center py-[25px]">
                    <div className="w-full bg-gradient-to-tr from-[#37e773] to-purple-500 flex flex-col justify-center items-center pt-[20px] pb-[25px] rounded-3xl max-md:px-4">
                        <h1 className="uppercase text-white font-Montserrat text-[60px] font-extrabold max-sm:text-center">
                            vplus Webinar
                        </h1>
                        <p className="uppercase text-white font-Open_Sans text-[16px] font-extrabold max-sm:text-center">
                            Pelajari Tentang Trading
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex justify-center">
                <div className="w-[1100px] h-full flex justify-center items-start gap-10">
                    <p className="font-bold text-[34px] text-slate-600">Coming soon...</p>
                </div>
            </section>

        </div>
    )
}

export default page