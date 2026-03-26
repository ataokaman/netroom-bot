(function(){
  console.log("もてょBOT起動");

  function getInput(){
    return document.querySelector('[contenteditable="true"], textarea, input');
  }

  function getSendButton(){
    // 「送信」ボタン探す
    let buttons = document.querySelectorAll("button");

    for(let btn of buttons){
      if(btn.innerText.includes("送信")){
        return btn;
      }
    }

    return null;
  }

  function send(text){
    const input = getInput();
    const btn = getSendButton();

    if(!input){
      console.log("入力欄なし");
      return;
    }

    input.focus();

    if(input.isContentEditable){
      input.innerText = text;
    } else {
      input.value = text;
    }

    input.dispatchEvent(new Event('input', { bubbles: true }));

    // 🔥 ボタンクリックで送信
    if(btn){
      btn.click();
    }else{
      console.log("送信ボタン見つからない");
    }
  }

  setTimeout(()=>{
    send("もてょBOT起動");
  },1000);

})();
