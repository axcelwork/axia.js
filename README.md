# axia.js
あったら便利な機能をコミットしていきます。  
基本は Jquery に依存しないクラスとして作成していけたらと思っています。

ライセンスは MIT です。

## 機能
### breakpoints
`window.matchMedia` を用いてブレイクポイントが変化したらイベントをリッスンします。  
現在は 600px と 960px の２箇所です。

## Usage
### breakpoints
クラス化しているので new 宣言します。  
この時、オプションとして配列を渡すことによって、様々なブレイクポイントを設定できます。

    var axia = new Axia( {
        breakpoints: [ 480, 600, 960 ]
    } );

    or

    var axia = new Axia( {
        breakpoints: [ 480, 600, 960, 1200 ]
    } );

デフォルトでは 600px と 960px の2箇所です。

     breakpoints: [ 600, 960 ]

`breakpoints` というカスタムイベント名で実装しているので、`addEventListener` でイベントを登録します。

	axia.addEventListener( 'breakpoints', function( e ){
		// 処理
	} );
ブレイクポイントが変化すると、

	// 960px以上の時
    // console.log( e );
    // --> bp960

    // 600以上〜959px以上の時
    // console.log( e );
    // --> bp600 - 960

    // 599px以下の時
    // console.log( e );
    // --> bp599

というような感じで文字列が返ってきます。

イベントの削除はこう。

	axia.removeEventListener( 'breakpoints' );
