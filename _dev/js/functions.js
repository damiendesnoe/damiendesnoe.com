(function () {
  document.getElementById("nav-toggle").addEventListener("click", showHideMenu);
  var navBtnList = Array.from(document.getElementsByClassName("nav-btn"));
  navBtnList.forEach(function (btn) {
    btn.addEventListener("click", changeSection);
  });

	function showHideMenu() {
		document.getElementById("main-nav").classList.toggle("active");
		document.getElementById("nav-toggle").classList.toggle("active");

		if (window.innerWidth < 768) {
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

  function changeSection() {
    navBtnList.forEach(function (btn) {
      btn.classList.remove("active");
    });
    this.classList.toggle("active");
  }

  if (window.innerWidth >= 768) {
    adjustVertical();
    window.addEventListener("resize", function () {
      setTimeout(adjustVertical, 300);
    });

    function adjustVertical() {
      // Aligne verticalement la section principale (container) du site sur desktop et la photo de profil de la page présentation

      var containerEl = document.getElementById("container");
      var cntElList = Array.from(document.getElementsByClassName("center-vertical"));
      var headerEl = document.getElementById("header");
      var footerEl = document.getElementById("main-footer");

      var headerHgt = parseCSS(window.getComputedStyle(headerEl).height);
      var footerHgt = parseCSS(window.getComputedStyle(footerEl).height);
      var containerHgt = parseCSS(window.getComputedStyle(containerEl).height);

      var availableHgt = window.innerHeight - (headerHgt + footerHgt);
      var containerPad = (availableHgt - containerHgt) / 2;

      // Ajout des Padding top et bottom pour centrer les éléments verticalement
      containerEl.style.padding = containerPad > 20 ? containerPad + "px" : containerPad + "px 20px";
      cntElList.forEach(function (el) {
        var contentHgt = parseCSS(window.getComputedStyle(el).height);

        // Vérifie que les éléments à centrer ont une hauteur inférieur à celle du conteneur et de l'espace vertical disponible
        if (contentHgt < containerHgt && containerHgt < availableHgt) {
          var contentPad = (containerHgt - contentHgt) / 2;
          el.style.paddingTop = contentPad + "px";
          el.style.paddingBottom = contentPad + "px";
        } else {
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      });

      function parseCSS(size) {
        var sizeParsed = "";
        for (var i = 0; i < size.length - 1; i++) {
          if (size[i] !== ("p" || "x")) {
            sizeParsed += size[i];
          }
        } return Number(sizeParsed);
      }
    }
  }
})();
