import React from "react";

export const NakedA = ({ href, children, ...props }) =>
  href ? (
    <a href={href} {...props}>
      {children}
    </a>
  ) : (
    <span {...props}>{children}</span>
  );
