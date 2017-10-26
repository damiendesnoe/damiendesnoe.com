(function () {
  document.getElementById("nav-toggle").addEventListener("click", showHideMenu);

	function showHideMenu() {
		document.getElementById("main-nav").classList.toggle("active");
		document.getElementById("nav-toggle").classList.toggle("active");

		if (window.innerWidth < 1024) {
			document.body.classList.toggle("nav-active");
		} else {
			if(!document.body.classList.contains("nav-active")) {
				document.body.classList.toggle("nav-active");
			} else {

				document.getElementById("title").style.transform = "initial";

				setTimeout(function () {
					document.body.classList.toggle("nav-active");
					document.getElementById("title").removeAttribute("style");
				}, 500);
			}
		}
	}

  if (window.innerWidth >= 1024) {
    adjustVertical();
    window.addEventListener("resize", adjustVertical);

    function adjustVertical() {
      // Aligne verticalement la section principale (container) du site sur desktop et la photo de profil de la page présentation

      var containerEl = document.getElementById("container");
      var containerHeight = parseCSS(window.getComputedStyle(containerEl).height);
      var presentEl = document.getElementById("presentation");
      var presentHeight = parseCSS(window.getComputedStyle(presentEl).height);
      var profilePic = document.getElementById("profile-pic");
      var containerPad = (window.innerHeight - containerHeight - 200) / 2;
      var profilePicPad = (presentHeight - 216) / 2;

      container.style.padding = containerPad + "px";
      profilePic.style.padding = profilePicPad + "px 0";

      function parseCSS(el) {
        var elParsed = "";
        for (var i = 0; i < el.length - 1; i++) {
          if (el[i] !== ("p" || "x")) {
            elParsed += el[i];
          }
        } return Number(elParsed);
      }
    }
  }

  var results = "header height: ";
  var hHeight = window.getComputedStyle(document.getElementById("header")).getPropertyValue("height");
  var sHeight = window.getComputedStyle(document.getElementById("container")).getPropertyValue("height");
  var fHeight = window.getComputedStyle(document.getElementById("footer")).getPropertyValue("height");
  var wHeight = window.innerHeight;
  results += hHeight;
  results  += "<br>";
  results += "section height: ";
  results += sHeight;
  results  += "<br>";
  results += "Footer height: ";
  results += fHeight;
  results += "<br>";
  results += "window height:";
  results += wHeight;
  // document.getElementById("container").innerHTML = results;
})();
