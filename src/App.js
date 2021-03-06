import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./container/header/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../src/container/scroll-up/scrollup";
import Homepage from "./pages/homepage/homepage";
import Gallery from "./pages/gallery/gallery";
import Footer from "./container/footer/footer";
import Catering from "./pages/catering/catering";
import Decoration from "./pages/decoration/decoration";
import Training from "./pages/training/training";
import Contact from "./pages/contact/contact";
import LoaderBox from "../src/components/Loader/loader";
import { useEffect, useState } from "react";
import GalleryView from "./container/template/gallery-view";
import Rental from "./pages/rental/rental";

function App() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {Loading ? (
        <LoaderBox />
      ) : (
        <Router>
          <ScrollToTop />
          <Header />
          <div style={{ fontSize: "1.8rem" }}>
            <ToastContainer />
          </div>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/gallery-view" component={GalleryView} />
              <Route path="/catering" component={Catering} />
              <Route path="/rental" component={Rental} />
            <Route path="/decoration" component={Decoration} />
            <Route path="/training" component={Training} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
