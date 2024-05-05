'use strict';



// ページの読み込みが完了した後に処理を実行
addEventListener('load', () => {
    /**
     * ゲームづくりの基本となるクラス
     */
    const main = () => {
        const canvas = document.createElement("canvas");
        const scale = window.devicePixelRatio || 1;
        canvas.width = screenWidth * scale;
        canvas.height = screenHeight * scale;


        document.getElementById("app").appendChild(canvas);
        const ctx = canvas.getContext("2d");
        ctx.scale(scale, scale);
        canvas.style.width = screenWidth + 'px';
        canvas.style.height = screenHeight + 'px';

        // 画面を白色で塗りつぶす
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const image = new Image();
        image.src = 'img/character.png'
        const titlescreen = new TitleScreen(screenWidth, screenHeight);
        const gamescreen = new GameScreen(screenWidth, screenHeight);
        const battlescreen = new BattleScreen(
            screenWidth, screenHeight
        )
        canvas.addEventListener('click', function (event) {
            // クリックされた座標を取得
            const clickX = event.clientX - canvas.getBoundingClientRect().left;
            const clickY = event.clientY - canvas.getBoundingClientRect().top;
            // テキストの領域内でクリックされたかどうかを判定
            clickItems.forEach(item => {
                if (item.testHit(clickX, clickY)) {
                    //GameScreenに切り替わる
                    if (!IsNewGameOR.isclick) {
                        IsGameScreen.isclick = true;
                        IsNewGameOR.text = item.text;
                        IsNewGameOR.isclick = true;
                        clickItems = [];
                    }
                    //BattleScreen内でのclickイベント
                    if (IsBattleScreen.isclick) {
                        if(item.text == "S") {
                            skillSwitchAnimation.isAnimation = true;
                            console.log(item.text)
                        }
                        if(item.text == "BACK") {
                            skillSwitchAnimation.isAnimation = false;
                        }
                        
                    }

                }
            });

        });
        let isMouseDown = false;
        canvas.addEventListener('mousedown', function (event) {
            isMouseDown = true;
            console.log("押されています")
        })
        canvas.addEventListener('mouseup', function (event) {
            isMouseDown = false;
            // マウスが離されたときの処理
            console.log("ボタンが話されました")
        });

        canvas.addEventListener('mousemove', function (event) {
            // マウスがクリックされている間のみ処理を行う && GameScreenの画面のときだけキャラクターを動かす
            if (isMouseDown && IsGameScreen.isclick) {

                const mouseX = event.clientX - canvas.getBoundingClientRect().left;
                const mouseY = event.clientY - canvas.getBoundingClientRect().top;

                // キャラクターをマウスの位置に追跡させる
                mainCharacter.moveTowardsMouse(mouseX, mouseY);
            }
        });
        const draw = () => {
            // 描画のための処理
            ctx.clearRect(0, 0, canvas.width, canvas.height);


            if (!IsNewGameOR.isclick) {
                titlescreen.draw(ctx, canvas)
            }


            if (IsGameScreen.isclick) {
                gamescreen.draw(ctx, canvas)
            }
            if (IsBattleScreen.isclick) {
                
                battlescreen.draw(ctx, canvas);

                
        
                if (battlescreen.isSkill) {

                    
                   
                    
                }


            }



        };

        // 60fpsで描画を更新する
        setInterval(draw, 1000 / 30);
    };

    main();
});




// // getContext('2d')メソッドを呼び出してコンテキストを取得
// const ctx = canvas.getContext('2d');

// // ピクセル比を取得し、Canvasの解像度を改善
// ctx.scale(scale, scale);

// // キャンバスのスタイルを設定して、CSSでサイズを変更しなくても正しいサイズで描画されるようにする
// canvas.style.width = screenWidth + 'px';
// canvas.style.height = screenHeight + 'px';

// // 画面を白色で塗りつぶす
// ctx.fillStyle = '#ffffff';
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// // その他の処理を行う
// // 例: オブジェクトの更新、メインループの開始など
