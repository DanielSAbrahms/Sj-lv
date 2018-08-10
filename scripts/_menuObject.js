console.log("menuObject.js Loaded");
module.exports = function menuObject (type = "noType", name = "noName", active = false) {
  this.type = type;
  this.name = name;
  this.active = active;
}

function dropHandler() {
    //TODO: If drop item exists in the sandbox, then spawn action field
}
