var Basic = function(front, back) {
    this.front = front;
    this.back = back;

};

Basic.prototype.printCard = function() {
    console.log('Front: ' + this.front + ', ' + 'Back: ' + this.back);
};

Basic.prototype.printFront = function() {
    console.log(this.front);

};


Basic.prototype.printBack = function() {
    console.log('Nice try! The answer is ' + this.back + '.');
};

module.exports = Basic;
