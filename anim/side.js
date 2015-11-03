(function(window) {
side = function() {
	this.initialize();
}
side._SpriteSheet = new createjs.SpriteSheet({images: ["side.png"], frames: [[0,0,519,297,0,236.95,39.5],[0,0,519,297,0,236.95,39.5],[0,0,519,297,0,236.95,39.5],[519,0,488,290,0,216.95,39.5],[519,0,488,290,0,216.95,39.5],[519,0,488,290,0,216.95,39.5],[0,297,352,315,0,253.95,49.5],[0,297,352,315,0,253.95,49.5],[352,297,383,326,0,186.95,79.5],[352,297,383,326,0,186.95,79.5],[0,623,550,337,0,315.95,95.5],[0,623,550,337,0,315.95,95.5],[0,960,520,534,0,315.95,214.5],[0,960,520,534,0,315.95,214.5],[0,1494,543,552,0,330.95,226.5]],  animations: {walkLeft:[0,9, true], takeoff:[10,11, true]}});
var side_p = side.prototype = new createjs.Sprite();
side_p.Sprite_initialize = side_p.initialize;
side_p.initialize = function() {
	this.Sprite_initialize(side._SpriteSheet);
	this.paused = false;
}
side_p.walkLeft = function(){
	this.gotoAndPlay("walkLeft");
}
side_p.takeoff = function(){
	this.gotoAndPlay("takeoff");
}
window.side = side;
}(window));

