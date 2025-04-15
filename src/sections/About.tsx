"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import TailwindIcon from "@/assets/icons/tailwind-css.svg";
import JavaScriptIcon from "@/assets/icons/javascript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import LaravelIcon from "@/assets/icons/laravel.svg";
import FlutterIcon from "@/assets/icons/flutter.svg";
import PostmanIcon from "@/assets/icons/postman.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import VSCodeIcon from "@/assets/icons/visual-studio-code.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
	{
		title: "HTML5",
		iconType: HTMLIcon,
	},
	{
		title: "CSS3",
		iconType: CSSIcon,
	},
	{
		title: "TailwindCSS",
		iconType: TailwindIcon,
	},
	{
		title: "JavaScript",
		iconType: JavaScriptIcon,
	},
	{
		title: "ReactJS",
		iconType: ReactIcon,
	},
	{
		title: "Next.js",
		iconType: NextIcon,
	},
	{
		title: "Laravel",
		iconType: LaravelIcon,
	},
	{
		title: "Flutter",
		iconType: FlutterIcon,
	},
	{
		title: "Postman",
		iconType: PostmanIcon,
	},
	{
		title: "Docker",
		iconType: DockerIcon,
	},
	{
		title: "GitHub",
		iconType: GitHubIcon,
	},
	{
		title: "VSCode",
		iconType: VSCodeIcon,
	},
	{
		title: "Chrome",
		iconType: ChromeIcon,
	},
];

const hobbies = [
	{
		title: "Reading",
		emoji: "📚",
		left: "5%",
		top: "5%",
	},
	{
		title: "Writing",
		emoji: "🖋️",
		left: "42%",
		top: "38%",
	},
	{
		title: "Photography",
		emoji: "📷",
		left: "45%",
		top: "5%",
	},
	{
		title: "Traveling",
		emoji: "✈️",
		left: "10%",
		top: "35%",
	},
	{
		title: "Camping",
		emoji: "🏕️",
		left: "75%",
		top: "15%",
	},
	{
		title: "Music",
		emoji: "🎶",
		left: "5%",
		top: "65%",
	},
	{
		title: "Movie",
		emoji: "🎥",
		left: "70%",
		top: "60%",
	},
	{
		title: "Gaming",
		emoji: "🎮",
		left: "35%",
		top: "70%",
	},
];

export const AboutSection = () => {
	const constraintRef = useRef(null);
	return (
		<div className="py-20 lg:py-28">
			<div className="container">
				<SectionHeader
					eyebrow="About Me"
					title="A Glimpse Into My World"
					description="Learn more about who I am, what I do, and what inspires me."
				/>
				<div className="mt-20 flex flex-col gap-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
						<Card className="h-[320px] md:col-span-2 lg:col-span-1">
							<CardHeader
								title="My Reads"
								description="Explore the books shaping my perspectives."
							/>
							<div className="w-40 mx-auto mt-2 md:mt-0">
								<Image src={bookImage} alt="book cover" />
							</div>
						</Card>
						<Card className="h-[320px] md:col-span-3 lg:col-span-2">
							<CardHeader
								title="My Toolbox"
								description="Explore the technologies and tools I use to craft exceptional
              digital experiences."
								className=""
							/>
							<ToolboxItems
								items={toolboxItems}
								className=""
								itemsWrapClassName="animate-move-left [animation-duration:30s]"
							/>
							<ToolboxItems
								items={toolboxItems}
								className="mt-6"
								itemsWrapClassName="animate-move-right [animation-duration:15s]"
							/>
						</Card>
					</div>
					<Card className="h-[320px] p-0 flex flex-col">
						<CardHeader
							title="Beyond The Code"
							description="Explore my interests and hobbies beyond the digital realm."
							className="px-6 py-6"
						/>
						<div className="relative flex-1" ref={constraintRef}>
							{hobbies.map((hobby) => (
								<motion.div
									key={hobby.title}
									className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
									style={{
										left: hobby.left,
										top: hobby.top,
									}}
									drag
									dragConstraints={constraintRef}
								>
									<span className="font-medium text-gray-950">
										{hobby.title}
									</span>
									<span>{hobby.emoji}</span>
								</motion.div>
							))}
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};
