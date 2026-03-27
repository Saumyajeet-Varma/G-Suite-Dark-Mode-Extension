const action_btn=document.getElementById("action-btn");

action_btn.addEventListener("click",()=>{
    action_btn.classList.toggle("active");
    const isActive = action_btn.classList.contains("active");
    action_btn.textContent = isActive ? "Disable" : "Enable";
    chrome.runtime.sendMessage({action:"toggleDark"});
})