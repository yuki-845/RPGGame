'use strict';

let Mouse_X = 0;
let Mouse_Y = 0;
let countAnimation = 0;
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
        Mouse_X = Helene.x
        Mouse_Y = Helene.y
        const battlescreen = new BattleScreen(
            screenWidth, screenHeight
        )
        const menuscreen = new MenuScreen(
            screenWidth, screenHeight
        )
        canvas.addEventListener('click', function (event) {

            const clickX = event.clientX - canvas.getBoundingClientRect().left;
            const clickY = event.clientY - canvas.getBoundingClientRect().top;

            if (IsGameScreen.isclick && gamescreen.isTalk) {
                gamescreen.TalkIndex += 1
            }
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
                    // GameScreen内でのclick イベント
                    if (IsGameScreen.isclick) {
                        if (item.text == "Title") {

                            ISMenuScreen.isclick = true;
                            // IsGameScreen.isclick = false
                            // encoutnanimation.animation = true
                            menuscreen.isAnimation = true;

                        }

                    }
                    //BattleScreen内でのclickイベント
                    if (IsBattleScreen.isclick) {
                        if (item.text == "M") {
                            skillSwitchAnimation.isAnimation = true;
                            console.log(item.text)
                        }
                        if (item.text == "A") {
                            battlescreen.isAtack = true;
                        }
                        if (item.text == "BACK") {
                            skillSwitchAnimation.isAnimation = false;
                        }

                    }
                    //MenuScreen内でのclickイベント
                    if (ISMenuScreen.isclick) {

                        if (item.text == "CLOSE") {
                            console.log("Menuscreen")
                            ISMenuScreen.isclick = false;
                            IsGameScreen.isclick = true;

                            console.log(ISMenuScreen.isclick)
                        }
                        if (item.text == "MAP") {
                            menuscreen.isNowMenu = item.text
                            STATUS_MENU.x = -100;
                            STATUS_MENU.y = -100
                        }
                        if (item.text == "STATUS") {
                            menuscreen.isNowMenu = item.text
                        }
                        if (item.text == "SAVE") {
                            menuscreen.isNowMenu = item.text
                            STATUS_MENU.x = +100;
                            STATUS_MENU.y = +100

                        }

                    }

                }
            });

        });
        let isMouseDown = false;
        canvas.addEventListener('mousedown', function (event) {
            isMouseDown = true;
            if (IsGameScreen.isclick) {
                Mouse_X = event.clientX - canvas.getBoundingClientRect().left;
                Mouse_Y = event.clientY - canvas.getBoundingClientRect().top;
            }



        })
        canvas.addEventListener('mouseup', function (event) {
            isMouseDown = false;
            // マウスが離されたときの処理

        });

        canvas.addEventListener('mousemove', function (event) {
            // マウスがクリックされている間のみ処理を行う && GameScreenの画面のときだけキャラクターを動かす
            if (isMouseDown && IsGameScreen.isclick) {

                Mouse_X = event.clientX - canvas.getBoundingClientRect().left;
                Mouse_Y = event.clientY - canvas.getBoundingClientRect().top;


            }
        });
        let targetFlag = false; // trueでマウスが要素に乗っているとみなす
        let rect = null;

        /* Canvas上にマウスが乗った時 */
        function onMouseOver(e) {
            rect = e.target.getBoundingClientRect();
            canvas.addEventListener('mousemove', onMouseMove, false);
        }
        /* Canvasからマウスが離れた時 */
        function onMouseOut() {
            canvas.removeEventListener('mousemove', onMouseMove, false);
        }
        /* Canvas上でマウスが動いている時 */
        function onMouseMove(e) {
            /* マウスが動く度に要素上に乗っているかかどうかをチェック */
            moveActions.updateTargetFlag(e);

            /* 実行する関数には、間引きを噛ませる */
            if (targetFlag) {
                moveActions.throttle(moveActions.over, 50);
            } else {
                moveActions.throttle(moveActions.out, 50);
            }
        }

        /* mouseMoveで実行する関数 */
        var moveActions = {
            timer: null,
            /* targetFlagの更新 */
            updateTargetFlag: function (event) {
                const mouseX = event.clientX - canvas.getBoundingClientRect().left;
                const mouseY = event.clientY - canvas.getBoundingClientRect().top;
                let ison = false
                clickItems.forEach(item => {

                    if (item.testHit(mouseX, mouseY)) {
                        ison = true
                        targetFlag = true;
                        isTitleScreenOnMouse.isOnMouse = true;
                        isTitleScreenOnMouse.text = item.text
                    }

                })
                if (!ison) {
                    isTitleScreenOnMouse.isOnMouse = false;
                    isTitleScreenOnMouse.text = ""
                    targetFlag = false
                    titlescreen.x1 = 1920
                }
            },
            /* 連続イベントの間引き */
            throttle: function (targetFunc, time) {
                var _time = time || 100;
                clearTimeout(this.timer);
                this.timer = setTimeout(function () {
                    targetFunc();
                }, _time);
            },
            out: function () {
                drawRect();
            },
            over: function () {
                drawRectIsHover();
            }
        };

        function drawRect(color) {
            // デフォルトもしくはマウスが要素から離れた時の描画処理
            isTitleScreenOnMouse.isOnMouse = false;
            isTitleScreenOnMouse.text = ""
            targetFlag = false
        }
        function drawRectIsHover() {
            // マウスが要素に乗った時の描画処理
        }

        canvas.addEventListener('mouseover', onMouseOver, false);
        canvas.addEventListener('mouseout', onMouseOut, false);

        drawRect();
        let _x = aspect(0.5)
        const draw = () => {
            // 描画のための処理
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (!IsNewGameOR.isclick) {
                titlescreen.draw(ctx, canvas)
            }

            if (IsGameScreen.isclick) {
                gamescreen.draw(ctx, canvas)
                if (!gamescreen.isTalk) {
                    if (Helene.radius >= aspect(20)) {
                        _x = aspect(-0.5)
                    } else if (Helene.radius <= aspect(10)) {
                        _x = aspect(0.5)
                    }
                    Helene.radius += _x
                    console.log(Helene.radius)


                    // キャラクターをマウスの位置に追跡させる
                    Helene.moveTowardsMouse(Mouse_X, Mouse_Y, ctx);
                    Laura.MoveAttend(Helene.x, Helene.y);
                }


            }
            if (IsBattleScreen.isclick) {
                battlescreen.draw(ctx, canvas);
            }
            if (ISMenuScreen.isclick) {
                menuscreen.draw(ctx);
            }
            countAnimation++;

        };

        // 60fpsで描画を更新する
        setInterval(draw, 1000 / 60);
    };

    main();
});




