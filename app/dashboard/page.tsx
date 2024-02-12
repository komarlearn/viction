"use client";
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
export default function dashboard() {
    return (
        <>
            <header className="bg-slate-950">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12">
                            <a className="block text-green-400" href="/">
                                <span className="sr-only">Home</span>

                                <Image
                                    src="/images/logoheader.png"
                                    alt="logo"
                                    width={80}
                                    height={80}
                                />

                            </a>
                            <Image
                                src="/images/logoheader-text.png"
                                alt="logo"
                                width={130}
                                height={130} />
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-sm">
                                    <Dropdown>
                                        <DropdownTrigger>
                                            <Button
                                                className="text-white"
                                                variant="light"
                                            >
                                                Trading
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu>
                                            <DropdownItem><Link href="/mulai-trading" color="foreground">Mulai Trading</Link></DropdownItem>
                                            <DropdownItem><Link href="/produk-trading" color="foreground">Produk Trading</Link></DropdownItem>
                                            <DropdownItem><Link href="/platform-trading" color="foreground">Platform Trading</Link></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>

                                    <Dropdown>
                                        <DropdownTrigger>
                                            <Button
                                                className="text-white"
                                                variant="light"
                                            >
                                                Market
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu>
                                            <DropdownItem><Link href="/analisa" color="foreground">Analisa</Link></DropdownItem>
                                            <DropdownItem><Link href="/berita" color="foreground">Berita</Link></DropdownItem>
                                            <DropdownItem><Link href="/kalender-ekonomi" color="foreground">Kalender Ekonomi</Link></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>

                                    <Dropdown>
                                        <DropdownTrigger>
                                            <Button
                                                className="text-white"
                                                variant="light"
                                            >
                                                Edukasi
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu>
                                            <DropdownItem><Link href="/mahir" color="foreground">Mahir</Link></DropdownItem>
                                            <DropdownItem><Link href="/pemula" color="foreground">Pemula</Link></DropdownItem>
                                            <DropdownItem><Link href="/webinar" color="foreground">Webinar</Link></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>

                                    <Dropdown>
                                        <DropdownTrigger>
                                            <Button
                                                className="text-white"
                                                variant="light"
                                            >
                                                Company
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu>
                                            <DropdownItem><Link href="/profil-vplus" color="foreground">Profil Vplus</Link></DropdownItem>
                                            <DropdownItem><Link href="/kontak-vplus" color="foreground">Kontak Vplus</Link></DropdownItem>
                                            <DropdownItem><Link href="/tanya-jawab-vplus" color="foreground">Tanya Jawab Vplus</Link></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    <li ><Link href="/vcareer" color="foreground" className="text-white"> VCareer</Link></li>

                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-green-400 px-5 py-2.5 text-sm font-medium text-white-400"
                                    href="/akun-demo"
                                >
                                    Akun Demo
                                </a>

                                <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-green-400 px-5 py-2.5 text-sm font-medium text-white-400 shadow"
                                        href="/sign-up"
                                    >
                                        Akun Real
                                    </a>
                                </div>
                                <UserButton />
                            </div>

                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Understand User Flow.
                            <strong className="font-extrabold text-red-700 sm:block">
                                {" "}
                                Increase Conversion.{" "}
                            </strong>
                        </h1>
                        <p className="mt-4 sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                                href="https://vifx.co.id/"
                            >
                                Get Started
                            </a>
                            <a
                                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                                href="https://vifx.co.id/"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
