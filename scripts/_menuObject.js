var origin_x, origin_y;

console.log("menuObject.js Loaded");
module.exports = function menuObject (type = "noType", name = "noName", active = false) {
  this.type = type;
  this.name = name;
  this.active = active;
  this.dropHandler = dropHandler;
  this.doubleClickHandler = doubleClickHandler;
  this.setOrigin = setOrigin;
  this.getOrigin = getOrigin;
}

function dropHandler() {
    //TODO: If drop item exists in the sandbox, then spawn action field
}

function doubleClickHandler() {
    console.log("Double Clicked");
}

function setOrigin(x, y) {
    origin_x = x;
    origin_y = y;
}

function getOrigin() {
    return [origin_x, origin_y];
}
