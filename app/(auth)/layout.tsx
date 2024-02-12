import Header from "../component/Header/Header"
import Footer from "../component/Footer/Footer"
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
            <section className="bg-[#37e773] h-full">
                <div className="xl:w-[1140px] flex justify-center mx-auto max-md:flex-col">
                    <div className="xl:w-[570px] md:w-1/2 xl:h-[400px] md:p-[30px] max-md:px-[30px] max-md:pt-[30px]">
                        <h1 className="xl:text-[60px] max-xl:text-[35px] font-Montserrat text-black font-bold">
                            Lisensi Broker
                        </h1>
                        <h3 className="text-[16px] font-Open_Sans text-black italic font-bold">
                            Bappebti : 558/Bappebti/SI/XII/2004
                        </h3>
                        <h3 className="text-[16px] font-Open_Sans text-black italic font-bold">
                            ICDX : 041/SPKB/ICDX/Dir/IX/2010
                        </h3>
                        <h3 className="text-[16px] font-Open_Sans text-black italic font-bold">
                            ICH : 044/SPKK/ISI-VIF/VI/2012
                        </h3>
                        <div className="mt-[10px]">
                            <h2 className="text-[24px] font-Open_Sans text-black font-bold">
                                Hubungi Kami
                            </h2>
                            <p className="italic text-[15px] max-xl:text-[12px] font-Open_Sans text-black xl:leading-8">
                                Menara Rajawali Lantai 18, Jl. DR. Ide Anak Agung Gde Agung No.5,
                                RT.5/RW.2, Kuningan, Kuningan Tim., Kecamatan Setiabudi, Kota Jakarta
                                Selatan, Daerah Khusus Ibukota Jakarta 12950
                            </p>
                        </div>
                    </div>
                    <div className="xl:w-[570px] md:w-1/2 xl:h-[400px] p-[30px]">
                        <h1 className="xl:text-[60px] max-xl:text-[35px] font-Montserrat text-black font-bold">
                            Disclaimer
                        </h1>
                        <h3 className="text-[16px] font-Open_Sans text-black italic font-bold">
                            Pemberitahuan Resiko
                        </h3>
                        <p className="xl:text-[16px] max-xl:text-[12px] font-Open_Sans leading-loose mt-[10px]">
                            Produk dengan leverage memiliki tingkat risiko yang tinggi terhadap
                            modal yang anda investasikan dan disarankan hanya menggunakan dana yang
                            mampu anda tanggung apabila terjadi kerugian. Harap diketahui bahwa
                            produk dengan leverage belum tentu cocok untuk semua orang, jadi
                            pastikan anda telah memahami sepenuhnya semua risiko yang terlibat.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}