"use client";
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import Image from "next/image";
export default function Header() {
    return (
        <header className="bg-white">
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




                                <li><Link href="/vcareer" color="foreground"> VCareer</Link></li>





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
                                    href="/akun-real"
                                >
                                    Akun Real
                                </a>
                            </div>
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
    );
}
