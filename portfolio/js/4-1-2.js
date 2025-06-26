//テキストのカウントアップ+バーの設定について
var bar = new ProgressBar.Line(loading_text, {
  easing: "easeInOut", //アニメーション効果、他（linear、easeIn、easeOut、easeInOutが指定可能）
  duration: 2000, //時間指定(1000＝1秒)
  strokeWidth: 1.3, //進捗ゲージの太さ
  color: "#555", //進捗ゲージのカラー
  trailWidth: 1.3, //ゲージベースの線の太さ
  trailColor: "#bbb", //ゲージベースの線のカラー
  text: {
    style: {
      transform: "translate(-50%,-50%)",
      "font-size": "1rem",
      color: "#2f2f2f",
      position: "absolute",
      left: "50%",
      top: "50%",
      padding: "0",
      margin: "-30px 0 0 0", 
    },
    autoStyleContainer: false, //自動付与のスタイルを切る
  },
  step: function (state, bar) {
    bar.setText(Math.round(bar.value() * 100) + " %"); //テキストの数値
  },
});

//アニメーションスタート
bar.animate(1.0, function () {//1.0 なら100%まで描画
  $("#loading_text").fadeOut(10); 
  $(".loader_cover-up").addClass("coveranime"); 
  $(".loader_cover-down").addClass("coveranime"); 
  $("#loading").fadeOut(); 
});
