import clsxm from "@/lib/helpers/clsxm";

import UnstyledLink, { UnstyledLinkProps } from "./UnstyledLink";

function UnderlineLink({ children, className, ...rest }: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsxm(
        "link-underline",
        "inline-flex items-center",
        "focus-visible:dashed focus:outline-hidden focus-visible:ring-3 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}

export default UnderlineLink;
