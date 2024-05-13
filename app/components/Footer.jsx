import Image from 'next/image';
import logo from '../../public/inline-logo.png';

const Footer = () => {
  return (
    <footer className="bg-ccBlue2">
        <div className="container flex flex-col items-center gap-4 md:justify-between md:flex-row md:gap-0">
            <Image
                src={logo}
                alt="West Side Kennel Club logo"
                width={200}
                height={50}
                className="w-64 h-auto object-contain"
            />
            <div className="flex flex-col items-center gap-2 text-white text-md font-semibold md:flex-row md:gap-10">
                <p>(812) 224-4567</p>
                <a href="mailto:info@wskc.co" className="button blue-button-2">info@wskc.co</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer