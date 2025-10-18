const News = () => (
  <div className="mt-6 scroll-mt-20" id="news">
    <div className="text-blue-800 text-xl font-bold">News</div>
    <div className="text-sm pl-5 md:pl-10 py-3">
      <ul className="list-disc max-h-40 overflow-y-auto pr-2">
        <li>
          [Oct 15, 2025] Pass PhD Written Preliminary Exam at{" "}
          <span className="text-black-600 font-semibold">NCSU</span>
        </li>
        <li>
          [May 14–Aug 8, 2025] Start a research internship program at{" "}
          <span className="text-black-600 font-semibold">TikTok</span>
        </li>
        <li>
          [May 2, 2025] One paper is accepted by{" "}
          <span className="text-black-600 font-semibold">ICML 2025</span>
        </li>
        <li>
          [Feb 2, 2025] One paper is accepted by{" "}
          <span className="text-black-600 font-semibold">CPAL 2025</span>
        </li>
        <li>
          [Jan–Dec, 2024] Research internship at{" "}
          <span className="text-black-600 font-semibold">Kim's Lab</span>, NCSU
        </li>
        <li>
          [Dec 2, 2023] One paper selected as Oral of{" "}
          <span className="text-black-600 font-semibold">
            FL@FM-NeurIPS 2023
          </span>
        </li>
        <li>
          [Nov 7, 2023] Initiated the{" "}
          <span className="text-black-600 font-semibold">
            Shadow-LLM-Guardians Group
          </span>
          :{" "}
          <a
            href="https://github.com/Shadow-LLM"
            className="text-blue-600 underline"
          >
            https://github.com/Shadow-LLM
          </a>
        </li>
        <li>
          [Oct 7, 2023] Two papers are accepted by{" "}
          <span className="text-black-600 font-semibold">EMNLP 2023</span>
        </li>
        <li>Serve as the DCAA 2023, AAAI 2024 Reviewer</li>
        <li>Serve as official affiliation of New York University</li>
        <li>
          [Apr 7, 2023] Publicity Chair of the International Workshop on
          Resource-Efficient Learning for Knowledge Discovery @KDD 2023.
        </li>
        <li>
          [Oct 3, 2022] Publicity Chair of the first workshop on DL-Hardware
          Co-Design for AI Acceleration @AAAI 2023.
        </li>
        <li>[Sep 13, 2022] Participated in AI Hardware Summit 2022.</li>
        <li>[Sep 7, 2022] Moffett S30 Accelerator wins MLPerf V2.1</li>
      </ul>
    </div>
  </div>
);

export default News;
