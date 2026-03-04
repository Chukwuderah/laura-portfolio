import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";
// import "../globals.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      <div className="overflow-x-hidden">
        {children}
        <Footer />
      </div>
      <Toaster position="bottom-right" richColors />
    </main>
  );
}
