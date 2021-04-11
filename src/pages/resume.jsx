import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Typography from "../components/typography";

export default function ResumePage() {
  return (
    <Layout>
      <SEO title="Resume" />
      <Typography variant="h1">Resume</Typography>
      <Typography variant="p">Hi, I’m Tyler Benfield.</Typography>

      <Typography variant="p">
        I’m currently a Software Engineer at SentryOne in Charlotte, NC. I am
        lucky to be able to work with a team of brilliant individuals that
        challenge me to learn new things and improve every day. Outside of work,
        I enjoy experimenting with and learning new technologies and frameworks
        to stay up-to-date on where the industry is headed and how we can
        continue to progress forward. I also have a few side projects that I
        work on when I can and I enjoy working on cars as well.
      </Typography>

      <Typography variant="p">
        If you’d like to chat, you can reach me at{" "}
        <a
          href="mailto:tyler@tylerbenfield.me"
          rel="noopener noreferrer"
          target="_blank"
        >
          tyler@tylerbenfield.me
        </a>
        .
      </Typography>

      <section>
        <Typography variant="h2" id="interesting-topics">
          Areas of Interest
        </Typography>
        <Typography variant="p">
          Some current topics I find particularly interesting are GraphQL and
          Web Assembly. I have implemented several GraphQL APIs and have found
          that schema and introspection provide for some amazing tooling and
          workflows. I have yet to build a product with WebAssembly, but I am
          following a few projects and look forward to using it myself once I
          find the right project.
        </Typography>

        <Typography variant="p">
          I closely follow the React community and I am working to increase my
          participation and contribution. Having done React development since
          2015, I have seen the library mature and the community surrounding it
          reach an monumental size. I’m always impressed by how the maintainers
          consider real-world applications in any decisions they make,
          particularly by focusing on backwards compatibility and opt-in new
          features.
        </Typography>

        <Typography variant="p">
          As for languages, my favorite is Go for its performance and
          straightforward syntax, but I rarely have the opportunity to use it
          professionally. I have spent the last few years deep in TypeScript and
          have found it to be the most powerful type system I have personally
          worked with. I've recently started learning Rust and look forward to
          diving further into it.
        </Typography>
      </section>

      <section>
        <Typography variant="h2" id="technical-skills">
          Technical Skills
        </Typography>

        <section>
          <Typography variant="h3" id="languages">
            Languages
          </Typography>
          <Typography variant="p">
            I've worked with a number of languages and have studied many more.
            Of course, I wouldn't say I'm an expert in all of them, but I'll
            mention a few.
          </Typography>
          <ul>
            <li>Expert in JavaScript, TypeScript, C#, SQL, CSS</li>
            <li>Interested in Go, Rust, and Reason</li>
            <li>Not interested in working with PHP, Java, Ruby, or Swift</li>
          </ul>
        </section>

        <section>
          <Typography variant="h3" id="software-technologies">
            Software &amp; Technologies
          </Typography>
          <Typography variant="p">
            Being a full-stack developer, I've also worked with a variety of
            technologies. I'll name-drop a few in particular.
          </Typography>
          <ul>
            <li>Databases: SQL Server and Dgraph</li>
            <li>Frontend libraries: React and Vue.js</li>
            <li>Backend frameworks: ASP.NET, Express, and GraphQL</li>
            <li>Testing libraries: Jest, react-testing-library, and MSTest</li>
            <li>Build tools: Webpack, Parcel, and Snowpack</li>
            <li>Hosting: Docker, Azure, Google Cloud, Firebase, and Netlify</li>
          </ul>
        </section>
      </section>

      <section>
        <Typography variant="h2" id="projects">
          Projects
        </Typography>

        <section>
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
            https://tylerbenfield.me/projects/abundantia
          </a>
        </section>

        <section>
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
            https://tylerbenfield.me/projects/khepri
          </a>
        </section>
      </section>

      <section>
        <Typography variant="h2" id="work-history">
          Work History
        </Typography>

        <section>
          <Typography variant="h3" id="senior-software-developer">
            Senior Software Development Engineer
          </Typography>
          <Typography variant="p">
            <em>SentryOne - Charlotte, NC</em>
            <br />
            September 2018 - Present
          </Typography>
          <Typography variant="p">
            At SentryOne I have been migrating the flagship SQL Sentry product
            into the web with SentryOne Portal (self-hosted) and SentryOne
            Monitor (SaaS). It has been a very exciting environment, full of
            difficult technical challenges and brilliant engineers. Outside of
            normal coding responsibilities, I have hosted a series of talks on
            React, TypeScript, and general web development for the engineering
            department.
          </Typography>
        </section>

        <section>
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
            gain experience in all roles of software development including
            requirements gathering, working with legacy systems, adopting new
            technologies, and monitoring production systems. I grew fast there,
            and I was fortunate to become the lead engineer and architect for
            JobPro, a SaaS business management product tailored to
            subconstractors.
          </Typography>
        </section>

        <section>
          <Typography variant="h3" id="software-engineering-intern">
            Software Engineering Intern
          </Typography>
          <Typography variant="p">
            <em>Penske Racing - Mooresville, NC</em>
            <br />
            May 2011 - August 2011
            <br />
            December 2011 - January 2012
            <br />
            May 2012 - August 2012
            <br />
            December 2012 - January 2013
          </Typography>
          <Typography variant="p">
            Penske Racing was my first chance to write code professionally. It
            perfectly combined two of my passions: software engineering and
            mechanical engineering. I was given the opportunity to build several
            in-house utilities including mobile apps for trackside data
            collection, desktop apps for comparing 3D scans, and various utility
            libraries.
          </Typography>
        </section>
      </section>

      <section>
        <Typography variant="h2" id="education">
          Education
        </Typography>

        <section>
          <Typography variant="h3" id="georgia-institute-of-technology">
            Georgia Institute of Technology
          </Typography>
          <Typography variant="p">Spring 2014 - Spring 2018</Typography>

          <ul>
            <li>M.S., Computer Science</li>
            <li>Part of inaugural OMSCS cohort</li>
          </ul>
        </section>

        <section>
          <Typography variant="h3" id="wingate-university">
            Wingate University
          </Typography>
          <Typography variant="p">Fall 2009 - Spring 2013</Typography>

          <ul>
            <li>B.S., Mathematics / Computer Science</li>
            <li>
              Four-time President’s List recipient and consistent Dean’s List
              recipient
            </li>
            <li>Volunteered as Peer Mentor to guide incoming freshman</li>
            <li>
              Chapter President of the Theta Epsilon Chapter of Delta Sigma Phi
              Fraternity
            </li>
          </ul>
        </section>
      </section>
    </Layout>
  );
}
