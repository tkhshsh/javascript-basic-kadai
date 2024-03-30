//htmlからbtnというidを持つHTML要素を取得し、定数btnに代入する
const btn = document.getElementById('btn');

//htmlからtextというidを持つHTML要素を取得し、定数textに代入する
const text = document.getElementById('text')

//HTML要素であるbtnがclickされた時に
btn.addEventListener('click',() => {
 //text（event.htmlのh２）にボタンをクリックしましたというテキストを追加する）
    text.textContent = 'ボタンをクリックしました'
});

