import type { NextPage } from "next";
import Header from "../components/header";
import Trending from "../components/trending";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <Header /> */}
      <div className="mt-10"></div>
      {/* <Trending /> */}
      <Trending />
      <div className="mt-20"></div>
      {/* <CMCtable /> */}
    </div>
  );
};

export default Home;
