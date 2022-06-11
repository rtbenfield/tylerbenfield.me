import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Typography from "../components/typography";
import styles from "./resume.module.css";

/** @type{React.HTMLAttributes<HTMLElement>["style"]} */
const avoidPageBreak = { pageBreakInside: "avoid" };

export default function ResumePage() {
  return (
    <Layout className={styles.root}>
      <SEO title="Resume" />
      <Typography srOnly variant="h1">
        Resume
      </Typography>
      <Typography variant="p">
        Hi, I’m Tyler Benfield. My goal is to amplify my impact on the world by
        empowering engineers to do their best work.
      </Typography>

      <Typography variant="p">
        I’m currently a software engineer at Truepill where I'm working to
        modernize healthcare. Outside of work, I have a few personal projects
        that experiment with new ideas and solve some challenges I've
        encountered. I also hike, work on cars, and play a few instruments.
      </Typography>

      <Typography variant="p">
        I have a breadth of experience designing, building, hosting, and
        supporting SaaS products. My knowledge is deepest in the web platform
        and I stay aware of new standards as they are proposed. I also enjoy
        mentoring, improving processes, and ensuring every contributor receives
        recognition for good work. I once heard that 10x engineers aren't those
        that deliver 10x more code, but those that multiply their impact by
        supporting others. I strive for that and encourage others to do the
        same.
      </Typography>

      <section>
        <Typography variant="h2" id="core-values">
          Core Values
        </Typography>
        <div className={styles.panel}>
          <section>
            <Typography variant="h3">Empower Others</Typography>
            <Typography variant="p">
              Empowering others takes many forms. It can be mentoring others,
              providing equipment, or removing blockers. Most importantly, it is
              about knowing when to let go and trust your team. Incredible
              accomplishments come from empowered people.
            </Typography>
          </section>
          <section>
            <Typography variant="h3">Humble Confidence</Typography>
            <Typography variant="p">
              Be proud of what you know, but never lose sight of what you have
              yet to learn. Mentorship is not a one-way street. Encourage others
              to ask questions and challenge your opinions. Having the answer is
              good; <em>empowering</em> others to take the win is better.
            </Typography>
          </section>
          <section>
            <Typography variant="h3">Chart New Paths</Typography>
            <Typography variant="p">
              Explore new ideas. Ask why. Don't settle for the status quo if you
              think a better way exists. Try it compare it, and, good or bad,
              learn from the results. Failure on one path may be the success of
              another.
            </Typography>
          </section>
        </div>
      </section>

      <section>
        <Typography variant="h2" id="technical-skills">
          Professional Skills
        </Typography>

        <section>
          <Typography variant="h3" id="languages">
            Languages
          </Typography>
          <Typography variant="p">
            As a polyglot and language enthusiast, I've become familiar with
            many languages. I believe familiarizing with a variety of languages
            across different domains also deepens our understanding of those we
            are most comfortable in.
          </Typography>
          <ul>
            <li>Expert in JavaScript, TypeScript, CSS, C#, and SQL</li>
            <li>Familiarity in Go, Python, and Rust</li>
          </ul>
        </section>

        <section>
          <Typography variant="h3" id="software-technologies">
            Software and Technologies
          </Typography>
          <Typography variant="p">
            I've had the privilege of working with a range of technologies
            throughout the stack. The list is too long to mention and I'm
            certainly not an expert at them all, but I am confident when
            discussing any of the below.
          </Typography>
          <ul>
            <li>Databases: SQL Server, PostgreSQL, and Firestore</li>
            <li>Frontend libraries: React and Vue.js</li>
            <li>Backend frameworks: Next.js, Remix, ASP.NET, and GraphQL</li>
            <li>Testing: Jest, React Testing Library, and MSTest</li>
            <li>Hosting: Google Cloud Platform, Docker, Azure, Deno, and Netlify</li>
          </ul>
        </section>

        <section>
          <Typography variant="h3" id="leadership">
            Collaboration, Product, and Leadership
          </Typography>
          <Typography variant="p">
            I believe that cross-functional, highly collaborative teams produce
            the highest quality software. Amazing things can happen when the
            team is unified and understands the value of the work they do.
          </Typography>
          <ul>
            <li>
              Comfortable organizing and leading meetings across departments to
              ensure a cooperative culture.
            </li>
            <li>
              Experience working through product designs and business
              requirements to conduct estimates, ROI discussions, resourcing,
              and roadmap planning.
            </li>
            <li>
              Passion for supporting my team in their career journey through
              mentorship and tasks that prioritize technical growth.
            </li>
          </ul>
        </section>
      </section>

      <section>
        <Typography variant="h2" id="work-history">
          Work Experience
        </Typography>

        <section style={avoidPageBreak}>
          <Typography variant="h3" id="staff-software-engineer">
            Staff Software Engineer
          </Typography>
          <Typography variant="p">
            <em>Truepill - Remote</em>
            <br />
            August 2021 - Present
          </Typography>
          <Typography variant="p">
            Truepill allowed me to extend my technical leadership role to a new
            level. I concurrently provided oversight to four teams across
            multiple products totaling 40+ engineers. I architected greenfield
            systems, improved developer efficiency, and ensured our delivery
            teams met the timelines committed to our business. I was influential
            in designing a new, serverless cloud architecture that improved
            sustainability, monitoring, and observability. To support our hosted
            solutions, I implemented an SLO-based on-call approach that resulted
            in fewer than one incident per weekly rotation while maintaining our
            SLAs.
          </Typography>
        </section>

        <section style={avoidPageBreak}>
          <Typography variant="h3" id="senior-software-engineer">
            Senior Software Engineer
          </Typography>
          <Typography variant="p">
            <em>SentryOne (acquired by SolarWinds) - Charlotte, NC</em>
            <br />
            September 2018 - August 2021
          </Typography>
          <Typography variant="p">
            At SentryOne, I migrated the flagship SQL Sentry product into the
            web with SentryOne Portal (self-hosted) and SentryOne Monitor (SaaS).
            It was an exciting environment, full of complex technical challenges
            and brilliant engineers. Outside of typical coding responsibilities,
            I hosted a series of talks on React, TypeScript, and general web
            development for the engineering department.
          </Typography>
        </section>

        <section style={avoidPageBreak}>
          <Typography variant="h3" id="solutions-engineer">
            Solutions Engineer
          </Typography>
          <Typography variant="p">
            <em>Standpoint Technologies - Huntersville, NC</em>
            <br />
            May 2013 - August 2018
          </Typography>
          <Typography variant="p">
            Standpoint Technologies was the launching point of my career out of
            college. It was a small, fast-paced environment where I was able to
            gain experience in all roles of software development, including
            requirements gathering, working with legacy systems, adopting new
            technologies, and monitoring production systems. I grew fast there,
            and I was fortunate to become the lead engineer and architect for
            JobPro, a SaaS business management product tailored to
            subcontractors.
          </Typography>
        </section>

        <section style={avoidPageBreak}>
          <Typography variant="h3" id="software-engineering-intern">
            Software Engineering Intern
          </Typography>
          <Typography variant="p">
            <em>Penske Racing - Mooresville, NC</em>
            <br />
            May 2011 - January 2013
          </Typography>
          <Typography variant="p">
            Penske Racing was my first chance to write code professionally. It
            perfectly combined two of my passions: software engineering and
            mechanical engineering. I built several in-house utilities,
            including mobile apps for trackside data collection, desktop apps
            for comparing 3D scans, and various utility libraries.
          </Typography>
        </section>
      </section>

      <section style={avoidPageBreak}>
        <Typography variant="h2" id="education">
          Education
        </Typography>

        <section style={avoidPageBreak}>
          <Typography variant="h3" id="georgia-institute-of-technology">
            M.S., Computer Science
          </Typography>
          <Typography variant="p">
            <em>Georgia Institute of Technology</em>
            <br />
            Spring 2014 - Spring 2018
          </Typography>
        </section>

        <section style={avoidPageBreak}>
          <Typography variant="h3" id="wingate-university">
            B.S., Mathematics / Computer Science
          </Typography>
          <Typography variant="p">
            <em>Wingate University</em>
            <br />
            Fall 2009 - Spring 2013
          </Typography>
        </section>
      </section>

      <section style={avoidPageBreak}>
        <Typography variant="h2" id="projects">
          Projects
        </Typography>

        <section style={avoidPageBreak}>
          <Typography variant="h3" id="projects-abundantia">
            Abundantia
          </Typography>
          <Typography variant="p">
            Abundantia is an app I built for visualizing different loan payment
            scenarios and planning my mortgage. I found it valuable and thought
            others could benefit from it as well. Abundantia tends to be my
            go-to app for trying new technologies, but it is currently written
            in TypeScript with React and hosted in Firebase.
          </Typography>
          <a
            href="https://tylerbenfield.me/projects/abundantia"
            rel="noreferrer noopener"
            target="_blank"
          >
            tylerbenfield.me/projects/abundantia
          </a>
        </section>

        <section style={avoidPageBreak}>
          <Typography variant="h3" id="projects-khepri">
            Khepri
          </Typography>
          <Typography variant="p">
            Khepri is an experiment in next-gen JavaScript build tooling that
            runs on the Web Platform. Khepri isn't a single project, but a suite
            of experiments that share the philosophy of encouraging modern web
            development with a local-first approach, yet all capable of running
            in any spec-compliant browser or runtime.
          </Typography>
          <a
            href="https://tylerbenfield.me/projects/khepri"
            rel="noreferrer noopener"
            target="_blank"
          >
            tylerbenfield.me/projects/khepri
          </a>
        </section>
      </section>
    </Layout>
  );
}
