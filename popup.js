document.getElementById('fillButton').addEventListener('click', () => {
    const number = document.getElementById('numberInput').value;
    if (number >= 1 && number <= 5) {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: fillRadioButtons,
            args: [number]
        });
        });
    } else {
        alert('Please enter a number between 1 and 5.');
    }
});

function fillRadioButtons(number) {
    const radioButtons = document.querySelectorAll(`input[type="radio"][value="${number}"]`);
    radioButtons.forEach(radio => radio.checked = true);
}
  