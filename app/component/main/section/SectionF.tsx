import React from 'react'
import Image from 'next/image'

const SectionF = () => {
    return (
        <section className="relative">
            <Image
                alt=""
                loading="lazy"
                width={1920}
                height={1271}
                decoding="async"
                data-nimg={1}
                className="absolute z-10 object-cover w-full h-full"
                style={{ color: "transparent" }}
                src="/images/home/sectionF/-min.jpeg"
            />
            <div className="max-lg:px-[10px]">
                <div className="xl:w-[1140px] mx-auto py-16 relative z-20">
                    <div className="lg:w-[570px] max-lg:w-full lg:h-[478px] p-[30px] bg-white rounded-3xl flex justify-center flex-col ">
                        <h2 className="lg:text-[60px] max-md:text-[30px] md:max-xl:text-[45px] font-Montserrat text-black font-bold max-sm:leading-10">
                            Make Money With Clicks
                        </h2>
                        <p className="md:text-[24px] max-md:text-[16px] font-Open_Sans mt-[20px]">
                            Hasilkan uang dengan klik melalui HP anda.
                        </p>
                        <a href="/real-akun">
                            <button className="uppercase text-[#1b7bea] bg-[#37e773] mt-[20px] text-[12px] py-[15px] px-[41px] w-[172px] h-[50px] font-bold rounded-xl">
                                Lebih Lanjut
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SectionF