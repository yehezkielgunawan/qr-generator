import React from "react";

import FooterComponent from "@/components/layouts/FooterComponent";
import HeaderComponent from "@/components/layouts/HeaderComponent";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="dark:h-screen dark:bg-darkpurple-900">
      <HeaderComponent />
      <div className="layout-container">{children}</div>
      <FooterComponent />
    </section>
  );
};

export default Layout;
