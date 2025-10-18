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
  securityBeforeSafety
} from "../assets/index"; // 路径根据实际调整

const publications = [
  {
    img: securityBeforeSafety,
    authors: "Jianwei Li, Jung-Eun Kim",
    title: "Security Before Safety: A Backdoor-Centric View of LLM Output Risks in the Private AI Era",
    conf: "Preprint 2025",
    note: <><a href="https://github.com/JEKimLab/Security-before-Safety/blob/main/security-before-safety.pdf" className="text-blue-600">Position Paper</a></>
  },
  {
    img: ssah2,
    authors: "Jianwei Li, Jung-Eun Kim",
    title: "Safety Alignment Can Be Not Superficial With Explicit Safety Signals",
    conf: "ICML 2025",
    note: "Main Paper"
  },
  {
    img: depth2,
    authors: "Jianwei Li, Yijun Dong, Qi Lei",
    title: "Greedy Output Approximation: Towards Efficient Structured Pruning for LLMs Without Retraining",
    conf: "CPAL 2025",
    note: "Main Paper"
  },
  {
    img: ssah,
    authors: "Jianwei Li, Jung-Eun Kim",
    title: "Superficial Safety Alignment Hypothesis",
    conf: "Preprint 2024",
    note: "arXiv"
  },
  {
    img: privacy,
    authors: "Jianwei Li, Sheng Liu, Qi Lei",
    title: "Beyond Gradient and Priors in Privacy Attacks: Leveraging Pooler Layer Inputs of Language Models in Federated Learning",
    conf: "FL@FM-NeurIPS 2023",
    note: <>Workshop <span className="text-red-600">Oral</span></>
  },
  {
    img: robust,
    authors: "Jianwei Li, Qi Lei, Wei Cheng, Dongkuan Xu",
    title: "Towards Robust Pruning: An Adaptive Knowledge-Retention Pruning Strategy for Language Models",
    conf: "EMNLP 2023",
    note: "Main Paper"
  },
  {
    img: random,
    authors: "Jianwei Li, Weizhi Gao, Qi Lei, Dongkuan Xu",
    title: "Breaking through Deterministic Barriers: Randomized Pruning Mask Generation and Selection",
    conf: "EMNLP 2023",
    note: "Findings"
  },
  {
    img: EffiTraff,
    authors: "Shuya Li, Hao Mei, Jianwei Li, Hua Wei, Dongkuan Xu",
    title: "Toward Efficient Traffic Signal Control: Smaller Network Can Do More",
    conf: "CDC 2023",
    note: "Main Paper"
  },
  {
    img: FP8,
    authors: "Jianwei Li, Tianchi Zhang, Ian En-Hsu Yen, Dongkuan Xu",
    title: "FP8-BERT: Post-Training Quantization for Transformer",
    conf: "DCAA@AAAI 2023",
    note: "Workshop Paper"
  },
  {
    img: freeKestroke,
    authors: "Jianwei Li, Han-Chih Chang, Mark Stamp",
    title: "Free-Text Keystroke Dynamics for User Authentication",
    conf: "Cybersecurity for Artificial Intelligence",
    note: "Main Paper"
  },
  {
    img: freeKestroke2,
    authors: "Han-Chih Chang, Jianwei Li, Mark Stamp",
    title: "Machine Learning-Based Analysis of Free-Text Keystroke Dynamics",
    conf: "Cybersecurity for Artificial Intelligence",
    note: "Main Paper"
  },
  {
    img: fixKeystroke,
    authors: "Han-Chih Chang*, Jianwei Li*, Ching-Seh Wu, Mark Stamp",
    title: "Machine Learning and Deep Learning for Fixed-Text Keystroke Dynamics",
    conf: "Cybersecurity for Artificial Intelligence",
    note: "Main Paper"
  },
  {
    img: sparseDyn,
    authors: "Yan Pang, Ai Shan, Zhen Wang, Mengyu Wang, Jianwei Li, Ji Zhang, Teng Huang, Chao Liu",
    title: "Sparse‐Dyn: Sparse dynamic graph multirepresentation learning via event‐based sparse temporal attention network",
    conf: "International Journal of Intelligent Systems",
    note: "Journal Paper"
  },
  {
    img: gnnArchitectures,
    authors: "Yan Pang, Teng Huang, Zhen Wang, Jianwei Li, Poorya Hosseini, Ji Zhang, Chao Liu",
    title: "Graph Decipher: A transparent dual-attention graph neural network to understand the message-passing mechanism for the node classification",
    conf: "International Journal of Intelligent Systems",
    note: "Journal Paper"
  }
];

const Publications = () => (
  <div id="publications" className="scroll-mt-20">
    <div className="text-blue-800 text-xl font-bold">Publications</div>

    {publications.map((pub, index) => (
      <div key={index} className="py-3">
        <div className="md:flex md:flex-row flex-wrap items-center">
          <div>
            <img className="w-full md:w-48 border" src={pub.img} alt="pub" />
          </div>
          <div className="mt-5 md:mt-0 ml-3 md:ml-5 flex-1">
            <div>
              {pub.authors.split(/(Jianwei Li)/).map((part, i) =>
                part === "Jianwei Li" ? (
                  <strong key={i} className="text-black-600 font-semibold">Jianwei Li</strong>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </div>
            <div className="font-bold">{pub.title}</div>
            <div>{pub.conf}</div>
            <div>{pub.note}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Publications;
