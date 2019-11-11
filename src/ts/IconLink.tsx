import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

import { NakedA } from "./NakedA";

export const IconLink = ({
  url,
  icon,
  alt,
  className = "",
  children
}: {
  url?: string;
  icon: IconDefinition;
  alt: string;
  className?: string | Array<string> | object;
  children: ReactNode;
}) => {
  return (
    <>
      <NakedA href={url} className={classNames("icon", className)}>
        <FontAwesomeIcon icon={icon} />
        <span className="hidden">{alt}</span>
      </NakedA>
      <NakedA href={url} className={classNames("link", className)}>
        {children}
      </NakedA>
    </>
  );
};
