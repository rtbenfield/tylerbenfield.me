import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi! I'm Tyler and I empower engineers to perform their best work.</h1>

    <p>
      I've been interested in computers since I was a kid and started learning
      to code when I was 13 years old. Nothing big or amazing, but I was blown
      away at how the computer responded to the code I typed. It still amazes me
      today and it's even more incredible that the things I build are used by so
      many people; people I've never even met.
    </p>

    <p>
      That rewarding feeling is what drives me as an individual and influences
      my core values: <i>empower others</i>, practice <i>humble confidence</i>,
      and <i>chart new paths</i>.
    </p>

    <p>
      <i>Empowering others</i> is the act of setting others up for success. I
      empower others through mentoring, removing blockers, and ensuring our
      software development processes are designed for maximum success. Most
      importantly, empowering others is knowing when to let go and trust your
      team. <strong>Incredible accomplishments come from empowered people.</strong>
    </p>

    <p>
      Practicing <i>humble confidence</i> is being proud of what you know, but
      not losing sight of what you have yet to learn. I encourage my team to
      question and challenge my opinions. Mentorship is not a one-way street
      and I gain more experience every day with the help of my team. I also
      look for opportunities to step aside and let others show off. <strong>
      Having the answer is good; empowering others to take the win is better.</strong>
    </p>

    <p>
      <i>Charting new paths</i> involves exploring new ideas, asking why, and
      refusing to settle for the status quo when a better way exists. Try it
      compare it, and, good or bad, learn from the results. <strong>Failure on
      one path may be the success of another.</strong>
    </p>
  </Layout>
);

export default IndexPage;
