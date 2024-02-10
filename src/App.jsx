import Editor from "./components/Editor/Editor";
import Footer from "./components/Timeline/Footer";
import ScenesPanel from "./components/scenes/ScenesPanel";
import TopMenu from "./components/toolbox/TopMenu";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden relative ">
      <div className="h-20">
        <TopMenu />
      </div>

      <div className="flex-grow flex w-full h-full">
        <Editor />
      </div>

      <div className="w-full h-72">
        <Footer />
      </div>

      <div className="absolute top-0 left-0  z-50 w-48 h-full overflow-y-auto bg-[#524c49]">
        <ScenesPanel />
      </div>

      <div className="absolute top-0 right-0 z-50 w-64 h-full overflow-y-auto bg-[#6b6563]"></div>
    </div>
  );
}

export default App;
