import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flora Personal OS",
  description: "个人成长与业务管理 Dashboard",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
