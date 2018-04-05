function openNav() {
  document.getElementById("main-sidebar").style.width = "30%";
}

function closeNav() {
  document.getElementById("main-sidebar").style.width = "0";
}

/**
 * Render new image in main-graphic element according to image num parameter
 * @param num - image number. All images should be named as num.jpg and be placed at static/images folder
 */
function changeGraphic(num) {
  // TODO delete previous image before append next child

  var graphic = document.getElementById('main-graphic');
  var img = document.createElement('img');
  img.setAttribute('src', 'static/images/'+num+'.jpg');
  img.setAttribute('alt', 'main graphic');

  graphic.appendChild(img)
}

window.onload = function() {
  changeGraphic(1)
};

