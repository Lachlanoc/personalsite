'use client'
// src/components/Header.tsx
import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
	const pathname = usePathname();
  const currentPath = pathname ?? '';

	const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="w-screen">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center py-4">
          <h1 className="text-2xl font-bold mb-4">Lachlan O'Connell</h1>
          <nav className="flex flex-row space-x-12 mt-6">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === '/' ? currentPath === '/' : currentPath.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`transition-transform duration-300 hover:scale-110
                cursor-pointer ${
                isActive
                    ? 'font-semibold sm:text-2xl text-3xl'
                    : 'sm:text-2xl text-3xl'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        </div>
    </header>
  );
}