function highlightGear() {
  // Query the active tab, which will be only one tab and inject the script in it.
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        files: ["highlight-gear.js"]
      });
  });
}

document.getElementById('toggle-highlights').addEventListener('click', highlightGear);
