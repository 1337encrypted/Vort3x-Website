var styleElement = document.createElement('style');

// styleElement.textContent = cssText;

// var cssText = {

// }

// Append the <style> element to the <head> section of the document
document.head.appendChild(styleElement);
// Object to store text contents and their corresponding IDs
var textContents = {
'0x00':`
<div class="container">
<span class="text">The objective of this stage is to access the game via SSH. You should connect to the host whose IP is displayed on the LCD screen on the IOT evaluation board.</span>

<span class="text">Use the credentials:</span>

<span class="code">Username: <strong>shell00</strong>
Password: <strong>shell00</strong></span>

<span class="text">After successfully logging in, visit the 1 section to learn how to progress to the next level.</span>

<h3>Commands you may need to solve this level</h3>
<a href="https://www.youtube.com/watch?v=_3M7Y0iC7PE" target="_blank">ssh</a>
</div>
`,

'0x01':`
<div class="container">
<span class="text">
The passphrase for accessing the subsequent stage can be found within a document named <strong>readme</strong>
in the main folder.
Utilize this passphrase for accessing 0x02 via SSH.
</span>
<h3>Commands potentially useful for navigating this stage include</h3>
<a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a>, <a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a>, <a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a>, <a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a>, <a href="https://www.geeksforgeeks.org/du-command-linux/">du</a>, <a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>
</div>
`,

'0x02':`
<div class="container">
<span class="text">
The passphrase for advancing to the subsequent can be found within a document named <strong>"-"</strong>
located in the main directory.
<span>
<h3>Commands that might be useful for completing this include</h3>
<a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a>, <a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a>, <a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a>, <a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a>, <a href="https://www.geeksforgeeks.org/du-command-linux/">du</a>, <a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>.


<p id=hint>Hint: Perform a Google search for "dashed filename".</p>
</div>
`,

'0x03':`
<div class="container">
<span class="text">
The passphrase for accessing the next can be found within a hidden file within the <strong>inhere</strong> directory.
<span>
<h3>Commands potentially useful for navigating this stage include</h3>
<a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a>, <a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a>, <a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a>, <a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a>, <a href="https://www.geeksforgeeks.org/du-command-linux/">du</a>, <a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>.
</div>
`,

'0x04':`
<div class="container">
<span class="text">
The passphrase for advancing to the subsequent is located in the sole file that is readable by
humans within the <strong>inhere</strong> directory.
<span>
<h3>Commands that might be beneficial for completing this include</h3>
<a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a> ,<a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a> ,<a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a> ,<a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a> ,<a href="https://www.geeksforgeeks.org/du-command-linux/">du</a> ,<a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>.

<p id=hint>Hint: should your terminal display errors, consider using the "reset" command.</p>
</div>
`,

'0x05':`
<div class="container">
<span class="text">
The passphrase for progressing to the next can be found in a file within the <strong>inhere</strong> directory
that possesses the following characteristics:
<span>  
<li>Readable by humans</li>
<li>Size of 1033 bytes</li>
<li>Not set as executable</li>
<h3>Commands that might be beneficial for completing this include</h3>
<a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a> ,<a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a> ,<a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a> ,<a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a>, <a href="https://www.geeksforgeeks.org/du-command-linux/">du</a>, <a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>.
</div>
`,

'0x06': `
<div class="container">
<span class="text">
The passphrase for accessing the subsequent is located somewhere on the server and meets the 
following criteria:
</span>
<li>Owned by user shell07</li>
<li>Belongs to group Level0x05</li>
<li>Size of 33 bytes</li>

<h3>Commands that might be beneficial for completing this include</h3>
<a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a> ,<a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a> ,<a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a> ,<a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a>, <a href="https://www.geeksforgeeks.org/du-command-linux/">du</a>, <a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>, <a href="https://www.geeksforgeeks.org/grep-command-in-unixlinux/">grep</a>.
</div>
`,

'0x07':`
<div class="container">
<span class="text">
The passphrase for advancing to the next is located in the file data.txt next to the term <strong>millionth</strong>
<span>
<h3>Commands that might be useful for solving this include:</h3>
<a href="https://www.geeksforgeeks.org/man-command-in-linux-with-examples/">man</a> ,<a href="https://www.geeksforgeeks.org/grep-command-in-unixlinux/">grep</a> ,<a href="https://www.geeksforgeeks.org/sort-command-linuxunix-examples/">sort</a>, <a href="https://www.geeksforgeeks.org/uniq-command-in-linux-with-examples-2/">uniq</a>, <a href="https://www.geeksforgeeks.org/string-manipulation-in-shell-scripting/">strings</a>, <a href="https://www.geeksforgeeks.org/convert-text-file-strings-into-base64-encoding/">base64</a>, <a href="#">tr</a> , <a href="#">tar</a>, <a href="#">gzip</a>, <a href="#">bzip2</a>, <a href="#">xxd</a>.
</div>
`,

'0x08': '<div class="container"></div>',
'0x09': '<div class="container"></div>',
'0x0A': '<div class="container"></div>',
};


// JavaScript function to display text based on clicked link
function displayText(contentId) {
    var articleHeaderBottom = document.querySelector(".articleHeaderBottom");
    articleHeaderBottom.innerHTML = contentId;

    var textBox = document.getElementById("textBox");
    textBox.innerHTML = textContents[contentId] || `<center><img id="lockimage" src="../images/lock.png" alt="🔒"><center>`;
}