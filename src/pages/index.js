import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Georgia, Times New Roman, Times, serif",
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div className="bg-black h-16 text-white">
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5">
          <div className="h-16 flex flex-row flex-wrap content-center items-baseline">
            <div className="mr-5 font-bold">Jianwei Li</div>
            <div className="hidden md:block mr-5 text-sm text-gray-300">
              <a href="#research">Rearch Interest</a>
            </div>
            <div className="hidden md:block mr-5 text-sm text-gray-300">
              <a href="#news">News</a>
            </div>
            <div className="hidden md:block mr-5 text-sm text-gray-300">
              <a href="#publications">Publications</a>
            </div>
            <div className="hidden md:block mr-5 text-sm text-gray-300">
              <a href="#teaching">Teaching</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a target="_blank" href="https://shadow-llm.com/">Shadow LLM</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5 py-10">
          <div className="md:flex md:flex-row">
            <div className="">
              <img className="w-full md:w-60" src="https://github.com/mexiQQ/jianwei-blog/blob/main/src/images/jianwei.jpg?raw=true"></img>
            </div>
            <div className="mt-5 md:mt-0 flex-1 ml-3 font-semibold text-sm text-justify">
              <p>
                Hi! I am a first-year PhD student at <a className="text-blue-600" href="https://www.ncsu.edu/">North Carolina State University</a>. Previously, I worked as a machine learning scientist in <a className="text-blue-600" href="https://moffett.ai/">Moffett AI</a>, and was guided by the chief scientist and co-founder of Moffett.AI: <a className="text-blue-600" href="http://ianyen.site/">Ian En-Hsu Yen</a>. Before that, I got my master's degree from the CS department of <a className="text-blue-600" href="https://www.sjsu.edu/">San Jose State University</a> in 2021 and was advised by <a className="text-blue-600" href="http://www.cs.sjsu.edu/~stamp/cv/mss.html">Prof. Mark Stamp</a>. I earned my bachelor's degree from  <a className="text-blue-600" href="https://en.sdu.edu.cn/">Shandong University</a> in 2016.
              </p>
              <p className="mt-3 text-red-600">
                I am actively looking for the 2024 summer intern opportunities in the area of Artificial Intellgence, especially the directions of AI Safety and AI Efficiency.
              </p>
              <p className="mt-1">
                I am also actively looking for the collabrating opportunities in the feild of AI Safety and AI Efficiency, especially the direction of <span className="text-red-600">Shadow LLM</span>. Please directly contact me:
              </p>
              <p><a className="text-blue-600" href="https://drive.google.com/file/d/1Rr4rilTxaDiXn8SqjS_3YZU1Sw26dTG8/view?usp=sharing">CV</a> / <a className="text-blue-600" href="https://scholar.google.com/citations?user=6lFRe2MAAAAJ&hl=en&authuser=2">Google Scholar</a> / <a className="text-blue-600" href="https://www.linkedin.com/in/fourteenljw">LinkedIn</a> / <a className="text-blue-600" href="https://twitter.com/ljw040426">Twitter</a></p>
              <p className="mt-2"><a className="text-gray-400" href="https://shadow-llm.com/" target="blank">Shadow LLM Guardians</a></p> 
            </div>
          </div>

          <div className="mt-5 text-xs text-gray-600">
            <div>Address: Raleigh, North Carolina</div>
            <div>Email: ljw040426 AT gmail DOT com | jli265 AT ncsu DOT edu</div>
            {/* <div>Tel: (650) 209-5845</div> */}
          </div>

          <div className="mt-6" id="research">
            <div className="text-blue-800	text-xl font-bold">Research Interest</div>
            <p className="text-sm text-justify">My research interest primarily focusing on the field of AI Safety & AI Efficiency. My specializations include research in data privacy, adversarial attacks, model robustness and uncertainty, as well as Large Language Model (LLM) alignment. Additionally, I am involved in designing research for model compression and red-teaming models.</p>
          </div>

          <div className="mt-6" id="news">
            <div className="text-blue-800	text-xl font-bold">News</div>
            <div className="text-sm pl-5 md:pl-10 py-3">
              <ul className="list-disc">
                <li>[Dec 2, 2023] One paper is selceted as Oral of FL@FM-NeurIPS 2023</li>
                <li>[Nov 7, 2023] Initiated the Shadow-LLM-Guardians Group: <a href="https://github.com/Shadow-LLM" className="text-blue-600">https://github.com/Shadow-LLM</a></li>
                <li>[Oct 7, 2023] Two papers are accepted by EMNLP 2023</li>
                <li>Serve as the DCAA 2023, AAAI 2024 Reviewer</li>
                <li>Serve as official affiliation of New York Universiuty</li>
                <li>[Apr 7, 2023] Publicity Chair of the International Workshop on Resource-Efficient Learning for Knowledge Discovery @KDD 2023.</li>
                <li>[Oct 3, 2022] Publicity Chair of the first workshop on DL-Hardware Co-Design for AI Acceleration @AAAI 2023.</li>
                <li>[Sep 13, 2022] Participate in AI Hardware Summit 2022.</li>
                <li>[Sep 7, 2022] Moffett S30 Accelerator wins MLPerf V2.1</li>
              </ul>
            </div>
          </div>

          <div id="publications">
            <div className="text-blue-800	text-xl font-bold">Publications</div>

            <div className="py-3">
              <div className="md:flex md:flex-row flex-wrap items-center">
                <div>
                  <img className="w-full md:w-36" src="https://github.com/mexiQQ/jianwei-blog/blob/main/src/images/privacy.png?raw=true"></img>
                </div>
                <div className="mt-5 md:mt-0 ml-3 md:ml-5 flex-1">
                  <div>Jianwei Li, Sheng Liu, Qi Lei</div>
                  <div className="font-bold">Beyond Gradient and Priors in Privacy Attacks: Leveraging Pooler Layer Inputs of Language Models in Federated Learning</div>
                  <div>FL@FM-NeurIPS 2023</div>
                  <div>Workshop <span className="text-red-600">Oral</span></div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="md:flex md:flex-row flex-wrap items-center">
                <div>
                  <img className="w-full md:w-36" src="https://github.com/mexiQQ/jianwei-blog/blob/main/src/images/robust.png?raw=true"></img>
                </div>
                <div className="mt-5 md:mt-0 ml-3 md:ml-5 flex-1">
                  <div>Jianwei Li, Qi Lei, Wei Cheng, Dongkuan Xu</div>
                  <div className="font-bold">Towards Robust Pruning: An Adaptive Knowledge-Retention Pruning Strategy for Language Models</div>
                  <div>EMNLP 2023</div>
                  <div>Main Paper</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="md:flex md:flex-row flex-wrap items-center">
                <div>
                  <img className="w-full md:w-36" src="https://github.com/mexiQQ/jianwei-blog/blob/main/src/images/random.png?raw=true"></img>
                </div>
                <div className="mt-5 md:mt-0 ml-3 md:ml-5 flex-1">
                  <div>Jianwei Li, Weizhi Gao, Qi Lei, Dongkuan Xu</div>
                  <div className="font-bold">Breaking through Deterministic Barriers: Randomized Pruning Mask Generation and Selection</div>
                  <div>EMNLP 2023</div>
                  <div>Findings</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="md:flex md:flex-row flex-wrap items-center">
                <div>
                  <img className="w-full md:w-36" src="https://github.com/mexiQQ/jianwei-blog/blob/main/src/images/EffiTraff.png?raw=true"></img>
                </div>
                <div className="mt-5 md:mt-0 ml-3 md:ml-5 flex-1">
                  <div>Shuya Li, Hao Mei, Jianwei Li, Hua Wei, Dongkuan Xu</div>
                  <div className="font-bold">Toward Efficient Traffic Signal Control: Smaller Network Can Do More</div>
                  <div>CDC 2023</div>
                  <div>Main Paper</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="md:flex md:flex-row flex-wrap items-center">
                <div>
                  <img className="w-full md:w-36" src="https://github.com/mexiQQ/jianwei-blog/blob/main/src/images/FP8.png?raw=true"></img>
                </div>
                <div className="mt-5 md:mt-0 ml-3 md:ml-5 flex-1">
                  <div>Jianwei Li, Tianchi Zhang, Ian En-Hsu Yen, Dongkuan Xu</div>
                  <div className="font-bold">FP8-BERT: Post-Training Quantization for Transformer</div>
                  <div>DCAA@AAAI 2023</div>
                  <div>Workshop Paper</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="md:flex md:flex-row flex-wrap items-center">
                <div>
                  <img className="w-full md:w-36" src="https://www.researchgate.net/publication/353284730/figure/fig3/AS:1046036927762433@1626406046406/Architecture-of-CNN-RNN-for-free-text-datasets_W640.jpg"></img>
                </div>
                <div className="mt-5 md:mt-0 ml-3 md:ml-5 flex-1">
                  <div>Jianwei Li, Han-Chih Chang, Mark Stamp</div>
                  <div className="font-bold">Free-Text Keystroke Dynamics for User Authentication</div>
                  <div>Cybersecurity for Artificial Intelligence</div>
                  <div>Paper</div>
                </div>
              </div>
            </div>
            
            <div className="py-3">
              <div className="md:flex md:flex-row flex-wrap items-center">
                <div>
                  <img className="w-full md:w-36" src="https://www.researchgate.net/publication/353284266/figure/fig1/AS:1046035430383616@1626405689042/Accuracy-for-different-users_W640.jpg"></img>
                </div>
                <div className="mt-5 md:mt-0 ml-3 md:ml-5 flex-1">
                  <div>Han-Chih Chang, Jianwei Li, Mark Stamp</div>
                  <div className="font-bold">Machine Learning-Based Analysis of Free-Text Keystroke Dynamics</div>
                  <div>Cybersecurity for Artificial Intelligence</div>
                  <div>Paper</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="md:flex md:flex-row flex-wrap items-center">
                <div>
                  <img className="w-full md:w-36" src="https://www.researchgate.net/publication/353056557/figure/fig3/AS:1043087363174401@1625702815525/T-SNE-of-features-of-seven-subjects_W640.jpg"></img>
                </div>
                <div className="mt-5 md:mt-0 ml-3 md:ml-5 flex-1">
                  <div>Han-Chih Chang*, Jianwei Li*, Ching-Seh Wu, Mark Stamp</div>
                  <div className="font-bold">Machine Learning and Deep Learning for Fixed-Text Keystroke Dynamics</div>
                  <div>Cybersecurity for Artificial Intelligence</div>
                  <div>Paper</div>
                </div>
              </div>
            </div>
          
            <div className="py-3">
              <div className="md:flex md:flex-row flex-wrap items-center">
                <div>
                  <img className="w-full md:w-36" src="https://production-media.paperswithcode.com/tasks/Screenshot_2019-11-22_at_20.47.26_NEuBvdP.png"></img>
                </div>
                <div className="mt-5 md:mt-0 ml-3 md:ml-5 flex-1">
                  <div>Yan Pang, Ai Shan, Zhen Wang, Mengyu Wang, Jianwei Li, Ji Zhang,Teng Huang, Chao Liu</div>
                  <div className="font-bold">Sparse‐Dyn: Sparse dynamic graph multirepresentation learning via event‐based sparse temporal attention network</div>
                  <div>International Journal of Intelligent Systems</div>
                  <div>Journal Paper</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="md:flex md:flex-row flex-wrap items-center">
                <div>
                  <img className="w-full md:w-36" src="https://theaisummer.com/static/7b065b7c80568aff60f16267b6bbab17/ee604/gnn-architectures.png"></img>
                </div>
                <div className="mt-5 md:mt-0 ml-3 md:ml-5 flex-1">
                  <div>Yan Pang, Teng Huang, Zhen Wang, Jianwei Li, Poorya Hosseini, Ji Zhang, Chao Liu</div>
                  <div className="font-bold">Graph Decipher: A transparent dual-attention graph neural network to understand the message-passing mechanism for the node classification</div>
                  <div>International Journal of Intelligent Systems</div>
                  <div>Journal Paper</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div>
            <div className="text-blue-800	text-xl font-bold">Academic Activities</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>Conference reviewer: ICLR 2022, NeurIPS 2021, ICML 2021, CVPR 2021, AAAI 2021, WACV 2021, NeurIPS 2020, ECCV 2020, BMVC 2020, IJCAI 2020, CVPR 2020, AAAI 2020, ICCV 2019, CVPR 2019, AAAI 2019, CVPR 2018, ACCV 2018, NIPS 2016.</li>
                <li>Journal reviewer: TPAMI, IJCV, TIP, TMM, JVCI, etc.</li>
              </ul>
            </div>
          </div> 

          <div>
            <div className="text-blue-800	text-xl font-bold">Awards and Honors</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>CVPR 2019 Doctoral Consortium travel award. Mentor: Prof. Trevor Darrell.</li>
                <li>ICLR 2019 travel award, 2019</li>
                <li>AAAI 2019 student scholarship award, 2018</li>
              </ul>
            </div>
          </div> 

          <div>
            <div className="text-blue-800	text-xl font-bold">Competitions</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>MSR-VTT Challenge (video captioning): ranked 4th in human evaluation and ranked 5th in the automatic evaluation metrics (Team leader), 2016</li>
                <li>Top 10% in Kaggle Competition of Right Whale Recognition, 2016</li>
                <li>Second Prize in DataCastle Competition of the Verification Code Recognition, 2016</li>
              </ul>
            </div>
          </div> 
          */}

          <div id="teaching">
            <div className="text-blue-800	text-xl font-bold">Teaching Assistant</div>
            <div className="text-sm pl-5 md:pl-10 py-3">
              <ul className="list-disc">
                <li>2023.8-2023.12, North Carolina State University, CSC422-Fall 2023, Automated Learning and Data Analysis</li>
                <li>2024.1-2024.5, North Carolina State University, CSC422-Spring 2023, Machine Learning</li>
              </ul>
            </div>
          </div> 
        </div>

        <div className="text-center py-10 text-sm text-gray-500" style={{background:"#f5f5f5"}}>
          <div>© 2022 jianwei.li All rights reserved</div>
          <div>(Last update: Dec 12, 2023.)</div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
