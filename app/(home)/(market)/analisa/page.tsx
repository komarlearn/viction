import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <section>
            <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center w-[1100px] h-[200px] my-[25px] relative">
                    <Image
                        alt=""
                        loading="lazy"
                        width={1280}
                        height={766}
                        decoding="async"
                        data-nimg={1}
                        className="absolute z-10 object-cover object-bottom w-full h-full rounded-3xl brightness-50"
                        src="/images/market/bganalisis.jpeg"
                        style={{ color: "transparent" }}
                    />
                    <div className="relative z-20 flex flex-col items-center justify-center h-full">
                        <h1 className="text-[60px] font-Montserrat font-bold text-white text-center">
                            Analisa
                        </h1>
                        <p className="text-white text-[20px] font-Open_Sans text-center">
                            Cari tau analisa setiap harinya untuk mendukung transaksi kamu.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-[25px]">
                <div className="w-[1100px] h-full flex justify-center items-start gap-10">
                    <iframe
                        className={"rounded-3xl allowfullscreem: string frameborder: 0"}
                        height={"510"}
                        width={"100%"}
                        src="https://www.youtube.com/embed/videoseries?list=PLHd1WNbnOMzH9gaxisDjFrP8OeU2z-Mn6">
                    </iframe>
                </div>
            </div>
        </section>
    )
}

export default page