import "./App.css";
import Headblog from "./HeadBlog";
import LinkBar from "./LinkBar";
import Article from "./Article";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <div className="container">
        <Headblog />
        <LinkBar />
        <div className="Row-Body">
          <Article />
          <AboutMe />
        </div>
        <div className="Row-Body">
          <Article />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
