import React from "react";
import { SiGithubsponsors } from "react-icons/si";

import clsxm from "@/lib/helpers/clsxm";

import UnderlineLink from "../links/UnderlineLink";

const FooterComponent = () => {
  return (
    <footer
      className={clsxm(
        "mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-2 md:justify-between",
        "py-16 px-2 md:px-1"
      )}
    >
      <UnderlineLink href="https://yehezgun.com">
        {new Date().getFullYear()} | Yehezkiel Gunawan
      </UnderlineLink>
      <UnderlineLink
        href="https://github.com/sponsors/yehezkielgunawan"
        className="group gap-2"
      >
        <SiGithubsponsors
          size={24}
          className="text-darkpurple-400 group-hover:text-primary-500 dark:group-hover:text-primary-300"
        />
        Support me through Github Sponsor
      </UnderlineLink>
    </footer>
  );
};

export default FooterComponent;
