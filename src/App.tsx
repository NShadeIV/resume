import React from "react";
import { Helmet } from "react-helmet";
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

import "./css/index.scss";

import { isLive } from "./ts/util";
import { IconLink } from "./ts/IconLink";
import { ResumeHeader } from "./ts/ResumeHeader";
import { ResumeSection } from "./ts/ResumeSection";
import { SkillsSection, SkillType } from "./ts/SkillsSection";


const HeadSection = () => (
  <Helmet>
    <title itemProp="name" lang="en">Fabiny, Andrew N - Resume</title>

    <meta name="description" content="Resume for Andrew N Fabiny - a remote web developer based primarily in Cleveland, OH and the San Francisco Bay area." />

    <meta property="og:title" content="Andrew N Fabiny's Resume" />
    <meta property="og:url" content="http://www.andrewnfabiny.com" />
    <meta property="og:description" content="Web Developer from Cleveland, OH and the SF Bay." />

    <link rel="canonical" href="https://www.andrewnfabiny.com"/>
  </Helmet>
);

const SideBar = () => {
  let navLinkRow = 1;
  return <>
    <IconLink
      url="https://www.linkedin.com/in/andrewnfabiny/"
      icon={faLinkedin}
      alt="LinkedIn"
      className={["navlink", "row-" + navLinkRow++]}
    >
      /andrewnfabiny
    </IconLink>
    {(isLive &&
      <IconLink
        url="mailto:andrew.n.fabiny@gmail.com"
        icon={faEnvelope}
        alt="email address"
        className={["navlink", "row-" + navLinkRow++]}
      >
        andrew.n.fabiny
        <br />
        @gmail.com
      </IconLink>
    ) || (
      <IconLink
        icon={faEnvelope}
        alt="email address"
        className={["navlink", "row-" + navLinkRow++]}
      >
        &nbsp;<br/>&nbsp;
      </IconLink>
    )}
    {(isLive &&
      <IconLink
        url="tel:+14404970640"
        icon={faPhoneAlt}
        alt="phone number"
        className={["navlink", "row-" + navLinkRow++]}
      >
        +1.440.497.0640
      </IconLink>
    ) || (
      <IconLink
        icon={faPhoneAlt}
        alt="phone number"
        className={["navlink", "row-" + navLinkRow++]}
      />
    )}
    <IconLink
      url="https://www.google.com/maps/place/Cleveland,+OH"
      icon={faMapMarkerAlt}
      alt="current location"
      className={["navlink", "row-" + navLinkRow++]}
    >
      Cleveland, OH
    </IconLink>
  </>;
};

export const App = () => (
  <div className="app">
    <HeadSection/>

    {/* duplicated so fixed position works correctly */}
    <ResumeHeader />
    <ResumeHeader />

    <main>
      <SkillsSection skills={[
        ["Front-end", SkillType.CATEGORY],
        
        ["Javascript", SkillType.STRONG],
        ["TypeScript", SkillType.REGULAR],
        ["React Hooks", SkillType.REGULAR],
        ["jQuery", SkillType.REGULAR],
        ["Redux", SkillType.REGULAR],
        
        ["CSS", SkillType.STRONG],
        ["SCSS", SkillType.REGULAR],
        ["Responsive Design", SkillType.REGULAR],
        
        ["Semantic HTML", SkillType.REGULAR],
        ["JSP", SkillType.REGULAR],
        ["ASP.NET", SkillType.REGULAR],
        ["i18n", SkillType.REGULAR],
        ["SEO", SkillType.REGULAR],
        ["GTM", SkillType.REGULAR],

        ["NPM", SkillType.REGULAR],
        ["Yarn", SkillType.REGULAR],


        ["Back-end", SkillType.CATEGORY],

        ["Java", SkillType.STRONG],
        ["C#", SkillType.STRONG],
        ["PHP", SkillType.REGULAR],

        ["REST", SkillType.REGULAR],
        ["Redis", SkillType.REGULAR],
        ["RabbitMQ", SkillType.REGULAR],

        ["SQL", SkillType.STRONG],


        ["DevOps", SkillType.CATEGORY],

        ["Git", SkillType.REGULAR],
        ["Jenkins", SkillType.REGULAR],
        ["CircleCI", SkillType.REGULAR],

        ["Agile Methodology", SkillType.REGULAR]
      ]} />
      <SideBar />

      <hr />

      <div className="label">Experience</div>
      <ResumeSection
        title="AztecMC"
        url="https://www.aztecmc.org"
        subtitle="Co-Founder"
        loc="San Francisco, CA"
        dates="2015-present"
      >
        <p>
          Created, architected, and co-founded AztecMC&mdash;a public Minecraft server.
          Fosters a staff of 20 in the management of PR, marketing, engineering, player moderation, and driving organization mission and values.
          Designs and develops plugins in Java and Javascript to support the game server including crons and backing-up data to Amazon Simple Storage Service (Amazon S3).
        </p>
      </ResumeSection>

      <ResumeSection
        title="Glassdoor"
        url="https://www.glassdoor.com"
        subtitle="Sr. Software Engineer"
        loc="San Francisco, CA"
        locUrl="https://www.google.com/maps/place/Glassdoor/@37.878905,-122.5180646,15.46z/data=!4m5!3m4!1s0x808585474cc32fbb:0x55f2b185d3603b8c!8m2!3d37.8802037!4d-122.5146823"
        dates="2014-18"
      >
        <p>
          <h4>Traffic Acquisition</h4>
          Lead redesign of home page.
          Created alternate, dynamic, A/B test-driven site landing page to drive marketing goals.
          Developed Glassdoor awards pages: Best Places to Work, Top CEOs.
          Implemented search engine optimization (SEO) strategy including metadata required to utilize Google features still in beta.
          Built affiliate syndication job search sites hosted on Fortune, Time, and Bloomberg and job search widgets hosted on many other sites.
        </p>
        <p>
          <h4>User Engagement</h4>
          Implemented Glassdoor's in-browser push notification framework.
          Drove early design and development of Glassdoor's analytics and marketing plugin strategy using Google Tag Manager (GTM).
          Fullstack email development and testing for Glassdoor job alerts and other data-driven dynamic email campaigns.
        </p>
      </ResumeSection>

      <ResumeSection
        title="Progressive"
        url="https://www.progressive.com"
        subtitle="Sr. Software Engineer"
        loc="Cleveland, OH"
        locUrl="https://www.google.com/maps/place/Progressive+Insurance/@41.5518152,-81.4691088,13z/data=!4m8!1m2!2m1!1sProgressive+Insurance!3m4!1s0x0:0xc102fb9d158e64b3!8m2!3d41.5628106!4d-81.4437532"
        dates="2008-14"
      >
        <p>
          <h4>Auto Quoting</h4>
          Developed new insurance quoting apps using HTML5, C# / .NET MVC, and Actionscript / Flash.
          Championed the use of CSS preprocessors when they were a burgeoning technology, creating Progressive's first SASS code organization standards, and trained teams in modern web technology best-practices.
          Designed and lead development on critical services: session databases, error handling systems, and long-term storage webservices.
        </p>
      </ResumeSection>

      <ResumeSection
        title="Sherwin-Williams"
        url="https://www.sherwin-williams.com"
        subtitle="Software Engineer Co-op"
        loc="Cleveland, OH"
        locUrl="https://www.google.com/maps/place/Sherwin-Williams+-+Corporate+Office/@41.4973117,-81.6924784,15z/data=!4m2!3m1!1s0x0:0x1985e2eae07d7f1b?sa=X&ved=2ahUKEwjR9-SN-9vkAhVISq0KHfl-CQcQ_BIwFHoECA4QCA"
        dates="2005-08"
      >
        <p>
          Developed customer relationship management (CRM) web applications and enhancements using Java, PL/SQL, and a proprietary language similar to Visual Basic.
          Independently developed a Blackberry mobile application (J2ME) and supporting SOAP web services for executive contact synchronization.
        </p>
      </ResumeSection>

      <hr />

      <div className="label">Edu</div>
      <ResumeSection
        title="Computer Science, B.S."
        subtitle="Rochester Institute of Technology"
        subUrl="https://www.rit.edu/computing"
        loc="Rochester, NY"
        locUrl="https://www.google.com/maps/place/Rochester+Institute+of+Technology/@43.0845933,-77.6765332,17z/data=!3m1!4b1!4m5!3m4!1s0x89d14c603a147e55:0xbe7eb31ed5e22c03!8m2!3d43.0845894!4d-77.6743445"
      >
        <p>
          Minors in Mathematics and Literary Studies, and a concentration in computer graphics.
        </p>
      </ResumeSection>
    </main>
  </div>
);