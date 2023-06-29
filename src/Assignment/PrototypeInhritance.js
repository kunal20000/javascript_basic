let sayHiMixin = {
 // write your code here
 say: function(){
   return sayMixin.say.call(this, this.name);
 }
};
Object.setPrototypeOf(sayHiMixin, sayMixin);

function setPrototype(){
  // some code here
  Object.setPrototypeOf(User.prototype, sayHiMixin);
}