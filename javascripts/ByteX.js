var styleElement = document.createElement('style');

// Append the <style> element to the <head> section of the document
document.head.appendChild(styleElement);
// Object to store text contents and their corresponding IDs
var textContents = {
    'Level 0x00': ``,
    'Level 0x01': `
    <h1 id=pageTitle>Exercise 1: LEDs</h1>

    <div class=pageHeading1>Exercise 1.1: Blink an LED with the least delay time possible</div>

    <li>Connect an LED to pin 4 and turn it on and off using digitalWrite</li>
    <li>You need to determine the least dealy time possible without he LED completely turning on.</li>

    <div class=pageHeading1>Exercise 1.2: Create a traffic light simulator</div>

    <li>Connect redLed to pin 3, yellowLed to pin 4 and greenLed to pin 5</li>
    <li>Use the digitalWrite function to control the sequence in which the LEDs turn on and off,
      creating a traffic light effect.</li>
    <li>Print STOP, GET READY, GO respectively on appropriate led lights.</li>


    <div class=pageHeading1>Exercise 1.3: Create a binary 3 bit counter</div>
    
    <li>Connect the LED's to pin number 3, 4 and 5</li>   
    <li>Create a binary counter which counts from 0 to 7 in binary, use suitable delay between
      the count.</li>
    <p>
      000
      001
      010
      011
      100
      101
      110
      111
    </p>
    `,
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
    textBox.innerHTML = textContents[contentId] || 'Text not found!';
}