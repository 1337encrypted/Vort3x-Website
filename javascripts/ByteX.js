var styleElement = document.createElement('style');

var styleElement = document.createElement('style');

styleElement.textContent = cssText;

var cssText = {

}

// Append the <style> element to the <head> section of the document
document.head.appendChild(styleElement);
// Object to store text contents and their corresponding IDs
var textContents = {
    'text1': '<h3> Level 0x00</h3> <p>Welcome to level zero of the BYTEX challenges!<br>In this level, you will learn how to set up the arduino-cli software for the Arduino UNO board.<br><h5>Installation Steps:</h5>Execute the installation script with the following command:<br>"./install_arduino_cli.sh"<br>If you are unsure about the type of board you are using, connect it to the Raspberry Pi via USB and run the command below to check:<br>"arduino-cli board list"<br><h5>Expected Output:</h5><br>"Port         Protocol Type              Board Name  FQBN Core/dev/ttyACM0 serial   Serial Port (USB) Arduino Uno arduino:avr:uno arduino:avr"<br>Note: /dev/ttyACM0 is your port number. Remember this for future code uploads.<br>To confirm successful installation, enter arduino-cli in the terminal. You should receive some output. If not, your installation may not have been successful.<br><h5>Password Retrieval:</h5><br>Try executing the "password.sh" file to obtain the password for the next level:</p>'  ,

    'text2': '<h3> Level 0x01</h3> <p>Congratulations on reaching level 1!<br>In this level, you will learn how to make an LED blink using arduino-cli.<br>Generate your first sketch, named Blink, using the following command:<br>"arduino-cli sketch new Blink"<br>Open the nano editor to modify the code:<br>"nano Blink/Blink.ino"<br>Once inside the editor, insert the classic blink code provided below:<br>"void setup() {<br>pinMode(LED_BUILTIN, OUTPUT);<br>}<br>void loop() {<br>digitalWrite(LED_BUILTIN, HIGH);<br>delay(1000);<br>digitalWrite(LED_BUILTIN, LOW);<br>delay(1000);<br>}"<br<<br>Save the changes by pressing Ctrl+O and then exit with Ctrl+X.<br>To compile, use the following syntax:<br>"arduino-cli compile --fqbn arduino:board_name Blink/"<br>For an Arduino UNO, it would be:<br>"arduino-cli compile --fqbn arduino:avr:uno Blink/"<br>To upload the compiled sketch:<br>"arduino-cli upload -p /dev/ttyACM0 --fqbn arduino:avr:uno Blink/" </p>',

    'text3': '<h3> Level 0x02</h3><p></p>',

    'text4': '<h3> Level 0x03</h3> <p></p>',

    'text5': '<h3> Level 0x04</h3><p></p>',

    'text6': '<h3> Level 0x05</h3><p></p>',

    'text7': '<h3> Level 0x06</h3><p></p>',

    'text8': '<h3> Level 0x07</h3><p></p>',

    'text9': '<h3> Level 0x08</h3>',

    'text10': '<h3> Level 0x09</h3>',

    'text11': '<h3> Level 0x10</h3>',
};

// JavaScript function to display text based on clicked link
function displayText(contentId) {
    var textBox = document.getElementById("textBox");
    textBox.innerHTML = textContents[contentId] || 'Text not found!';
}
