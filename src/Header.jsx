import { GrCart } from "react-icons/gr";

function Header(props) {
    return (
        <header className="flex items-center justify-between p-8 border border-gray-300 shadow-md rounded-lg bg-cover text-[rgb(167,6,86)] transition-transform duration-300" style={{ backgroundImage: "url('../public/background.jpeg')" }}>
            <div className="head flex items-center gap-2 w-1/2">
                <img src="public/logo2.png" alt="Logo" className="w-[150px] h-[100px] object-cover" />
                <h1 className=" title text-5xl font-bold ">The Book Addict</h1>
            </div>
            <nav className="nav1 flex gap-5">
             <div className="nav2 flex gap-5">
                <button className="bg-[rgb(167,6,86)] text-white py-2 px-4 rounded-3xl hover:bg-[rgb(212,51,132)] transform transition-transform duration-100 hover:scale-105">
                    <a href="/">Home</a>
                </button>
                <button className="bg-[rgb(167,6,86)] text-white py-2 px-4 rounded-3xl hover:bg-[rgb(212,51,132)] transform transition-transform duration-100 hover:scale-105">
                    <a href="/">About</a>
                </button>
                <button className="bg-[rgb(167,6,86)] text-white py-2 px-4 rounded-3xl hover:bg-[rgb(212,51,132)] transform transition-transform duration-100 hover:scale-105">
                    <a href="/">Contact</a>
                </button>
              </div>
                <button className="bg-[rgb(167,6,86)] text-white py-2 px-4 rounded-3xl hover:bg-[rgb(212,51,132)] transform transition-transform duration-100 hover:scale-105" onClick={() => props.setIsCart(!props.isCart)}>
                    <GrCart />
                </button>
            </nav>
        </header>
    );
}

export default Header;
