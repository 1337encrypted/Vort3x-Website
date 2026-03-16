---
id: "state machines"
title: "state machines"
order: 10
locked: false
author: "1337encrypted"
label: "state machines"
---
<div class="container">
<h1 class="center pageTitle">state-machines</h1>
<span class="note">
<h3>RESOURCES</h3>
<a href="https://wokwi.com/projects/397400492233962497">Traffic lights state machine code example</a>
<a href="https://wokwi.com/projects/397747621985938433">Pushbutton state machine code example</a>
</span>
<img src="images/state_model_diagrams.png" alt="State Model Diagrams">
<li>A finite state machine (FSM) is a mathematical model used to design sequential logic circuits or to describe the behaviour of a system.</li>
<li>A system can only exist in one state at a given time.</li>
<li>FSM can change from one state to another in response to some inputs, the change from one state to another is called a transition.</li>
<h2>Traffic lights example</h2>
<img src="images/state_machines_traffic_light_example.png" alt="State Machines Traffic Light Example">
<h3>Traffic lights boilerplate code</h3>
<span class="code">
enum states : int8_t {
  STOP,
  READY_TO_GO,
  GO,
  READY_TO_STOP
};
states status = STOP;
</span>
<span class="code">
switch(status) {
  case STOP: //code
  break;
  case READY_TO_GO: //code
  break;
  case GO: //code
  break;
  case READY_TO_STOP: //code
  break;
}
</span>
</div>
