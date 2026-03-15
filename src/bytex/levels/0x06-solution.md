---
id: "0x06-solution"
title: "0x06: 7-Segment Display Solutions"
order: 106
locked: false
type: "solution"
author: "1337encrypted"
label: "0x06 7 segment display solutions"
---
<div class="container">
<h1 class="center pageTitle">0x06: 7-Segment Display Solutions</h1>

<h3>Segment mapping: a=pin2, b=pin3, c=pin4, d=pin5, e=pin6, f=pin7, g=pin8</h3>

<h3>Solution 6.0: Display a single digit</h3>
<span class="code">
const uint8_t segPins[7] = {2,3,4,5,6,7,8}; // a,b,c,d,e,f,g

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
  displayDigit(5);
}
</span>

<h3>Solution 6.1: Count 0 to 9</h3>
<span class="code">
// (same setup and displayDigit as above)
void loop() {
  for(uint8_t d = 0; d &lt;= 9; d++) {
    displayDigit(d);
    delay(1000);
  }
}
</span>

<h3>Solution 6.2: Button-controlled counter</h3>
<span class="code">
// (same segPins, digits, displayDigit, and setup as 6.0 — add these pins)
constexpr uint8_t btnUp   = 9;
constexpr uint8_t btnDown = 10;

int8_t count    = 0;
bool   prevUp   = false;
bool   prevDown = false;

void setup() {
  for(uint8_t i = 0; i &lt; 7; i++) pinMode(segPins[i], OUTPUT);
  pinMode(btnUp,   INPUT_PULLUP);
  pinMode(btnDown, INPUT_PULLUP);
}

void loop() {
  bool up   = (digitalRead(btnUp)   == LOW);
  bool down = (digitalRead(btnDown) == LOW);

  if(up   &amp;&amp; !prevUp)   { count = (count + 1) % 10; delay(50); }
  if(down &amp;&amp; !prevDown) { count = (count + 9) % 10; delay(50); }

  prevUp   = up;
  prevDown = down;
  displayDigit(count);
}
</span>
</div>
