---
id: "pin numbers"
title: "pin numbers"
order: 6
locked: false
author: "1337encrypted"
label: "pin numbers"
---
<div class="container">
<h1 class="center pageTitle">Arduino Uno Pin Numbers</h1>
<span class="note">
<h3>DIGITAL PINS (0–13)</h3>
Pin 0  (RX)  - Serial receive  — avoid if Serial is active
Pin 1  (TX)  - Serial transmit — avoid if Serial is active
Pin 2        - Digital I/O | External Interrupt 0
Pin 3  (~)   - Digital I/O | PWM | External Interrupt 1
Pin 4        - Digital I/O
Pin 5  (~)   - Digital I/O | PWM
Pin 6  (~)   - Digital I/O | PWM
Pin 7        - Digital I/O
Pin 8        - Digital I/O
Pin 9  (~)   - Digital I/O | PWM
Pin 10 (~)   - Digital I/O | PWM | SS (SPI)
Pin 11 (~)   - Digital I/O | PWM | MOSI (SPI)
Pin 12       - Digital I/O | MISO (SPI)
Pin 13       - Digital I/O | SCK (SPI) | Built-in LED

<h3>ANALOG PINS (A0–A5)</h3>
A0 - Analog Input (10-bit: 0–1023)
A1 - Analog Input
A2 - Analog Input
A3 - Analog Input
A4 - Analog Input | SDA (I2C)
A5 - Analog Input | SCL (I2C)

<h3>POWER PINS</h3>
5V    - 5 volt output
3.3V  - 3.3 volt output (max 50mA)
GND   - Ground
VIN   - Input voltage (7–12V)
RESET - Reset the microcontroller

(~) = PWM capable pin</span>
<h3>pinMode syntax</h3>
<span class="code">
pinMode(pin, OUTPUT);       // set pin as output
pinMode(pin, INPUT);        // set pin as input (floating — add external pull resistor)
pinMode(pin, INPUT_PULLUP); // set pin as input with internal pull-up (~20-50kΩ)
</span>
</div>
