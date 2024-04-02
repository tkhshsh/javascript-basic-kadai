//htmlからbtnというidを持つHTML要素を取得し、定数btnに代入する
const btn = document.getElementById('btn');

//htmlからtextというidを持つHTML要素を取得し、定数textに代入する
const text = document.getElementById('text')

//非同期処理（setTimeout関数）
setTimeout(() => {
  //処理(htmlのtextにボタンをクリックしましたと表示する)
  text.textContent = 'ボタンをクリックしました';
//２秒後に
},2000);