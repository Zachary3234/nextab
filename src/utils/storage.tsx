// Chrome Storage API
// share data between Popup/Background/Content Scripts
// 验证处于扩展环境
if (typeof chrome !== 'undefined' && chrome.storage) {
  console.log('Chrome Storage API is available');
} else {
  console.log('Chrome Storage API is not available');
}


// 保存数据
const value = "some value";
chrome.storage.local.set({ key: value }, () => {
  console.log("Data saved");
});

// 读取数据
chrome.storage.local.get(["key"], (result) => {
  console.log("Data loaded:", result.key);
});