/** @namespace **/
var deliveryBoy = {
	name: 'John',
	handleMessage: function(message, callbackHandler){
		callbackHandler(message);
	},
	completeReceive: function(){		
		this.handleMessage('Hello, ', (message) => console.log(message + this.name));
	}
};

deliveryBoy.completeReceive();
