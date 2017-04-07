function Button(text) {
    this.text = text || 'Hello';
    
}

Button.prototype = {
    create: function () {
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function () {
            alert(self.text);
        });
        var br = $('<br>');
        $('body').append(this.$element, br);
    }
}

var btn1 = new Button('Good morning');
btn1.create();

var btn2 = new Button();
btn2.create();