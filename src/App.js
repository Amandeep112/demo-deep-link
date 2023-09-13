import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (/Safari/i.test(navigator.userAgent)) {
      window.open("https://tbsecomd.wpengine.com/openApp",'_blank');
    } else {
      var webURL;
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        webURL =
          "https://itunes.apple.com/ca/app/the-beer-store/id1623374239?platform=iphone";
      } else {
        webURL = `market://details?id=com.beerstore`;
      }

      var isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      var deepLinkURL = `thebeerstore://`;
      if (isMobile) {
        window.location.href = deepLinkURL;
        setTimeout(function () {
          // If the app does not open, fall back to the browser
          window.open(webURL, "_blank");
          window.location.href = webURL;
        }, 1000);
      } else {
        // Open in the browser on non-mobile devices
        window.open("https://www.thebeerstore.ca/", "_blank");
        window.location.href = "https://www.thebeerstore.ca/";
      }
    }
  }, []);

  return <div className="App"></div>;
}

export default App;
