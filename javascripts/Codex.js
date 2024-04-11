var styleElement = document.createElement('style');

var styleElement = document.createElement('style');

styleElement.textContent = cssText;

var cssText = {

}

// Append the <style> element to the <head> section of the document
document.head.appendChild(styleElement);
// Object to store text contents and their corresponding IDs
var textContents = {
    'text1': '<h3> Level 0x00</h3><p></p>',
    'text2': '<h3> Level 0x01</h3><p></p>',
    'text3': '<h3> Level 0x02</h3><p></p>',
    'text4': '<h3> Level 0x03</h3> <p></p>',
    'text5': '<h3> Level 0x04</h3><p></p>',
    'text6': '<h3> Level 0x05</h3><p></p>',
    'text7': '<h3> Level 0x06</h3><p></p>',
    'text8': '<h3> Level 0x07</h3><p></p>',
    'text9': '<h3> Level 0x08</h3><p></p>',
    'text10': '<h3> Level 0x09</h3><p></p>',
    'text11': '<h3> Level 0x10</h3><p></p>',
};

// JavaScript function to display text based on clicked link
function displayText(contentId) {
    var textBox = document.getElementById("textBox");
    textBox.innerHTML = textContents[contentId] || 'Text not found!';
}
