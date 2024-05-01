var styleElement = document.createElement('style');

// styleElement.textContent = cssText;

// var cssText = {

// }

// Append the <style> element to the <head> section of the document
document.head.appendChild(styleElement);
// Object to store text contents and their corresponding IDs
var textContents = {
'-0x00':`
The objective of this stage is to access the game via SSH.
You should connect to the host whose IP is displayed on the LCD screen on the IOT evaluation board.

Use the credentials:
Username: <strong>shell00</strong>
Password: <strong>shell00</strong>

After successfully logging in, visit the 1 section to learn how to progress to the next level.

<h3>Commands you may need to solve this level</h3>
<a href="https://www.youtube.com/watch?v=_3M7Y0iC7PE" target="_blank">ssh</a>`,

'-0x01':`
The passphrase for accessing the subsequent stage can be found within a document named <strong>readme</strong>
in the main folder.
Utilize this passphrase for accessing -0x02 via SSH.

<h3>Commands potentially useful for navigating this stage include</h3>
<a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a>, <a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a>, <a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a>, <a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a>, <a href="https://www.geeksforgeeks.org/du-command-linux/">du</a>, <a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>`,

'-0x02':`
The passphrase for advancing to the subsequent can be found within a document named <strong>"-"</strong>
located in the main directory.

<h3>Commands that might be useful for completing this include</h3>
<a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a>, <a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a>, <a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a>, <a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a>, <a href="https://www.geeksforgeeks.org/du-command-linux/">du</a>, <a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>.


<p id=hint>Hint: Perform a Google search for "dashed filename".</p>`,

'-0x03':`
The passphrase for accessing the next can be found within a hidden file within the <strong>inhere</strong> directory.

<h3>Commands potentially useful for navigating this stage include</h3>
<a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a>, <a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a>, <a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a>, <a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a>, <a href="https://www.geeksforgeeks.org/du-command-linux/">du</a>, <a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>.`,

'-0x04':`
The passphrase for advancing to the subsequent is located in the sole file that is readable by
humans within the <strong>inhere</strong> directory.

<h3>Commands that might be beneficial for completing this include</h3>
<a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a> ,<a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a> ,<a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a> ,<a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a> ,<a href="https://www.geeksforgeeks.org/du-command-linux/">du</a> ,<a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>.

<p id=hint>Hint: should your terminal display errors, consider using the "reset" command.</p>`,

'-0x05':`
The passphrase for progressing to the next can be found in a file within the <strong>inhere</strong> directory
that possesses the following characteristics:
- Readable by humans
- Size of 1033 bytes
- Not set as executable

<h3>Commands that might be beneficial for completing this include</h3>
<a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a> ,<a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a> ,<a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a> ,<a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a>, <a href="https://www.geeksforgeeks.org/du-command-linux/">du</a>, <a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>.`,

'-0x06': `
The passphrase for accessing the subsequent is located somewhere on the server and meets the 
following criteria:
- Owned by user shell07
- Belongs to group Level-0x05
- Size of 33 bytes

<h3>Commands that might be beneficial for completing this include</h3>
<a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a> ,<a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a> ,<a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a> ,<a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a>, <a href="https://www.geeksforgeeks.org/du-command-linux/">du</a>, <a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>, <a href="https://www.geeksforgeeks.org/grep-command-in-unixlinux/">grep</a>.`,

'-0x07':`
The passphrase for advancing to the next is located in the file data.txt next to the term <strong>millionth</strong>

<h3>Commands that might be useful for solving this include:</h3>
<a href="https://www.geeksforgeeks.org/man-command-in-linux-with-examples/">man</a> ,<a href="https://www.geeksforgeeks.org/grep-command-in-unixlinux/">grep</a> ,<a href="https://www.geeksforgeeks.org/sort-command-linuxunix-examples/">sort</a>, <a href="https://www.geeksforgeeks.org/uniq-command-in-linux-with-examples-2/">uniq</a>, <a href="https://www.geeksforgeeks.org/string-manipulation-in-shell-scripting/">strings</a>, <a href="https://www.geeksforgeeks.org/convert-text-file-strings-into-base64-encoding/">base64</a>, <a href="#">tr</a> , tar, gzip, bzip2, xxd.`,

'-0x08': '',
'-0x09': '',
'-0x0A': '',
};


// JavaScript function to display text based on clicked link
function displayText(contentId) {
    var articleHeaderBottom = document.querySelector(".articleHeaderBottom");
    articleHeaderBottom.innerHTML = contentId;

    var textBox = document.getElementById("textBox");
    textBox.innerHTML = textContents[contentId] || `<center><img src="../images/lock.png" alt="🔒"><center>`;

    // var trIndex = parseInt(contentId.substring(contentId.length - 1));
    // var table = document.querySelector('.level');           // Select the table   
    // var trElement = table.querySelectorAll('tr')[trIndex - 1]; 

    // // Change background color to black and text color to white
    // trElement.style.backgroundColor = "black";
    // trElement.style.color = "white";
}