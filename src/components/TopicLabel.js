const tones = {
  subspace: { backgroundColor: "#eaf1fc", color: "#254f91" },
  architecture: { backgroundColor: "#f0eafa", color: "#62408c" },
  weight: { backgroundColor: "#e4f2ef", color: "#23665c" },
  safety: { backgroundColor: "#edf3e9", color: "#426437" },
  privacy: { backgroundColor: "#edf0f5", color: "#48566d" },
  efficiency: { backgroundColor: "#faf0dc", color: "#80581f" },
  authentication: { backgroundColor: "#f8eaf0", color: "#874359" },
  graphs: { backgroundColor: "#e7f2f6", color: "#326475" },
};

const TopicLabel = ({ children, tone, textColor }) => (
  <span className="inline-block max-w-full rounded px-2 py-0.5 text-xs font-medium leading-5 align-middle" style={{ ...tones[tone], ...(textColor ? { color: textColor } : {}) }}>
    {children}
  </span>
);

export default TopicLabel;
