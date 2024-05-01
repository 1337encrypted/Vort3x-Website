var styleElement = document.createElement('style');

// Append the <style> element to the <head> section of the document
document.head.appendChild(styleElement);
// Object to store text contents and their corresponding IDs
var textContents = {
    '-0x00': ``,
    '-0x01': ``,
    '-0x02': ``,
    '-0x03': ``,
    '-0x04': ``,
    '-0x05': ``,
    '-0x06': ``,
    '-0x07': ``,
    '-0x08': ``,
    '-0x09': ``,
    '-0x0A': ``,
};

function displayText(contentId) {
    var articleHeaderBottom = document.querySelector(".articleHeaderBottom");
    articleHeaderBottom.innerHTML = contentId;

    var textBox = document.getElementById("textBox");
    textBox.innerHTML = textContents[contentId] || `<center><img src="../images/lock.png" alt="🔒"><center>`;
}
