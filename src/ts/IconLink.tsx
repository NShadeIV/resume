import React, { ReactNode } from "react";
import { NakedA } from "./NakedA";

export const IconLink = ({
  url,
  icon,
  alt,
  className,
  children
}: {
  url?: string;
  icon: string;
  alt: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <>
      <NakedA href={url} className={"icon " + className} target="_blank">
        <i className={icon} />
        <span className="hidden">{alt}</span>
      </NakedA>
      <NakedA href={url} className={"link " + className} target="_blank">
        {children}
      </NakedA>
    </>
  );
};
