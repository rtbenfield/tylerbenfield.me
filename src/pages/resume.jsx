import React from "react";
import Layout from "../components/layout";
import LinkList from "../components/linkList";
import SEO from "../components/seo";
import Typography from "../components/typography";

const ResumePage = () => (
  <Layout>
    <SEO title="Resumé" />
    <Typography variant="h1">Resumé</Typography>
    <Typography variant="p">Hi, I’m Tyler Benfield.</Typography>

    <Typography variant="p">
      I’m currently a Software Developer at SentryOne in Charlotte, NC. I am
      lucky to be able to work with a team of brilliant individuals that
      challenge me to learn new things and improve every day. Outside of work, I
      enjoy experimenting with and learning new technologies and frameworks to
      stay up-to-date on where the industry is headed and how we can continue to
      progress forward. I also have a few side projects that I work on when I
      can and I enjoy working on cars as well.
    </Typography>

    <Typography variant="p">
      If you’d like to chat, you can reach me at{" "}
      <a href="mailto:tyler@tylerbenfield.me">tyler@tylerbenfield.me</a>.
    </Typography>

    <Typography variant="h2" id="interesting-topics">
      Interesting Topics
    </Typography>
    <Typography variant="p">
      Some current topics I find particularly interesting are GraphQL, Web
      Assembly, and CSS-in-JS. I have implemented a GraphQL API in C# and
      continue to find ways in which the schema provides opportunity that
      REST-like could not. I have yet to build a product with WebAssembly, but I
      am following a few and look forward to using it myself once I find the
      right project. The controversial nature of CSS-in-JS is something I also
      follow, although I find both sides tend to misunderstand each other.
    </Typography>

    <Typography variant="p">
      I closely follow the React community and I am working to increase my
      participation and contribution. Having done React development since 2015,
      I have seen the library mature and the community surrounding it reach an
      impressive size. I’m always impressed by how the maintainers consider
      real-world applications in any decisions they make, particularly by
      focusing on backwards compatibility and opt-in new features.
    </Typography>

    <Typography variant="p">
      As for languages, my favorite is Go for its performance and
      straightforward syntax, but I rarely have the opportunity to use it
      professionally. I have dove headfirst into TypeScript and really enjoy it.
      The next language I hope to learn is ReasonML, specifically focusing on
      ReasonReact.
    </Typography>

    <Typography variant="h2" id="technical-skills">
      Technical Skills
    </Typography>

    <Typography variant="h3" id="languages">
      Languages
    </Typography>
    <ul>
      <li>Excellent in C#, JavaScript, TypeScript, SQL, CSS</li>
      <li>Comfortable in Go, Python, Java, Less, Sass</li>
    </ul>

    <Typography variant="h3" id="software--technologies">
      Software &amp; Technologies
    </Typography>
    <ul>
      <li>Databases: SQL Server, MongoDB</li>
      <li>Libraries/Frameworks: React, Vue.js, RxJS, ASP.NET</li>
      <li>Development tools: VS Code, Visual Studio, Docker</li>
      <li>Build tools: Webpack, Parcel, Grunt, Gulp</li>
      <li>Testing libraries: Jest, react-testing-library, MSTest</li>
      <li>
        Concepts &amp; patterns: GraphQL, REST, Flux/Redux, and an abundance of
        acronyms
      </li>
    </ul>

    <Typography variant="h2" id="projects">
      Projects
    </Typography>

    <section>
      <Typography variant="h3" id="projects-abundantia">
        Abundantia
      </Typography>
      <LinkList
        link="https://abundantia-io.web.app/"
        project="abundantia"
        title="Abundantia"
      />
    </section>

    <Typography variant="h2" id="work-history">
      Work History
    </Typography>

    <Typography variant="h3" id="senior-software-developer">
      Senior Software Development Engineer
    </Typography>
    <Typography variant="p">
      <em>SentryOne - Charlotte, NC</em>
      <br />
      September 2018 - Present
    </Typography>

    <ul>
      <li>Currently working on super secret stuff. Stay tuned!</li>
    </ul>

    <Typography variant="h3" id="solutions-engineer">
      Solutions Engineer
    </Typography>
    <Typography variant="p">
      <em>Standpoint Technologies - Huntersville, NC</em>
      <br />
      May 2013 - August 2018
    </Typography>

    <ul>
      <li>Lead engineer and architect on one of two SaaS products</li>
      <li>
        Architected, developed, and deployed SaaS web applications and companion
        mobile apps
      </li>
      <li>
        Met with customers to perform requirements gathering and provided
        estimates to team
      </li>
      <li>
        Designed REST API capable of selective expansion at the database query
        level
      </li>
      <li>Implemented OAuth2 for authentication of API requests</li>
      <li>
        Utilized Microsoft SQL Server and involved with database architecture
        and management
      </li>
      <li>
        Used SQL CLR to maximize performance of complex data aggregation within
        SQL Server
      </li>
      <li>
        Developed integrations to several other systems, both desktop and
        web-based
      </li>
      <li>Designed cross-browser, responsive user interfaces</li>
      <li>
        Assisted in maintenance of existing applications in both .NET and
        classic ASP/VBScript
      </li>
    </ul>

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

    <ul>
      <li>
        Developed desktop applications for in-house use using C# and Visual
        Studio
      </li>
      <li>
        Developed mobile applications for the Android operating system using
        Java and Eclipse
      </li>
      <li>
        Developed mobile applications for Windows Mobile 6.5 using C# and Visual
        Studio
      </li>
      <li>
        Developed .NET libraries used by other developers within the department
      </li>
      <li>
        Used experience in mathematics to create and modify various algorithms,
        including those used to manipulate and compare three-dimensional objects
      </li>
      <li>
        Applications utilized SQL databases, Bluetooth, web requests, JSON, XML,
        and a variety of other technologies
      </li>
    </ul>

    <Typography variant="h2" id="education">
      Education
    </Typography>

    <Typography variant="h3" id="georgia-institute-of-technology">
      Georgia Institute of Technology
    </Typography>
    <Typography variant="p">Spring 2014 - Spring 2018</Typography>

    <ul>
      <li>M.S., Computer Science</li>
      <li>Part of inaugural OMSCS cohort</li>
    </ul>

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

    <Typography variant="h2" id="honors-and-achievements">
      Honors and Achievements
    </Typography>
    <ul>
      <li>
        Wingate University Outstanding Student in Mathematics &amp; Computer
        Science (2013)
      </li>
      <li>
        Wingate University President’s Student Advisory Council member (Fall
        2012 - Spring 2013)
      </li>
      <li>
        President of the Theta Epsilon Chapter of Delta Sigma Phi Fraternity
        (Fall 2011 - Fall 2012)
        <ul>
          <li>Wingate University Chapter of the Year 2011-2012</li>
        </ul>
      </li>
      <li>
        Vice President of the Theta Epsilon Chapter of Delta Sigma Phi
        Fraternity (Fall 2010 - Fall 2011)
        <ul>
          <li>Wingate University Chapter of the Year 2010-2011</li>
        </ul>
      </li>
    </ul>
  </Layout>
);

export default ResumePage;
