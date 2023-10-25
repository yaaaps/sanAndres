import Layout from "../../Components/Layout";
import Landing from "./Landing.jsx";
import Presentation from "./Presentation.jsx";
import Bridge from "./Bridge.jsx";
import Process from "./Process";

function Home() {
  return (
    <Layout>
      <Landing />
      <Presentation />
      <Bridge />
      <Process />
    </Layout>
  );
}

export default Home;
