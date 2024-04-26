'use strict'

//ブラウザがページを完全に読みこむまで待つ
addEventListener( 'load', () => {

	//変数gameに、あなたはゲームですよ、と教える
	const game = new Game();
   
    const titlescreen = new TitleScreen(game.canvas.width,game.canvas.height);
    game.add(titlescreen)
	//gameに、ゲームをスタートして、とお願いする
	game.start();

} );