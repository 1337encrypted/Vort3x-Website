var styleElement = document.createElement('style');

var styleElement = document.createElement('style');

styleElement.textContent = cssText;

var cssText = {

}

// Append the <style> element to the <head> section of the document
document.head.appendChild(styleElement);
// Object to store text contents and their corresponding IDs
var textContents = {
    'text1': '<h3> Level 0x00</h3> <p class="levelContent">The objective of this stage is to access the game via SSH. You should connect to the host bandit.labs.overthewire.org using port 2220, with the credentials bandit0 (username) and bandit0 (password). After successfully logging in, visit the Level 1 section to learn how to progress to the next level. <br> Commands you may need to solve this level <br> <a href="https://www.geeksforgeeks.org/ssh-command-in-linux-with-examples/">ssh</a> </p>'  ,

    'text2': '<h3> Level 0x01</h3> <p> The passphrase for accessing the subsequent stage can be found within a document named readme in the main folder. Utilize this passphrase for accessing Level 0x02 via SSH. Each time you unearth a passphrase for a stage, employ SSH (using port 2220) to gain entry to that stage and proceed with the challenge.<br>Commands potentially useful for navigating this stage include <br> <a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a>,<a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a> ,<a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a> , <a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a><a href="https://www.geeksforgeeks.org/du-command-linux/">du</a><a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>.</p>',

    'text3': '<h3> Level 0x02</h3><p>The passphrase for advancing to the subsequent level can be found within a document named "-" located in the main directory.<br>Commands that might be useful for completing this level include<br> <a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a>,<a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a> ,<a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a> , <a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a><a href="https://www.geeksforgeeks.org/du-command-linux/">du</a><a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>. <br> Hint:<br>Perform a Google search for "dashed filename".</p>',

    'text4': '<h3> Level 0x03</h3> <p>The passphrase for accessing the next level can be found within a hidden file within the inhere directory.<br>Commands potentially useful for navigating this stage include <br> <a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a>,<a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a> ,<a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a> , <a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a><a href="https://www.geeksforgeeks.org/du-command-linux/">du</a><a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>.</p>',

    'text5': '<h3> Level 0x04</h3><p>The passphrase for advancing to the subsequent level is located in the sole file that is readable by humans within the inhere directory. Hint: should your terminal display errors, consider using the "reset" command.<br>Commands that might be beneficial for completing this level include<br><a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a>,<a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a> ,<a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a> , <a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a><a href="https://www.geeksforgeeks.org/du-command-linux/">du</a><a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>.</p>',

    'text6': '<h3> Level 0x05</h3><p>The passphrase for progressing to the next level can be found in a file within the inhere directory that possesses the following characteristics:<br>- Readable by humans<br>- Size of 1033 bytes<br>- Not set as executable<br>Commands that might be beneficial for completing this level include<br><a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a>,<a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a> ,<a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a> , <a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a><a href="https://www.geeksforgeeks.org/du-command-linux/">du</a><a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a>.</p>',

    'text7': '<h3> Level 0x06</h3><p>The passphrase for accessing the subsequent level is located somewhere on the server and meets the following criteria:<br>- Owned by user bandit7<br>- Belongs to group Level0x05<br></br>- Size of 33 bytes<br>Commands that might be beneficial for completing this level include<br><a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls</a>,<a href="https://www.geeksforgeeks.org/cd-command-in-linux-with-examples/">cd</a> ,<a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat</a> , <a href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/">file</a><a href="https://www.geeksforgeeks.org/du-command-linux/">du</a><a href="https://www.geeksforgeeks.org/find-command-in-linux-with-examples/">find</a><a href="https://www.geeksforgeeks.org/grep-command-in-unixlinux/">grep</a>.</p>',

    'text8': '<h3> Level 0x07</h3><p>The passphrase for advancing to the next level is located in the file data.txt next to the term "millionth."<br>Commands that might be useful for solving this level include:<br><a href="https://www.geeksforgeeks.org/man-command-in-linux-with-examples/">man</a>, <a href="https://www.geeksforgeeks.org/grep-command-in-unixlinux/">grep</a>,<a href="https://www.geeksforgeeks.org/sort-command-linuxunix-examples/">sort</a> ,<a href="https://www.geeksforgeeks.org/uniq-command-in-linux-with-examples-2/">uniq</a> ,<a href="https://www.geeksforgeeks.org/string-manipulation-in-shell-scripting/">strings</a> , <a href="https://www.geeksforgeeks.org/convert-text-file-strings-into-base64-encoding/">base64</a>,<a href="">tr</a> , tar, gzip, bzip2, xxd.</p>',

    'text9': '<h3> Level 0x08</h3>',

    'text10': '<h3> Level 0x09</h3>',

    'text11': '<h3> Level 0x010</h3>',
};

// JavaScript function to display text based on clicked link
function displayText(contentId) {
    var textBox = document.getElementById("textBox");
    textBox.innerHTML = textContents[contentId] || 'Text not found!';
}
