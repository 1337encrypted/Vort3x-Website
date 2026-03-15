---
id: "buzzer"
title: "buzzer"
order: 16
locked: false
author: "1337encrypted"
label: "buzzer"
---
<div class="container">
<h1 class="center pageTitle">Buzzer</h1>
<span class="note">
<strong>Active buzzer:</strong> produces sound when power is applied — just use digitalWrite.
<strong>Passive buzzer:</strong> requires a frequency signal — use tone().
Wiring: one leg to a digital pin, other leg to GND.
</span>

<h3>Active buzzer: simple on/off</h3>
<span class="code">
constexpr uint8_t buzzerPin = 8;

void setup() { pinMode(buzzerPin, OUTPUT); }

void loop() {
  digitalWrite(buzzerPin, HIGH); // buzzer on
  delay(500);
  digitalWrite(buzzerPin, LOW);  // buzzer off
  delay(500);
}
</span>

<h3>Passive buzzer: tone() function</h3>
<span class="code">
// tone(pin, frequency);              play indefinitely
// tone(pin, frequency, duration_ms); play for duration then stop
// noTone(pin);                       stop the tone

constexpr uint8_t buzzerPin = 8;

void setup() { pinMode(buzzerPin, OUTPUT); }

void loop() {
  tone(buzzerPin, 440, 500); // A4 note, 500ms
  delay(600);
  tone(buzzerPin, 523, 500); // C5 note, 500ms
  delay(600);
}
</span>

<h3>Common note frequencies (Hz)</h3>
<span class="code">
C4=262  D4=294  E4=330  F4=349
G4=392  A4=440  B4=494  C5=523
</span>
</div>
