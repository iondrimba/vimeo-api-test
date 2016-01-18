function Menu(NoJquery) {
    this.$$ = NoJquery;
    this.events = [];
    console.log('Menu', this.$$);

};

Menu.prototype.on = function(event, callback) {
    console.log('Menu on');
    this.events[event] = callback;
};
Menu.prototype.init = function() {
    this.$$('nav').find('a').on('click', function(evt) {
        evt.preventDefault();
        var path = this.$$(evt.target).getAttr('href');
        console.log('Menu click', path);
        this.events['click'](path);
    }.bind(this));
};

module.exports = Menu;