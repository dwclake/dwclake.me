import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Personal portfolio of Devon Webb",
    icons: {
        icon: "/ruka/favicon/ruka-green-256x256.png",
    },
};

// Later make sure to change favicon based on route
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Intel+One+Mono:ital,wght@0,300..700;1,300..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
