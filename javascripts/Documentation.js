var styleElement = document.createElement('style');

// Append the <style> element to the <head> section of the document
document.head.appendChild(styleElement);
// Object to store text contents and their corresponding IDs
var textContents = {
  'ssh': `
  <h1 id="pageTitle">Secure Shell (SSH)</h1>
  <h3>Figure out the ip-address of the remote machine</h3>
  <span class="code">ip-addr</span>
  <h3>Connect to the remote machine using the syntax</h3>
  <span class="code">ssh &lt;username&gt;@&lt;ipaddres&gt;</span>
  `,
  
  'create_new_user': `
  <h1 id="pageTitle">adduser</h1>
  <h3>1. Open a terminal on your Linux system</h3>
  <h3>2. Run the <span class="keyword">adduser</span> command followed by the desired username:</h3>
  <span class="code">sudo adduser &lt;username&gt;</span>
  <li>This will create the new user along with the home directory</li>
  <h3>2. Login using the username</h3>
  <span class="code">su &lt;username&gt;</span>
  `,

  'arduino-cli': `
  <h1 id="pageTitle">arduino-cli</h1>
  <li>Installation of <strong>arduino-cli</strong> software for the arduino UNO bloard</li>
  <h3>Download the script by clicking <a href='../scripts/install_arduino_cli.sh'>here</a> or use wget to install it.</h3>
  <span class="code">wget &lt;url&gt;</span>
  <h3>Install the script</h3>
  <span class="code">./install_arduino_cli.sh</span>
  <li>If you don't know what kind of board you have, simply connect it to the Raspberry Pi via USB,
  type the following command and examine the output:</li>
  <span class="code">arduino-cli board list</span>
  <h3>OUTPUT</h3>
  <span class="code">Port         Protocol Type              Board Name  FQBN            Core
  /dev/ttyACM0 serial   Serial Port (USB) Arduino Uno arduino:avr:uno arduino:avr</span>
  <li>Here <span class='keyword'>/dev/ttyACM0</span> is the port number, you must remember this to upload you code next time.</li>
  `,
  
  'setup_ssh_keys': `
  <h1 id="pageTitle">Generate SSH Keys</h1>
  <h3>Generate the ppublic and private keys for github</h3>
  <span class="code">ssh-keygen -t ed25519 -C "your_email@example.com"</span>
  <h3>Copy the public key and copy it over to github</h3>
  <span class="code">cat ~/.ssh/id_rsa.pub</span>
  `,
  
  'git_basics': `
  <h1 id="pageTitle">git</h1>
  `,
  
  'pin Numbers': ``,

  'leds': `
  <h1 id="pageTitle">Led's</h1>
  `,
  
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