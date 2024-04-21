import { useState } from "react"

function Links({ togle }) {
    return (
        <>
            <a href="#" onClick={togle}>Home</a>
            <a href="#" onClick={togle}>Sobre</a>
            <a href="#" onClick={togle}>Contato</a>
        </>

    )
}

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    
    function togleMenu(){
        setOpenMenu(!openMenu)
    }


    return (
        <header className="bg-slate-800 font-medium">
            <div className="flex justify-between">
                <div className="m-5 text-slate-50">Logo</div>

                <div className="hidden m-5 gap-4 font-medium text-slate-50 md:flex">
                    <Links />
                </div>
                <div className="md:hidden">
                    <img src="./icons.png" alt="" onClick={togleMenu} />
                </div>
            </div>
            {openMenu && (
                <div className="bg-slate-800 h-60 w-full text-slate-50 rounded-b-md flex flex-col justify-center absolute gap-8 items-center md:hidden">
                    <Links togle={togleMenu} />
                </div>
            )}
        </header>
    )
}