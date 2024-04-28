var styleElement = document.createElement('style');

// Append the <style> element to the <head> section of the document
document.head.appendChild(styleElement);
// Object to store text contents and their corresponding IDs
var textContents = {
    'Level 0x00': `
    <h1 id=pageTitle>Challenge 0: SSH</h1>
    <h3>Task 0.0: Figure out the <span class="keyword">ip-address</span></h3>
    <h3>Task 0.1: To verify if your ip address is correct run the file verify_ip_address.sh</h3>
    <span class="code">cd ~</span>
    <span class="code">./verify_ip_address.sh &lt;ip_address&gt;</span>
    <li>If you will get the password to the next level.</li>
    `,
    'Level 0x01': `
    <h1 id=pageTitle>Challenge 1: verify arduino-cli</h1>
    <h3>Task 1.0: login to user <span class="keyword">shell01</span></h3>
    <li>Explore the <span id="hint">su</span> command</li>
    <h3>Task 1.1: Run the file <span class="keyword">password.sh</span></h3>
    <li>Navigate to home directory of the user</li>
    <span class="code">cd ~</span>
    <span class="code">./password.sh</span>
    <li>If arduino-cli is properly installed you will get the password to the next level.</li>
    `,

    'Level 0x02': `
    <h1 id=pageTitle>Challenge 2: LEDs</h1>
    <h3>Task 2.0: Blink an LED with the least delay time possible</h3>
    <li>Connect an LED to pin 4 and turn it on and off using digitalWrite</li>
    <li>You need to determine the least dealy time possible without he LED completely turning on.</li>
    <h3>Task 2.1: Create a traffic light simulator</h3>
    <li>Connect redLed to pin 3, yellowLed to pin 4 and greenLed to pin 5</li>
    <li>Use the digitalWrite function to control the sequence in which the LEDs turn on and off,
      creating a traffic light effect.</li>
    <li>Print STOP, GET READY, GO respectively on appropriate led lights.</li>
    <h3>Task 2.2: Create a binary 3 bit counter</h3>
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