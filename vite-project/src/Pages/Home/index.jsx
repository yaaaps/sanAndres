import Landing from "./Landing.jsx";
import Presentation from "./Presentation.jsx";
import Bridge from "./Bridge.jsx";
import Layout from "../../Components/Layout";

function Home() {
  return (
    <Layout>
      <Landing />
      <Presentation />
      <Bridge />
    </Layout>
  );
}

export default Home;
