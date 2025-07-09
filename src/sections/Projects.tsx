import mobileApps from "@/assets/images/mobile-apps.png";
import kudataWeb from "@/assets/images/kudata-web.png";
import furnitureWeb from "@/assets/images/furniture-web.png";
import ayamBagoWeb from "@/assets/images/ayam-bago-web.png";
import dashboardJobPortal from "@/assets/images/dashboardJobPortal.png";
import cultureMonitor from "@/assets/images/cultureMonitor.png";
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
		title: "Kudata Website Enhancement",
		results: [
			{
				title:
					"Collaborated with the frontend team to develop a testing strategy using Vue Test Utils, increasing unit test coverage to 80% and improving test reliability and stability",
			},
			{
				title:
					"Refined UI components based on user feedback during development, resulting in a more user-friendly and intuitive experience",
			},
			{
				title:
					"Worked closely with the backend team to design data flows and build new features, ensuring seamless component integration and optimal functionality",
			},
		],
		link: "https://kudata.id/",
		github: "",
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
					"Participated in building a 8-page website, contributing to planning, UI design, and implementation using Next.js",
			},
			{
				title:
					"Improved website performance and responsiveness by optimizing asset loading and rendering techniques",
			},
			{
				title:
					"Boosted development efficiency by 30% through the creation and implementation of reusable UI components with Tailwind CSS",
			},
		],
		link: "https://furniture-website-ten.vercel.app/",
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
		title: "Dashboard Job Portal using Next.js",
		results: [
			{
				title:
					"Built a fullstack web app with Next.js, styled using Tailwind CSS and shadcn/ui for responsive and reusable components.",
			},
			{
				title:
					"Integrated Prisma ORM for database access and created secure authentication flows with NextAuth, including login and protected pages.",
			},
			{
				title:
					"Added file upload features with Supabase Storage, enabling users to store and manage files in the app.",
			},
		],
		link: "",
		github: "https://github.com/gustiwdr/dashboard-job-portal-project",
		image: dashboardJobPortal,
	},
	{
		company: "Self Project",
		year: "2025",
		title: "Culture Monitoring System",
		results: [
			{
				title:
					"Built a Culture Monitoring System using Laravel 8 and PostgreSQL, enabling submission, approval, and tracking of internal cultural activities across different roles.",
			},
			{
				title:
					"Implemented role-based access for Culture Agents, Division Heads, and Admin HC, each with specific permissions for submitting, reviewing, and approving activities.",
			},
			{
				title:
					"Developed monitoring and reporting features, including activity status tracking (Scheduled, Done, Canceled) and detailed reports with attendees, summaries, and photo documentation.",
			},
		],
		link: "",
		github: "https://github.com/gustiwdr/culture-monitoring-system",
		image: cultureMonitor,
	},
];

export const ProjectsSection = () => {
	return (
		<section className="pb-16" id="project">
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
									<p className="bg-gradient-to-r from-emerald-300 to-sky-400 font-bold uppercase text-sm text-transparent bg-clip-text mt-1">
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
										{project.link && (
											<a href={project.link}>
												<button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
													<span>Website</span>
													<ArrowUpRightIcon className="size-4" />
												</button>
											</a>
										)}
										{project.github && (
											<a href={project.github} target="_blank">
												<button className="bg-transparent border border-white/20 text-white h-12 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
													<GitHubIcon className="size-4" fill="currentColor" />
													<span>GitHub</span>
												</button>
											</a>
										)}
									</div>
								</div>
								<div className="relative">
									<Image
										src={project.image}
										alt={project.title}
										className={`mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none`}
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
