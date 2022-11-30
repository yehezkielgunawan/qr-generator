import React from "react";
import { RiAlarmWarningLine } from "react-icons/ri";

import ArrowLink from "@/components/links/ArrowLink";

export default function NotFoundPage() {
  return (
    <main className="bg-white">
      <section className="layout-container flex min-h-screen flex-col items-center justify-center text-center">
        <RiAlarmWarningLine
          size={44}
          className="animate-ping text-red-500 drop-shadow-lg"
        />
        <h1 className="my-8 text-black">Page Not Found</h1>
        <ArrowLink href="/" className="text-black" direction="left">
          Back to home
        </ArrowLink>
      </section>
    </main>
  );
}
