// 読込後
window.addEventListener('load', function () {
    // 入力テキストボックス、[QRコード生成]ボタンの要素を取得
    let inTxtElem = document.getElementById('inTxts');
    let qrBtnElem = document.getElementById('qrConv');

    // ボタン クリック時の処理を追加
    qrBtnElem.onclick = function () {
        // QRコードの出力先をクリア
        document.getElementById('QR').textContent = '';

        // 入力テキストの前後空白文字を削除後、1行毎に分割
        let base64txts = inTxtElem.value.toString().trim().split("\n");

        //Base64テキストを１行ずつ読込み、QRコード化
        base64txts.forEach((element, index) => {
            ++index;
            let idStr = 'qr' + index.toString();

            // <div>要素作成と属性設定
            let divElem = document.createElement("div");
            divElem.setAttribute("style", "display: flex;");

            // <div>要素作成と属性設定
            let txtDivElem = document.createElement("span");
            txtDivElem.textContent = index;
            txtDivElem.setAttribute("style", "border: 5rem solid white; font-size: xxx-large;");
            
            // <div>要素作成と属性設定
            let qrDivElem = document.createElement("span");
            qrDivElem.setAttribute("id", idStr);
            qrDivElem.setAttribute("style", "border: 5rem solid white;");

            // DOMに上記の<div>要素追加
            document.getElementById('QR').appendChild(divElem);
            divElem.appendChild(txtDivElem);
            divElem.appendChild(qrDivElem);

            // QRコード作成
            let qrcode = new QRCode(idStr,
                {
                    text: element,
                    width: 128,
                    height: 128,
                    correctLevel: QRCode.CorrectLevel.H
                });
        });
    }
});
