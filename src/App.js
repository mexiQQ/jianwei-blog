import Header from './components/Header';
import Footer from './components/Footer';
import Bio from "./components/Bio";
import ContactInfo from "./components/ContactInfo";
import ResearchInterest from "./components/ResearchInterest";
import News from "./components/News";
import Publications from "./components/Publications";
import Teaching from "./components/Teaching";

const pageStyles = {
  color: "#232129",
  fontFamily: "Georgia, Times New Roman, Times, serif",
};

function App() {
  return (
    <main style={pageStyles}>
      <Header />
      <div className="pt-16">
        <div className="max-w-screen-lg mx-auto px-5 py-10">
          <Bio />
          <ContactInfo />
          <ResearchInterest />
          <News />
          <Publications />
          <Teaching />
        </div>
        <Footer />
      </div>
    </main>
  );
}


export default App;

