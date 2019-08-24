import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Layout from "../components/layout";
import LinkList from "../components/linkList";
import SEO from "../components/seo";
import Typography from "../components/typography";
import VscodeIcon from "../components/vscodeIcon";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Typography variant="h1">Projects</Typography>

    <section>
      <Typography id="jest-test-adapter-vs-code-extension" variant="h2">
        Jest Test Adapter VS Code Extension
      </Typography>
      <LinkList>
        <li>
          <a
            href="https://github.com/rtbenfield/vscode-jest-test-adapter"
            rel="noopener noreferrer"
            target="_blank"
            title="Open Jest Test Adapter GitHub page"
          >
            <FontAwesomeIcon fixedWidth icon={faGithub} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=rtbenfield.vscode-jest-test-adapter"
            rel="noopener noreferrer"
            target="_blank"
            title="Open Jest Test Adapter VS Code Marketplace page"
          >
            <VscodeIcon />
          </a>
        </li>
      </LinkList>

      <Typography variant="p">
        After finding a few things I did not like about existing Jest VS Code
        extensions and discovering that surprisingly few existed, I began a
        project to scratch my own itch that is now a published VS Code
        extension. It is not a complete extension on its own, but an adapter to
        extend the functionality of the{" "}
        <a href="https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer">
          Test Explorer UI
        </a>{" "}
        extension by Holger Benl. It is still in an early preview, but I have
        been shocked by the number of installs and amount of feedback.
      </Typography>
    </section>

    <section>
      <Typography id="loan-rover" variant="h2">
        Loan Rover
      </Typography>
      <LinkList>
        <li>
          <a
            href="https://loan-rover.herokuapp.com"
            rel="noopener noreferrer"
            target="_blank"
            title="Open Loan Rover"
          >
            <FontAwesomeIcon fixedWidth icon={faExternalLinkAlt} size="2x" />
          </a>
        </li>
      </LinkList>

      <Typography variant="p">
        One afternoon I was looking for a website or application to help me
        compare different scenarios for paying off my mortgage faster. I found a
        plethora of sites that would show how much additional payments would
        save on interest, but none that allowed me to visually compare different
        scenarios. I turned to Google Sheets and learned to build an
        amortization table using the raw formulas rather than the built-in
        utility functions so that I could account for the additional principal
        payments. After completing the spreadsheet I realized the information
        would be better presented as a web application, so I built Loan Rover.
        Very much meant to scratch my own itch, Loan Rover is limited on
        features, but I found it very helpful.
      </Typography>
      <Typography variant="p">
        Loan Rover is free to use and only requires a Google account for
        authentication. Your first signin will provision a tenant for you and
        you can start adding as many loans as you'd like. Currently only fixed
        rate with monthly payments is supported, but I may add more options in
        the future if others find it valuable. Once you've added a loan, the
        Explore button will open a dialog where you can create various scenarios
        and visually compare them with charts. Each scenario can have multiple
        payments with varying start and end dates to accurately model how
        additional payments may fluctuate throughout the life of the loan.
        Scenarios are saved to your account so that you can return to them
        later.
      </Typography>
      <Typography variant="p">
        Loan Rover is built in React with a GraphQL backend, all hosted on
        Heroku. Google Signin was used to simplify authentication and the tokens
        acquired are sent to the backend to verify access and route requests to
        the correct tenant. In addition to being built in React, the frontend
        leverages Material-UI for pre-built components, JSS for styling, and
        Recharts for the chart visualizations. Errors are tracked and logged to
        Sentry for both the frontend and backend. Google Analytics is also used
        to keep tabs on how much traffic the application is getting.
      </Typography>
    </section>
  </Layout>
);

export default ProjectsPage;
