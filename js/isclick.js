'use strict'

/**
 * ゲームづくりの基本となるクラス
 */


let IsNewGameOR = {
    text: "",
    isclick: false,
}
let IsGameScreen = {
    isclick: false
}

let IsBattleScreen = {
    isclick: false
}
let ISMenuScreen = {
    isclick: false
}


// タイトル画面でマウスが上に乗ったとき

let isTitleScreenOnMouse = {
    isOnMouse: false,
    text: ""
}

let isSkillScreenOnMouse = {
    isOnMouse: false,
    i: -1,
    explanation: ""
}