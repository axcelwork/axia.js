# axia.js
あったら便利な機能をコミットしていきます。  
基本は Jquery に依存しないクラスとして作成していけたらと思っています。

ライセンスは MIT です。

## 機能
### ブレイクポイント
`window.matchMedia` を用いてブレイクポイントが変化したらイベントをリッスンします。  
デフォルトは 600px と 960px の２箇所です。

Event の種類は2つ用意しています。

- break-point-change
- 登録したブレイクポイントの数値

## Usage
### ブレイクポイント
クラス化しているので new 宣言します。  
この時、オプションとして配列を渡すことによって、様々なブレイクポイントを設定できます。

    var axia = new Axia();

    or

    var axia = new Axia( {
        breakpoints: [ 480, 600, 960 ]
    } );

#### break-point-change
登録したブレイクポイントを `window.matchMedia` で監視して該当したらイベントをリッスンします。

`break-point-change` というカスタムイベント名で実装しているので、`addEventListener` でイベントを登録します。

    axia.addEventListener( 'break-point-change', function( e ){
        console.log( e );
    } );

ブレイクポイントが変化すると、

    Object {width: 1035, size: "large", breakpoint: 960}

- width -> ブレイクポイントが変化した時のウインドウサイズ
- size -> ブレイクポイントが変化した時の方向
- breakpoint -> ブレイクポイントが変化した時の登録時の名前

といった形のデータが返ってきます。
あとは `if` 等を利用して、ブレイクポイントごとの処理をさせるとよいでしょう。

#### イベントの削除

    axia.removeEventListener( 'breakpoints' );

### 登録したブレイクポイントの数値
上述のイベントでは、使いづらい印象がありますので、登録したブレイクポイントの数値基準でイベントをリッスンする機能もあります。

    var axia = new Axia({
        breakpoints: [ 480, 600, 960 ]
    });

例えばこのようにブレイクポイントを変更させて、それぞれの数値で `addEventListener` します。

    axia.addEventListener( '960', function( e ){
        console.log( '960' );
        // 960px 以上の時の処理
    } );

    axia.addEventListener( '600', function( e ){
        console.log( '600' );
        // 959px　〜 600px の時の処理
    } );

    axia.addEventListener( '480', function( e ){
        console.log( '480' );
        // 599px　〜 480px の時の処理
    } );

    axia.addEventListener( '1', function( e ){
        console.log( '1' );
        // 479px 以下の時の処理
    } );

裏側で、ブレイクポイントの最小値よりも低い値（この場合は 1 です）を追加し、イベントをリッスンしています。


