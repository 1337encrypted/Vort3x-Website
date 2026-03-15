---
id: "object"
title: "object"
order: 15
locked: false
author: "1337encrypted"
label: "object"
---
<div class="container">
<h1 class="center pageTitle">Objects in C++ (Arduino)</h1>
<span class="note">
An object is an instance of a class. Each object has its own copy of the class's attributes.
You can create multiple independent objects from the same class.
</span>

<h3>Creating objects</h3>
<span class="code">
// Using the Led class from the "class" reference:
Led redLed(2);    // object on pin 2
Led greenLed(3);  // object on pin 3

void setup() {}

void loop() {
  redLed.on();   greenLed.off(); delay(500);
  redLed.off();  greenLed.on();  delay(500);
}
</span>

<h3>Objects in arrays</h3>
<span class="code">
Led leds[3] = { Led(2), Led(3), Led(4) };

void setup() {}

void loop() {
  for(uint8_t i = 0; i &lt; 3; i++) {
    leds[i].on();
    delay(300);
    leds[i].off();
  }
}
</span>

<h3>Passing objects to functions</h3>
<span class="code">
void blink(Led &amp;led, uint16_t ms) {
  led.on();  delay(ms);
  led.off(); delay(ms);
}

Led myLed(2);

void setup() {}

void loop() {
  blink(myLed, 500);
}
</span>
</div>
