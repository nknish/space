/*
Space
JS File
*/
//var aVals = [57.9, 108, 150, 228, 779, 1430, 2870, 4500];
//var bVals = [56.6703, 107.9974, 149.9783, 226.9905, 778.0643, 488.1149, 2866.9616, 4499.7277];

document.addEventListener("DOMContentLoaded", function () {
  render();
});

window.addEventListener(
  "resize",
  function (event) {
    render();
  },
  true
);

window.onmousedown = () => {
  render();
};

window.onmouseup = () => {
  render();
};

function render() {
  const aVals = [
    7.60920495189872, 10.392304845413264, 12.24744871391589, 15.0996688705415,
    27.910571473905726, 37.7888872554, 53.5723809439155, 67.08203932499369,
  ];
  const bVals = [
    7.527967853278865, 10.392179752102058, 12.24656278308326, 15.06620390144777,
    27.89380397149159, 37.8153408024, 53.54401553862019, 67.08000968992178,
  ];
  const scale = aVals[aVals.length - 1] * 1.05;

  const kVals = [
    26.08797865515552, 10.216561475088758, 6.283185307179586,
    3.3403430660178555, 0.5297795368616852, 0.21327852366529484,
    0.0747909214043517, 0.03812612443676933,
  ];
  const thetaVals = [
    3.157300616857742, 4.576253298729132, 0.1117010721276371,
    1.0873401239924672, 1.2234758056480248, 6.05105651666434,
    0.9546951008408984, -0.024434609527920613,
  ];

  const sliderTimes = [
    0, 0.002737907, 0.019165349049, 0.08213721021, 0.5, 1, 10, 100,
  ];

  const names = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  const sVal = document.getElementById("timeline-slider").value;
  const oneDay = 24 * 60 * 60 * 1000;

  //for SOME REASON months are indexed starting at 0. days aren't. we h8 javascript
  const seedDay = new Date(2024, 8, 29);
  // comment of shame

  const today = new Date();
  const timeToday = (today - seedDay) / oneDay / 365.2425;
  const offset = sVal < 0 ? -1 * sliderTimes[-1 * sVal] : sliderTimes[sVal];
  const time = timeToday + offset;

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const windowW = window.innerWidth;
  const windowH = window.innerHeight;

  canvas.width = "" + windowW * 0.9;
  canvas.height = "" + windowH * 0.55;

  const height = canvas.height;
  const width = canvas.width;
  const pSize = 34;

  drawEllipses();
  for (let i = 0; i < 8; i++) {
    drawPlanet(i);
  }
  drawSun();
  updateHeader();

  function drawEllipses() {
    for (let i = 0; i < aVals.length; i++) {
      ctx.beginPath();
      let radiusx = (width * aVals[i]) / scale / 2;
      let radiusy = (height * bVals[i]) / scale / 2;
      ctx.ellipse(width / 2, height / 2, radiusx, radiusy, 0, 0, 2 * Math.PI);
      ctx.setLineDash([5, 3]);
      ctx.strokeStyle = "White";
      ctx.globalAlpha = 0.5;
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  function drawPlanet(index) {
    let planetName = names[index];
    let a = aVals[index] / 2;
    let b = bVals[index] / 2;
    let k = kVals[index];
    let theta = thetaVals[index];
    let x = a * Math.cos(k * time + theta);
    let y = b * Math.sin(k * time + theta);

    x = canvas.width / 2 + (x * canvas.width) / scale;
    y = canvas.height / 2 - (y * canvas.height) / scale;

    x = x - pSize / 2;
    y = y - pSize / 2;

    let planet_image = new Image();

    const imageName = "img/" + planetName + ".png";

    planet_image.src = imageName;
    planet_image.onload = function () {
      ctx.drawImage(planet_image, x, y, pSize, pSize);
    };
  }

  function drawSun() {
    let sunImage = new Image();

    const x = canvas.width / 2 - pSize - (0.75 * canvas.width) / scale;
    const y = canvas.height / 2 - pSize;

    sunImage.src = "img/sun.png";
    sunImage.onload = function () {
      ctx.drawImage(sunImage, x, y, pSize * 2, pSize * 2);
    };
  }

  function updateHeader() {
    const header = document.getElementById("noah");
    const futureLabels = [
      "Today",
      "Tomorrow",
      "1 Week From Now",
      "1 Month From Now",
      "6 Months From Now",
      "1 Year From Now",
      "10 Years From Now",
      "100 Years From Now",
    ];
    const pastLabels = [
      "Today",
      "Yesterday",
      "1 Week Ago",
      "1 Month Ago",
      "6 Months Ago",
      "1 Year Ago",
      "10 Years Ago",
      "100 Years Ago",
    ];

    let headerString = sVal < 0 ? pastLabels[sVal * -1] : futureLabels[sVal];

    header.textContent = "Our Solar System " + headerString;
  }
}
