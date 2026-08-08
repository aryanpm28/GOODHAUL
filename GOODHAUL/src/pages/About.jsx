// GOODHAUL: About GOODHAUL

import InfoPage from "../components/InfoPage/InfoPage";

function About() {
  return (
    <InfoPage eyebrow="Our story" title="About GOODHAUL">
      <p>
        GOODHAUL started as a simple idea: shopping online shouldn't feel like
        guesswork. Every product on this site is tagged clearly — what it is,
        what it costs, and whether it's actually in stock — the same way a
        good corner shop would run things.
      </p>
      <p>
        We carry a tight selection across four departments — shoes,
        electronics, fashion and watches — rather than trying to be
        everything to everyone. That keeps quality control tight and makes it
        easier for you to actually find what you're after.
      </p>
      <p>
        This particular build is a frontend portfolio project: all products,
        prices and stock levels are illustrative, and no real orders are
        processed. It's meant to show what a real shopping experience could
        look like end to end.
      </p>
    </InfoPage>
  );
}

export default About;
