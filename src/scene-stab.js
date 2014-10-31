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
	 * キーイベントやその他のイベントを解除する。
	 * 画面の最上位に画面を覆う透明のdivを設定。
	 */
	this.unbindEvents = function()
	{
		// 最初に以下を呼び出しておくと、画面の最上位にマスク用のdivが表示される。
		am1.sceneMan.prototype.unbindEvents();

		// 以下に、イベントを解除するコードを書く。

	};
	
	/** フェードイン処理
	 * シーン終了時のエフェクトを書く。
	 * 完了したら、am1.sceneMan.prototype.nowScene.fadeOutDone()を呼び出す。
	 */
	this.fadeOut = function()
	{
		// シーンの終了エフェクト
		
		// フェードアウトが完了したら、以下の関数を呼び出すこと
		am1.sceneMan.prototype.fadeOutDone();
	};
	
	/** フェードイン処理
	 * シーン開始時のエフェクトを書く。
	 * 完了したら、am1.sceneMan.prototype.nowScene.fadeInDone()を呼び出す。
	 */
	this.fadeIn = function() {
		// シーンの開始エフェクト
		
		// フェードインが完了したら、以下の関数を呼び出すこと
		am1.sceneMan.prototype.fadeInDone();
	};
	
	/**
	 * キー処理や、トリガーになるイベントをここで設定する
	 */
	this.bindEvents = function() {
		// この関数呼び出しは残しておくこと
		am1.sceneMan.prototype.bindEvents();
		
		// 以下に、キーやシーン移動トリガーのイベント設定を書く。

	};
};

// 親の機能を継承
sceneStab.prototype = am1.sceneMan.prototype;

