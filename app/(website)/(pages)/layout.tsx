import MobileBottom from "@/components/custom/MobileButton";
import Footer from "@/components/modules/website/footer";
import Header from "@/components/modules/website/header";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MobileBottom />
      {children}
      <Footer />
    </>
  );
}
