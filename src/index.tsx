import React from "react";
import { hydrate, render } from "react-dom";
import { Helmet } from "react-helmet";

import "./css/index.scss";
import { Header } from "./ts/Header";
import { IconLink } from "./ts/IconLink";
import { Section } from "./ts/Section";

const App = () => {
  enum Skill { CATEGORY, STRONG, REGULAR };
  let navLinkRow = 1;
  return (
    <div className="app">
      
      <Helmet>
          <html lang="en"/>
          <title itemProp="name" lang="en">Fabiny, Andrew N - Resume</title>

          <meta name="description" content="Resume for Andrew N Fabiny - a remote web developer based primarily in Cleveland, OH and the San Francisco Bay area." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          <meta property="og:title" content="Andrew N Fabiny's Resume" />
          <meta property="og:type" content="profile" />
          <meta property="og:url" content="http://www.andrewnfabiny.com" />
          <meta property="og:description" content="Web Developer from Cleveland, OH and the SF Bay." />
          <meta property="og:locale" content="en_US" />
          <meta property="profile:first_name" content="Andrew" />
          <meta property="profile:last_name" content="Fabiny" />
          <meta property="profile:username" content="andrewnfabiny" />
          <meta property="og:site_name" content="Andrew N Fabiny" />

          <link rel="canonical" href="https://www.andrewnfabiny.com"/>

          <script src="https://kit.fontawesome.com/daeb3e1490.js" type="text/javascript"></script>
          <noscript>You need to enable JavaScript to run this app.</noscript>
      </Helmet>

      <Header />
      <Header />

      <main>
        <div className="label skillslabel">Skills</div>
        <section className="skills">
          {Object.entries({
            "Front-end": Skill.CATEGORY,
            
            "Javascript": Skill.STRONG,
            "TypeScript": Skill.REGULAR,
            "React Hooks": Skill.REGULAR,
            "jQuery": Skill.REGULAR,
            "Redux": Skill.REGULAR,
            
            "CSS": Skill.STRONG,
            "SCSS": Skill.REGULAR,
            "Responsive Design": Skill.REGULAR,
            
            "Semantic HTML": Skill.REGULAR,
            "i18n": Skill.REGULAR,
            "SEO": Skill.REGULAR,
            "GTM": Skill.REGULAR,

            "NPM": Skill.REGULAR,
            "Yarn": Skill.REGULAR,


            "Back-end": Skill.CATEGORY,

            "Java": Skill.STRONG,
            "PHP": Skill.REGULAR,

            "REST": Skill.REGULAR,
            "Redis": Skill.REGULAR,
            "RabbitMQ": Skill.REGULAR,

            "SQL": Skill.STRONG,
            "MSSQL T-SQL": Skill.REGULAR,
            "Oracle PL/SQL": Skill.REGULAR,


            "DevOps": Skill.CATEGORY,

            "Git": Skill.REGULAR,
            "Jenkins": Skill.REGULAR,
            "CircleCI": Skill.REGULAR,

            "Agile": Skill.REGULAR
          }).map(([key, value]) => 
            value === Skill.CATEGORY ?
              <h2>{key}</h2>
            : value === Skill.STRONG ?
              <strong>{key}</strong>
            : <span>{key}</span>
          )}
        </section>

        <IconLink
          url="https://www.linkedin.com/in/andrewnfabiny/"
          icon="fab fa-linkedin"
          alt="LinkedIn"
          className={["navlink", "row-" + navLinkRow++]}
        >
          /andrewnfabiny
        </IconLink>
        <IconLink
          url="mailto:andrew.n.fabiny@gmail.com"
          icon="fas fa-envelope"
          alt="email address"
          className={["navlink", "row-" + navLinkRow++]}
        >
          andrew.n.fabiny
          <br />
          @gmail.com
        </IconLink>
        <IconLink
          url="tel:+14404970640"
          icon="fas fa-phone-alt"
          alt="phone number"
          className={["navlink", "row-" + navLinkRow++]}
        >
          +1.440.497.0640
        </IconLink>
        <IconLink
          url="https://www.google.com/maps/place/Cleveland,+OH"
          icon="fas fa-map-marker-alt"
          alt="current location"
          className={["navlink", "row-" + navLinkRow++]}
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