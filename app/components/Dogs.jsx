import Link from 'next/link';
import Image from 'next/image';
// Storyblok
import { getStoryblokApi} from "@storyblok/react/rsc";


const Dogs = async () => {

    const fetchedData = await fetchData();
    const dogData = fetchedData.data.stories

    return (
      <section id="dogs" className="bg-ccBlue1 text-center">
        <div className="container">
          <h3 className="text-ccBlue2 text-xl font-bold mb-3">Featured Pets</h3>
          <h2 className="text-ccGray3 text-4xl font-black mx-auto">View all of our puppers here</h2>
          <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {dogData.map((dog, index)=> (
                <Link 
                    key={index} 
                    href={`/${dog.content.name}`} 
                    className="flex flex-col gap-2 items-center"
                >
                    <Image 
                        src={dog.content.featuredImage.filename}
                        alt={dog.content.featuredImage.alt}
                        width={200}
                        height={200}
                        className="w-64 h-64 object-cover rounded-full border-8 border-solid border-white drop-shadow-lg transition-all hover:border-0 hover:drop-shadow-md lg:w-56 lg:h-56" 
                    />
                    <div>
                        <h3 className="text-ccGray3 text-2xl font-black">{dog.content.name}</h3>
                        <p className="text-ccBlue2 font-bold">{dog.content.age}</p>
                    </div>
                </Link>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Dogs;

export async function fetchData() {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get('cdn/stories', {
        'starts_with': 'pets',
        'version': 'draft',
    });
}