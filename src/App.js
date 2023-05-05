import "./App.css";
import MobileMenu from "./components/MobileMenu";

import { logo, hero } from "./images";
function App() {
	return (
		<div className="App">
			<div className="bg-gray w-[50%] absolute top-0 right-0 h-[30rem] opacity-20 rounded-bl-[6rem] z-[-1] lg:w-[60%] lg:h-[25rem]"></div>
			<header className=" pt-8 ml-12 lg:mx-20 flex items-center justify-between ">
				<img src={logo} alt="logo" className="" />
				<MobileMenu />
				<ul className="lg:flex lg:items-center lg:gap-16 hidden">
					<li className="uppercase text-navy font-bold hover:cursor-pointer hover:underline hover:underline-offset-4">
						Product
					</li>
					<li className="uppercase text-navy font-bold hover:cursor-pointer hover:underline hover:underline-offset-4">
						Features
					</li>
					<li className="uppercase text-navy font-bold hover:cursor-pointer hover:underline hover:underline-offset-4">
						Pricing
					</li>
					<button className="uppercase text-gray font-bold hover:cursor-pointer hover:underline hover:underline-offset-4 pl-12">
						Login
					</button>
				</ul>
			</header>
			<main className="w-[90%] mt-16 ml-6 pb-16 lg:flex lg:flex-row-reverse lg:w-[100%] lg:justify-center lg:items-center lg:pb-0 lg:min-h-[80vh]">
				<img
					src={hero}
					alt="devices"
					className="w-[100%] lg:w-[80%] lg:mr-[-25rem]"
				/>
				<div className="lg:w-[40%] lg:mt-[-6rem] ">
					<div className="mt-20 flex items-center ml-6">
						<span className="bg-black text-white font-bold uppercase rounded-full py-1 px-3 tracking-wide">
							New
						</span>
						<span className="text-gray font-semibold text-base uppercase tracking-[.5em] ml-4 lg:text-sm">
							Monograph Dashboard
						</span>
					</div>
					<h1 className="uppercase font-bold text-navy text-5xl text-left tracking-wide ml-6 mt-8 lg:text-6xl lg:leading-[4rem]">
						Powerful insights into your team
					</h1>
					<p className="text-blue text-left tracking-wide ml-6 mt-6 w-[70%] lg:w-[55%] lg:text-xl">
						{" "}
						Project planning and time tracking for agile teams
					</p>
					<div className="flex gap-20 ml-6 mt-6 lg:gap-10 lg:mt-20">
						<button className="bg-red text-white font-bold uppercase p-3 rounded-lg w-[12rem] tracking-wider hover:opacity-70">
							Schedule a Demo
						</button>
						<button className="text-gray font-bold uppercase underline hover:text-navy">
							Preview
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
