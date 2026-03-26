(function(){
  console.log("BOT起動");

  function getInput(){
    return document.querySelector('[contenteditable="true"], textarea, input');
  }

  function send(text){
    const input = getInput();

    if(!input){
      console.log("入力欄なし");
      return;
    }

    // 入力
    if(input.isContentEditable){
      input.innerText = text;
    } else {
      input.value = text;
    }

    input.dispatchEvent(new Event('input', { bubbles: true }));

    // 🔥 Ctrl+Enter（フルセット）
    ["keydown","keypress","keyup"].forEach(type=>{
      input.dispatchEvent(new KeyboardEvent(type, {
        bubbles: true,
        cancelable: true,
        key: 'Enter',
        code: 'Enter',
        ctrlKey: true
      }));
    });
  }

  setTimeout(()=>{
    send("BOT起動");
  },1000);

})();
