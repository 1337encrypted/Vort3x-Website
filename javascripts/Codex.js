var styleElement = document.createElement('style');

// Append the <style> element to the <head> section of the document
document.head.appendChild(styleElement);
// Object to store text contents and their corresponding IDs
var textContents = {
    'Level 0x00': ``,
    'Level 0x01': ``,
    'Level 0x02': ``,
    'Level 0x03': ``,
    'Level 0x04': ``,
    'Level 0x05': ``,
    'Level 0x06': ``,
    'Level 0x07': ``,
    'Level 0x08': ``,
    'Level 0x09': ``,
    'Level 0x0A': ``,
};

function displayText(contentId) {
    var articleHeaderBottom = document.querySelector(".articleHeaderBottom");
    articleHeaderBottom.innerHTML = contentId;

    var textBox = document.getElementById("textBox");
    textBox.innerHTML = textContents[contentId] || 'Text not found! Work in progress';
}
