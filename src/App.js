  var webURL;
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          webURL =
            "https://itunes.apple.com/ca/app/the-beer-store/id1623374239?platform=iphone";
        } else {
          webURL = `market://details?id=com.beerstore`;
        }
        window.location.href = webURL;
        var isMobile =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        var safariExpression = /Safari/i.test(navigator.userAgent);
        var deepLinkURL = safariExpression
          ? "https://tbsecomd.wpengine.com/openApp"
          : `thebeerstore://`;
        if (isMobile) {
          // window.location.href = deepLinkURL;
          setTimeout(function () {
            // If the app does not open, fall back to the browser
            window
              .open(
                "https://itunes.apple.com/ca/app/the-beer-store/id1623374239?platform=iphone",
                "_blank"
              )
              .focus();
            window.location.href =
              "https://itunes.apple.com/ca/app/the-beer-store/id1623374239?platform=iphone";
          }, 1000);
        } else {
          // Open in the browser on non-mobile devices
          window.open("https://www.thebeerstore.ca/", "_blank");
          window.location.href = "https://www.thebeerstore.ca/";
        }
