"use client";
import Image from 'next/image';
import logo from '../../public/stacked-logo.png';

const VisitationForm = () => {

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        try {
  
            const response = await fetch('/api/contact', {
                method: 'post',
                body: formData,
            });

            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData['message'])
    
            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    };



  return (
    <section id="visit" className="relative">
        <div className="absolute -z-10 top-0 left-0 bg-ccBlue2 w-full h-3/5"></div>
        <div className="container">
            <div className="text-center mb-10">
            <h3 className="text-ccYellow text-xl font-bold mb-3">Come See Us</h3>
            <h2 className="text-white text-4xl font-black mx-auto">We would love to see you</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-10 bg-white w-full max-w-xl mx-auto rounded-2xl drop-shadow-lg">
                <Image
                    src={logo}
                    alt="West Side Kennel Club logo"
                    width={100}
                    height={75}
                    className="w-40 h-auto object-cover mx-auto"
                />
                <h2 className="text-center text-3xl font-bold mt-4 md:text-4xl">Schedule a visit</h2>
                <div className="py-6 flex flex-col gap-3">
                    <input type='text' id="name" name="name" placeholder='Name' required className="p-2 text-ccGray2 border border-ccGray2 border-solid rounded" />
                    <input type='email' id="email" name="email" placeholder='Email' required className="p-2 text-ccGray2 border border-ccGray2 border-solid rounded" />
                    <select id="dogs" name="dog" className="w-full p-2 border border-ccGray2 border-solid rounded">
                        <option value="Franklin" className="py-2">Franklin</option>
                        <option value="Franklin">Hershey</option>
                        <option value="Franklin">Missy</option>
                        <option value="Franklin">Baxter</option>
                    </select>
                    <div className="grid grid-cols-2 gap-3">
                        <input type='date' id="day" name="day" placeholder='What day' required className="p-2 text-ccGray2 border border-ccGray2 border-solid rounded" />
                        <input type='time' id="time" name="time" placeholder='What time' required className="p-2 text-ccGray2 border border-ccGray2 border-solid rounded" />
                    </div>
                </div>
                <input type="submit" value="Submit" className="button blue-button w-full"/>
            </form>
        </div>
    </section>
  )
}

export default VisitationForm;