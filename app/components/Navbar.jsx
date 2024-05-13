import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import stackedLogo from '../../public/stacked-logo.png';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-6 px-10 max-w-6xl mx-auto md:py-4">
        <Link
          href="/"
        >
          <Image
              src={stackedLogo}
              alt="West Side Kennel Club logo"
              width={100}
              height={50}
              className="w-32 h-auto"
          />
        </Link>
        <p className="bg-ccBlue1 py-2 px-4 text-ccBlue3 text-md font-bold rounded">(812) 224-4567</p>
    </header>
  )
}

export default Navbar