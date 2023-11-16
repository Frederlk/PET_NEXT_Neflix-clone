'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Search } from 'lucide-react';

import Logo from '@/public/netflix_logo.svg';
import UserNav from './UserNav';

interface ILink {
  name: string;
  href: string;
}

export interface IUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

const links: ILink[] = [
  { name: 'Home', href: '/home' },
  { name: 'Tv Shows', href: '/home/shows' },
  { name: 'Movies', href: '/home/movies' },
  { name: 'Recently Added', href: '/home/recently' },
  { name: 'My List', href: '/home/user/list' },
];

export default function Navbar({ user }: { user?: IUser }) {
  const pathName = usePathname();

  const linkItems = links.map((link, idx) => (
    <li key={idx}>
      <Link
        href={link.href}
        className={
          pathName === link.href
            ? 'text-white font-semibold underline text-sm'
            : 'text-gray-300 font-normal text-sm'
        }
      >
        {link.name}
      </Link>
    </li>
  ));

  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Netflix logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">{linkItems}</ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
        <UserNav user={user} />
      </div>
    </div>
  );
}
