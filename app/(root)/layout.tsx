import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-[#020209] ">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
