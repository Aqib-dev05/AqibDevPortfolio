import ProfilePic from '../assets/Avatar.png';
import Button from "./Button"

export default function Banner() {
    return (
        <>
           <section className="h-[90vh] bg-linear-to-r from-[#1b275d] to-[#0f172a] w-[100vw] flex items-center justify-center ">
            <div className="h-[100%] w-[50%] text-white bg-red-800">
                <p>Hi,I'm</p>
                <h1>Aqib ALi A Fronted React Dev<span>.</span> </h1>
                <Button text={"My Projects"} />
            </div>
            <div className=" h-[100%] w-[50%] bg-green-500">
                <div>
                <img src={ProfilePic} alt="profile" />
                </div>
            </div>
           </section>
        </>
    )
}