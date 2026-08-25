import { getTaxonomyTerms, getTranslations } from "emdash";
import { getRelativeLocaleUrl } from "astro:i18n";

export const SUPPORTED_LOCALES = ["vi", "en"] as const;
export type SiteLocale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: SiteLocale = "vi";

export function resolveLocale(locale: string | undefined): SiteLocale {
	return locale === "en" ? "en" : DEFAULT_LOCALE;
}

export function localePath(locale: SiteLocale, path: string): string {
	const normalized = path === "/" ? "" : path.replace(/^\//, "");
	return getRelativeLocaleUrl(locale, normalized);
}

export function stripLocalePrefix(pathname: string): string {
	if (pathname === "/en") return "/";
	return pathname.replace(/^\/en(?=\/|$)/, "") || "/";
}

export function getRouteLocalePaths(pathname: string): Record<SiteLocale, string> {
	const path = stripLocalePrefix(pathname);
	return Object.fromEntries(
		SUPPORTED_LOCALES.map((locale) => [locale, localePath(locale, path)]),
	) as Record<SiteLocale, string>;
}

export async function getContentLocalePaths(
	content: { collection: string; id: string },
	pathname: string,
): Promise<Partial<Record<SiteLocale, string>>> {
	const currentPath = stripLocalePrefix(pathname);
	const normalizedPath = currentPath === "/" ? currentPath : currentPath.replace(/\/+$/, "");
	const lastSlash = normalizedPath.lastIndexOf("/");
	const parentPath = lastSlash > 0 ? normalizedPath.slice(0, lastSlash) : "";
	const result = await getTranslations(content.collection, content.id);
	const paths: Partial<Record<SiteLocale, string>> = {};

	for (const translation of result.translations) {
		if (
			translation.status !== "published" ||
			!translation.slug ||
			!SUPPORTED_LOCALES.includes(translation.locale as SiteLocale)
		) {
			continue;
		}
		const locale = translation.locale as SiteLocale;
		paths[locale] = localePath(locale, `${parentPath}/${translation.slug}`);
	}

	return paths;
}

export async function getTaxonomyLocalePaths(
	taxonomyName: string,
	term: { id: string; translationGroup?: string | null },
	routeSegment: "category" | "tag",
): Promise<Partial<Record<SiteLocale, string>>> {
	const translationGroup = term.translationGroup ?? term.id;
	const localeTerms = await Promise.all(
		SUPPORTED_LOCALES.map(async (locale) => ({
			locale,
			terms: await getTaxonomyTerms(taxonomyName, { locale }),
		})),
	);
	const paths: Partial<Record<SiteLocale, string>> = {};

	for (const { locale, terms } of localeTerms) {
		const translation = terms.find(
			(candidate) => (candidate.translationGroup ?? candidate.id) === translationGroup,
		);
		if (translation) {
			paths[locale] = localePath(locale, `/${routeSegment}/${translation.slug}`);
		}
	}

	return paths;
}

export const messages = {
	vi: {
		languageLabel: "Ngôn ngữ",
		searchPlaceholder: "Tìm kiếm...",
		navigate: "Điều hướng",
		connect: "Kết nối",
		admin: "Quản trị",
		poweredBy: "Vận hành bởi",
		siteTagline: "Góc nhìn về công nghệ, AI và hành trình kinh doanh",
		home: "Trang chủ",
		allPosts: "Tất cả bài viết",
		about: "Giới thiệu",
		rssFeed: "RSS",
		lightMode: "Giao diện sáng",
		footerAbout: "Ghi chép về công nghệ, AI, kinh nghiệm điều hành và hành trình khởi nghiệp.",
		darkMode: "Giao diện tối",
		systemTheme: "Theo hệ thống",
		topics: "Công nghệ · AI · Khởi nghiệp",
		noPostsTitle: "Chưa có bài viết",
		untitled: "Chưa có tiêu đề",
		noPostsBody: "Tạo bài viết đầu tiên trong trang quản trị.",
		createPost: "Tạo bài viết",
		latest: "Mới nhất",
		viewAll: "Xem tất cả",
		minuteRead: (minutes: number) => `${minutes} phút đọc`,
		minuteShort: (minutes: number) => `${minutes} phút`,
		articleCount: (count: number) => `${count} bài viết`,
		noPosts: "Chưa có bài viết.",
		author: "Tác giả",
		authors: "Tác giả",
		published: "Xuất bản",
		readingTime: "Thời gian đọc",
		tags: "Thẻ",
		onThisPage: "Trong bài viết",
		continueReading: "Đọc tiếp",
		search: "Tìm kiếm",
		searchDescription: "Tìm kiếm bài viết",
		searchButton: "Tìm",
		searchSummary: (count: number, query: string) => `${count} kết quả cho “${query}”`,
		searchHint: "Nhập từ khóa để tìm bài viết.",
		noSearchResults: "Không tìm thấy kết quả.",
		categoryPosts: (label: string) => `Bài viết về ${label}`,
		categoryDescription: (label: string) => `Tất cả bài viết trong chuyên mục ${label}`,
		noCategoryPosts: "Chuyên mục này chưa có bài viết.",
		taggedPosts: (label: string) => `Bài viết gắn thẻ “${label}”`,
		tagDescription: (label: string) => `Tất cả bài viết gắn thẻ ${label}`,
		noTaggedPosts: "Chưa có bài viết với thẻ này.",
		pageNotFound: "Không tìm thấy trang",
		pageNotFoundBody: "Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.",
		returnHome: "Về trang chủ",
		fallbackNotice: "Bản dịch chưa sẵn sàng. Đang hiển thị nội dung tiếng Việt.",
		categories: "Chuyên mục",
		recentPosts: "Bài viết gần đây",
	},
	en: {
		languageLabel: "Language",
		searchPlaceholder: "Search...",
		navigate: "Navigate",
		admin: "Admin",
		poweredBy: "Powered by",
		connect: "Connect",
		siteTagline: "Perspectives on technology, AI, and the business journey",
		home: "Home",
		allPosts: "All Posts",
		about: "About",
		rssFeed: "RSS Feed",
		lightMode: "Light mode",
		footerAbout: "Notes on technology, AI, operating experience, and the entrepreneurial journey.",
		darkMode: "Dark mode",
		systemTheme: "System theme",
		topics: "Technology · AI · Entrepreneurship",
		noPostsTitle: "No posts yet",
		untitled: "Untitled",
		noPostsBody: "Create your first post in the admin panel.",
		createPost: "Create a post",
		latest: "Latest",
		viewAll: "View all",
		minuteRead: (minutes: number) => `${minutes} min read`,
		minuteShort: (minutes: number) => `${minutes} min`,
		articleCount: (count: number) => `${count} ${count === 1 ? "article" : "articles"}`,
		noPosts: "No posts yet.",
		author: "Author",
		authors: "Authors",
		published: "Published",
		readingTime: "Reading time",
		tags: "Tags",
		onThisPage: "On this page",
		continueReading: "Continue reading",
		search: "Search",
		searchDescription: "Search blog posts",
		searchButton: "Search",
		searchSummary: (count: number, query: string) => `${count} results for “${query}”`,
		searchHint: "Enter a search term to find posts.",
		noSearchResults: "No results found.",
		categoryPosts: (label: string) => `${label} posts`,
		categoryDescription: (label: string) => `All posts in ${label}`,
		noCategoryPosts: "No posts in this category yet.",
		taggedPosts: (label: string) => `Posts tagged “${label}”`,
		tagDescription: (label: string) => `All posts tagged with ${label}`,
		noTaggedPosts: "No posts with this tag yet.",
		pageNotFound: "Page not found",
		pageNotFoundBody: "The page you are looking for does not exist or has moved.",
		returnHome: "Return home",
		fallbackNotice: "This translation is not available yet. Showing Vietnamese content.",
		categories: "Categories",
		recentPosts: "Recent posts",
	},
} as const;

export function getMessages(locale: string | undefined) {
	return messages[resolveLocale(locale)];
}
