(function(){
  console.log("もてょBOT起動");

  function getInputFromDoc(doc){
    return doc.querySelector('[contenteditable="true"], textarea, input');
  }

  function findInput(){
    // ① 自分のページ
    let input = getInputFromDoc(document);
    if(input) return input;

    // ② iframeの中を全部探す
    let iframes = document.querySelectorAll("iframe");

    for(let iframe of iframes){
      try{
        let doc = iframe.contentDocument || iframe.contentWindow.document;
        let input = getInputFromDoc(doc);
        if(input) return input;
      }catch(e){
        // クロスオリジンは無視
      }
    }

    return null;
  }

  function send(text){
    const input = findInput();

    if(!input){
      console.log("入力欄見つからない");
      return;
    }

    if(input.isContentEditable){
      input.innerText = text;
    } else {
      input.value = text;
    }

    input.dispatchEvent(new Event('input', { bubbles: true }));

    input.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      key: 'Enter',
      code: 'Enter'
    }));
  }

  setTimeout(()=>{
    send("もてょBOT起動");
  },1500);

})();
