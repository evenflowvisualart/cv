function iOS() {
   if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    if ((!!window.indexedDB) ||(!!window.SpeechSynthesisUtterance) ||(!!window.webkitAudioContext)) {
        var script = document.createElement("script");
          script.innerHTML = "addToHomescreen({maxDisplayCount: 1});";
          document.head.appendChild(script);
  }
  return false;
}
}