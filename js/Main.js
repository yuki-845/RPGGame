'use strict'

//ブラウザがページを完全に読みこむまで待つ
addEventListener( 'load', () => {

	//変数gameに、あなたはゲームですよ、と教える
	const game = new Game();
   
    const titlescreen = new TitleScreen(game.canvas.width,game.canvas.height);
    game.add(titlescreen)

	const gamescreen = new GameScreen(game.canvas.width,game.canvas.height);
	game.add(gamescreen)
	//gameに、ゲームをスタートして、とお願いする
	game.start();

} );