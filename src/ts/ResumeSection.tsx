import React, { ReactNode } from "react";
import { faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

import { NakedA } from "./NakedA";
import { IconLink } from "./IconLink";

export const ResumeSection = ({
  title,
  url,
  subtitle,
  subUrl,
  tertitle,
  sidebar,
  loc,
  locUrl,
  dates,
  children
}: {
  title: string;
  url?: string;
  subtitle: string;
  subUrl?: string;
  tertitle?: string;
  sidebar?: string;
  loc: string;
  locUrl?: string;
  dates?: string;
  children?: ReactNode;
}) => {
  return (
    <>
      <section>
        <h2>
          <NakedA href={url}>{title}</NakedA>
        </h2>
        <h3>
          <NakedA href={subUrl}>{subtitle}</NakedA>
        </h3>
        {tertitle && <h4>{tertitle}</h4>}
      </section>
      {sidebar && <small>{sidebar}</small>}
      <IconLink url={locUrl} icon={faMapMarkerAlt} alt="location">
        {loc}
      </IconLink>
      {dates && <IconLink icon={faCalendarAlt} alt="dates">{dates}</IconLink>}
      {children}
    </>
  );
};
