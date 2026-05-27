import React from "react";
import { PdfIcon } from "./PaperLinks";

const preprints = [
  {
    authors: "Jianwei Li, Jung-Eun Kim",
    title:
      "Security Before Safety: A Backdoor-Centric View of LLM Output Risks in the Private AI Era",
    pdf: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.176131355.52592738/v1"
  },
  {
    authors: "Xingli Fang, Jianwei Li, Varun Mulchandani, Jung-Eun Kim",
    title: "Trustworthy AI: Safety, Bias, and Privacy — A Survey",
    pdf: "https://arxiv.org/abs/2502.10450"
  }
];

const renderAuthors = (authors) =>
  authors.split(/(Jianwei Li)/).map((part, i) =>
    part === "Jianwei Li" ? (
      <strong key={i} className="font-semibold">
        Jianwei Li
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );

const Preprints = () => (
  <div id="preprints" className="scroll-mt-20 mt-5">
    <div className="text-blue-800 text-xl font-bold mb-2">Preprints</div>
    <div>
      {preprints.map((p, index) => (
        <div key={index} className="py-0.5">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-sm">
            <span>{renderAuthors(p.authors)}</span>
            <span className="font-bold">{p.title}</span>
            {p.pdf && p.pdf !== "#" && (
              <a
                href={p.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gray-800 hover:underline"
              >
                <PdfIcon /> <span>PDF</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Preprints;
