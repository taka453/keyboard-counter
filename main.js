/*==================
リアルタイムで変化する
文字数カウンター

メソッド
・onkeyup
・value

プロパティ
・length
・innerText
===================*/

const textarea = document.querySelector('textarea');
const string_num = document.getElementById('string_num');
const caution = document.getElementById('caution');

textarea.addEventListener('keyup', onKeyUp);

function onKeyUp() {
    const inputText = textarea.value.replace(/\s+/g, '');
    const length = inputText.trim().length;
    string_num.innerText = inputText.length;
    if(length > 10) {
        string_num.style.color = '#ff0000';
        caution.style.color = '#ff0000';
        caution.textContent = '10文字以内に入力してくだだい。';
    } else if(length <= 10) {
        string_num.style.color = '#222';
        caution.textContent = '';
        console.log(length);
    }
}

