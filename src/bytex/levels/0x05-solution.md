---
id: "0x05-solution"
title: "0x05: Buzzer Solutions"
order: 105
locked: false
type: "solution"
author: "1337encrypted"
label: "0x05 buzzer solutions"
---
<div class="container">
<h1 class="center pageTitle">0x05: Buzzer Solutions</h1>

<h3>Solution 5.0: Generate a single tone</h3>
<span class="code">
constexpr uint8_t buzzerPin = 8;

void setup() { pinMode(buzzerPin, OUTPUT); }

void loop() {
  tone(buzzerPin, 440, 1000);
  delay(2000);
}
</span>

<h3>Solution 5.1: Play a musical scale</h3>
<span class="code">
constexpr uint8_t  buzzerPin    = 8;
const    uint16_t  scale[]      = {262, 294, 330, 349, 392, 440, 494, 523};

void setup() { pinMode(buzzerPin, OUTPUT); }

void loop() {
  for(uint8_t i = 0; i &lt; 8; i++) {
    tone(buzzerPin, scale[i], 300);
    delay(350);
  }
  delay(1000);
}
</span>

<h3>Solution 5.2: Mary Had a Little Lamb</h3>
<span class="code">
constexpr uint8_t buzzerPin = 8;

#define E4 330
#define D4 294
#define C4 262
#define G4 392

const uint16_t melody[]    = {E4,D4,C4,D4,E4,E4,E4, D4,D4,D4, E4,G4,G4, E4,D4,C4,D4,E4,E4,E4,E4,D4,D4,E4,D4,C4};
const uint8_t  durations[] = { 4, 4, 4, 4, 4, 4, 2,  4, 4, 2,  4, 4, 2,  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2};

void setup() { pinMode(buzzerPin, OUTPUT); }

void loop() {
  for(uint8_t i = 0; i &lt; 26; i++) {
    tone(buzzerPin, melody[i], 1000 / durations[i]);
    delay(1000 / durations[i] + 50);
  }
  delay(2000);
}
</span>

<h3>Solution 5.3: Police siren</h3>
<span class="code">
constexpr uint8_t buzzerPin = 8;

void setup() { pinMode(buzzerPin, OUTPUT); }

void loop() {
  for(uint16_t f = 800; f &lt;= 1200; f += 10) { tone(buzzerPin, f); delay(5); }
  for(uint16_t f = 1200; f >= 800; f -= 10) { tone(buzzerPin, f); delay(5); }
}
</span>
</div>
