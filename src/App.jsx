import Editor from "./components/Editor/Editor";
import Footer from "./components/Timeline/Footer";
import ScenesPanal from "./components/scenes/ScenesPanal";
import TopMenu from "./components/toolbox/TopMenu";

function App() {
  return (
    <div className="w-screen h-screen flex  bg-[#EEEDEB] ">
      <Editor />
      <div className="fixed pl-[191px] top-0 left-0 right-0 h-16 bg-[#3C3633]   ">
        <TopMenu />
      </div>
      <div className="fixed top-0 left-0 h-full w-48 overflow-auto z-10 ">
        <ScenesPanal />
      </div>
      <div className=" pl-[191px] bg-[#EEEDEB]  flex justify-center items-center w-full fixed bottom-20 left-0 right-0 ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
