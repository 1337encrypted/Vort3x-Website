---
id: "keypad"
title: "4x4 keypad"
order: 18
locked: false
author: "1337encrypted"
label: "4x4 keypad"
---
<div class="container">
<h1 class="center pageTitle">4×4 Keypad</h1>
<span class="note">
A 4×4 keypad has 16 keys arranged in 4 rows and 4 columns using 8 pins total.
Install the <strong>Keypad</strong> library: Sketch → Include Library → Manage Libraries → search "Keypad" by Mark Stanley.
</span>

<h3>Keypad layout</h3>
<span class="code">
1  2  3  A
4  5  6  B
7  8  9  C
*  0  #  D
</span>

<h3>Wiring</h3>
<span class="code">
Row pins (left to right on keypad): R1=9  R2=8  R3=7  R4=6
Col pins (left to right on keypad): C1=5  C2=4  C3=3  C4=2
</span>

<h3>Basic example</h3>
<span class="code">
#include &lt;Keypad.h&gt;

const uint8_t ROWS = 4, COLS = 4;

char keys[ROWS][COLS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};

uint8_t rowPins[ROWS] = {9, 8, 7, 6};
uint8_t colPins[COLS] = {5, 4, 3, 2};

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

void setup() { Serial.begin(9600); }

void loop() {
  char key = keypad.getKey();
  if(key) Serial.println(key);
}
</span>
</div>
