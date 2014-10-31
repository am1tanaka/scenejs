/**
 * シーン管理
 * @copyright 2014 YuTanaka@AmuseOne
 */

if (am1 === (void 0)) {
	var am1 = new Object();
}

/** シーン管理原型関数*/
am1.sceneMan = function() {};

/** 現在のシーン*/
am1.sceneMan.prototype.nowScene = null;
/** 次のシーン*/
am1.sceneMan.prototype.nextScenes = [];

/** シーンを変更する
 * @param array 次のシーンのリスト。配列で渡すこと。
 */
am1.sceneMan.prototype.change = function(next) {
	var proto = am1.sceneMan.prototype;
	
	// すでにシーン切り替え中の時は処理をしない
	if (proto.nextScenes.length > 0) {
		return;
	}
	// 配列にする
	if (!$.isArray(next)) {
		next = [next];
	}
	
	// 記録しておく
	proto.nextScenes = next;
	
	// 現在のシーンが有効な時、シーンの解除へ
	if (proto.nowScene != null) {
		this.unbindEvents();
		this.fadeOut();
	}
	else {
		// 現在のシーンが無効な時は、すぐに次のシーンへ
		this.fadeOutDone();
	}
	
};

/** キーなどのイベントを解除する*/
am1.sceneMan.prototype.unbindEvents = function() {
	alert("proto.unbindEvetns()");
};

/** フェードアウトを実行*/
am1.sceneMan.prototype.fadeOut = function() {
	alert("proto.fadeOut()");
	setTimeout("am1.sceneMan.prototype.nowScene.fadeOutDone()",1);
	//this.fadeOutDone();
};

/** フェードアウトが完了した*/
am1.sceneMan.prototype.fadeOutDone = function()
{
	var proto = am1.sceneMan.prototype;

	// シーンを入れ替える
	proto.nowScene = proto.nextScenes.shift();
	
	// フェードインを開始
	proto.nowScene.fadeIn();
};

/** フェードインを実行*/
am1.sceneMan.prototype.fadeIn = function() {
	alert("proto.fadeIn()");
	setTimeout("am1.sceneMan.prototype.fadeInDone()",1);
	//this.fadeInDone();
};

/** フェードインが完了。次のシーンが存在するかチェック*/
am1.sceneMan.prototype.fadeInDone = function() {
	if (am1.sceneMan.prototype.nextScenes.length > 0) {
		// 次のシーンへの切り替えを開始
		this.unbindEvents();
		this.fadeOut();
	}
	else {
		// 最後のシーンなので、イベントを設定して完了する
		this.bindEvents();
	}
};

/** キーなどのイベントを設定する*/
am1.sceneMan.prototype.bindEvents = function() {
	alert("proto.bindEvents()");
};

