---
id: "0x03-solution"
title: "0x03: Pushbutton Solutions"
order: 103
locked: false
type: "solution"
author: "1337encrypted"
label: "0x03 pushbutton solutions"
---
<div class="container">
<h1 class="center pageTitle">0x03: Pushbutton Solutions</h1>

<h3>Solution 3.0: Read a pushbutton</h3>
<span class="code">
constexpr uint8_t buttonPin = 7;

void setup() {
  Serial.begin(9600);
  pinMode(buttonPin, INPUT);
}

void loop() {
  if(digitalRead(buttonPin) == HIGH)
    Serial.println("PRESSED");
  else
    Serial.println("RELEASED");
  delay(100);
}
</span>

<h3>Solution 3.1: Toggle LED with pushbutton (debounced)</h3>
<span class="code">
constexpr uint8_t ledPin    = 2;
constexpr uint8_t buttonPin = 7;

bool ledState  = false;
bool prevButton = false;

void setup() {
  pinMode(ledPin,    OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  bool pressed = (digitalRead(buttonPin) == LOW);
  if(pressed &amp;&amp; !prevButton) {
    ledState = !ledState;
    digitalWrite(ledPin, ledState ? HIGH : LOW);
    delay(50);
  }
  prevButton = pressed;
}
</span>

<h3>Solution 3.2: Button press counter</h3>
<span class="code">
constexpr uint8_t buttonPin = 7;

uint8_t count      = 0;
bool    prevButton = false;

void setup() {
  Serial.begin(9600);
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  bool pressed = (digitalRead(buttonPin) == LOW);
  if(pressed &amp;&amp; !prevButton) {
    count++;
    if(count >= 10) count = 0;
    Serial.println(count);
    delay(50);
  }
  prevButton = pressed;
}
</span>

<h3>Solution 3.3: Multi-mode LED</h3>
<span class="code">
constexpr uint8_t ledPin    = 3;
constexpr uint8_t buttonPin = 7;

const uint8_t brightness[] = {0, 64, 255};
const char*   modeNames[]  = {"OFF", "DIM", "BRIGHT"};
uint8_t       mode         = 0;
bool          prevButton   = false;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin,    OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  bool pressed = (digitalRead(buttonPin) == LOW);
  if(pressed &amp;&amp; !prevButton) {
    mode = (mode + 1) % 3;
    analogWrite(ledPin, brightness[mode]);
    Serial.println(modeNames[mode]);
    delay(50);
  }
  prevButton = pressed;
}
</span>
</div>
