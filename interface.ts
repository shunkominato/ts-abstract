interface Human {
  say(msg: string): string;
}
class Man implements Human {
  public say(msg: string): string {
    return msg + 'だぜ！';
  }
}
let takashi = new Man();
alert(takashi.say('ハロー')); // aa
