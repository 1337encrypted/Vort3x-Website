---
id: "bluetooth"
title: "bluetooth"
order: 13
locked: false
author: "1337encrypted"
label: "bluetooth"
---
<div class="container">
<h1 class="center pageTitle">Bluetooth (HC-05)</h1>
<span class="note">
The HC-05 is a Bluetooth serial module. It acts as a wireless serial link —
data sent to the HC-05 appears on the Arduino's Serial, and vice versa.

Wiring:
  VCC  → 5V
  GND  → GND
  TXD  → Arduino RX (pin 0)
  RXD  → Arduino TX (pin 1) — use a voltage divider (5V→3.3V for RXD)

Default baud rate: 9600  |  Default AT-command baud: 38400
Default pairing PIN: 1234 or 0000
</span>

<h3>Bluetooth part 1: Echo received data</h3>
<span class="code">
void setup() {
  Serial.begin(9600);
}

void loop() {
  if(Serial.available()) {
    char received = Serial.read();
    Serial.println(received); // echo back to phone
  }
}
</span>

<h3>Bluetooth part 2: Control LED via Bluetooth</h3>
<span class="code">
constexpr uint8_t ledPin = 2;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  if(Serial.available()) {
    char cmd = Serial.read();
    if(cmd == '1') {
      digitalWrite(ledPin, HIGH);
      Serial.println("LED ON");
    } else if(cmd == '0') {
      digitalWrite(ledPin, LOW);
      Serial.println("LED OFF");
    }
  }
}
</span>
<li>Use a Bluetooth terminal app (e.g. <strong>Serial Bluetooth Terminal</strong> on Android) to send '1' and '0'</li>
<li>Disconnect the HC-05 from pins 0 and 1 before uploading sketches</li>
</div>
