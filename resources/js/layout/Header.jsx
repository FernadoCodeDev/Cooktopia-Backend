import React from "react";
import CooktopiaShopLogo from "../assets/img/CooktopiaShop Logo.webp";
import CooktopiaShopBG from "../assets/img/CooktopiaShopBG.webp";
import MobileMenu from "../component/ui/MobileMenu";
import DarkMode from "../component/ui/DarkMode";

const Header = () => {
    return (
        <div className="relative w-full ">
            {/* Design less than 768px */}
            <div
                className="flex flex-col md:hidden relative bg-cover bg-center inset-0 w-full min-h-screen  p-4"
                style={{ backgroundImage: `url(${CooktopiaShopBG})` }}
            >
                <div className="flex flex-col justify-between h-screen pb-8 relative z-10">

                    <div className="flex flex-row gap-2 justify-between ">
                        <img
                            src={CooktopiaShopLogo}
                            alt="CooktopiaShopLogo"
                            className="object-contain invert w-32 h-auto cursor-pointer"
                        />
                        <div className="">
                            <DarkMode />
                        </div>
                    </div>

                    <div className="flex mx-auto">
                        <MobileMenu
                            textColor="text-stone-600 transition-all duration-700 ease-out"
                            hoverColor="hover:text-stone-900"
                            bgColor="bg-transparent"
                            invertColor="invert-0"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-1">

                        <h1 className="text-5xl font-bold  text-center text-slate-100">
                            COCINA
                        </h1>

                        <p className="text-sm pt-2 text-start text-slate-100">
                            Descubre utensilios y herramientas que hacen que cocinar sea más fácil y rápido.

                        </p>

                        <h1 className="text-5xl col-span-3 font-bold text-center text-slate-100">
                            INTELIGENTE
                        </h1>

                    </div>

                </div>
            </div>


            {/* design greater than md */}
            <div className="hidden md:grid md:grid-cols-2 md:min-h-screen">
                {/* left side bg-stone-200 */}

                <div className="flex flex-col items-start justify-between p-6 bg-stone-200">
                    <div>
                        <img
                            src={CooktopiaShopLogo}
                            alt="CooktopiaShopLogo"
                            className="w-40 h-auto cursor-pointer"
                        />
                        <MobileMenu
                            textColor="text-stone-600"
                            hoverColor="hover:text-stone-900"
                            bgColor="bg-transparent"
                            invertColor="invert"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-1 max-w-[25rem]">
                        
                            <h1 className="text-5xl font-bold  text-center text-beige-950">
                                COCINA
                            </h1>
                       
                            <p className="text-sm pt-2 text-start text-beige-950">
                                Descubre utensilios y herramientas que hacen que cocinar sea más fácil y rápido. 
                             
                            </p>
                    
                            <h1 className="text-5xl col-span-3 font-bold text-center text-beige-950">
                                INTELIGENTE
                            </h1>
                     
                    </div>
                </div>

                {/* right side bg-stone-900 with background image */}
                <div className="relative flex flex-col items-end justify-between p-6 text-white">
                    <div
                        className="absolute inset-0 w-full h-full bg-cover "
                        style={{ backgroundImage: `url(${CooktopiaShopBG})` }}
                    ></div>
                    <DarkMode />
                </div>
            </div>
        </div>
    );
};

export default Header;