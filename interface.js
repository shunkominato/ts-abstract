var Man = /** @class */ (function () {
    function Man() {
    }
    Man.prototype.say = function (msg) {
        return msg + 'だぜ！';
    };
    return Man;
}());
var takashi = new Man();
alert(takashi.say('ハロー')); // aa
