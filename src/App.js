import './app.scss'
import Topbar from "./components/topbar/Topbar";
import Content from "./components/content/Content";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="section">
        <Content />
      </div>
    </div>
  );
}

export default App;
