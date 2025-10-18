import Header from './components/Header';
import Footer from './components/Footer';
import Bio from "./components/Bio";
import ContactInfo from "./components/ContactInfo";
import ResearchInterest from "./components/ResearchInterest";
import News from "./components/News";
import Publications from "./components/Publications";
import Teaching from "./components/Teaching";
import SnakeGame from "./components/SnakeGame"; // 🐍 引入游戏组件
import TankBattle from "./components/TankBattle";
import { useState } from "react";

const pageStyles = {
  color: "#232129",
  fontFamily: "Georgia, Times New Roman, Times, serif",
};

function App() {
  const [showSnakeGame, setShowSnakeGame] = useState(false);
  const [showTankGame, setShowTankGame] = useState(false);

  return (
    <main style={pageStyles}>
      <Header onPlaySnake={() => setShowSnakeGame(true)} onPlayTank={() => setShowTankGame(true)} />
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
      {/* 游戏入口 */}
      {showSnakeGame && <SnakeGame onClose={() => setShowSnakeGame(false)} />}
      {showTankGame && <TankBattle onClose={() => setShowTankGame(false)} />}
    </main>
  );
}

export default App;

