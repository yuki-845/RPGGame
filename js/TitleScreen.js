'use strict'

/**
 * ゲームづくりの基本となるクラス
 */

class TitleScreen {

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
        if(!IsNewGameOR.isclick) {
            this.draw(canvas);
        }
        
        //スプライトを動かしたり,なにかのきっかけでイベントを発生させたりするために使うメソッドを呼び出す
    } //update() 終了

    draw(canvas) {
        var ctx = canvas.getContext("2d");
        const items = [];

        // Titleの背景
        ctx.beginPath()
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = '#00AEEB'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();

        //Title
        const text = new Text(145, 43, "Title", 'white', 106,false);
        text.draw(canvas)

        //'New Game'テキスト
        if(IsNewGameOR.isclick && IsNewGameOR.text == "New Game") {
            const newgame = new Text(558, 397, "New Game", 'red', 106,false)
            newgame.draw(canvas)
            items.push(newgame);
        }else {
            const newgame = new Text(558, 397, "New Game", 'white', 106,false)
            newgame.draw(canvas)
            items.push(newgame);
        }
        
        // 'LoadGame’　テキスト
        if(IsNewGameOR.isclick && IsNewGameOR.text == "Load Game") {
            const loadgame = new Text(558, 553, "Load Game", 'red', 106,false)
            loadgame.draw(canvas)
            items.push(loadgame);
        }else {
            const loadgame = new Text(558, 553, "Load Game", 'white', 106,false)
            loadgame.draw(canvas)
            items.push(loadgame);
        }
        


        canvas.addEventListener('click', function (event) {
            // クリックされた座標を取得
            const clickX = event.clientX - canvas.getBoundingClientRect().left;
            const clickY = event.clientY - canvas.getBoundingClientRect().top;
            // テキストの領域内でクリックされたかどうかを判定
            items.forEach(item => {
                if (item.testHit(clickX, clickY)) {
                    
                    IsNewGameOR.text = item.text;
                    IsNewGameOR.isclick = true;
                }
            });
        });
        
        canvas.addEventListener('mousemove', function(event) {
            // クリックされた座標を取得
            const clickX = event.clientX - canvas.getBoundingClientRect().left;
            const clickY = event.clientY - canvas.getBoundingClientRect().top;
            
            // テキストの領域内でクリックされたかどうかを判定
            items.forEach(item => {
                if (item.testHit(clickX, clickY)) {
                    item.ismouse = true;
                }else {
                    item.ismouse = false;
                }
            });
            
        });


    }
}

