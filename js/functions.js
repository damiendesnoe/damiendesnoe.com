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
    var container = document.getElementById("container");
    var containerHeight = window.getComputedStyle(container).height;
    var containerPad;
    var containerHgt = "";

    for (var i = 0; i < containerHeight.length - 1; i++) {
      if (containerHeight[i] !== ("p" || "x")) {
        containerHgt += containerHeight[i];
      }
    }

    containerPad = (window.innerHeight - Number(containerHgt) - 200) / 2 + "px";
    container.style.paddingTop = containerPad;
    container.style.paddingBottom = containerPad;
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
