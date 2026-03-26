(function(){
  console.log("もてょBOT起動");

  function getInput(){
    // 入力欄候補を全部拾う
    let inputs = document.querySelectorAll('[contenteditable="true"], textarea, input');
    return inputs.length ? inputs[inputs.length - 1] : null;
  }

  function send(text){
    const input = getInput();

    if(!input){
      console.log("入力欄が見つからない");
      return;
    }

    // contenteditable対応
    if(input.isContentEditable){
      input.innerText = text;
    } else {
      input.value = text;
    }

    // 入力イベント
    input.dispatchEvent(new Event('input', { bubbles: true }));

    // Enterキー送信
    input.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      key: 'Enter',
      code: 'Enter'
    }));
  }

  // 起動テスト
  setTimeout(()=>{
    send("もてょBOT起動");
  },1000);

})();
