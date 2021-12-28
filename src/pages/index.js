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
            <div className="mr-5 font-bold">Zhiqiang Shen</div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#publications">Publications</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">Group</div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5 py-16">

          <div className="flex flex-row ">
            <div className="">
              <img className="w-60" src="http://zhiqiangshen.com/me2.JPG"></img>
            </div>
            <div className="flex-1 ml-3 font-semibold text-sm">
              <p>
              I am currently a research associate fellow in Professor Eric Xing's lab as a group research lead. I was a postdoctoral researcher in Professor Marios Savvides's lab at CyLab, CMU, taking charge of ALL research-related projects in the lab (2019-2021). My research interests span machine learning, computer vision, efficient deep learning, etc. Prior to CMU, I was fortunate to be a joint-training Ph.D student (2017-2019) in UIUC/IFP group, advised by Prof. Thomas S. Huang.
              </p>
              <p className="mt-3">
              I am an incoming Research Assistant Professor in the Department of Computer Science and Engineering (CSE) at HKUST, as well as the IAS Junior Fellow from the Institute for Advanced Study of HKUST early 2022.
              </p>
              <p className="text-red-600">
              Please send me your CV if you are interested in working with me at HKUST (I plan to take a few visiting students with good research experience and background for collaborations remotely). <p className="underline">Please also refrain from emailing me (unless you're really interested in my research topics), too many inquiries will make me hard to reply to all of them.</p>
              </p>
              <p className="mt-2 text-gray-400">Department of Electrical and Computer Engineering, Carnegie Mellon University</p>
            </div>
          </div>

          <div className="mt-5 text-xs text-gray-600">
            <div>5000 Forbes Avenue, Pittsburgh, PA, 15213</div>
            <div>Email: zhiqiangshen0214 AT gmail.com | zhiqians AT andrew.cmu.edu</div>
            <div>shen54 AT illinois.edu | zhiqiangshen13 AT fudan.edu.cn</div>
          </div>

          <div className="mt-12">
            <div className="text-blue-800	text-xl font-bold">Research Interest</div>
            <p className="text-sm">My research focuses on the broad areas of machine learning, deep learning and their applications on computer vision and language. Specifically, I am interested in deep learning methods for object detection, fine-grained recognition, image/video captioning, domain adaptation, etc. Recently, I focus on</p>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-blue-800	text-xl font-bold">News</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>[Dec 13, 2021] New: I will give a talk/lecture on 2d3d.ai invited by Peter Naftaliev to systematically introduce our recent works on Knowledge Distillation. Please join us if you are interested in this topic. More details will be available soon.</li>
                <li>[Dec 1, 2021] Two papers accepted to AAAI 2022.</li>
                <li>[Oct 31, 2021] One paper accepted to NeurIPS 2021, AI for Science workshop, one paper accepted to ICCV 2021, one paper accepted to ACM MM 2021 (Oral), and one paper accepted to TIP 2021.
                </li>
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
                  <div>Zhiqiang Shen, Eric Xing.</div>
                  <div className="font-bold">A Fast Knowledge Distillation Framework for Visual Recognition</div>
                  <div>Technical report.</div>
                  <div>Project Page  |  Code & Models  |  arXiv Paper</div>
                </div>
              </div>
            </div>
          </div>

          <div>
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
          </div>
        </div>

        <div className="h-48 bg-gray-200 text-center pt-16 text-sm text-gray-500">
          <div>© 2021 Zhiqiang Shen. All rights reserved</div>
          <div>(Last update: May 9, 2021.)</div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
