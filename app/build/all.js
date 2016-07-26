'use strict';

/** @namespace **/
var deliveryBoy = {
	name: 'John',
	handleMessage: function handleMessage(message, callbackHandler) {
		callbackHandler(message);
	},
	completeReceive: function completeReceive() {
		var _this = this;

		this.handleMessage('Hello, ', function (message) {
			return console.log(message + _this.name);
		});
	}
};

deliveryBoy.completeReceive();
"use strict";

var x = 1;
var y = 1;
var equation = x + " + " + y + " = " + (x + y);
console.log(equation);
var message = "It's " + new Date().getHours() + " I'm sleepy";
console.log(message);
//# sourceMappingURL=all.js.map
