# axia.js
あったら便利な機能をコミットしていきます。  
基本は Jquery に依存しないクラスとして作成していけたらと思っています。

ライセンスは MIT です。

## 機能
### ブレイクポイント
`window.matchMedia` を用いてブレイクポイントが変化したらイベントをリッスンします。  
デフォルトは 600px と 960px の2箇所です。

## Usage
クラス化しているので new 宣言します。  
この時、オプションとして配列を渡すことによって、様々なブレイクポイントを設定できます。

    var axia = new Axia();

    or

    var axia = new Axia( {
        breakpoints: [ 480, 600, 960 ]
    } );

#### break-point-change
登録したブレイクポイントを `window.matchMedia` で監視して該当したらイベントをリッスンします。
デフォルトは `breakpoints: [ 600, 960 ]` となっています。

`break-point-change` というカスタムイベント名で実装しているので、`addEventListener` でイベントを登録します。

    axia.addEventListener( 'break-point-change', function( e ){
        console.log( e );
    } );

ブレイクポイントが変化すると、

    Object {width: xxx, breakpoint: 960}
    Object {width: xxx, breakpoint: 600}
    Object {width: xxx, breakpoint: 1}

- width -> ブレイクポイントが変化した時のウインドウサイズ
- breakpoint -> ブレイクポイントが変化した時の登録時の名前

といった形のデータが返ってきます。

#### イベントの削除

    axia.removeEventListener( 'break-point-change' );
