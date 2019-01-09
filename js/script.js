function Button(text) {
  this.text = text || 'Hello';
}
Button.prototype = {
	create: function() {
    console.log('this from first function => ', this);
		this.element = document.createElement('button');
    this.element.innerText = this.text;
    var self = this;
    document.body.appendChild(this.element);
    this.element.addEventListener('click', function() {
      console.log('this from second function =>',this)
      alert(self.text);
     });
  }
}

var btn1 = new Button('hello');
btn1.create();
