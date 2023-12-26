import { useContext } from "react";
import { GlobalContext } from "../context/GlobabContext";

function Home() {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div className="max-container">
      <h1 className="sm:text-xs  sm:font-light sm:leading-3 md:text-3xl md:font-black md:leading-10">
        Home
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dolores
        illum natus vero minus a. Quod molestiae quae dolore voluptates magni
        pariatur illum dignissimos recusandae repellat, tempora dolorum ea ipsa
        suscipit a temporibus repellendus sequi aut at minus consectetur officia
        fugit, mollitia doloremque! Ab accusantium, magnam corrupti
        reprehenderit suscipit amet explicabo. Quis beatae quo laboriosam
        officia voluptatum, soluta ducimus deserunt.
      </p>
    </div>
  );
}

export default Home;
