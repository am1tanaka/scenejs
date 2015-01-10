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
/** マスクする場所のjQueryオブジェクト*/
am1.sceneMan.prototype.body = null;

/** シーンを変更する
 * @param array 次のシーンのリスト。配列で渡すこと。
 * @param jQueryObject マスク領域。省略すると変更なし。
 */
am1.sceneMan.prototype.change = function(next,bd) {
	var proto = am1.sceneMan.prototype;
	am1.sceneMan.prototype.body = bd || am1.sceneMan.prototype.body;

	// bodyが未設定の時、bodyにする。
	if (am1.sceneMan.prototype.body == null) {
		am1.sceneMan.prototype.body = $("body");
	}

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
		proto.nowScene.unbindEvents();
		proto.nowScene.fadeOut();
	}
	else {
		// 現在のシーンが無効な時は、すぐに次のシーンへ
		proto.fadeOutDone();
	}
};

/** キーなどのイベントを解除して、最上位にマスクを表示する*/
am1.sceneMan.prototype.unbindEvents = function() {
	$('#scene_mask').remove();
	am1.sceneMan.prototype.body.append(
		"<div id='scene_mask' "
		+"style='position:absolute;left:0;top:0;width:100%;height:100%;z-index:2147483647'></div>"
	);
};

/** フェードアウトを実行*/
am1.sceneMan.prototype.fadeOut = function() {
	if (am1.sceneMan.prototype.nowScene != null) {
		setTimeout("am1.sceneMan.prototype.nowScene.fadeOutDone()",1);
	}
	else {
		setTimeout("am1.sceneMan.prototype.fadeOutDone()",1);
	}
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
	setTimeout("am1.sceneMan.prototype.fadeInDone()",1);
};

/** フェードインが完了。次のシーンが存在するかチェック*/
am1.sceneMan.prototype.fadeInDone = function() {
	var nowsc = am1.sceneMan.prototype.nowScene;
	if (am1.sceneMan.prototype.nextScenes.length > 0) {
		// 次のシーンへの切り替えを開始
		nowsc.unbindEvents();
		nowsc.fadeOut();
	}
	else {
		// 最後のシーンなので、イベントを設定して完了する
		nowsc.bindEvents();
	}
};

/** キーなどのイベントを設定する*/
am1.sceneMan.prototype.bindEvents = function() {
	$('#scene_mask').remove();
};

