chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        let msgg =request.message;
        const printId = request.printId;
        const tb = request.activeTab;
        const brk = request.brk;
        const ids = request.ids;
        var counter = 0
        var myTabId
        if (msgg === "start"){
            // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            //     myTabId = tabs[0].id
            // });
            alert(`${ids.length} id will be print !!!`)
        }
        else if(msgg === "print") {
            alert("Ready to print!!");
            sendStatusMsg(ids, myTabId)
            msgg = null
        } else if(msgg === 'first') {
            firstStep()
            sendResponse({farewell: "goodbye"})
        } else {
            alert('backgound not working')
        }





        function firstStep() {
            const firstInput = document.getElementById("txtWork")
            firstInput.value = value
            const firstButton = document.getElementById("imgButtonSearch")
            if(counter %2 === 1) {
                firstButton.click()
            }
        }

        function secondstep() {
            const dropDown1 = document.getElementById("ddlworkcode")
            document.getElementById("ddlworkcode").selectedIndex = "1"
            const value1 = dropDown1.options[dropDown1.selectedIndex].value
            dropDown1.value = value1
            if(counter %2 === 0) {
                setTimeout('__doPostBack(\'ddlworkcode\',\'\')', 0)
            }
        }

        function thirdStep () {
            document.getElementById("ddlmsrno").selectedIndex = "1"
            document.getElementById("btnproceed").click()
        }

        function finalStep() {
            window.print();
            window.location.href = "https://nregade3.nic.in/netnrega/reprintmsr.aspx"
        }
        
        function sendStatusMsg(id,myTabId) {
            try {
                chrome.runtime.sendMessage({
                     data: `${id}`,
                     tabId : myTabId
                 });
             } catch (error) {
                 console.log(error);
             }
        }
    }
    
    
);