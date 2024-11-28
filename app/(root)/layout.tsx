import { ToastContainer } from "react-toastify";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "react-toastify/dist/ReactToastify.css";
import "./root.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={3}
        closeOnClick
        theme="colored"
      />
    </>
  );
}
