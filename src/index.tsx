import React from "react";
import { hydrate, render } from "react-dom";

import "./css/index.scss";
import { Header } from "./ts/Header";
import { Skill } from "./ts/Skill";
import { IconLink } from "./ts/IconLink";
import { Section } from "./ts/Section";

const App = () => {
  let navLinkRow = 1;
  return (
    <div className="app">
      <Header />
      <Header />

      <main>
        <div className="label skillslabel">Skills</div>
        <section className="skills">
          {Object.entries({
            Java: 5 / 5,
            JavaScript: 5 / 5,
            CSS: 5 / 5,
            SQL: 5 / 5,
            "React.js": 3 / 5,
            PHP: 3 / 5,
            Redux: 3 / 5,
            TypeScript: 2 / 5,
            NPM: 2 / 5,
            SEO: 4 / 5,
            i18n: 4 / 5,
            SASS: 5 / 5,
            REST: 4 / 5,
            Redis: 4 / 5,
            RabbitMQ: 3 / 5,
            Agile: 4 / 5,
            SOA: 3 / 5
          })
            .sort(([k1, v1], [k2, v2]) => v2 - v1 || k1.localeCompare(k2))
            .map(([key, value]) => (
              <Skill name={key} score={value} />
            ))}
        </section>

        <IconLink
          url="https://www.linkedin.com/in/andrewnfabiny/"
          icon="fab fa-linkedin"
          alt="LinkedIn"
          className={"navlink row-" + navLinkRow++}
        >
          /andrewnfabiny
        </IconLink>
        <IconLink
          url="mailto:andrew.n.fabiny@gmail.com"
          icon="fas fa-envelope"
          alt="email address"
          className={"navlink row-" + navLinkRow++}
        >
          andrew.n.fabiny
          <br />
          @gmail.com
        </IconLink>
        <IconLink
          url="tel:+14404970640"
          icon="fas fa-phone-alt"
          alt="phone number"
          className={"navlink row-" + navLinkRow++}
        >
          +1.440.497.0640
        </IconLink>
        <IconLink
          url="https://www.google.com/maps/place/Cleveland,+OH"
          icon="fas fa-map-marker-alt"
          alt="current location"
          className={"navlink row-" + navLinkRow++}
        >
          Cleveland, OH
        </IconLink>

        <hr />

        <div className="label">Experience</div>
        <Section
          title="Glassdoor"
          url="https://www.glassdoor.com"
          subtitle="Sr. Software Engineer"
          loc="San Francisco, CA"
          locUrl="https://www.google.com/maps/place/Glassdoor/@37.878905,-122.5180646,15.46z/data=!4m5!3m4!1s0x808585474cc32fbb:0x55f2b185d3603b8c!8m2!3d37.8802037!4d-122.5146823"
          dates="2014-18"
        >
          <p>
            User Engagement, Traffic Acquisition, and Internationalization
            teams. Responsible for Glassdoor awards pages, SEO, building out
            affiliate / syndication sites, implementation and features for the
            home page, job alerts and emails, and various other projects across
            the site and org.
          </p>
        </Section>

        <Section
          title="Progressive"
          url="https://www.progressive.com"
          subtitle="Sr. Software Engineer"
          loc="Cleveland, OH"
          locUrl="https://www.google.com/maps/place/Progressive+Insurance/@41.5518152,-81.4691088,13z/data=!4m8!1m2!2m1!1sProgressive+Insurance!3m4!1s0x0:0xc102fb9d158e64b3!8m2!3d41.5628106!4d-81.4437532"
          dates="2008-14"
        >
          <p>
            Developed new insurance quoting apps in HTML5, .NET MVC4, and Flash.
            Championed the use of CSS preprocessors when they were a burgeoning
            tech, created Progressive's first SASS code organization standards,
            and trained teams in modern web technology best-practices. Designed
            and lead development on critical databases, error handling systems,
            and services.
          </p>
        </Section>

        <Section
          title="Sherwin-Williams"
          url="https://www.sherwin-williams.com"
          subtitle="Software Engineer Co-op"
          loc="Cleveland, OH"
          locUrl="https://www.google.com/maps/place/Sherwin-Williams+-+Corporate+Office/@41.4973117,-81.6924784,15z/data=!4m2!3m1!1s0x0:0x1985e2eae07d7f1b?sa=X&ved=2ahUKEwjR9-SN-9vkAhVISq0KHfl-CQcQ_BIwFHoECA4QCA"
          dates="2005-08"
        >
          <p>
            Developed customer relationship management (CRM) web applications,
            and enhancements to proprietary CRM databases and thick-client
            applications. Independently developed a Blackberry (J2ME)
            application and supporting SOAP web services for executive contact
            synchronization.
          </p>
        </Section>

        <hr />

        <div className="label">Edu</div>
        <Section
          title="Computer Science, B.S."
          subtitle="Rochester Institute of Technology"
          subUrl="https://www.rit.edu/computing"
          sidebar="Math, minor"
          loc="Rochester, NY"
          locUrl="https://www.google.com/maps/place/Rochester+Institute+of+Technology/@43.0845933,-77.6765332,17z/data=!3m1!4b1!4m5!3m4!1s0x89d14c603a147e55:0xbe7eb31ed5e22c03!8m2!3d43.0845894!4d-77.6743445"
        />
      </main>
    </div>
  );
};

const rootElement = document.getElementById("root");
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}