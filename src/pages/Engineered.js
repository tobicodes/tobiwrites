import React from "react";

export const EngineeringPage = ({}) => {
  return (
    <div className="engPageContainer">
      <HeaderText>making things makes things better (sometimes)</HeaderText>

      <p>
        {" "}
        I like to build things that solve users’ problems and are delightful to
        use. This can take many forms — sometimes I’m automating a process that
        was previously manual and required many painful steps. Other times, I’m
        making it possible for someone to do something that wasn’t possible
        before.{" "}
      </p>

      <p>
        I love software because it’s an unparalleled change agent which we can
        wield for good. Software can extinguish boring, painful, monotonous
        tasks. Software can provide personalised educational experiences that
        adapt teaching methods to a student’s preferred learning style. Software
        can make it easy for public officials to model and figure out the
        efficacy of different public policy ideas. Software can help biologists
        design new therapeutics and cures for germline mutations. Software can
        do a lot of good if we make it happen.{" "}
      </p>

      <p>
        In 2016, I was fascinated by the prospect of “synthetic biology” (the
        field of designing microbes to be mini-factories that churn out drugs,
        essential chemicals and greener fuels). The idea of being able to
        essentially program life to solve vexing issues like terrible diseases,
        climate change and food shortages was magic to me. I still think this is
        the future. But after a quick sojourn working for a biotech startup, I
        realized that while I love what biotech can do, working in the lab is a
        bit too slow and monotonous for my taste. This may not be a universal
        truth but that was my experience. The appeal of software kept tugging at
        me — the pace at which things change, the way anyone can learn anything
        and just get moving, the fact that I can build products that make me
        money as I sleep, the fact that I did not need a PhD, the instant
        feedback loop I get while building products, the fact that I’m between
        the human and the machine — these were far too alluring for me to
        resist. So I took a detour into software engineering. Maybe one day I’ll
        find a way to combine software engineering and biotech in a way to helps
        people. We’ll see
      </p>

      <p>
        <strong>Short but necessary rant</strong> - Software engineers spend too
        much time discussing the tools, frameworks and languages and too little
        time discussing so called “soft-skills”. As long as software is being
        made for humans to use, we need far better communication within product
        engineering teams and more empathy for how our users interact with their
        software. Your users don’t care if you used TypeScript or vanilla
        JavaScript - they care about the product experience and you can use
        either tool to make a good product. So focus on that instead.
      </p>
    </div>
  );
};

const HeaderText = ({ children, size = "md", textAlign = "center" }) => {
  // TODO use size to determine css className and put this in some util folder
  return (
    <h1
      style={{
        fontWeight: "700",
        fontSize: "54px",
        marginBottom: "32px",
        textAlign: textAlign,
      }}
    >
      {children}
    </h1>
  );
};

const ExternalLink = ({ href, children }) => {
  return (
    <a
      style={{
        // color: "#f78978",
        // color: "#DE705F",
        color: "chocolate",
        fontSize: `calc(0vw + 1rem)`,
        textDecoration: "underline",
      }}
      className="tbd"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
