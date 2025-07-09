"use client";
import { useState, useEffect } from "react";

export const Header = () => {
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["home", "about", "project", "contact"];
			const scrollPosition = window.scrollY + 100;

			const isNearBottom =
				window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

			if (isNearBottom) {
				setActiveSection("contact");
				return;
			}

			for (const section of [...sections].reverse()) {
				const element =
					section === "home" ? document.body : document.getElementById(section);

				if (element) {
					const offsetTop = section === "home" ? 0 : element.offsetTop;

					if (scrollPosition >= offsetTop) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="flex justify-center items-center fixed top-3 w-full z-10">
			<nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
				<a
					href="#"
					className={`nav-item ${
						activeSection === "home"
							? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
							: ""
					}`}
				>
					Home
				</a>
				<a
					href="#about"
					className={`nav-item ${
						activeSection === "about"
							? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
							: ""
					}`}
				>
					About
				</a>
				<a
					href="#project"
					className={`nav-item ${
						activeSection === "project"
							? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
							: ""
					}`}
				>
					Projects
				</a>
				<a
					href="#contact"
					className={`nav-item ${
						activeSection === "contact"
							? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
							: ""
					}`}
				>
					Contact
				</a>
			</nav>
		</div>
	);
};
