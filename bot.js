(function(){
  console.log("もてょBOT起動");

  function sendMessageReal(text){
    try{
      // 🔥 最有力：send関数
      if(typeof send === "function"){
        send(text);
        return true;
      }

      // 🔥 次候補
      if(typeof send_pvm === "function"){
        send_pvm(text);
        return true;
      }

      // 🔥 fallback（最終手段）
      let input = document.querySelector('[contenteditable="true"], textarea, input');

      if(input){
        input.focus();

        if(input.isContentEditable){
          input.innerText = text;
        } else {
          input.value = text;
        }

        input.dispatchEvent(new Event('input', { bubbles: true }));

        // Ctrl+Enter
        ["keydown","keyup"].forEach(type=>{
          input.dispatchEvent(new KeyboardEvent(type,{
            bubbles:true,
            key:"Enter",
            code:"Enter",
            ctrlKey:true
          }));
        });

        return true;
      }

    }catch(e){
      console.log("送信エラー", e);
    }

    return false;
  }

  setTimeout(()=>{
    let ok = sendMessageReal("もてょBOT起動");

    if(!ok){
      console.log("送信失敗");
    }else{
      console.log("送信成功");
    }

  },1000);

})();
