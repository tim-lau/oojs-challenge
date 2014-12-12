"use strict";

function Rectangle(left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap);
    this.renderShape = function (canvasCtx) {
        return canvasCtx.fillRect(this.left, this.top, this.width, this.height);
    };
}

//code to set Rectangle.prototype
    Rectangle.prototype = new Shape();

//register new shape with the system
    registerClassicalShape('Rectangle', Rectangle);

function Circle(left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap);
    this.renderShape = function (canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.arc((this.left + (this.width/2)), (this.top + (this.height/2)),(this.width/2),0,2*Math.PI);
        return canvasCtx.fill();
    };
}

//code to set Rectangle.prototype
Circle.prototype = new Shape();

//register new shape with the system
registerClassicalShape('Circle', Circle);

function message(left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap);

    this.renderShape = function (canvasCtx) {
        var message = "$";
        canvasCtx.font="10px Helvetica";
        canvasCtx.fillText(message, this.left - (5.56/2), this.top + 10);
        console.log(canvasCtx.measureText(message));

    }
}

//code to set Rectangle.prototype
message.prototype = new Shape();

//register new shape with the system
registerClassicalShape('jQuery is so', message);

