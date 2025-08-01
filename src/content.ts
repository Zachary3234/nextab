// src/content/index.ts
chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message.type === 'GET_DOM_INFO') {
    sendResponse({
      title: document.title,
      url: location.href
    })
  }
})