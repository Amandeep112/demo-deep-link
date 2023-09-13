import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    var fallbackLink =
      "http://example.com/my-web-app/" +
      window.location.search +
      window.location.hash;
    var isiOS =
        navigator.userAgent.match("iPad") ||
        navigator.userAgent.match("iPhone") ||
        navigator.userAgent.match("iPod"),
      isAndroid = navigator.userAgent.match("Android");
    var appleExpression = /Apple/i.test(navigator.userAgent);
    var safariExpression = /Safari/i.test(navigator.userAgent);
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("safari") != -1) {
      if (ua.indexOf("chrome") > -1) {
        alert("1"); // Chrome
      } else {
        alert("2"); // Safari
      }
    }
    try {
      if (safariExpression && appleExpression) {
        window.open("https://tbsecomd.wpengine.com/openApp", "_blank");
        window.alert("enter IN safari");
      } else {
        if (isiOS || isAndroid) {
          window.location.href = "thebeerstore://";
          // document.getElementById("loader").src =
          //   "thebeerstore://" + window.location.search + window.location.hash;
          fallbackLink = isAndroid
            ? "market://details?id=com.beerstore" +
              window.location.search +
              window.location.hash
            : "https://itunes.apple.com/ca/app/the-beer-store/id1623374239?platform=iphone" +
              window.location.search +
              window.location.hash;
          window.alert("mobile detected");
          window.setTimeout(function () {
            window.location.replace(fallbackLink);
            window.alert("fallback detected");
          }, 1000);
        } else {
          window.location.href =
            "https://www.thebeerstore.ca/" +
            window.location.search +
            window.location.hash;
          window.alert("window or mac detected");
        }
      }
    } catch {
      window.open(
        "https://www.thebeerstore.ca/" +
          window.location.search +
          window.location.hash,
        "_blank"
      );
      window.location.href =
        "https://www.thebeerstore.ca/" +
        window.location.search +
        window.location.hash;
    }
  }, []);

  return <div className="App"></div>;
}

export default App;
