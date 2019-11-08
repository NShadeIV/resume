import React, { ReactNode } from "react";
import { NakedA } from "./NakedA";
import classNames from "classnames/bind";

export const IconLink = ({
  url,
  icon,
  alt,
  className = "",
  children
}: {
  url?: string;
  icon: string;
  alt: string;
  className?: string | Array<string> | object;
  children: ReactNode;
}) => {
  return (
    <>
      <NakedA href={url} className={classNames("icon", className)}>
        <i className={icon} />
        <span className="hidden">{alt}</span>
      </NakedA>
      <NakedA href={url} className={classNames("link", className)}>
        {children}
      </NakedA>
    </>
  );
};
