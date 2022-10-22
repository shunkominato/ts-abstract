abstract class Human {
  abstract say(msg: string): string;
}
class Man extends Human {
  public say(msg: string): string {
    return msg + 'だぜ！';
  }
}
let takashi = new Man();
alert(takashi.say('ハロー')); // aa
