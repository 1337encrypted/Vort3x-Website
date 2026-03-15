---
id: "create new user"
title: "Create New User"
order: 2
locked: false
author: "1337encrypted"
label: "create new user"
---
<div class="container">
<h1 class="center pageTitle">The linux filesystem</h1>
<span class="linuxTree">
                                         / (root)
                                         ┃
  ┏━━━━┳━━━━┳━━━━┳━━━━━┳━━━━┳━━━━━┳━━━━━━╋━━━━━━┳━━━━┳━━━━━┳━━━━━┳━━━━┳━━━━━┳━━━━┳━━━━┳━━━━┓
  ┃    ┃    ┃    ┃     ┃    ┃     ┃      ┃      ┃    ┃     ┃     ┃    ┃     ┃    ┃    ┃    ┃
 bin  boot dev  etc  home  lib  lib64  media   mnt  opt   proc  root run  sbin  srv  sys  tmp
  ┃                    ┃
 usr                   ┃
  ┃                    ┣━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┓
 bin                   ┃                 ┃                 ┃                  ┃              ┃
                      pi               user1             user2              user3          user4
                       ┃
          ┏━━━━━━━━━━━━╋━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┓
          ┃            ┃            ┃            ┃            ┃
       Desktop      .bashrc   .bash_aliases    .ssh        file1.txt
</span>
<li>The <strong>/ (root)</strong> directory is the staring point of the file system</li>
<li>The <strong>bin</strong> directory contains all the system binaries programs</li>
<li>External devices like pendrives, harddisks, cdroms are mounted in <strong>media or mnt directories</strong></li>
<li>The <strong>home</strong> direcotry contains all the <strong>users accounts</strong></li>

<h1 class="center pageTitle">adduser</h1>
<h3>1. Open a terminal on your Linux system</h3>
<h3>2. Run the <span class="keyword">adduser</span> command followed by the desired username:</h3>
<span class="code">sudo adduser &lt;username&gt;</span>
<li>This will create the new user along with the users home directory</li>
<h3>3. Login using the username</h3>
<span class="code">su &lt;username&gt;</span>
</div>
