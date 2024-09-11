import type { Metadata } from "next";
import { ClientLayout } from "./ClientLayout"; // Import the client-side layout

export const metadata: Metadata = {
  title: "Ethio Earning",
  description:
    "Ethio Earning is a comprehensive platform that empowers investors and earners by providing tailored tools for managing investments, completing tasks, and tracking rewards. Join us to enhance your financial growth and social media presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
