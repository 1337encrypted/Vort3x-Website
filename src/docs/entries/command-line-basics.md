---
id: "command-line basics"
title: "command-line basics"
order: 5
locked: false
author: "1337encrypted"
label: "commandline basics"
---
<div class="container">
<h1 class="center pageTitle">Shell basics</h1>
<div class="vertical-menu">
<a class="vertical-menu-header center">NAVIGATION COMMANDS</a>
<a href="#ls-section">ls - list directory</a>
<a href="#cd-section">cd - change directory</a>
<a href="#pwd-section">pwd - print working directory</a>
<a class="vertical-menu-header center">MANUPLATING FILES AND DIRECTORIES</a>
<a href="#touch-section">touch - create a new file</a>
<a href="#mkdir-section">mkdir - make a new directory</a>
<a href="#cp-section">cp - copy files or directories</a>
<a href="#mv-section">mv - move or rename file and directories</a>
<a href="#rm-section">rm - delete files or directories</a>
<a href="#rmdir-section">rmdir - remove a empty directory</a>
<a class="vertical-menu-header center">INTERACTING WITH SHELL</a>
<a href="#clear-section">clear - clears the terminal</a>
<a href="#cat-section">cat - outputs contents of a file to the terminal</a>
</div>

<hr>

<h2 class="center">Navigation commands</h2>

<h1 class="bold pageTitle" id="cd-section">cd</h1>
<h3 class="bold">cd - Change directory</h3>
<span class="code">$ cd &lt;directory&gt;</span>
<table class="indented-table">
  <thead>
    <tr><th>Shortcut</th><th>Result</th></tr>
  </thead>
  <tbody>
    <tr><td>cd</td><td>Changes the working directory to your home directory.</td></tr>
    <tr><td>cd ..</td><td>Changes the working directory to your parent directory.</td></tr>
    <tr><td>cd -</td><td>Changes the working directory to the previous working directory.</td></tr>
    <tr><td>cd ~user_name</td><td>Changes the working directory to the home directory of user_name.</td></tr>
  </tbody>
</table>

<h1 class="bold pageTitle" id="ls-section">ls</h1>
<h3 class="bold">ls - List directory contents</h3>
<span class="code">$ ls</span>
<span>
Note:
Absolute Pathnames - An absolute pathname begins with the root director
Relative Pathnames - A relative pathname starts from the working directory</span>
<table>
  <thead>
    <tr><th>Option</th><th>Long Option</th><th>Meaning</th></tr>
  </thead>
  <tbody>
    <tr><td>-a</td><td>--all</td><td>List all files, even those with names that begin with a period, which are normally not listed (that is, hidden).</td></tr>
    <tr><td>-A</td><td>--almost-all</td><td>Lists all directories except . (current directory) and .. (parent directory)</td></tr>
    <tr><td>-d</td><td>--directory</td><td>Use this option in conjunction with the -l option to see details about the directory rather than its contents.</td></tr>
    <tr><td>-l</td><td></td><td>Display results in long format.</td></tr>
    <tr><td>-r</td><td>--reverse</td><td>Display the results in reverse order. Normally, ls displays its results in ascending alphabetical order</td></tr>
  </tbody>
</table>

<h1 class="bold pageTitle" id="pwd-section">pwd</h1>
<h3 class="bold">pwd - Print working directory</h3>
<span class="code">$ pwd
/home/me</span>

<hr>

<h2 class="center">Manuplating files and directories</h2>

<h1 class="bold pageTitle" id="touch-section">touch</h1>
<h3 class="bold">touch - Updates the timestamp of a file, create a new file is it doesn't exist</h3>
<span class="code">$ touch &lt;newfile.txt&gt;</span>
This creates a new file named newfile.txt

<h1 class="bold pageTitle" id="mkdir-section">mkdir</h1>
<h3 class="bold">mkdir - Make a new directory</h3>
The mkdir command is used to create directories. It works like this:
<span class="code">$ mkdir dir1</span>
would create a single directory named dir1, while the following:
<span class="code">$ mkdir dir1 dir2 dir3</span>
would create three directories named dir1, dir2, and dir3

<h1 class="bold pageTitle" id="cp-section">cp</h1>
<h3 class="bold">cp - Copy a file or a directory to another file or directory</h3>
<span class="code">$ cp &lt;file1&gt; &lt;file2&gt;</span>
<h4>cp Examples</h4>
<table>
  <thead>
    <tr><th>Command</th><th>Result</th></tr>
  </thead>
  <tbody>
    <tr><td>cp file1 file2</td><td>Copy file1 to file2, <strong>if file2 exists it is overwritten with the contents of file1.</strong> if it doesn't exist then it's created.</td></tr>
    <tr><td>cp -i file1 file2</td><td>If file2 exists, the user is prompted before it's overwritten.</td></tr>
    <tr><td>cp file1 file2 dir1</td><td>Copy file1 and file2 into directory dir1. The directory dir1 must already exist.</td></tr>
    <tr><td>cp dir1/* dir2</td><td>Copy all the contents of directory dir1 into directory dir2, only if directory dir2 exists.</td></tr>
    <tr><td>cp -r dir1 dir2</td><td>Copy all the contents of dir1 recursively into dir2. If dir2 doesn't exist, then create it and copy the files.</td></tr>
  </tbody>
</table>

<h1 class="bold pageTitle" id="mv-section">mv</h1>
<h3 class="bold">mv - Rename or move a file or directory</h3>
The mv command performs both file moving and file renaming
<span class="code">$ mv item1 item2</span>
to move or rename the file or directory item1 to item2 or:
<span class="code">$ mv item... directory</span>
to move one or more items from one directory to another.
<h4>mv Command Examples</h4>
<table>
  <thead>
    <tr><th>Command</th><th>Result</th></tr>
  </thead>
  <tbody>
    <tr><td>mv file1 file2</td><td>Move file1 to file2. If file2 exists, it is overwritten with the contents of file1. If file2 does not exist, it is created. In either case, file1 ceases to exist.</td></tr>
    <tr><td>mv -i file1 file2</td><td>Same as the previous command, except that if file2 exists, the user is prompted before it is overwritten.</td></tr>
    <tr><td>mv file1 file2 dir1</td><td>Move file1 and file2 into directory dir1. The directory dir1 must already exist</td></tr>
    <tr><td>mv dir1 dir2</td><td>If directory dir2 does not exist, create directory dir2 and move the contents of directory dir1 into dir2 and delete directory dir1. If directory dir2 does exist, move directory dir1 (and its contents) into directory dir2.</td></tr>
  </tbody>
</table>

<h1 class="bold pageTitle" id="rm-section">rm</h1>
<h3 class="bold">rm - Remove a file or directory</h3>
<span class="code">$ rm -rf &lt;file1&gt;</span>
<table>
  <thead>
    <tr><th>Option</th><th>Long Option</th><th>Meaning</th></tr>
  </thead>
  <tbody>
    <tr><td>-r</td><td>--recursive</td><td>Recursively delete directories. This means that if a directory being deleted has subdirectories, delete them too. To delete a directory, this option must be specified.</td></tr>
    <tr><td>-f</td><td>--force</td><td>Ignore nonexistent files and do not prompt. This overrides the --interactive option.</td></tr>
  </tbody>
</table>
<h4>rm Examples</h4>
<table>
  <thead>
    <tr><th>Command</th><th>Result</th></tr>
  </thead>
  <tbody>
    <tr><td>rm file1</td><td>Delete file1 silently.</td></tr>
    <tr><td>rm -r file1 dir1</td><td>Delete file1 and dir1 and its contents.</td></tr>
    <tr><td>rm -rf file1 dir1</td><td>Same as the previous command, except that if either file1 or dir1 do not exist, rm will continue silently.</td></tr>
  </tbody>
</table>

<h1 class="bold pageTitle" id="rmdir-section">rmdir</h1>
<h3 class="bold">rmdir - Remove an empty directory</h3>
<span class="code">$ rmdir dir1</span>
<span>Deletes a empty directory</span>

<hr>

<h2 class="center">Interacting with shell</h2>

<h1 class="bold pageTitle" id="clear-section">clear</h1>
<h3 class="bold">clear - Clear the terminal screen</h3>
<span class="code">$ clear</span>

<h1 class="bold pageTitle" id="cat-section">cat</h1>
<h3 class="bold">cat - prints the contents of the file on the terminal</h3>
<span class="code">$ cat &lt;sometext.txt&gt;
Some text in this file.</span>
</div>
