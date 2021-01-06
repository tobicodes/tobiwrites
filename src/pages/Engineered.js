import React from "react";
import { HeaderText, Text } from "../helpers";

export const EngineeringPage = () => {
  return (
    <div className="contentContainer">
      <h1 className="contentHeader">
        making things makes things better{" "}
        <span style={{ fontStyle: "oblique" }}>sometimes</span>
      </h1>
      {/* <HeaderText>
        making things makes things better{" "}
        <span style={{ fontStyle: "oblique" }}>sometimes</span>
      </HeaderText> */}

      <Text textAlign="justify">
        {" "}
        I like to build things that solve users’ problems and are delightful to
        use. This can take many forms — sometimes I’m automating a process that
        was previously manual and required many painful steps. Other times, I’m
        making it possible for someone to do something that wasn’t possible
        before.{" "}
      </Text>

      <Text textAlign="justify">
        I love software because it’s an unparalleled change agent which we can
        wield for good. Software can extinguish boring, painful, monotonous
        tasks. Software can provide personalised educational experiences that
        adapt teaching methods to a student’s preferred learning style. Software
        can make it easy for public officials to model and figure out the
        efficacy of different public policy ideas. Software can help biologists
        design new therapeutics and cures for germline mutations. Software can
        do a lot of good if we make it happen.{" "}
      </Text>

      <Text textAlign="justify">
        {" "}
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
      </Text>
      <Text textAlign="justify">
        <strong>Short but necessary rant</strong> - Software engineers spend too
        much time discussing the tools, frameworks and languages and too little
        time discussing so called “soft-skills”. As long as software is being
        made for humans to use, we need far better communication within product
        engineering teams and more empathy for how our users interact with their
        software. Your users don’t care if you used TypeScript or vanilla
        JavaScript - they care about the product experience and you can use
        either tool to make a good product. So focus on that instead.
      </Text>

      <Text textAlign="justify">
        <strong>ok but what do you actually do at work?</strong>
      </Text>
      <Text>um</Text>
    </div>
  );
};
