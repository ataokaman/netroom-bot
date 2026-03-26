(function(){
  console.log("もてょBOT起動");

  function send(text){
    sendMessage(_0x5f3706,_0x43f755,_0x6db44b,_0x1ff8a6);
  }

  function getResponse(text){
    if(text.includes("こんにちは")) return "こんにちは！";
    if(text.includes("暇")) return "話そうぜ";
    if(text.includes("名前")) return "もてょBOTだよ";
    return "それな";
  }

  let lastMessage = "";

  setInterval(()=>{
    try{
      // 最新メッセージ取得（雑だけど動く）
      let text = document.body.innerText;

      if(text !== lastMessage){
        lastMessage = text;

        let res = getResponse(text);
        send(res);
      }
    }catch(e){
      console.log("エラー", e);
    }
  },2000);

})();
