import { Text, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="h-26 px-10 bg-[#0f172a] text-white flex items-center justify-between xl:px-60">
        <div className="text-5xl uppercase whitespace-nowrap">Aqib Ali</div>

        <div className=" space-x-5 text-[22px] hidden lg:flex">
          <a href="#" className="hover:opacity-100 opacity-90 ">
            Home
          </a>
          <a href="#" className="hover:opacity-100 opacity-90 ">
            About
          </a>
          <a href="#" className="hover:opacity-100 opacity-90 ">
            Services
          </a>
          <a href="#" className="hover:opacity-100 opacity-90 ">
            Resume
          </a>
          <a href="#" className="hover:opacity-100 opacity-90 ">
            Portfolio
          </a>
          <a href="#" className="hover:opacity-100 opacity-90 ">
            Contact
          </a>
        </div>

        <button onClick={handleOpen} className="block lg:hidden  rounded-[8px]">
          <Text size={38} color="#fff" />
        </button>
      </nav>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(26,47,100,0.68)]  text-white  z-50">
          <div className=" h-full p-5">
            <button onClick={handleClose} className="text-black fixed z-50 top-7 right-10 text-2xl">
              <X color="white" size={48} />
            </button>
            <div className="mt-26 items-center flex flex-col space-y-5 font-medium text-[24px]">
              <a href="#" className="block hover:opacity-100 opacity-90 ">
                Home
              </a>
              <a href="#" className="block hover:opacity-100 opacity-90 ">
                About
              </a>
              <a href="#" className="block hover:opacity-100 opacity-90 ">
                Services
              </a>
              <a href="#" className="block hover:opacity-100 opacity-90 ">
                Resume
              </a>
              <a href="#" className="block hover:opacity-100 opacity-90 ">
                Portfolio
              </a>
              <a href="#" className="block hover:opacity-100 opacity-90 ">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
