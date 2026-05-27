import { useState } from "react";
import {
  jianwei,
} from "../assets/index"; // 路径根据实际调整
import CvNotice from "./CvNotice";

const Bio = () => {
  const [showCv, setShowCv] = useState(false);
  return (
  <div className="md:flex md:flex-row">
    <div>
      <img
        className="w-full md:w-60"
        src={jianwei}
        alt="Jianwei Li"
      />
    </div>
    <div className="mt-5 md:mt-0 flex-1 ml-3 font-semibold text-sm text-justify">
      <p>
        Hi! I am currently a PhD student at <a className="text-blue-800" href="https://www.ncsu.edu/">North Carolina State University</a>, under the guidance of <a className="text-blue-800" href="https://jungeunkim.wordpress.ncsu.edu/">Prof. JUNG-EUN KIM</a>. Previously, I worked as a machine learning scientist in <a className="text-blue-800" href="#">Moffett AI</a>, and was guided by the chief scientist and co-founder of Moffett.AI: <a className="text-blue-800" href="http://ianyen.site/">Ian En-Hsu Yen</a>. Before that, I got my master's degree from the CS department of <a className="text-blue-800" href="https://www.sjsu.edu/">San Jose State University</a> in 2021 and was advised by <a className="text-blue-800" href="http://www.cs.sjsu.edu/~stamp/cv/mss.html">Prof. Mark Stamp</a>. I earned my bachelor's degree from  <a className="text-blue-800" href="https://en.sdu.edu.cn/">Shandong University</a> in 2016.
      </p>
      <p className="mt-3">
        {/* I am actively looking for the 2026 summer intern opportunities in the area of Artificial Intellgence, especially the directions of AI Safety and AI Efficiency. */}
        Currently, I am a Research Scientist Intern at the <a href="" className="text-blue-800 font-bold"> TikTok NLP Trust & Safety (TNS)</a> team for Summer 2026. Previously, in Summer 2025, I interned with <a href="" className="text-blue-800 font-bold">TikTok Responsible Recommendation Systems (RRS)</a> team, where I worked on safety-aware recommendation for multimodal LLM.
      </p>
      {/* <p className="mt-1">
        I am also actively looking for the collabrating opportunities in the feild of <span className="text-red-600">AI Safety</span> and <span className="text-red-600">Efficient AI</span> from Industry, especially the direction of <span className="text-red-600">Shadow LLM</span>.
      </p> */}
      <p className="mt-6"><button type="button" onClick={() => setShowCv(true)} className="text-blue-800 hover:underline bg-transparent border-0 p-0 font-inherit cursor-pointer">CV</button> / <a className="text-blue-800" href="https://scholar.google.com/citations?user=6lFRe2MAAAAJ&hl=en&authuser=2">Google Scholar</a> / <a className="text-blue-800" href="https://github.com/mexiQQ" target="_blank" rel="noopener noreferrer">GitHub</a> / <a className="text-blue-800" href="https://www.linkedin.com/in/fourteenljw">LinkedIn</a> / <a className="text-blue-800" href="https://twitter.com/ljw040426">Twitter</a></p>

      <p className="mt-1"><a className="text-gray-400" href="https://shadow-llm.com/" target="blank">Shadow LLM Guardians</a></p>
    </div>
    <CvNotice open={showCv} onClose={() => setShowCv(false)} />
  </div>
  );
};

export default Bio;
