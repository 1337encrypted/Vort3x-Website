---
id: "0x00-solution"
title: "0x00: command-line solutions"
order: 100
locked: false
type: "solution"
author: "1337encrypted"
label: "0x00 command-line solutions"
---
<div class="container">
<h1 class="center pageTitle">0x00: command-line-solutions</h1>

<h3 class="center">Assignment 1.0 Solutions: File and Directory Operations</h3>

<span class="text">1. Create a new directory called <strong>folder1</strong> in your <strong>users home</strong> directory.</span>
<span class="code">cd /home/user</span>
<span class="text">2. Navigate into the folder1 directory using the <strong>cd</strong> command.</span>
<span class="code">cd folder1</span>
<span class="text">3. Create three new empty files named <strong>file1.txt, file2.txt, and file3.txt</strong> using the <strong>touch</strong> command.</span>
<span class="code">touch file1.txt file2.txt file3.txt</span>
<span class="text">4. List the contents of the folder1 directory to verify that the three files were created.</span>
<span class="code">ls</span>
<span class="text">5. Make a copy of file1.txt and name the copy file1_backup.txt using the <strong>cp</strong> command.</span>
<span class="code">cp file1.txt file1_backup.txt</span>
<span class="text">6. Rename file2.txt to file2_renamed.txt using the <strong>mv</strong> command.</span>
<span class="code">mv file2.txt file2_renamed.txt</span>
<span class="text">7. Create a new subdirectory called <strong>backup</strong> inside the folder1 directory using the <strong>mkdir</strong> command.</span>
<span class="code">mkdir backup</span>
<span class="text">8. Move file1_backup.txt into the backup subdirectory using the <strong>mv</strong> command.</span>
<span class="code">mv file1_backup.txt backup/</span>
<span class="text">9. Delete the <strong>file3.txt</strong> file using the <strong>rm</strong> command.</span>
<span class="code">rm file3.txt</span>
<span class="text">10. Remove the backup subdirectory and its contents using the <strong>rm -r</strong> command.</span>
<span class="code">rm -r backup</span>

<h3 class="center">Assignment 1.1 Solutions: Directory Navigation and Listing</h3>

<span class="text">1. Navigate to your user's home directory using the <strong>cd</strong> command.</span>
<span class="code">cd /home/user</span>
<span class="text">2. List the contents of the current directory (home) using the <strong>ls</strong> command.</span>
<span class="code">ls</span>
<span class="text">3. List the contents of the current directory (home), including hidden files and directories, using the <strong>ls -a</strong> command.</span>
<span class="code">ls -a</span>
<span class="text">4. List the contents of the current directory (home) in a long format that displays permissions, ownership and other details using the <strong>ls -l</strong> command.</span>
<span class="code">ls -l</span>
<span class="text">5. Create a new directory called <strong>project</strong> in your home directory using the <strong>mkdir</strong> command.</span>
<span class="code">mkdir project</span>
<span class="text">6. Navigate into the project directory using the <strong>cd</strong> command.</span>
<span class="code">cd project</span>
<span class="text">7. Create three subdirectories called <strong>src, docs, and tests</strong> inside the project directory using the <strong>mkdir</strong> command.</span>
<span class="code">mkdir src docs tests</span>
<span class="text">8. Navigate back to your user's home directory using the <strong>cd ..</strong> command.</span>
<span class="code">cd ..</span>
<span class="text">9. Remove the project directory and all its contents using the <strong>rm -r</strong> command.</span>
<span class="code">rm -r project</span>
<span class="text">10. Verify that the project directory has been removed by listing the contents of your home directory using the <strong>ls</strong> command.</span>
<span class="code">ls</span>

<h3 class="center">Assignment 1.2 Solutions: File Copying and Moving</h3>

<span class="text">1. Navigate to your user's home directory using the <strong>cd</strong> command.</span>
<span class="code">cd /home/user</span>
<span class="text">2. Create a new directory called <strong>files</strong> in your home directory using the <strong>mkdir</strong> command.</span>
<span class="code">mkdir files</span>
<span class="text">3. Navigate into the <strong>files</strong> directory using the <strong>cd</strong> command.</span>
<span class="code">cd files</span>
<span class="text">4. Create three new empty files named <strong>file1.txt, file2.txt, and file3.txt</strong> using the <strong>touch</strong> command.</span>
<span class="code">touch file1.txt file2.txt file3.txt</span>
<span class="text">5. Make a copy of <strong>file1.txt</strong> and name the copy <strong>file1_copy.txt</strong> using the <strong>cp</strong> command.</span>
<span class="code">cp file1.txt file1_copy.txt</span>
<span class="text">6. Create a new subdirectory called <strong>backup</strong> inside the <strong>files</strong> directory using the <strong>mkdir</strong> command.</span>
<span class="code">mkdir backup</span>
<span class="text">7. Move <strong>file2.txt</strong> and <strong>file3.txt</strong> into the <strong>backup</strong> subdirectory using the <strong>mv</strong> command.</span>
<span class="code">mv file2.txt file3.txt backup/</span>
<span class="text">8. Navigate back to your user's home directory using the <strong>cd ..</strong> command.</span>
<span class="code">cd ..</span>
<span class="text">9. Copy the entire <strong>files</strong> directory to a new directory called <strong>files_backup</strong> using the <strong>cp -r</strong> command.</span>
<span class="code">cp -r files files_backup</span>
<span class="text">10. Remove the original <strong>files</strong> directory and its contents using the <strong>rm -r</strong> command.</span>
<span class="code">rm -r files</span>
</div>
