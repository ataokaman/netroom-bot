(function(){
  console.log("ボット起動");

  // チャット入力欄（適宜調整）
  const input = document.querySelector("input, textarea");

  if(!input){
    alert("入力欄が見つからない");
    return;
  }

  // 簡単なAIっぽい応答
  function getResponse(text){
    if(text.includes("こんにちは")) return "こんにちは！";
    if(text.includes("名前")) return "もてょです";
    if(text.includes("暇")) return "じゃあ話そうぜ";
    return "それ面白いね";
  }

  // Enterで送信されたとき反応
  input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
      setTimeout(()=>{
        let msg = input.value;
        let res = getResponse(msg);

        // 返信を入力欄にセット
        input.value = res;

        // 送信イベント（サイトによって調整必要）
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }, 300);
    }
  });

})();
