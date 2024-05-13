// Components
import Dogs from './components/Dogs';
import VisitationForm from './components/VisitationForm';
// Images
import Image from "next/image";
import heroImg from '../public/hero.png';
import frenchie from '../public/frenchie.jpg';
import pawPrint from '../public/paw.png'
// Icons
import { TbVaccine } from "react-icons/tb";
import { LuDog } from "react-icons/lu";
import { FiThumbsUp } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";




export default async function Home() {

  return (
    <main className="overflow-x-hidden">
      <section className="container -mb-20 flex flex-col gap-14 -mt-10 md:flex-row md:gap-0 md:items-center md:justify-between">
        <div className="flex flex-col items-center text-center md:text-left md:w-1/2 md:items-start">
          <h1 className="text-5xl text-ccGray3 font-black mb-3 md:text-5xl lg:text-6xl">Find your new best friend</h1>
          <p className="text-ccGray2 mt-2 mb-6 max-w-80">We help promote local pups who need a good home and loving family</p>
          <a href='#dogs' className="button blue-button">Featured Pets</a>
        </div>

        <div className="relative">
          <Image 
            src={heroImg} 
            alt="golden retreiver"
            width={500}
            height={500}
            className="w-[350px] h-auto mx-auto lg:w-[400px] xl:w-[450px]"
            priority={true}
          />
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[30rem] h-96 h-40">
            <div className="relative w-full h-full">
              <Image
                src={pawPrint}
                alt=""
                width={100}
                height={100}
                className="absolute top-0 right-10 w-12 h-12 object-contain rotate-12 hidden xs:block lg:scale-125"
              />
              <Image
                src={pawPrint}
                alt=""
                width={100}
                height={100}
                className="absolute bottom-20 left-4 w-14 h-14 object-contain -rotate-45 hidden xs:block lg:scale-125 lg:-left-5 xl:bottom-0"
              />
              <Image
                src={pawPrint}
                alt=""
                width={100}
                height={100}
                className="absolute bottom-14 right-6 w-16 h-16 object-contain rotate-45 hidden xs:block lg:scale-125 lg:bottom-0 lg:right-0 xl:-bottom-10 xl:-right-5"
              />
            </div>
          </div>
        </div>
      </section>

      <Dogs />

      <section className="container flex flex-col gap-14">
        <div className="text-center">
          <h3 className="text-ccBlue2 text-xl font-bold mb-3">About Our Service</h3>
          <h2 className="text-ccGray3 text-4xl font-black mx-auto">What you can expect from us</h2>
        </div>
        <div className="flex flex-col gap-14 md:flex-row md:gap-8">
          <Image 
            src={frenchie} 
            alt="french bulldog in a yellow hoodie"
            width={500}
            height={500}
            className="w-full h-auto object-cover object-center rounded sm:h-96 md:w-1/2 md:h-auto"
            priority={true}
          />
          <ul className="flex flex-col gap-10 md:w-1/2">
            <li className="flex gap-4">
              <TbVaccine className="w-full max-w-8 h-7 p-2 mt-1.5 bg-ccYellow rounded box-content" />
              <div>
                <h4 className="text-ccGray3 text-2xl font-bold mb-1.5">Fully Vaccinated</h4>
                <p className="text-ccGray2">Each pet undergoes thorough veterinary checks, vaccinations, and temperament assessments.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <LuDog className="w-full max-w-8 h-7 p-2 mt-1.5 bg-ccYellow rounded box-content" />
              <div>
                <h4 className="text-ccGray3 text-2xl font-bold mb-1.5">Adoption Support</h4>
                <p className="text-ccGray2">Recieve personalized adoption counseling and ongoing support to ensure a smooth transition for everyone.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <FiThumbsUp className="w-full max-w-8 h-7 p-2 mt-1.5 bg-ccYellow rounded box-content" />
              <div>
                <h4 className="text-ccGray3 text-2xl font-bold mb-1.5">Transparent Process</h4>
                <p className="text-ccGray2">We provide detailed profiles for each pet, including behavioral insights, medical histories, and adoption fees.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <IoIosPeople className="w-full max-w-8 h-7 p-2 mt-1.5 bg-ccYellow rounded box-content" />
              <div>
                <h4 className="text-ccGray3 text-2xl font-bold mb-1.5">Community Engagement</h4>
                <p className="text-ccGray2">Engage with our local community through pet meetup events and educational workshops.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <VisitationForm />
    </main>
  );
}