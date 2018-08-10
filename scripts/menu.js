$(function() {
  console.log("menu.js Loaded");

  var menuObject = require('./_menuObject.js');
  var leftMenu = new menuObject("event", "onClick", false),
  leftMenu1 = new menuObject("event", "onHover", false),
  rightMenu = new menuObject("action", "doPrint", false);

  $("#leftMenuContainer").on('load', loadMenuItems(($("#leftMenuContainer")[0])));

  function loadMenuItems(item) {
    var menuObjects = [leftMenu, leftMenu1];
    var str = '<ul>';
    menuObjects.forEach(function(object) {
      str += '<div class="slot"><li id="' + object.name + '" class="ui-widget-content ui-draggable">'
      + object.name + '</li></div><div class="row">&nbsp;</div>';
  });
    str += '</ul>';
    item.innerHTML = str;
  }

  $("#leftMenuContainer li").draggable({
      containment : "#main_container",
      snap: ".slot",
      snapMode: "inner",
      cursor: "move",
      revert: "invalid"
  });

  $("#leftMenuContainer li").on('dblclick', leftMenu.doubleClickHandler);

  $(".slot").droppable( {
      activeClass: "ui-state-highlight"
  });

  $('#sandbox').scrollTop($('#slot_1_container').position().top);
})
