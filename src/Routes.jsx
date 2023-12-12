import { Routes, Route } from "react-router-dom";

import MainLayout from "layouts/MainLayout";
import Home from "pages/Home";
import Referral from "pages/Referral";
import Roulette from "pages/Game/Roulette";
import LandingPage from "pages/LandingPage";
import Coinflip from "pages/Game/Coinflip";
import RockPaperScissor from "pages/Game/RockPaperScissor";
import Dice from "pages/Game/Dice";


const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/landing" element={<LandingPage />} /> */}
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="game"> */}
          {/* <Route index element={<Leaderboard />} /> */}
          {/* <Route path="plinko" element={<Plinko />} /> */}
          {/*  <Route  path="leaderboard" element={<Leaderboard />} /> */}
          <Route path="roulette" element={<Roulette />} />
          <Route path="coinflip" element={<Coinflip />} />
          <Route path="rock-paper-scissor" element={<RockPaperScissor />} />
          <Route path="dice" element={<Dice />} />
        {/* </Route> */}
        {/*   <Route path="dashboard" element={<Dasboard />} />*/}
       {/*   <Route path="stake" element={<Stake />} /> */}
        <Route path="referral" element={<Referral />} />
       {/*   <Route path="contest" element={<Contest />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
