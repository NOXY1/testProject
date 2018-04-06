function openNav() {
  document.getElementById("main-sidebar").style.width = "30%";
}

function closeNav() {
  document.getElementById("main-sidebar").style.width = "0";
}

function addClassActiveToButton(elem) {
  var activeButtons = document.getElementsByClassName('active');

  for (var i = 0; i < activeButtons.length; i++) {
    activeButtons[i].classList.remove('active');
  }
  elem.classList.add('active');
}

function changeGraphic(elem) {
  var graphicElem = document.getElementById('main-graphic');

  addClassActiveToButton(elem)

  var graphicNumber = elem.getAttribute('number');

  var img;
  if(graphicElem.childNodes.length > 0) {
    img = graphicElem.childNodes[0];
    img.setAttribute('src', 'static/images/' + graphicNumber + '.jpg');
  } else {
    img = document.createElement('img');
    img.setAttribute('src', 'static/images/'+ graphicNumber + '.jpg');
    img.setAttribute('alt', 'main graphic');
    graphicElem.appendChild(img);
  }
}

window.onload = function() {
  var mainSidebarElem = document.getElementById('main-sidebar');
  var elem = mainSidebarElem.children[1].children[0];

  changeGraphic(elem)
};


