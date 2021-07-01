// map
// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: {
//       lat: -34.397,
//       lng: 150.644,
//     },
//     zoom: 8,
//   });
// }

// sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// smooth scrolling
// $(document).ready(function () {

$("#navbar a, .btn").on("click", function (event) {
  console.log(event);
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
      // function () {
      //   window.location.hash = hash;
      // }
    );
  }
});
