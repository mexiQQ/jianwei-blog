import {
  EffiTraff,
  fixKeystroke,
  FP8,
  freeKestroke,
  freeKestroke2,
  gnnArchitectures,
  privacy,
  random,
  robust,
  sparseDyn,
  ssah,
  ssah2,
  depth2,
  backdoor,
  secreat
} from "../assets/index"; // 路径根据实际调整
import TopicLabel from "./TopicLabel";
import { PaperLinks } from "./PaperLinks";
import nullSpace from "../assets/null-space-projection.png";
import quarantine from "../assets/expert-quarantine.png";

const publications = [
  {
    id: "null-space-projection",
    img: nullSpace,
    alt: "Partial null-space projection of a LoRA update",
    portraitSafe: true,
    authors: "Jianwei Li, Jung-Eun Kim",
    title: "Backdoor Purification for LoRA-Tuned LLMs via Null-Space Projection",
    conf: "NeurIPS 2026",
    topic: "Backdoor: Subspace Purification",
    topicTone: "subspace",
    note: <>Main Paper</>
  },
  {
    id: "expert-quarantine",
    img: quarantine,
    alt: "QES router and quarantined versus benign LoRA experts",
    cropToExperts: true,
    authors: "Jianwei Li, Min-Seon Kim, Jung-Eun Kim",
    title: "Not Suppressing or Purifying: Backdoor Containment via Expert Quarantine and Shutdown in LLMs",
    conf: "NeurIPS 2026",
    topic: "Backdoor: Architectural Containment",
    topicTone: "architecture",
    note: <>Main Paper</>
  },
  {
    img: secreat,
    authors: "Jianwei Li, Jung-Eun Kim",
    title: "Retire the “Positive Backdoor” Label—Secret Alignment Requires Strict and Systematic Evaluation",
    conf: "ICML 2026",
    topic: "Secret Alignment Evaluation",
    topicTone: "safety",
    note: <>Position Paper</>
  },
  {
    id: "bd-vax",
    img: backdoor,
    authors: "Jianwei Li, Jung-Eun Kim",
    title: "Purifying Generative LLMs from Backdoors without Prior Knowledge or Clean Reference",
    conf: "ICLR 2026",
    topic: "Backdoor: Weight Purification",
    topicTone: "weight",
    note: <>Main Paper</>,
    links: (
        <PaperLinks
          pdf="https://openreview.net/pdf?id=M7eWB695jp"
          code="https://github.com/JEKimLab/bd-vax"
          site="https://bd-vax.github.io/"
        />
    )
  },
  {
    img: ssah,
    authors: "Jianwei Li, Jung-Eun Kim",
    title: "Superficial Safety Alignment Hypothesis",
    conf: (
      <>
        ICLR 2026 <span className="text-xs font-normal text-gray-500">(arXiv 2024)</span>
      </>
    ),
    topic: "Defense Fine-tuning Attack",
    topicTone: "safety",
    note: <>Main Paper</>,
    links: (
        <PaperLinks
          pdf="https://arxiv.org/pdf/2410.10862"
          code="https://github.com/JEKimLab/SSAH"
          site="https://ssa-h.github.io/"
        />
    )
  },
  {
    img: ssah2,
    authors: "Jianwei Li, Jung-Eun Kim",
    title: "Safety Alignment Can Be Not Superficial With Explicit Safety Signals",
    conf: "ICML 2025",
    topic: "Defense Jailbreak Attack",
    topicTone: "safety",
    note: <>Main Paper</>,
    links: (
        <PaperLinks
          pdf="https://arxiv.org/pdf/2505.17072"
          code="https://github.com/JEKimLab/Safety-Alignment-With-Explicit-Safety-Signal"
          site="https://sa-ess.github.io/"
        />
    )
  },
  {
    img: privacy,
    authors: "Jianwei Li, Sheng Liu, Qi Lei",
    title: "Beyond Gradient and Priors in Privacy Attacks: Leveraging Pooler Layer Inputs of Language Models in Federated Learning",
    conf: "FL@FM NeurIPS 2023",
    topic: "Defense Privacy Leakage",
    topicTone: "privacy",
    note: <>Workshop <span className="text-red-600">Oral</span></>
  },
  {
    img: depth2,
    authors: "Jianwei Li, Yijun Dong, Qi Lei",
    title: "Greedy Output Approximation: Towards Efficient Structured Pruning for LLMs Without Retraining",
    conf: "CPAL 2025",
    topic: "Structured Pruning",
    topicTone: "efficiency",
    note: <>Main Paper</>
  },
  {
    img: robust,
    authors: "Jianwei Li, Qi Lei, Wei Cheng, Dongkuan Xu",
    title: "Towards Robust Pruning: An Adaptive Knowledge-Retention Pruning Strategy for Language Models",
    conf: "EMNLP 2023",
    topic: "Robust Pruning",
    topicTone: "efficiency",
    note: <>Main Paper</>
  },
  {
    img: random,
    authors: "Jianwei Li, Weizhi Gao, Qi Lei, Dongkuan Xu",
    title: "Breaking through Deterministic Barriers: Randomized Pruning Mask Generation and Selection",
    conf: "EMNLP 2023",
    topic: "Randomized Pruning",
    topicTone: "efficiency",
    note: <>Finding</>
  },
  {
    img: FP8,
    authors: "Jianwei Li, Tianchi Zhang, Ian En-Hsu Yen, Dongkuan Xu",
    title: "FP8-BERT: Post-Training Quantization for Transformer",
    conf: "DCAA@AAAI 2023",
    topic: "FP8 Quantization",
    topicTone: "efficiency",
    note: <>Workshop Paper</>
  },
  {
    img: EffiTraff,
    authors: "Shuya Li, Hao Mei, Jianwei Li, Hua Wei, Dongkuan Xu",
    title: "Toward Efficient Traffic Signal Control: Smaller Network Can Do More",
    conf: "CDC 2023",
    topic: "Efficient Traffic Control",
    topicTone: "efficiency",
    note: <>Main Paper</>
  },
  {
    img: freeKestroke,
    authors: "Jianwei Li, Han-Chih Chang, Mark Stamp",
    title: "Free-Text Keystroke Dynamics for User Authentication",
    conf: "Cybersecurity for Artificial Intelligence",
    topic: "Free-Text Authentication",
    topicTone: "authentication",
    note: <>Main Paper</>
  },
  {
    img: fixKeystroke,
    authors: "Han-Chih Chang*, Jianwei Li*, Ching-Seh Wu, Mark Stamp",
    title: "Machine Learning and Deep Learning for Fixed-Text Keystroke Dynamics",
    conf: "Cybersecurity for Artificial Intelligence",
    topic: "Fixed-Text Authentication",
    topicTone: "authentication",
    note: <>Main Paper (* Equal Contribution)</>
  },
  {
    img: freeKestroke2,
    authors: "Han-Chih Chang, Jianwei Li, Mark Stamp",
    title: "Machine Learning-Based Analysis of Free-Text Keystroke Dynamics",
    conf: "Cybersecurity for Artificial Intelligence",
    topic: "Keystroke Analysis",
    topicTone: "authentication",
    note: <>Main Paper</>
  },
  {
    img: sparseDyn,
    authors: "Yan Pang, Ai Shan, Zhen Wang, Mengyu Wang, Jianwei Li, Ji Zhang, Teng Huang, Chao Liu",
    title: "Sparse‐Dyn: Sparse dynamic graph multirepresentation learning via event‐based sparse temporal attention network",
    conf: "International Journal of Intelligent Systems",
    topic: "Dynamic Graph Learning",
    topicTone: "graphs",
    note: <>Journal Paper</>
  },
  {
    img: gnnArchitectures,
    authors: "Yan Pang, Teng Huang, Zhen Wang, Jianwei Li, Poorya Hosseini, Ji Zhang, Chao Liu",
    title: "Graph Decipher: A transparent dual-attention graph neural network to understand the message-passing mechanism for the node classification",
    conf: "International Journal of Intelligent Systems",
    topic: "Interpretable Graph Learning",
    topicTone: "graphs",
    note: <>Journal Paper</>
  }
];

const Publications = () => {
  return (
    <div id="publications" className="scroll-mt-20 mt-10">
      <div className="text-blue-800 text-xl font-bold mb-2">Publications</div>
      {/* 内容部分 */}
      <div id="publication-list">
        {publications.map((pub) => (
          <div key={pub.title} id={pub.id} className="py-3 scroll-mt-20">
            <div className="md:flex md:flex-row flex-wrap items-center">
              <div className="md:w-48 md:flex-shrink-0">
                <img style={pub.cropToExperts ? { aspectRatio: "1.9", objectPosition: "center 62%" } : undefined} className={pub.cropToExperts ? "block w-full md:w-48 object-cover border" : pub.portraitSafe ? "block mx-auto max-w-full w-auto h-auto max-h-64 md:max-h-48 object-contain border" : "w-full md:w-48 border"} src={pub.img} alt={pub.alt || pub.title} />
              </div>
              <div className="mt-5 md:mt-0 ml-3 md:ml-5 flex-1">
                <div>
                  {pub.authors.split(/(Jianwei Li)/).map((part, i) =>
                    part === "Jianwei Li" ? (
                      <strong key={i} className="text-black-600 font-semibold">
                        Jianwei Li
                      </strong>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </div>
                <div className="font-bold">{pub.title}</div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span>{pub.note}</span>
                  <TopicLabel tone={pub.topicTone} textColor="#000000">{pub.topic}</TopicLabel>
                </div>
                {pub.links}
                <div className="font-semibold">{pub.conf}</div>
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Publications;
