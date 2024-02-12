import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:
        [
            "/",
            "/kontak-vplus",
            "/profil-vplus",
            "/tanya-jawab-vplus",
            "/mahir",
            "/pemula",
            "/webinar",
            "/analisa",
            "/berita",
            "/kalender-ekonomi",
            "/mulai-trading",
            "/platform-trading",
            "/produk-trading",
            "/vcareer",
            "/akun-demo",


        ],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};