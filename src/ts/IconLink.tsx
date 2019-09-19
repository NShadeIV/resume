import React, { ReactNode } from "react";
import { NakedA } from "./NakedA";

export const IconLink = ({
  url,
  icon,
  className,
  children
}: {
  url?: string;
  icon: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <>
      <NakedA href={url} className={"icon " + className}>
        <i className={icon} />
      </NakedA>
      <NakedA href={url} className={"link " + className}>
        {children}
      </NakedA>
    </>
  );
};
