
console.log("menuObject.js Loaded");
module.exports = function menuObject (type = "noType", name = "noName", active = false, origin = [0.0,0.0]) {
  this.type = type;
  this.name = name;
  this.active = active;
  this.dropHandler = dropHandler;
  this.doubleClickHandler = doubleClickHandler;
  this.init = init;
  this.origin = origin;
  this.parent = undefined;
}

function init(event, ui) {
    if (ui === undefined) return;
    if (this.origin[0] == 0 && this.origin[1] == 0){
        this.origin = [ui.offset.top, ui.offset.left];
    }
}

function dropHandler(event, ui) {
    if (ui.offset.top !== 0 && ui.offset.left !== 0) {
        this.active = true;
    }
}

function doubleClickHandler() {
    $(this).css({"left": "0px",
                "top": "0px"});
    dropHandler();
}
