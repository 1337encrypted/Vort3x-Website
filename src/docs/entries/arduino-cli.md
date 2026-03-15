---
id: "arduino-cli"
title: "arduino-cli"
order: 3
locked: false
author: "1337encrypted"
label: "arduino-cli"
---
<div class="container">
<h1 class="center pageTitle">arduino-cli</h1>
<li>Installation of <strong>arduino-cli</strong> software for the arduino UNO board</li>
<h3>Download the script by clicking <a href='/scripts/install_arduino_cli.sh'>here</a> or use wget to install it.</h3>
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
<h3>verify arduino-cli</h3>
<span class="code">which arduino-cli</span><li>it should return <strong>/bin/arduino-cli</strong></li>
</div>
