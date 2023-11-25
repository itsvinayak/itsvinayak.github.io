import { lazy } from "react";
const Image = lazy(() => import("next/image"));
const TextTag = lazy(() => import("@components/TextTag"));
const BasicDiv = lazy(() => import("@components/BasicDiv"));

const HomeContent = () => {
  return (
    <section>
      <BasicDiv>
        <h1 className="italic subpixel-antialiased text-2xl md:text-4xl mt-10 font-extrabold">
          hey, I&#39;m Vinayak &nbsp;
          <Image
            src="/Hi.gif"
            alt="hi"
            width={9}
            loading={"lazy"}
            height={10}
            style={{ color: "transparent", width: "4vw", height: "5vh" }}
            data-nimg="1"
            className="inline-block"
          />
        </h1>
        <p className="text-md mt-5">
          I&#39;m a tech enthusiast with a passion for solving complex problems and
          developing innovative solutions.
          <br />
          <br />
          My expertise lies in{" "}
          <TextTag text="Python (Flask/Django, Selenium)" /> and
          <TextTag
            text="JavaScript
        (Node.js, Loopback, Node-RED)"
          />{" "}
          for backend design and development. I have a proven track record of
          designing and implementing scalable and efficient solutions that meet
          business objectives.
        </p>
      </BasicDiv>
    </section>
  );
};

export default HomeContent;
