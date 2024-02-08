import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center w-[1100px] h-[200px] my-[25px] relative">
                    <Image
                        alt=""
                        loading="lazy"
                        width={1280}
                        height={853}
                        decoding="async"
                        data-nimg={1}
                        className="absolute z-10 object-cover object-center w-full h-full rounded-3xl brightness-50"
                        style={{ color: "transparent" }}
                        src="/images/market/bgkalenderekonomi.jpeg"
                    />
                    <div className="relative z-20 flex flex-col items-center justify-center h-full">
                        <h1 className="max-sm:text-[30px] sm:text-[60px] font-Montserrat font-bold text-white text-center">
                            Kalender Ekonomi
                        </h1>
                        <p className="text-white text-[20px] font-Open_Sans text-center">
                            Kalender Ekonomi untuk mendukung setiap transaksi anda.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-[25px]">
                <div className="w-[1100px] h-[500px] flex justify-between items-center">
                    <div
                        id="economicCalendarWidget"
                        style={{ width: "100%", height: "100%" }}
                    >
                        <iframe
                            scrolling="no"
                            frameBorder={0}
                            width="100%"
                            height="100%"
                            src="https://www.tradays.com/en/economic-calendar/widget?mode=2&utm_source=vplus.id"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page