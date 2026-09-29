import landscape from "../assets/research-landscape.svg";

const ResearchLandscape = () => (
  <section id="research-landscape" className="scroll-mt-20 mt-8" aria-labelledby="research-landscape-title">
    <h2 id="research-landscape-title" className="text-blue-800 text-xl font-bold mb-2">Research Landscape</h2>
    <figure>
      <a href={landscape} target="_blank" rel="noopener noreferrer" aria-label="Open full-size research landscape diagram">
        <img className="block w-full h-auto" src={landscape} width="1800" height="1510" alt="Research organized into AI Safety and Security and AI Efficiency, with paper titles, authors, and venues. Safety and Security covers fine-tuning, jailbreak, backdoor and privacy attack defense. Efficiency covers pruning and quantization." />
      </a>
      <figcaption className="text-right text-sm mt-1">
        <a className="text-gray-500 hover:text-blue-800 hover:underline" href={landscape} target="_blank" rel="noopener noreferrer">View full-size diagram ↗</a>
      </figcaption>
    </figure>
  </section>
);

export default ResearchLandscape;
