import React from "react";

const ResearchInterest = () => (
    <div className="mt-6 scroll-mt-20" id="research">
        <div className="text-blue-800 text-xl font-bold">Research Interest</div>
        <p className="text-sm text-justify">My research centers on <span className="text-blue-800 font-bold">Secret Alignment</span> — covert alignment behaviors in large language models and the agents built on them — as the technical foundation for their <span className="text-blue-800 font-bold">secure</span> and <span className="text-blue-800 font-bold">personalized</span> deployment. I <span className="font-bold">build</span>, <span className="font-bold">understand</span>, <span className="font-bold">evaluate</span>, and <span className="font-bold">defend</span> against these behaviors in the <span className="text-blue-800 font-bold">models</span> and <span className="text-blue-800 font-bold">agents</span> that increasingly act on our behalf.</p>

        <div className="mt-4 mx-2 md:mx-6 px-6 md:px-8 py-4 text-sm text-justify bg-blue-50/40 rounded-lg">
            <p>
                <span className="font-bold text-blue-800">What is Secret Alignment?</span>{" "}
                Introduced by me and{" "}
                <a className="text-blue-800 font-semibold" href="https://jungeunkim.wordpress.ncsu.edu/">
                    Prof. Jung-Eun Kim
                </a>{" "}
                in early 2025, <span className="italic">Secret Alignment</span> describes a class of hidden, condition-dependent behaviors in aligned models — the model's response is systematically different under a specific trigger, context, or credential, while remaining indistinguishable from a normally aligned model to any observer without that trigger.
            </p>
            <p className="mt-2">
                Because the same mechanism can serve legitimate control or hostile subversion, Secret Alignment is fundamentally <span className="font-semibold">dual-use</span>:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="border-l-2 border-red-400 pl-3">
                    <div className="font-semibold text-red-700 mb-1">Adversarial forms (defend against)</div>
                    <ul className="list-disc pl-5 space-y-0.5">
                        <li>Backdoor attacks</li>
                        <li>Multi-persona injection <span className="text-gray-500">(attacker trigger)</span></li>
                        <li>Sandbagging on capability / safety evaluations</li>
                        <li>Deceptive alignment</li>
                        <li>Steganographic collusion between agents</li>
                    </ul>
                </div>
                <div className="border-l-2 border-green-500 pl-3">
                    <div className="font-semibold text-green-700 mb-1">Legitimate forms (build well)</div>
                    <ul className="list-disc pl-5 space-y-0.5">
                        <li>Authentication of model origin</li>
                        <li>Copyright / provenance watermarking</li>
                        <li>Personalization <span className="text-gray-500">(verified user)</span></li>
                        <li>Access control &amp; permission gating</li>
                        <li>Kill switch / emergency shutdown</li>
                    </ul>
                </div>
            </div>
            <p className="mt-3 text-gray-600 italic">
                Whether Secret Alignment serves defense or attack depends on{" "}
                <span className="font-semibold not-italic text-gray-800">who holds the trigger</span> — which is why my work treats it as a first-class object of study and evaluation.
            </p>
        </div>
    </div>
);

export default ResearchInterest;
