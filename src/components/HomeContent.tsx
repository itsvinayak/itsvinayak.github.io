import { lazy } from "react";
const Image = lazy(() => import("next/image"));
const TextTag = lazy(() => import("@ui/TextTag"));

const HomeContent = () => {
  return (
    <>
      <h1 className="italic subpixel-antialiased md:mt-4 font-extrabold md:text-4xl tracking-wide leading-relaxed hidden md:block">
        hey, I&#39;m Vinayak &nbsp;
        <Image
          src="/Hi.gif"
          alt="hi"
          width={9}
          loading={"lazy"}
          height={10}
          data-nimg="1"
          className="inline-block bg-transparent w-12 h-10"
        />
      </h1>
      <p className="text-md mt-5 my-0">
        I&#39;m a tech enthusiast with a passion for solving complex problems and
        developing innovative solutions.
        <br />
        <br />
        My expertise lies in{" "}
        <TextTag text="Python (Flask/Django, Selenium)" logo={""} /> and
        <TextTag
          text="JavaScript
        (Node.js, Loopback, Node-RED)"
          logo={""}
        />{" "}
        for backend design and development. I have a proven track record of
        designing and implementing scalable and efficient solutions that meet
        business objectives.
      </p>
    </>
  );
};

export default HomeContent;
