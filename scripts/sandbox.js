console.log("sandbox.js Loaded");
$(function() {
    $('#sandbox').scrollTop($('#slot_1_container').position().top);

    var clicked = false, clickY;
    $('#sandbox').on({
        'mousemove': function(e) {
            clicked && updateScrollPos(e);
        },
        'mousedown': function(e) {
            clicked = true;
            clickY = e.pageY;
        },
        'mouseup': function() {
            clicked = false;
            $('html').css('cursor', 'auto');
        }
    });
    var updateScrollPos = function(e) {
    $('#sandbox').scrollTop($('#sandbox').scrollTop() + (clickY - e.pageY));
}
})
