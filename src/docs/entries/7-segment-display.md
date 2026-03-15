---
id: "7 segment display"
title: "7 segment display"
order: 17
locked: false
author: "1337encrypted"
label: "7 segment display"
---
<div class="container">
<h1 class="center pageTitle">7-Segment Display</h1>
<span class="note">
A 7-segment display has 7 LED segments (a–g) plus a decimal point.
<strong>Common Cathode:</strong> segments turn ON with digitalWrite HIGH
<strong>Common Anode:</strong>  segments turn ON with digitalWrite LOW

Segment layout:
   aaa
  f   b
  f   b
   ggg
  e   c
  e   c
   ddd  .dp
</span>

<h3>Segment to pin mapping (Common Cathode)</h3>
<span class="code">
//  Seg:  a  b  c  d  e  f  g
//  Pin:  2  3  4  5  6  7  8

const uint8_t segPins[7] = {2,3,4,5,6,7,8};

// Digit patterns (a,b,c,d,e,f,g) for digits 0–9
const uint8_t digits[10][7] = {
  {1,1,1,1,1,1,0}, // 0
  {0,1,1,0,0,0,0}, // 1
  {1,1,0,1,1,0,1}, // 2
  {1,1,1,1,0,0,1}, // 3
  {0,1,1,0,0,1,1}, // 4
  {1,0,1,1,0,1,1}, // 5
  {1,0,1,1,1,1,1}, // 6
  {1,1,1,0,0,0,0}, // 7
  {1,1,1,1,1,1,1}, // 8
  {1,1,1,1,0,1,1}  // 9
};

void displayDigit(uint8_t d) {
  for(uint8_t s = 0; s &lt; 7; s++)
    digitalWrite(segPins[s], digits[d][s]);
}

void setup() {
  for(uint8_t i = 0; i &lt; 7; i++)
    pinMode(segPins[i], OUTPUT);
}

void loop() {
  for(uint8_t d = 0; d &lt;= 9; d++) {
    displayDigit(d);
    delay(1000);
  }
}
</span>
</div>
