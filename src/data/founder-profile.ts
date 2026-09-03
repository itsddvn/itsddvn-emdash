import type { SiteLocale } from "../utils/i18n";

export interface FounderSystem {
	mode: string;
	title: string;
	description: string;
	href: string;
	featured?: boolean;
}

export interface FounderProfile {
	metaTitle: string;
	metaDescription: string;
	navigation: {
		work: string;
		practice: string;
		about: string;
		articles: string;
		articlesMenu: string;
		menu: string;
		contact: string;
	};
	hero: {
		kicker: string;
		lineOne: string;
		lineTwoPrefix: string;
		lineTwoHighlight: string;
		summary: string;
		workCta: string;
		articlesCta: string;
		portraitAlt: string;
		strengthsLabel: string;
	};
	method: {
		label: string;
		title: string;
		imageAlt: string;
		steps: Array<{ title: string; description: string }>;
	};
	work: {
		label: string;
		title: string;
		storyCta: string;
		systems: FounderSystem[];
	};
	writing: {
		label: string;
		title: string;
		viewAll: string;
		untitled: string;
	};
	contact: {
		label: string;
		handle: string;
		navigationLabel: string;
	};
	footerLine: string;
}

const sharedSystems = {
	myAgents: "https://myagents.so",
	goClaw: "https://github.com/itsddvn/goclaw",
	skills: "https://github.com/itsddvn/skills-shared",
};

const profiles: Record<SiteLocale, FounderProfile> = {
	vi: {
		metaTitle: "Nguyễn Trung Đức · CEO CPPAI",
		metaDescription:
			"Nguyễn Trung Đức xây sản phẩm, đội ngũ và hệ thống vận hành để AI trở thành năng lực thật của doanh nghiệp.",
		navigation: {
			work: "Công việc",
			practice: "Cách làm",
			about: "Giới thiệu",
			articles: "Bài Viết",
			articlesMenu: "Mở danh mục Bài Viết",
			menu: "Danh mục",
			contact: "Liên hệ",
		},
		hero: {
			kicker: "CEO CPPAI · Build · Operate · Codify",
			lineOne: "Tôi xây dựng công ty.",
			lineTwoPrefix: "Tối ưu vận hành bằng",
			lineTwoHighlight: "AI.",
			summary: "Biến AI thành năng lực dùng được mỗi ngày.",
			workCta: "Xem công việc",
			articlesCta: "Đọc Bài Viết",
			portraitAlt: "Nguyễn Trung Đức, CEO CPPAI",
			strengthsLabel: "Năng lực và dấu ấn cá nhân",
		},
		method: {
			label: "Phương pháp",
			title: "Build. Operate. Codify.",
			imageAlt: "Sơ đồ ba giai đoạn Build, Operate và Codify",
			steps: [
				{ title: "Build", description: "Xây đúng sản phẩm." },
				{ title: "Operate", description: "Đưa vào vận hành." },
				{ title: "Codify", description: "Chuẩn hóa bài học." },
			],
		},
		work: {
			label: "Công việc",
			title: "Ba hệ thống tiêu biểu.",
			storyCta: "Đọc câu chuyện ↗",
			systems: [
				{
					mode: "Build",
					title: "MyAgents",
					description: "Hệ sinh thái sản phẩm cho nhu cầu ứng dụng AI.",
					href: sharedSystems.myAgents,
					featured: true,
				},
				{
					mode: "Vận hành nền tảng",
					title: "GoClaw / Dewee",
					description: "Phân quyền, trạng thái và vòng đời kênh.",
					href: sharedSystems.goClaw,
				},
				{
					mode: "Chuẩn hóa tri thức",
					title: "myskills + PDM Kit",
					description: "Quy trình có kiểm soát và tiêu chí hoàn thành.",
					href: sharedSystems.skills,
				},
			],
		},
		writing: {
			label: "Bài Viết",
			title: "Ghi chép.",
			viewAll: "Xem tất cả ↗",
			untitled: "Chưa có tiêu đề",
		},
		contact: {
			label: "Kết nối",
			handle: "@itsddvn",
			navigationLabel: "Kênh công khai",
		},
		footerLine: "CEO CPPAI · Xây dựng · Vận hành · Chuẩn hóa",
	},
	en: {
		metaTitle: "Nguyễn Trung Đức · CEO CPPAI",
		metaDescription:
			"Nguyễn Trung Đức builds products, teams, and operating systems that make AI a real business capability.",
		navigation: {
			work: "Work",
			practice: "Practice",
			about: "About",
			articles: "Articles",
			articlesMenu: "Open article categories",
			menu: "Menu",
			contact: "Contact",
		},
		hero: {
			kicker: "CEO CPPAI · Build · Operate · Codify",
			lineOne: "I build companies.",
			lineTwoPrefix: "I make AI",
			lineTwoHighlight: "operational.",
			summary: "Turning AI into capability used every day.",
			workCta: "See the work",
			articlesCta: "Read Articles",
			portraitAlt: "Nguyễn Trung Đức, CEO of CPPAI",
			strengthsLabel: "Capabilities and personal signatures",
		},
		method: {
			label: "Method",
			title: "Build. Operate. Codify.",
			imageAlt: "Diagram of the Build, Operate, and Codify method",
			steps: [
				{ title: "Build", description: "Build the right product." },
				{ title: "Operate", description: "Put it into operation." },
				{ title: "Codify", description: "Codify the lessons." },
			],
		},
		work: {
			label: "Work",
			title: "Three representative systems.",
			storyCta: "Read the story ↗",
			systems: [
				{
					mode: "Build",
					title: "MyAgents",
					description: "A product ecosystem for applied AI needs.",
					href: sharedSystems.myAgents,
					featured: true,
				},
				{
					mode: "Platform operations",
					title: "GoClaw / Dewee",
					description: "Permissions, state, and channel lifecycle.",
					href: sharedSystems.goClaw,
				},
				{
					mode: "Knowledge systems",
					title: "myskills + PDM Kit",
					description: "Controlled workflows with explicit completion criteria.",
					href: sharedSystems.skills,
				},
			],
		},
		writing: {
			label: "Articles",
			title: "Field notes.",
			viewAll: "View all ↗",
			untitled: "Untitled",
		},
		contact: {
			label: "Connect",
			handle: "@itsddvn",
			navigationLabel: "Public channels",
		},
		footerLine: "CEO CPPAI · Build · Operate · Codify",
	},
};

export const contactEmail = {
	label: "Email",
	href: "mailto:contact@itsdd.vn",
	handle: "contact@itsdd.vn",
	icon: "email",
} as const;

export const publicChannels = [
	{ label: "GitHub", href: "https://github.com/itsddvn", handle: "itsddvn", icon: "github" },
	{ label: "Facebook", href: "https://facebook.com/itsddvn", handle: "itsddvn", icon: "facebook" },
	{ label: "TikTok", href: "https://www.tiktok.com/@itsddvn", handle: "@itsddvn", icon: "tiktok" },
	{ label: "Telegram", href: "https://t.me/itsddvn", handle: "@itsddvn", icon: "telegram" },
	{ label: "YouTube", href: "https://www.youtube.com/@itsddvn", handle: "@itsddvn", icon: "youtube" },
] as const;

export function getFounderProfile(locale: SiteLocale): FounderProfile {
	return profiles[locale];
}
