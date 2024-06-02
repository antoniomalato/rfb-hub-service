import React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import { Inter, Nunito } from "next/font/google";
import theme from "./theme.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          {children} 
        </ThemeProvider >  
      </body>
    </html>
  );
}
