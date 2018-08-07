$(function() {
  console.log("menu.js Loaded");

  var menuObject = require('./_menuObject.js');
  var leftMenu = new menuObject("event", "onClick", false),
  rightMenu = new menuObject("action", "doPrint", false);

  $("#leftMenuContainer").on('load', loadMenuItems(($("#leftMenuContainer")[0])));

  function loadMenuItems(item) {
    var menuObjects = [leftMenu];
    var str = '<ul>';
    menuObjects.forEach(function(object) {
      str += '<li id="' + object.name + '" class="ui-widget-content ui-draggable">' + object.name + '</li>';
  });
    str += '</ul>';
    item.innerHTML = str;
  }

  var item = $("#onClick").get(0);
  $(item).draggable({
      containment : "#container #leftMenuContainer"
  });
})
