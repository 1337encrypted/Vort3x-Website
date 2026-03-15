---
id: "serial"
title: "serial communication"
order: 12
locked: false
author: "1337encrypted"
label: "serial communication"
---
<div class="container">
<h1 class="center pageTitle">Serial Communication</h1>
<span class="note">
The Serial monitor allows Arduino to communicate with your PC over USB.
Open it via: Tools → Serial Monitor (or Ctrl+Shift+M).
Baud rate in code and Serial Monitor dropdown must match.
</span>

<h3>Serial part 1: Basic print</h3>
<span class="code">
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("Hello from Arduino!"); // print with newline
  Serial.print("Value: ");               // print without newline
  Serial.println(42);
  delay(1000);
}
</span>

<h3>Serial part 2: Read from Serial monitor</h3>
<span class="code">
void setup() {
  Serial.begin(9600);
}

void loop() {
  if(Serial.available() > 0) {
    char received = Serial.read();
    Serial.print("You sent: ");
    Serial.println(received);
  }
}
</span>

<h3>Serial part 3: Read an integer</h3>
<span class="code">
void setup() {
  Serial.begin(9600);
}

void loop() {
  if(Serial.available() > 0) {
    int value = Serial.parseInt();
    Serial.print("Parsed integer: ");
    Serial.println(value);
  }
}
</span>

<h3>Useful Serial methods</h3>
<span class="code">
Serial.begin(9600);        // initialize with baud rate
Serial.print("text");      // print without newline
Serial.println("text");    // print with newline
Serial.println(value);     // print a number
Serial.available();        // bytes waiting to be read (> 0 means data ready)
Serial.read();             // read one byte as char
Serial.parseInt();         // read and parse an integer from serial stream
Serial.flush();            // wait for all outgoing data to transmit
</span>
</div>
