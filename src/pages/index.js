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
      <div className="bg-black	h-12 text-white">
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5">
          <div className="h-12 flex flex-row flex-wrap content-center items-baseline">
            <div className="mr-5 font-bold">Jianwei Li</div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#news">Publications</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#publications">Publications</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5 py-16">

          <div className="flex flex-row ">
            <div className="">
              <img className="w-60" src="https://img.xiaodiqiu.cn/personal/jianwei.jpg"></img>
            </div>
            <div className="flex-1 ml-3 font-semibold text-sm">
              <p>
                Hi! I am currently a machine learning scientist in <a className="text-blue-400" href="https://moffett.ai/">Moffett.AI</a>, advised by the chief scientist and co-founder of Moffett.AI: <a className="text-blue-400" href="http://ianyen.site/">Ian En-Hsu Yen</a>. Before that, I got my master degree from the CS department of San Jose State University in 2021, and advised by the <a className="text-blue-400" href="http://www.cs.sjsu.edu/~stamp/cv/mss.html">Prfo. Mark Stamp</a>.
              </p>
              <p className="mt-3 text-red-600">
                I am also actively looking for the phd opportunities in the area of Artificial Intellgence, especially the directions of Efficent AI and Generative models.
              </p>
              <p className="mt-3">
              Please send me your CV if you are interested in working with me at Moffett.AI (We plan to expand our research team in USA). <p className="underline text-red-600">Please also directly contact me on linkedin: <a href="https://www.linkedin.com/in/fourteenljw">https://www.linkedin.com/in/fourteenljw</a></p>
              </p>
              <p className="mt-2 text-gray-400">Compressor Team at Moffett AI.</p>
            </div>
          </div>

          <div className="mt-5 text-xs text-gray-600">
            <div>Address: 949 Sherwood Ave, Suite 200 Los Altos, CA 94022</div>
            <div>Email: ljw040426 AT gmail.com | jianwei.li AT moffett.ai</div>
            <div>Tel: (650) 209-5845</div>
          </div>

          <div className="mt-6">
            <div className="text-blue-800	text-xl font-bold">Research Interest</div>
            <p className="text-sm">My research focuses on the broad areas of machine learning, deep learning and their applications on computer vision and language. Specifically, I am interested in deep learning methods for efficent learning, multi-modal learning, and generative models, etc. Recently, I focus on</p>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>Wang Zhe Rong Yao (it's pinyin)</li>
                <li>Age of empires 4</li>
                <li>Genshin Impact</li>
                <li>Food</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-blue-800	text-xl font-bold">News</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>[Dec 13, 2021] Slept 24 hours.</li>
                <li>[Dec 1, 2021] Eaten 100 tons of food.</li>
                <li>[Oct 31, 2021] stay up all night  </li>
              </ul>
            </div>
          </div>

          <div id="publications">
            <div className="text-blue-800	text-xl font-bold">Recent Publications</div>
            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="http://zhiqiangshen.com/projects/FKD/FKD.png"></img>
                </div>
                <div className="ml-5">
                  <div>Jianwei Li.</div>
                  <div className="font-bold">None</div>
                  <div>None.</div>
                  <div>Project Page  |  Code & Models  |  arXiv Paper</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="http://zhiqiangshen.com/projects/FKD/FKD.png"></img>
                </div>
                <div className="ml-5">
                  <div>Jianwei Li.</div>
                  <div className="font-bold">None</div>
                  <div>None.</div>
                  <div>Project Page  |  Code & Models  |  arXiv Paper</div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="http://zhiqiangshen.com/projects/FKD/FKD.png"></img>
                </div>
                <div className="ml-5">
                  <div>Jianwei Li.</div>
                  <div className="font-bold">None</div>
                  <div>None.</div>
                  <div>Project Page  |  Code & Models  |  arXiv Paper</div>
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

          <div>
            <div className="text-blue-800	text-xl font-bold">Teaching Assistant</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>2015.9- 2016.1, Fudan University, COMP120008.02, C++ language programming</li>
              </ul>
            </div>
          </div> */}
        </div>

        <div className="h-48 bg-gray-200 text-center pt-16 text-sm text-gray-500">
          <div>© 2021 jianwei.li All rights reserved</div>
          <div>(Last update: Sep 9, 2022.)</div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
