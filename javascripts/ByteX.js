var styleElement = document.createElement('style');

// Append the <style> element to the <head> section of the document
document.head.appendChild(styleElement);
// Object to store text contents and their corresponding IDs
var textContents = {
  '0x00': `
  <h1 class="center pageTitle">Challenge 0: SSH</h1>
  <h3>Assignment 0.0: Figure out the <span class="keyword">ip address</span> of your linux machine</h3>
  <span class="code">ip address</span>
  <h3>Assignment 0.1: To verify if your ip address is correct run the file <a href="../scripts/verify_ip_address">verify_ip_address</a> and pass your ip address as the argument</h3>
  <span class="code">wget http://16.171.179.211/Vortex-Website/scripts/verify_ip_address</span>
  <li>Make the file executable before running it</li>
  <span class="code">chmod +x verify_ip_address</span>
  <li>Run the file with the ip address as the argument</li>
  <span class="code">./verify_ip_address &lt;ip_address&gt;</span>
  `,

  '0x01': `
  <h1 class="center pageTitle">Challenge 1: Basics of command-line</h1>

  <span class="center redNote">Note: User account should be created before attempting to solve the assignments</span>

  <h3 class="center">Assignment 1.0: File and Directory Operations</h3>
  
  <ul>  <input type="checkbox"> Create a new directory called <strong>folder1</strong> in your <strong>users home</strong> directory.
  <input type="checkbox"> Navigate into the folder1 directory using the <strong>cd</strong> command.
  <input type="checkbox"> Create three new empty files named <strong>file1.txt, file2.txt, and file3.txt</strong> using the <strong>touch</strong> command.
  <input type="checkbox"> List the contents of the folder1 directory to verify that the three files were created.
  <input type="checkbox"> Make a copy of file1.txt and name the copy file1_backup.txt using the <strong>cp</strong> command.
  <input type="checkbox"> Rename file2.txt to file2_renamed.txt using the <strong>mv</strong> command.
  <input type="checkbox"> Create a new subdirectory called <strong>backup</strong> inside the folder1 directory using the <strong>mkdir</strong> command.
  <input type="checkbox"> Move file1_backup.txt into the backup subdirectory using the <strong>mv</strong> command.
  <input type="checkbox"> Delete the <strong>file3.txt</strong> file using the <strong>rm</strong> command.
  <input type="checkbox"> Remove the backup subdirectory and its contents using the <strong>rm -r</strong> command.</ul>
 
  <h3 class="center">Assignment 1.1: Directory Navigation and Listing</h3>
  <ul>  <input type="checkbox"> Navigate to your <strong>users home</strong> directory using the cd command.
  <input type="checkbox"> List the contents of the current directory using the <strong>ls</strong> command.
  <input type="checkbox"> List the contents of the current directory, including hidden files and directories, using the <strong>ls -a</strong>
     command.
  <input type="checkbox"> List the contents of the current directory in a long format that displays permissions, ownership,
     and other details using the <strong>ls -l</strong> command.
  <input type="checkbox"> Create a new directory called project in your home directory using the <strong>mkdir</strong> command.
  <input type="checkbox"> Navigate into the project directory using the <strong>cd</strong> command.
  <input type="checkbox"> Create three subdirectories called <strong>src, docs, and tests</strong> inside the project directory using the mkdir
     command.
  <input type="checkbox"> Navigate back to your home directory using the <strong>cd ..</strong> command (assuming project is a subdirectory
     of your home directory).
  <input type="checkbox"> Remove the project directory and all its contents using the <strong>rm -r</strong> command.
  <input type="checkbox"> Verify that the project directory has been removed by listing the contents of your home directory
     using the <strong>ls</strong> command.</ul>
  
  <h3 class="center">Assignment 1.3: File Copying and Moving</h3>
  <ul>  <input type="checkbox"> Navigate to your <strong>users home</strong> directory.
  <input type="checkbox"> Create a new directory called <strong>files</strong>.
  <input type="checkbox"> Navigate into the files directory.
  <input type="checkbox"> Create three new empty files named <strong>file1.txt, file2.txt, and file3.txt</strong>
  <input type="checkbox"> Make a copy of file1.txt and name the copy file1_copy.txt
  <input type="checkbox"> Create a new subdirectory called <strong>backup</strong> inside the files directory
  <input type="checkbox"> Move <strong>file2.txt and file3.txt</strong> into the <strong>backup</strong> subdirectory
  <input type="checkbox"> Navigate back to your home directory.
  <input type="checkbox"> Copy the entire files directory to a new directory called files_backup
  <input type="checkbox"> Remove the original files directory and its contents</ul>
    `,

  '0x02': `
  <h1 class="center pageTitle">Challenge 2: verify arduino-cli</h1>
  <h3>Task 1.0: login to user <span class="keyword">shell01</span></h3>
  <li>Explore the <span id="hint">su</span> command</li>
  <h3>Task 1.1: Run the file <span class="keyword">password.sh</span></h3>
  <li>Navigate to home directory of the user</li>
  <span class="code">cd ~</span>
  <span class="code">./password.sh</span>
  <li>If arduino-cli is properly installed you will get the password to the next level.</li>
  `,

  '0x03': `
  <h1 class="center pageTitle">Challenge 3: LEDs</h1>
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
  '0x04': ``,
  '0x05': ``,
  '0x06': ``,
  '0x07': ``,
  '0x08': ``,
  '0x09': ``,
  '0x0A': ``,
};

function displayText(contentId) {
    var articleHeaderBottom = document.querySelector(".articleHeaderBottom");
    articleHeaderBottom.innerHTML = contentId;

    var textBox = document.getElementById("textBox");
    textBox.innerHTML = textContents[contentId] || `<center><img src="../images/lock.png" alt="🔒"><center>`;
}