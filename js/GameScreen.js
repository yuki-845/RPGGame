'use strict'
class GameScreen {

    /**
     * 引数
     * width : ゲームの横幅
     * height : ゲームの縦幅
     */
    constructor(width, height) {
        //canvas要素を作成
        this.width = width
        this.height = height
    } //constructor() 終了
    update(canvas) {
        //画像などを画面に表示するためのメソッドを呼び出す   
        this.draw(canvas); 
        //スプライトを動かしたり,なにかのきっかけでイベントを発生させたりするために使うメソッドを呼び出す
    } //update() 終了

    draw(canvas) {
        

    }
}

