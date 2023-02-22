document.getElementById("submit").addEventListener("click", connect)
async function connect() {
    const [tab] = await chrome.tabs.query({ // to get current active tab
        active: true,
        currentWindow: true,
    });
    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
            var buttons = document.getElementsByClassName("artdeco-button artdeco-button--2 artdeco-button--secondary ember-view"); // get buttons
            for (let i = 0; i < buttons.length; i++) {
                setTimeout(()=>{
                    if (buttons[i].innerText === 'Connect'){ //check if its a connect button
                        buttons[i].click(); // click on connect button
                        setTimeout(()=>{
                            document.getElementsByClassName("artdeco-button artdeco-button--2 artdeco-button--primary ember-view ml1")[0].click() // click on send button
                        },2000)
                    } 
                },5000);                
            }
        },
    });
}
