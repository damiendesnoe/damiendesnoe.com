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

  if (window.innerWidth >= 768) {
    adjustVertical();
    window.addEventListener("resize", function () {
      setTimeout(adjustVertical, 300);
    });

    function adjustVertical() {
      // Aligne verticalement la section principale (container) du site sur desktop et la photo de profil de la page présentation

      var containerEl = document.getElementById("container");
      var presentEl = document.getElementById("presentation");
      var profilePicEl = document.getElementById("profile-pic");
      var headerEl = document.getElementById("header");
      var footerEl = document.getElementById("footer");

      var presentHgt = parseCSS(window.getComputedStyle(presentEl).height);
      var pictureHgt = parseCSS(window.getComputedStyle(profilePicEl).height);
      var headerHgt = parseCSS(window.getComputedStyle(headerEl).height);
      var footerHgt = parseCSS(window.getComputedStyle(footerEl).height);
      var containerHgt = presentHgt > pictureHgt ? presentHgt : pictureHgt;

      var containerPad = setVerticalPad("container", window.innerHeight, containerHgt, (headerHgt + footerHgt));
      var profilePicPad = setVerticalPad("profile picture", containerHgt, pictureHgt);
      var presentPad = setVerticalPad("presentation", containerHgt, presentHgt);

      containerEl.style.padding = containerPad > 20 ? containerPad + "px" : containerPad + "px 20px";
      profilePicEl.style.padding = profilePicPad + "px 0";
      presentEl.style.paddingTop = presentPad + "px";
      presentEl.style.paddingBottom = presentPad + "px";

      function parseCSS(el) {
        var elParsed = "";
        for (var i = 0; i < el.length - 1; i++) {
          if (el[i] !== ("p" || "x")) {
            elParsed += el[i];
          }
        } return Number(elParsed);
      }

      function setVerticalPad(element, containerHeight, contentHeight, offset = 0) {
        console.log(element + "\ncontainer height: " + contentHeight + "\n content height: " + contentHeight + "\n offset: " + offset + "\n" + ((containerHeight - contentHeight) / 2));
        return (containerHeight - contentHeight - offset) / 2;
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
