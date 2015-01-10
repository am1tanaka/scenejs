/**
 * Sceneオブジェクトの雛形
 * @copyright 2014 YuTanaka@AmuseOne
 * 
 * sceneman.jsと組み合わせて利用するシーン管理用の雛形。
 * このファイルをコピーして、各シーンごとに必要に応じて書き換える。
 * 不要な関数は削除すれば、prototypeで宣言したデフォルトの処理が行われる。
 */

var sceneStab = function(){
	/**
	 * フェードイン処理
	 * シーンに必要な要素を追加したのち、シーン開始時のエフェクトを書く。
	 * エフェクトが完了したら、am1.sceneMan.prototype.fadeInDone()を呼び出すようにする。
	 * この処理が不要な場合は削除する
	 */
	this.fadeIn = function() {
		// シーンに必要な要素を追加する
		alert("boot");
		
		// シーンの開始エフェクト

		// エフェクトが完了したら、以下を呼び出すようにする
		// am1.sceneMan.prototype.fadeInDone();
	};
	
	/**
	 * キー処理や、トリガーになるイベントをここで設定する。
	 * sceneManから自動的に呼ばれる。
	 */
	this.bindEvents = function() {
		// マスクを外すために、この関数呼び出しは残しておくこと
		am1.sceneMan.prototype.bindEvents();
		
		// 以下に、キーやシーン移動トリガーのイベント設定を書く。

	};
	
	/**
	 * キーイベントやその他のイベントを解除する。
	 * 画面の最上位に画面を覆う透明のdivを設定。
	 */
	this.unbindEvents = function()
	{
		// 最初に以下を呼び出しておくと、画面の最上位にマスク用のdivが表示される。
		am1.sceneMan.prototype.unbindEvents();

		// 以下に、イベントを解除するコードを書く。

	};

	/**
	 * フェードアウト処理
	 * シーン終了時のエフェクトを書く。
	 * エフェクトが完了したら、am1.sceneMan.prototype.nowScene.fadeOutDone()を呼び出す。
	 */
	/*
	this.fadeOut = function()
	{
		// シーンの終了エフェクト
		
		// フェードアウトが完了したら、以下の関数を呼び出すこと
		// am1.sceneMan.prototype.nowScene.fadeOutDone();
	};
	*/
	
	/**
	 * フェードアウトが完了したときの処理。
	 * 不要になったシーンを構成する要素を削除する。
	 */
	this.fadeOutDone = function()
	{
		// 不要になった要素を削除する
		
		// シーン切り替えシーケンスを継続するために、以下は削除しないこと
		am1.sceneMan.prototype.fadeOutDone();
	};
};

// 親の機能を継承
sceneStab.prototype = am1.sceneMan.prototype;

