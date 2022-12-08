import clsx from "clsx";
import { useTheme } from "next-themes";
import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";

import clsxm from "@/lib/helpers/clsxm";

import Button from "../buttons/Button";

const HeaderComponent = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    return setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={clsxm(
        "fixed top-0 z-50 w-full bg-white/10 p-0.5",
        "shadow-sm shadow-darkpurple-50 backdrop-blur-sm",
        "dark:bg-darkpurple-700/10 dark:shadow-darkpurple-700"
      )}
    >
      <div
        className={clsx(
          "flex items-center justify-between",
          "mx-auto h-14 max-w-2xl px-2 md:px-1"
        )}
      >
        <h5 className="font-bold text-black dark:text-white">QR Generator</h5>
        <Button
          variant="outline"
          className={clsxm(
            "dark:border-white dark:text-white dark:hover:bg-gray-500",
            "hover:border-black hover:bg-gray-200",
            "border-black p-2 text-black",
            "rounded-full transition hover:rotate-45"
          )}
          onClick={() => handleChangeTheme()}
        >
          {resolvedTheme === "light" ? (
            <BiMoon size={20} />
          ) : (
            <BiSun size={20} />
          )}
        </Button>
      </div>
    </header>
  );
};

export default HeaderComponent;
