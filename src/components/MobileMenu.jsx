import React, { useState } from "react";
import { hamburger, close } from "../images";
const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleMenu() {
		setIsOpen(!isOpen);
	}
	return (
		<div className=" lg:hidden w-[90%] mx-auto">
			{/* BUTTON CONTAINER */}
			<div className=" lg:hidden">
				{/* Hamburger button */}
				<button onClick={toggleMenu} className="lg:hidden pl-24">
					{/* Hamburger Icon */}
					<img
						src={hamburger}
						alt="hamburger"
						style={{ position: "absolute", top: "36px", right: "48px" }}
						className={`${isOpen ? "hidden" : ""} h-10 w-10`}
					/>
					{/* X Icon */}
					<img
						src={close}
						alt="Close"
						style={{ position: "absolute", top: "36px", right: "48px" }}
						className={`${isOpen ? "" : "hidden"} h-10 w-10`}
					/>
				</button>
			</div>

			{/* Mobile sidebar */}
			<div
				className={`${
					isOpen ? "z-10 right-[20rem] text-navy lg:hidden block" : "hidden"
				}`}
				style={{
					position: "absolute",
					top: "5rem",
					left: 0,
					right: 0,
					width: "90%",
					bottom: 0,
					margin: "0 auto",
					zIndex: 9999,
				}}
			>
				<ul className="bg-white p-10 z-10">
					<li className="uppercase text-navy font-bold p-4">Product</li>
					<li className="uppercase text-navy font-bold hover:cursor-pointer hover:underline hover:underline-offset-4 p-4">
						Features
					</li>
					<li className="uppercase text-navy font-bold hover:cursor-pointer hover:underline hover:underline-offset-4 p-4">
						Pricing
					</li>
					<hr className="" />
					<button className="uppercase text-gray font-bold pt-2 p-4">
						Login
					</button>
				</ul>
			</div>
		</div>
	);
};

export default MobileMenu;
