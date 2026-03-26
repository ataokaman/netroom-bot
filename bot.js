(function(){
  console.log("もてょBOT起動");

  function send(text){
    try{
      // 🔥 最有力（本命）
      if(typeof sendMessage === "function"){
        sendMessage(text);
        return;
      }

      // 🔥 次候補
      if(typeof d_send === "function"){
        d_send(text);
        return;
      }

      // 🔥 最終 fallback（DOM）
      let input = document.querySelector('[contenteditable="true"], textarea, input');

      if(input){
        input.focus();

        if(input.isContentEditable){
          input.innerText = text;
        } else {
          input.value = text;
        }

        input.dispatchEvent(new Event('input', { bubbles: true }));
      }

    }catch(e){
      console.log("エラー", e);
    }
  }

  setTimeout(()=>{
    send("もてょBOT起動");
  },1000);

})();
