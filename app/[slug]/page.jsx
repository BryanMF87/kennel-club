// Components
import Dogs from "../components/Dogs";
import VisitationForm from "../components/VisitationForm";
// Images
import Image from "next/image";
import pawPrint from "../../public/paw.png";
// Storyblok
import { getStoryblokApi} from "@storyblok/react/rsc";



const page = async ({ params: { slug } }) => {

  const fetchedData = await fetchData(slug);

  const petData = fetchedData.data.story.content

  return (
    <main className="overflow-x-hidden">
      
      <section className="container flex flex-col gap-14 -mt-10 md:flex-row md:gap-10 md:flex-col md:items-center md:justify-center">
        <div className="flex flex-col gap-10 md:flex-row-reverse md:gap-14 md:justify-between lg:items-center">
          <div className="relative md:w-1/2">
            <Image 
              src={petData.featuredImage.filename} 
              alt={petData.featuredImage.alt} 
              width={500}
              height={500}
              className="w-[300px] h-auto mx-auto md:max-w-none drop-shadow-lg rounded-full border-8 border-solid border-white lg:w-[400px]"
              priority={true}
            />
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-[22rem] h-80 h-40">
              <div className="relative w-full h-full">
                <Image
                  src={pawPrint}
                  alt=""
                  width={100}
                  height={100}
                  className="absolute top-0 right-10 w-12 h-12 object-contain rotate-12 hidden xs:block lg:top-10 lg:-right-4"
                />
                <Image
                  src={pawPrint}
                  alt=""
                  width={100}
                  height={100}
                  className="absolute bottom-10 -left-6 w-14 h-14 object-contain -rotate-45 hidden xs:block lg:-bottom-10 lg:-left-16"
                />
                <Image
                  src={pawPrint}
                  alt=""
                  width={100}
                  height={100}
                  className="absolute bottom-0 -right-4 w-16 h-16 object-contain rotate-45 hidden xs:block lg:-bottom-14 lg:-right-16"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center md:text-left md:w-1/2 md:items-start">
            <h1 className="text-5xl text-ccGray3 font-black mb-3 lg:text-[3.5rem]">{petData.name}</h1>
            <p className="text-ccBlue2 text-xl font-semibold">{petData.breed}</p>
            <p className="text-ccGray2 mt-2 mb-6">{petData.description}</p>
            <a href='#visit' className="button blue-button">Schedule A Visit</a>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 gap-10 pt-10 md:grid-cols-3 md:gap-8 md:justify-between">
          <Image
            src={petData.images[0].filename}
            alt={petData.images[0].alt}
            width={300}
            height={225}
            className="w-full h-64 object-cover object-center rounded drop-shadow-md"
          />
          <Image
            src={petData.images[1].filename}
            alt={petData.images[1].alt}
            width={300}
            height={225}
            className="w-full h-64 object-cover object-center rounded drop-shadow-md"
          />
          <Image
            src={petData.images[2].filename}
            alt={petData.images[2].alt}
            width={300}
            height={225}
            className="w-full h-64 object-cover object-center rounded drop-shadow-md"
          />
        </div>
      </section>

      <Dogs />

      <VisitationForm />

    </main>
  )
}

export default page;



export async function fetchData(slug) {
  const target = slug.toLowerCase();
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/pets/${target}`, { version: "draft" });
}
