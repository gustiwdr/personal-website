import mobileApps from "@/assets/images/mobile-apps.png";
import kudataWeb from "@/assets/images/kudata-web.png";
import furnitureWeb from "@/assets/images/furniture-web.png";
import ayamBagoWeb from "@/assets/images/ayam-bago-web.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
	{
		company: "Kudata",
		position: "Frontend Engineer Intern",
		year: "2025",
		title: "Kudata Website",
		results: [
			{
				title:
					"Improve frontend test reliability by increasing unit test function coverage to 80%+ using Vue Test Utils",
			},
			{
				title:
					"Collaborate with the frontend team to refine testing strategies and maintain high code quality",
			},
			{
				title:
					"Enhance UI components based on user needs to improve the overall user experience",
			},
		],
		link: "https://youtu.be/4k7IdSLxh6w",
		github: "https://github.com/gustiwdr/laravel-restaurant-reservation",
		image: kudataWeb,
	},
	{
		company: "PT Bima Digital Indonesia",
		position: "Frontend Web Developer Intern",
		year: "2025",
		title: "Furniture Website using Next.js",
		results: [
			{
				title:
					"Develop 5+ new responsive web features by collaborating with UI/UX designers ensuring optimal display across various devices ",
			},
			{
				title:
					"Improve website performance and responsiveness by optimizing asset loading and component rendering in Next.js, leading to a smoother user experience ",
			},
			{
				title:
					"Enhance development efficiency by 30% by implementing reusable UI components with Tailwind CSS",
			},
		],
		link: "",
		github: "https://github.com",
		image: furnitureWeb,
	},
	{
		company: "Self Project",
		year: "2024",
		title: "Restaurant Table Reservation Website using Laravel",
		results: [
			{
				title:
					"Developed and maintained the back-end of a Laravel-based restaurant reservation system for efficient data handling and performance.",
			},
			{
				title:
					"Collaborated on front-end adjustments to enhance user experience and interface usability",
			},
			{
				title:
					"Worked with business analysts to align system features with real-world restaurant management needs.",
			},
		],
		link: "",
		github: "https://github.com/gustiwdr/laravel-restaurant-reservation",
		image: ayamBagoWeb,
	},

	{
		company: "Self Project",
		year: "2025",
		title: "HealthyLife Fit Hub",
		results: [
			{
				title:
					"Developed a health & fitness mobile app with secure login and integrated database",
			},
			{
				title:
					"Features include personalized profiles, service pages, and a list of professional coaches",
			},
			{
				title:
					"Built as a campus project to promote healthy living through tech with a simple UX",
			},
		],
		link: "",
		github: "https://github.com/gustiwdr/fithub-mobile-apps-project",
		image: mobileApps,
	},
];

export const ProjectsSection = () => {
	return (
		<section className="pb-16">
			<div className="container">
				<SectionHeader
					eyebrow="Real-world Results"
					title="Featured Projects"
					description="See how I transformed concepts into enganging digital experiences."
				/>
				<div className="flex flex-col mt-10 md:mt-20 gap-20">
					{portfolioProjects.map((project, projectIndex) => (
						<Card
							key={project.title}
							className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
							style={{
								top: `calc(64px + ${projectIndex * 40}px)`,
							}}
						>
							<div className="lg:grid lg:grid-cols-2 lg:gap-16">
								<div className="lg:pb-16">
									<div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
										<span>{project.company}</span>
										<span>&bull;</span>
										<span>{project.year}</span>
									</div>
									<p className="bg-gradient-to-r from-emerald-300 to-sky-400 uppercase text-sm text-transparent bg-clip-text mt-1">
										{project.position}
									</p>
									<h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
										{project.title}
									</h3>
									<hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
									<ul className="flex flex-col gap-4 mt-4 md:mt-5">
										{project.results.map((result, index) => (
											<li
												key={index}
												className="flex gap-2 text-sm md:text-base text-white/50"
											>
												<CheckCircleIcon className="size-5 md:size-6" />
												<span>{result.title}</span>
											</li>
										))}
									</ul>
									<div className="flex items-center gap-6 mt-8">
										<a href={project.link}>
											<button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
												<span>Visit Live Site</span>
												<ArrowUpRightIcon className="size-4" />
											</button>
										</a>
										<a
											href={project.github}
											target="_blank"
											className="flex items-center"
										>
											<GitHubIcon
												className="size-12 text-white/90"
												fill="currentColor"
											/>
										</a>
									</div>
								</div>
								<div className="relative">
									<Image
										src={project.image}
										alt={project.title}
										className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
									/>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
