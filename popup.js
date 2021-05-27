window.onload=function(){
    var flag = 0;
    function popup() {
        flag = 1;
        debugger
        var idstr = document.getElementById("inputIds").value
        var idsArr = idstr.split(",")
        debugger
        console.log(idsArr)
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "start","flag":flag,"brk":"no","ids":idsArr});
        debugger
        if(idsArr.length > 0) {
            document.getElementById('btnprint').disabled = false;
            document.getElementById("inputIds").disabled = true;
        }
    });
}
document.getElementById("btngnrt").addEventListener("click", popup);
    
function popup2() {
        flag = 0;
        var idstr2 = document.getElementById("inputIds").value
        var idsArr2 = idstr2.split(",")
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "print","flag":flag,"brk":"yes","ids":idsArr2});
    });
}
    document.getElementById("btnprint").addEventListener("click", popup2);
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        msgg =request.data; 
        if(msgg ==='click') {
            document.getElementById("btnprint").addEventListener("click", popup2);  
        } else {
            document.getElementById("message").innerHTML = msgg
        }
        
        
    }
);

