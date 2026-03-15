---
id: "ssh"
title: "SSH"
order: 1
locked: false
author: "1337encrypted"
label: "ssh"
---
<div class="container">
<h1 class="center pageTitle">Secure Shell (SSH)</h1>
<h3>Make sure that the systems are on the same network, either LAN or hotspot</h3>
<h3>Figure out the ip-address of the remote machine</h3>
<span class="code">ip address</span>
<h3>To verify if your ip address is correct run the file verify_ip_address and pass your ip address as the argument</h3>
<span class="code">wget http://16.171.179.211/Vortex-Website/scripts/verify_ip_address</span>
<li>Make the file executable before running it</li>
<span class="code">chmod +x verify_ip_address</span>
<li>Run the file with the ip address as the argument</li>
<span class="code">./verify_ip_address &lt;ip_address&gt;</span>
<h3>3. Connect to the remote machine using the syntax</h3>
<span class="code">ssh &lt;username&gt;@&lt;ipaddres&gt;</span>
<h3>Example</h3>
<span class="code">ssh pi@ipaddress</span>
</div>
