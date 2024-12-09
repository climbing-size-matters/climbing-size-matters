async function highlightGear() {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.tabs.sendMessage(tab.id, { type: "highlight-gear" });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('toggle-highlights').addEventListener('click', highlightGear);
});
