$(function() {
  console.log("menu.js Loaded");

  var menuObject = require('./_menuObject.js');
  var leftMenu = new menuObject("event", "onClick", false),
  leftMenu1 = new menuObject("event", "onHover", false),
  rightMenu = new menuObject("action", "doPrint", false),
  rightMenu1 = new menuObject("action", "doMouseMove", false);

  $("#leftMenuContainer").on('load', loadMenuItems(($("#leftMenuContainer")[0]), "left"));



  $("#leftMenuContainer li").draggable({
      containment : "#main_container",
      snap: ".slot",
      snapMode: "inner",
      cursor: "move",
      revert: "invalid",
      stop: function(event, ui) {
          leftMenu.dropHandler(event, ui);
      }
  });

  $("#leftMenuContainer li").on('dblclick', leftMenu.doubleClickHandler);

  $("#rightMenuContainer").on('load', loadMenuItems(($("#rightMenuContainer")[0]), "right"));

  $("#rightMenuContainer li").draggable({
      containment : "#main_container",
      snap: ".slot",
      snapMode: "inner",
      cursor: "move",
      revert: "invalid",
      stop: rightMenu.dropHandler
  });

  $("#rightMenuContainer li").on('dblclick', rightMenu.doubleClickHandler);

  function loadMenuItems(item, side) {
    var menuObjects;
    if (side==="left") menuObjects = [leftMenu, leftMenu1];
    else menuObjects = [rightMenu, rightMenu1];
    var str = '<ul>';
    menuObjects.forEach(function(object) {
      str += '<div class="slot ' + ((side==="left") ? "eventListener" : "actionListener") + '"><li id="' + object.name + '" ';
      str += 'class="ui-widget-content ui-draggable ' + ((side==="left") ? "eventBox" : "actionBox");
      str += '">' + object.name + '</li></div><div class="row">&nbsp;</div>';
  });
    str += '</ul>';
    item.innerHTML = str;
  }


  $(".slot.eventListener").droppable( {
      activeClass: "event-highlight",
      drop: function(event, ui) {
          $(this).removeClass("empty");
      },
      out: function(event, ui) {
          $(this).addClass("empty");
      },
      accept: ".eventBox"
  });
  $(".slot.actionListener").droppable( {
      activeClass: "action-highlight",
      drop: function(event, ui) {
          $(this).removeClass("empty");
      },
      out: function(event, ui) {
          $(this).addClass("empty");
      },
      accept: ".actionBox"
  });

})
