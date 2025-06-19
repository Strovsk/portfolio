import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	if (!request.cookies.has("jwt")) {
		return NextResponse.redirect(new URL("/login", request.url));
	}
}

export const config = {
	matcher: ["/config/tech_skills/:path*"],
};
