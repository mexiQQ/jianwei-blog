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
            <div className="mr-5 text-sm text-gray-300">
              <a href="#news">News</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#publications">Publications</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5 py-10">

          <div className="flex flex-row ">
            <div className="">
              <img className="w-60" src="https://github.com/mexiQQ/jianwei-blog/blob/main/src/images/jianwei.jpg?raw=true"></img>
            </div>
            <div className="flex-1 ml-3 font-semibold text-sm">
              <p>
                Hi! I am currently a machine learning scientist in <a className="text-blue-400" href="https://moffett.ai/">Moffett.AI</a>, advised by the chief scientist and co-founder of Moffett.AI: <a className="text-blue-400" href="http://ianyen.site/">Ian En-Hsu Yen</a>. Before that, I got my master degree from the CS department of San Jose State University in 2021, and advised by the <a className="text-blue-400" href="http://www.cs.sjsu.edu/~stamp/cv/mss.html">Prfo. Mark Stamp</a>.
              </p>
              <p className="mt-3 text-red-600">
                I am also actively looking for the phd opportunities in the area of Artificial Intellgence, especially the directions of Efficent AI and Generative models.
              </p>
              <p className="mt-8">
                Please send me your CV if you are interested in working with me at Moffett.AI (We plan to expand our research team in USA).
              </p>
              <p className="underline text-red-600">Please also directly contact me on linkedin: <a href="https://www.linkedin.com/in/fourteenljw">https://www.linkedin.com/in/fourteenljw</a></p>
              <p className="mt-2 text-gray-400">Compressor Team at Moffett AI.</p>
            </div>
          </div>

          <div className="mt-5 text-xs text-gray-600">
            <div>Address: 949 Sherwood Ave, Suite 200 Los Altos, CA 94022</div>
            <div>Email: ljw040426 AT gmail DOT com | jianwei.li AT moffett DOT ai</div>
            <div>Tel: (650) 209-5845</div>
          </div>

          <div className="mt-6">
            <div className="text-blue-800	text-xl font-bold">Research Interest</div>
            <p className="text-sm">My research focuses on the broad areas of machine learning, deep learning and their applications on computer vision and language. Specifically, I am interested in deep learning methods for efficent learning, multi-modal learning, and generative models, etc. Recently, I also focus on</p>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>Genshin Impact</li>
                <li>Food</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-blue-800	text-xl font-bold">News</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>[Oct 3, 2022] Publicity Chair of Workshop DCAA@2023.</li>
                <li>[Sep 13, 2022] Participate in AI Hardware Summit 2022.</li>
                <li>[Sep 7, 2022] Moffett S30 Accelerator wins MLPerf V2.1</li>
              </ul>
            </div>
          </div>

          <div id="publications">
            <div className="text-blue-800	text-xl font-bold">Recent Publications</div>

            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="https://production-media.paperswithcode.com/tasks/Screenshot_2019-11-22_at_20.47.26_NEuBvdP.png"></img>
                </div>
                <div className="ml-5 flex-1">
                  <div>Jianwei Li, Qi Lei, Wei Cheng, Dongkuan Xu</div>
                  <div className="font-bold">Towards Robust Pruning: An Adaptive Knowledge-Retention Pruning Strategy for Language Models</div>
                  <div>EMNLP 2023</div>
                  <div>Main Paper</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="https://production-media.paperswithcode.com/tasks/Screenshot_2019-11-22_at_20.47.26_NEuBvdP.png"></img>
                </div>
                <div className="ml-5 flex-1">
                  <div>Jianwei Li, Weizhi Gao, Qi Lei, Dongkuan Xu</div>
                  <div className="font-bold">Breaking through Deterministic Barriers: Randomized Pruning Mask Generation and Selection</div>
                  <div>EMNLP 2023</div>
                  <div>Findings</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="https://production-media.paperswithcode.com/tasks/Screenshot_2019-11-22_at_20.47.26_NEuBvdP.png"></img>
                </div>
                <div className="ml-5 flex-1">
                  <div>Jianwei Li, Sheng Liu, Qi Lei</div>
                  <div className="font-bold">Beyond Gradient and Priors in Privacy Attacks: Leveraging Pooler Layer Inputs of Language Models in Federated Learning</div>
                  <div>FL@FM-NeurIPS 2023</div>
                  <div>Workshop Oral</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="https://www.researchgate.net/publication/353284730/figure/fig3/AS:1046036927762433@1626406046406/Architecture-of-CNN-RNN-for-free-text-datasets_W640.jpg"></img>
                </div>
                <div className="ml-5">
                  <div>Shuya Li, Hao Mei, Jianwei Li, Hua Wei, Dongkuan Xu</div>
                  <div className="font-bold">Toward Efficient Traffic Signal Control: Smaller Network Can Do More</div>
                  <div>CDC 2023</div>
                  <div>Main Paper</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="https://www.researchgate.net/publication/353284730/figure/fig3/AS:1046036927762433@1626406046406/Architecture-of-CNN-RNN-for-free-text-datasets_W640.jpg"></img>
                </div>
                <div className="ml-5">
                  <div>Jianwei Li, Tianchi Zhang, Ian En-Hsu Yen, Dongkuan Xu</div>
                  <div className="font-bold">FP8-BERT: Post-Training Quantization for Transformer</div>
                  <div>DCAA@AAAI 2023</div>
                  <div>Workshop Paper</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="https://www.researchgate.net/publication/353284730/figure/fig3/AS:1046036927762433@1626406046406/Architecture-of-CNN-RNN-for-free-text-datasets_W640.jpg"></img>
                </div>
                <div className="ml-5">
                  <div>Jianwei Li, Han-Chih Chang, Mark Stamp</div>
                  <div className="font-bold">Free-Text Keystroke Dynamics for User Authentication</div>
                  <div>Cybersecurity for Artificial Intelligence</div>
                  <div>Paper</div>
                </div>
              </div>
            </div>
            
            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="https://www.researchgate.net/publication/353284266/figure/fig1/AS:1046035430383616@1626405689042/Accuracy-for-different-users_W640.jpg"></img>
                </div>
                <div className="ml-5">
                  <div>Han-Chih Chang, Jianwei Li, Mark Stamp</div>
                  <div className="font-bold">Machine Learning-Based Analysis of Free-Text Keystroke Dynamics</div>
                  <div>Cybersecurity for Artificial Intelligence</div>
                  <div>Paper</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="https://www.researchgate.net/publication/353056557/figure/fig3/AS:1043087363174401@1625702815525/T-SNE-of-features-of-seven-subjects_W640.jpg"></img>
                </div>
                <div className="ml-5">
                  <div>Han-Chih Chang*, Jianwei Li*, Ching-Seh Wu, Mark Stamp</div>
                  <div className="font-bold">Machine Learning and Deep Learning for Fixed-Text Keystroke Dynamics</div>
                  <div>Cybersecurity for Artificial Intelligence</div>
                  <div>Paper</div>
                </div>
              </div>
            </div>
          
            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="https://production-media.paperswithcode.com/tasks/Screenshot_2019-11-22_at_20.47.26_NEuBvdP.png"></img>
                </div>
                <div className="ml-5 flex-1">
                  <div>Yan Pang, Ai Shan, Zhen Wang, Mengyu Wang, Jianwei Li, Ji Zhang,Teng Huang, Chao Liu</div>
                  <div className="font-bold">Sparse‐Dyn: Sparse dynamic graph multirepresentation learning via event‐based sparse temporal attention network</div>
                  <div>International Journal of Intelligent Systems</div>
                  <div>Journal Paper</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="https://theaisummer.com/static/7b065b7c80568aff60f16267b6bbab17/ee604/gnn-architectures.png"></img>
                </div>
                <div className="ml-5 flex-1">
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

          <div>
            <div className="text-blue-800	text-xl font-bold">Teaching Assistant</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>2023.8-2023.12, North Carolina State University, CSC422-Fall 2023, Automated Learning and Data Analysis</li>
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
