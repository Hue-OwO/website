function Aboutbutton() {
	var about = document.getElementById("about");
	var media = document.getElementById("media");
	var proj = document.getElementById("projects");
	var stats = document.getElementById("stats");
	if (about.style.display === "none") {
	  about.style.display = "block";
	  media.style.display = "none";
	  proj.style.display = "none";
	  stats.style.display = "none";
	}
  }
  function mediabutton() {
	var about = document.getElementById("about");
	var media = document.getElementById("media");
	var proj = document.getElementById("projects");
	var stats = document.getElementById("stats");
	if (media.style.display === "none") {
	  about.style.display = "none";
	  media.style.display = "block";
	  proj.style.display = "none";
	  stats.style.display = "none";
	}
  }
  function projbutton() {
	var about = document.getElementById("about");
	var media = document.getElementById("media");
	var proj = document.getElementById("projects");
	var stats = document.getElementById("stats");
	if (proj.style.display === "none") {
	  about.style.display = "none";
	  media.style.display = "none";
	  proj.style.display = "block";
	  stats.style.display = "none";
	}
  }
  function statsbutton() {
	var about = document.getElementById("about");
	var media = document.getElementById("media");
	var proj = document.getElementById("projects");
	var stats = document.getElementById("stats");
	if (stats.style.display === "none") {
	  about.style.display = "none";
	  media.style.display = "none";
	  proj.style.display = "none";
	  stats.style.display = "block";
	}
  }
