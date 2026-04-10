/* =========================================
   研修用JavaScriptファイル (script.js)
   Webページにおける「動き・計算・データの書き換え」を担当します。
========================================= */

// DOM（HTML要素の読み込み）が完了してから実行します
document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 1. CSSの有効/無効を切り替えるデモ
    // =========================================
    const toggleCssBtn = document.getElementById('toggleCssBtn');
    const styleSheet = document.getElementById('main-style'); // HTML内の <link id="main-style">
    let isCssEnabled = true;

    toggleCssBtn.addEventListener('click', () => {
        isCssEnabled = !isCssEnabled;

        // disabledプロパティを切り替えることで、CSSの適用のON/OFFができます
        styleSheet.disabled = !isCssEnabled;

        // ボタンのテキストと色を状況に合わせて変更する
        if (isCssEnabled) {
            toggleCssBtn.textContent = '👗 CSSを脱がせる（無効化）';
            toggleCssBtn.style.backgroundColor = ''; // CSSで定義した色に戻すため空文字
        } else {
            toggleCssBtn.textContent = '👚 CSSを着せる (デザインを適用する)';
            toggleCssBtn.style.backgroundColor = '#9DB5A4'; // セージグリーン
        }
    });


    // =========================================
    // 2. JavaScriptによる機能デモ（動作の追加とデータの書き換え）
    // =========================================

    const showTimeBtn = document.getElementById('showTimeBtn');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const jsOutputBox = document.getElementById('jsOutputBox');

    // 「現在時刻を表示する」ボタンの処理
    if (showTimeBtn) {
        showTimeBtn.addEventListener('click', () => {
            const now = new Date();
            jsOutputBox.textContent = `現在時刻は ${now.toLocaleString()} です！`;
            jsOutputBox.style.backgroundColor = '#e8f8f5';
            jsOutputBox.style.color = '#16a085';
            jsOutputBox.style.borderColor = '#1abc9c';
        });
    }

    // 「ランダムな色を生成する」ボタンの処理
    if (changeColorBtn) {
        changeColorBtn.addEventListener('click', () => {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            jsOutputBox.style.backgroundColor = randomColor;
            jsOutputBox.style.color = '#fff';
            jsOutputBox.style.borderColor = randomColor;
            jsOutputBox.textContent = `JSで計算し、色を ${randomColor} に変更しました！`;
        });
    }


    // =========================================
    // 3. JavaScriptを停止させるデモ（疑似的な無効化）
    // =========================================
    const killJsBtn = document.getElementById('killJsBtn');
    const toggleXrayBtn = document.getElementById('toggleXrayBtn');

    if (toggleXrayBtn) {
        let isXrayEnabled = false;
        toggleXrayBtn.addEventListener('click', () => {
            isXrayEnabled = !isXrayEnabled;
            if (isXrayEnabled) {
                document.body.classList.add('xray-mode');
                toggleXrayBtn.textContent = '🦴 レントゲン解除';
                toggleXrayBtn.style.backgroundColor = '#4a4a4a';
            } else {
                document.body.classList.remove('xray-mode');
                toggleXrayBtn.textContent = '🦴 レントゲン';
                toggleXrayBtn.style.backgroundColor = ''; // デフォルト色
            }
        });
    }

    killJsBtn.addEventListener('click', () => {
        // 警告ダイアログ（アラート）を出すのもJSの得意な機能です
        alert('JavaScriptの機能を停止させます。\nこれ以降、時刻の表示や色の変更、CSSの切り替えボタンがクリックできなくなります。\n\n※機能を元に戻すには、ブラウザの再読み込み（リロード）をしてください。');

        // クリックイベントを無効化するため、ボタン要素のクローンを作って差し替える（JSテクニック）
        const buttons = [toggleCssBtn, showTimeBtn, changeColorBtn, killJsBtn, toggleXrayBtn];

        buttons.forEach(btn => {
            if (btn) {
                const clone = btn.cloneNode(true);
                // 見た目も「押せない感」を出す
                clone.style.opacity = '0.5';
                clone.style.cursor = 'not-allowed';
                btn.parentNode.replaceChild(clone, btn);
            }
        });

        // 結果表示枠を「機能停止」状態に書き換え
        if (jsOutputBox) {
            jsOutputBox.textContent = '❌ JavaScriptの機能が停止しました。ボタンを押しても反応しません。';
            jsOutputBox.style.backgroundColor = '#7f8c8d';
            jsOutputBox.style.color = '#fff';
            jsOutputBox.style.borderColor = '#34495e';
        }
    });

});
