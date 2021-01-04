import React from "react";
import { ExternalLink, HeaderText, Text } from "../helpers";

export const SpokenPage = () => {
  return (
    <div className="engPageContainer">
      <HeaderText>waffle and babble</HeaderText>

      <Text textAlign="justify">
        I've had the pleasure to speak at a few technical conferences in my tech
        career. If you get such an opportunity, grab it with all paws. You don't
        need to be a 10X fullstack rockstar jiu jitsu developer to give a
        technical talk. Talk about what you know.
      </Text>

      <Text textAlign="justify">
        The real magic of speaking is not what you do onstage but the
        preparation you do before you grab the mic. There's a popular Eisenhower
        quote that says "plans are useless but planning is indispensable". I
        think the same applies to public speaking - your talk could be
        incredible or lukewarm but you, the speaker will immensely benefit from
        learning how to distill domain knowledge into content that can be
        absorbed by a wider audience. And then of course, if your talk is
        audaciously good, then your audience will learn new stuff. Everybody
        wins.
      </Text>

      <HeaderText textAlign="left" size="sm">
        Spoken work
      </HeaderText>

      <Text textAlign="justify">
        <ExternalLink href="https://vimeo.com/475367801">
          Hermez Pipelines - Forging the path to a delightful deployment
          experience
        </ExternalLink>{" "}
        (with Lise, SpinnakerSummit2020)
      </Text>

      <Text textAlign="justify">
        <ExternalLink href="https://youtu.be/-xsmzRTt490">
          Building easy-to-use products in a complex infrastructure world
        </ExternalLink>{" "}
        (with Lise, Dev/Color 2020)
      </Text>
      <Text textAlign="justify">
        {" "}
        <ExternalLink href="https://youtu.be/KkKSoQBp2oQ?t=1024">
          Building a CD Platform to K8s that developers love
        </ExternalLink>{" "}
        (with Euccas, Kubecon 2019)
      </Text>

      <Text textAlign="justify">
        {" "}
        <ExternalLink href="https://podcasts.apple.com/us/podcast/020-bioengineer-to-software-engineer-tobi-ogunnaike/id1363822164?i=1000413704684">
          From x to Software Engineer
        </ExternalLink>
        (Work Talk Podcast, 2018)
      </Text>
      <Text textAlign="justify">
        Most of my talks are related to the work I do for Pinterest - which is
        building a single user-facing service that helps engineers release their
        software with more quality, confidence and resilience. If you care about
        buzzwords, it involves CI/CD, Kubernetes, React, Go, Docker and a bunch
        of other things. It's been a multi-year journey and I'm learning a lot
        along this ride. In the future, I want to speak more about technology
        and its consequences on society. Hit me up if you want to collab!
      </Text>
    </div>
  );
};

// some people have found it worth their while to hear me speak. at least I
//         assume they got some benefit from hearing me babble and waffle
