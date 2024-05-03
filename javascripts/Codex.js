var styleElement = document.createElement('style');

// Append the <style> element to the <head> section of the document
document.head.appendChild(styleElement);
// Object to store text contents and their corresponding IDs
var textContents = {
    '-0x00': `<div class="container"></div>`,
    '-0x01': `<div class="container"></div>`,
    '-0x02': `<div class="container"></div>`,
    '-0x03': `<div class="container"></div>`,
    '-0x04': `<div class="container"></div>`,
    '-0x05': `<div class="container"></div>`,
    '-0x06': `<div class="container"></div>`,
    '-0x07': `<div class="container"></div>`,
    '-0x08': `<div class="container"></div>`,
    '-0x09': `<div class="container"></div>`,
    '-0x0A': `<div class="container"></div>`,
};

function displayText(contentId) {
    var articleHeaderBottom = document.querySelector(".articleHeaderBottom");
    articleHeaderBottom.innerHTML = contentId;

    var textBox = document.getElementById("textBox");
    textBox.innerHTML = textContents[contentId] || `<center><img src="../images/lock.png" alt="🔒"><center>`;
}
