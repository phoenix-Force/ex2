chrome.runtime.onMessage.addListener(
    async function(request, sender, sendResponse) {
        const ids =request.data;
        var tabId = sender.id
        var idsArr = ids.split(",")
        for(const id of idsArr) {
            console.log(id)
            commandMessage('first', id, tabId)
            new Promise(resolve => setTimeout(resolve, 5000))
        }
        // https://nregade3.nic.in/
        async function commandMessage(step, id, tid) {
            await executing(step, id, tid)
        }
        function executing(step, id, tid) {
            chrome.tabs.query({active:true,windowType:"normal", currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tid, {printId: `${id}`,"message": `${step}`,}, function(response) {
                   console.log(response.farewell);  
                });  
             });
        }

        
    }
    
)