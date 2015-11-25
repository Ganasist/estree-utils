var add = function(a,b){
  return a+b;
}

add(1,2);

var b = add(add(1,2), 4);

var util = {
  hello: function(){return 'hello'},
  say: function(string){return string}
}

util.hello();
util.say('hello');

function Great(){
  this.scott = 'SCOTT'
}

Great.prototype.jubilee = function(a){
  return a + '!!!!!!'
}

Great.jubilee('hello');
