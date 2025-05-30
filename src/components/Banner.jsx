import ProfilePic from '../assets/Avatar2.png';
import Button from "./Button"

export default function Banner() {
    return (
        <>
            <section className="min-h-[90vh] py-3 bg-linear-to-r from-[#16213b] to-[#0f172a] w-[100vw] flex max-lg:flex-col-reverse items-center justify-center lg:gap-52 max-lg:gap-20 max-lg:pl-2">
                <div className="w-xl max-lg:pl-28 max-sm:pl-16 max-sm:w-[100vw]   pl-22 text-white ">
                    <p className='text-xl   font-bold text-[#a3a3a3] '>Hi,I'm</p>
                    <h1 className='text-6xl max-sm:text-[40px] max-lg:text-[50px]   w-[95%] leading-[1.25] tracking-[2px]   pb-4 font-bold' >Aqib Ali <br /> A FrontEnd React Dev<span className='text-[#00bcd4]'>.</span> </h1>
                    <Button text={"My Recent Projects"} />
                </div>
                <div className="w-xl  max-lg:ml-0 max-lg:mt-10 flex items-center justify-center">
                    <div className='size-[360px] max-sm:size-[230px] max-lg:size-[350px] max-md:size-[300px] max-md:border-0    border-[#00bcd4] border-l-8 border-b-8 border-t-8  relative '>
                        <img className='scale-[1.15]   object-cover absolute top-[-40px] left-0 ' src={ProfilePic} alt="profile" />
                    </div>
                </div>
            </section>
        </>
    )
}