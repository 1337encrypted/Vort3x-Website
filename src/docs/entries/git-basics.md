---
id: "git basics"
title: "git basics"
order: 4
locked: false
author: "1337encrypted"
label: "git basics"
---
<div class="container">
<h1 class="center pageTitle">git-basics</h1>
<span class="text">
The whole git routine can be split into 2 main componenets. Its the same routine for Windows, Mac and Linux, but except for the key generation part.
</span>

<span class="text">1. Setting the user account and generating keys</span>
<span class="text">2. check the status, add, commit, push and repeat</span>
<div class="vertical-menu">
<a href="#git-setup" class="vertical-menu-header center">CONTENTS</a>
<a href="#git-ssh-1">Setting the user account and generating keys</a>
<a href="#git-step1">Step 1. Setting the user account for the project</a>
<a href="#git-step2">Step 2. Generate ssh keys copy over to github</a>
<a href="#git-step3">Step 3. Add the key to github</a>
<a href="#git-step4">Step 4. Test the connection</a>
<a href="#git-step5">Step 5. Setup remote repository and branch</a>
<a href="#git-ssh-2">Check the status, add, commit, push and repeat</a>
</div>

<h2 id="git-ssh-1" class="center pageTitle">1. Setting the user account and generating keys</h2>

<h3 id="git-step1">Step 1. Setting the user account for the project</h3>
<li>Create your project folder and open gitbash in that folder, you can <strong>right click -> open with gitbash</strong> or <strong>right click -> see more options -> open with gitbash</strong></li>
<li>The very first thing you need to do is setup the folder as a new git repository</li>
<span class="code">git init</span>
<li>Now setup your username and email</li>
<span class="code">git config user.name "name"
git config user.email "email@example.com"</span>

<h3 id="git-step2">Step 2. Generate ssh keys copy over to github</h3>

<h4>Windows key generation (skip if you are using MAC or Linux)</h4>
<li>open GIT GUI and navigate to help -> show ssh keys -> generate ssh keys</li>
<li>Copy the key to the clip board and go to github.com</li>
<li>Pick a good password and do not forget it, as you will need it later to push</li>

<h4>MAC / Linux key generation (skip if you are using windows)</h4>
<span class="code">ssh-keygen -t ed25519 -C "your_email@example.com"</span>
<h3>cat the public key file</h3>
<span class="code">cat ~/.ssh/ed25519.pub</span>

<h3 id="git-step3">Step 3. Add the key to github</h3>
<li>Go to github.com → Settings → SSH and GPG keys → New SSH key → paste the key</li>

<h3 id="git-step4">Step 4. Test the connection</h3>
<span class="code">ssh git@github.com -T</span>
<span class="text">This is what you should see if you have done everything right!</span>
<span class="code">Hi 1337encrypted! You've successfully authenticated, but GitHub does not provide shell access.</span>

<h3 id="git-step5">Step 5. Add the url of the remote repository and set the branch as main</h3>
<span class="note">Note: you should have already created a repository on github to add the url here</span>
<li>set the remote url of the repository</li>
<span class="code">git remote add origin email:username/repositoryName.git</span>
<li>You now need to set the project branch as main</li>
<span class="code">git branch -M main</span>

<h2 id="git-ssh-2" class="center pageTitle">2. check the status, add, commit, push and repeat</h2>
<li>Check the status of the files in the staging area</li>
<span class="code">git status</span>
<li>If the color is red then you need to add the files to the staging area. Check the status again they should have turned green</li>
<span class="code">git add .</span>
<li>Commit is like creating a timestamp, you can save progress by commiting</li>
<span class="code">git add commit -m "message"</span>
<li>Push your changes to github</li>
<span class="code">git push -u origin main</span>
</div>
