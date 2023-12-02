import TextTag from "@ui/TextTag";
import StatsContent from "@components/StatsContent";
import BasicDiv from "@ui/BasicDiv";
import Divider from "@ui/Divider";

const About = () => {
  return (
    <BasicDiv>
      <h2 className="text-xl md:text-2xl font-bold text-white">Crafting Code and Content</h2>
      <Divider/>
      <p className="mt-4">
        I work as a software developer during the day, and at night, I
        transition into a content creator. I specialize in crafting educational
        content for developers, focusing on topics such as{" "}
        <TextTag text="backend development" logo={undefined} />,{" "}
        <TextTag text="DevOps" logo={undefined} />, and{" "}
        <TextTag text="Software Development" logo={undefined} />. My content
        spans diverse formats, encompassing blog posts, videos, tweets,
        conference talks, and workshops. Delve into some of my preferred
        creations highlighted below.
      </p>
      <StatsContent />
    </BasicDiv>
  );
};

export default About;