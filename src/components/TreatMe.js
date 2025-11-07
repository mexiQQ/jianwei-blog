import {
  venmo,
} from "../assets/index";

const TreatMeCoffee = () => {
  return (
    <div id="treat-me-coffee" className="scroll-mt-20 mt-5">
      <div className="text-blue-800 text-xl font-bold mb-4">
        ☕ Treat Me a Coffee
      </div>

      <p className="mx-auto mb-4">
        If you enjoy my work or find my research resources helpful, 
        you can treat me a coffee via Venmo — every bit of support fuels more research and open projects.
      </p>

      {/* 支付区域 */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* ✅ 二维码（可选） */}
        <img
          src={venmo}
          alt="Venmo QR Code"
          className="w-56 h-56 rounded-xl shadow-mdWW hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="text-gray-500 text-xs mt-3 text-center">
        Thanks for your kindness!
      </div>
    </div>
  );
};

export default TreatMeCoffee;
