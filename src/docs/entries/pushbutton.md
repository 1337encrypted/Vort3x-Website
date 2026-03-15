---
id: "pushbutton"
title: "pushbutton"
order: 11
locked: false
author: "1337encrypted"
label: "pushbutton"
---
<div class="container">
<h1 class="center pageTitle">pushbutton</h1>
<div style="display: flex; flex-direction: row;">
  <img src="/images/pushbutton.png" alt="pushbutton" style="width: 35%; border: none;">
  <img src="/images/pull_up_and_pull_down_configuration.jpeg" alt="pull_up_and_pull_down_configuration" style="width: 65%; border: none;">
</div>
<h3>Pushbutton state machine</h3>
<span class="code">
enum pushButtonStates : int8_t {
  PRESSED = 0,
  RELEASED = 1
};
pushButtonStates pushButtonStatus = RELEASED;
</span>
<span class="code">
switch(pushButtonStatus) {
  case PRESSED:
  //code
  break;
  case RELEASED:
  //code
  break
}
</span>
</div>
