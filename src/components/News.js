const News = () => (
  <div className="mt-6 scroll-mt-20" id="news">
    <div className="text-blue-800 text-xl font-bold">News</div>
    <div className="text-sm pl-5 md:pl-10 py-3">
      * Scrollable
      <ul className="list-disc max-h-40 overflow-y-auto pr-2">
        <li>
          [Jan, 2026] <span className="font-semibold">Two</span> papers are accepted by{" "}
          <span className="text-black-600 font-semibold">ICLR 2026</span>
        </li>
        <li>
          [Oct, 2025] Pass <span className="font-semibold">PhD written</span> preliminary exam at{" "}
          <span className="text-black-600 font-semibold">NCSU</span>
        </li>
        <li>
          [May–Aug, 2025] Start a research <span className="font-semibold">internship</span> program at{" "}
          <span className="text-black-600 font-semibold">TikTok</span>
        </li>
        <li>
          [May, 2025] <span className="font-semibold">One</span> paper is accepted by{" "}
          <span className="text-black-600 font-semibold">ICML 2025</span>
        </li>
        <li>
          [Feb, 2025] <span className="font-semibold">One</span> paper is accepted by{" "}
          <span className="text-black-600 font-semibold">CPAL 2025</span>
        </li>
        <li>
          [Jul, 2024] Start research under the guidance of 
          <span className="text-black-600 font-semibold"> Prof. Jung-Eun Kim</span>
        </li>
        ----------------------------------------
        <li>
          [Dec, 2023] <span className="font-semibold">One</span> paper selected as Oral of{" "}
          <span className="text-black-600 font-semibold">
            FL@FM-NeurIPS 2023
          </span>
        </li>
        <li>
          [Nov, 2023] Initiated the{" "}
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
          [Oct, 2023] <span className="font-semibold">Two</span> papers are accepted by{" "}
          <span className="text-black-600 font-semibold">EMNLP 2023</span>
        </li>
        <li> [Aug, 2023] Start <span className="font-semibold">PhD</span> student life at <span className="font-semibold">NC State University</span>; Serve as official affiliation of <span className="font-semibold">New York University</span></li>
        ----------------------------------------
        <li>
          [Apr, 2023] <span className="font-semibold">Publicity Chair</span> of the International Workshop on
          <span className="font-semibold">Resource-Efficient Learning for Knowledge Discovery @KDD 2023</span>.
        </li>
        <li>
          [Oct, 2022] <span className="font-semibold">Publicity Chair</span> of the first workshop on <span className="font-semibold">DL-Hardware
          Co-Design for AI Acceleration @AAAI 2023</span>.
        </li>
        <li>[Sep, 2022] Participated in <span className="font-semibold"> AI Hardware Summit 2022</span>.</li>
        <li>[Sep, 2022] Moffett S30 Accelerator wins <span className="font-semibold">MLPerf V2.1</span></li>
      </ul>
    </div>
  </div>
);

export default News;
