chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set({ name : 'ali' }, function(){
        console.log("hi hi hi");
    })
})