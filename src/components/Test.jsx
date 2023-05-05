import { useState } from "react";

function Test() {
	// Toggles Mobile Sidebar
	const [isOpen, setIsOpen] = useState(false);

	function toggleSidebar() {
		setIsOpen(!isOpen);
	}
	// Transform Arrow
	const [isArrowToggled, setIsArrowToggled] = useState(false);

	function toggleDropDown() {
		setIsArrowToggled(!isArrowToggled);
	}
	// Features Dropdown Toggle
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
		toggleDropDown();
	}
	// Company Dropdown Toggle
	const [isMenuOpen2, setIsMenuOpen2] = useState(false);

	function toggleMenu2() {
		setIsMenuOpen2(!isMenuOpen2);
		toggleDropDown2();
	}
	const [isOpen2, setIsOpen2] = useState(false);

	function toggleDropDown2() {
		setIsOpen2(!isOpen2);
	}
	return (
		<nav className="bg-white z-20 w-[60%]">
			<div className=" mx-auto px-10">
				<div className=" items-center justify-between">
					{/* BUTTON CONTAINER */}
					<div className=" items-center top-4 right-10">
						{/* Hamburger button */}
						<button
							onClick={toggleSidebar}
							className="items-center justify-center p-2 rounded-md text-gray-400"
						>
							{/* Hamburger Icon */}
							<svg
								className={`${isOpen ? "block" : "block"} h-8 w-8`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							{/* X Icon */}
							<svg
								className={`${isOpen ? "block" : "block"} h-8 w-8`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			{/* Mobile sidebar */}
			<div
				className={`${
					isOpen ? "flex flex-col mt-20 h-[100vh]" : "hidden"
				} sm:hidden`}
			>
				<div className="px-5 justify-center mx-auto text-center pt-6 gap-8 pb-3 text-gray">
					{/* Features Dropdown Button */}
					<button
						className="text-gray-300 hover:bg-gray-700 items-center flex px-3 py-2"
						onClick={toggleMenu}
					>
						<p>Features</p>
					</button>
					{/* Features DropDown Menu */}
					<div
						className={`${
							isMenuOpen ? "block" : "hidden"
						}  absolute right-8 top-20 mt-16 rounded-md shadow-lg bg-white w-[80%] py-4`}
					>
						<div className="flex items-center justify-center flex-row-reverse gap-2 my-4 hover:cursor-pointer">
							<p>ToDo List</p>
						</div>

						<div className="flex items-center flex-row-reverse gap-2 justify-center my-4 hover:cursor-pointer">
							<p>Calendar</p>
						</div>

						<div className="flex items-center flex-row-reverse gap-2 justify-center my-4 hover:cursor-pointer">
							<p>Reminders</p>
						</div>
						<div className="flex items-center flex-row-reverse gap-2 justify-center my-4 hover:cursor-pointer">
							<p>Planning</p>
						</div>
					</div>
					{/* Company Dropdown Button */}
					<button
						className="text-gray-300 hover:bg-gray-700  flex items-center px-3 py-2"
						onClick={toggleMenu2}
					>
						<p>Company</p>
					</button>
					{/* Company DropDown Menu */}
					<div
						className={`${
							isMenuOpen2 ? "block" : "hidden"
						}   absolute right-8 top-40 mt-16 rounded-md shadow-lg bg-white w-[80%] py-4`}
					>
						<div className="flex items-center justify-center flex-row-reverse gap-2 my-4 hover:cursor-pointer">
							<p>History</p>
						</div>

						<div className="flex items-center justify-center flex-row-reverse gap-2 my-4 hover:cursor-pointer">
							<p>Our Team</p>
						</div>

						<div className="flex items-center justify-center flex-row-reverse gap-2 my-4 hover:cursor-pointer">
							<p>Blog</p>
						</div>
					</div>
					<p className="text-gray-300 hover:bg-gray-700  block px-3 py-2">
						Careers
					</p>
					<p className="text-gray-300 hover:bg-gray-700  block px-3 py-2 ">
						About
					</p>
					{/* CTA Container */}
					<div className="flex flex-col lg:items-center lg:mr-12 lg:gap-10 mt-24 gap-4">
						<button className="text-gray">Login</button>
						<button className=" text-gray border-2 border-gray p-2 w-[100%] rounded-2xl">
							Register
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Test;
