---
id: "0x01-solution"
title: "0x01: Led solutions"
order: 101
locked: false
type: "solution"
author: "1337encrypted"
label: "0x01 led solutions"
---
<div class="container">
<h1 class="center pageTitle">0x01: Led solutions</h1>
<h1>digitalWrite</h1>
<h3>Solution 1.0: Random number</h3>
<span class="code">
constexpr uint8_t ledPin = 2;
void setup()
{
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop()
{
  int randNum = random(0,10);
  Serial.println(randNum);

  if((randNum % 2) == 0)
    digitalWrite(ledPin, HIGH);
  else
    digitalWrite(ledPin, LOW);

  delay(1000);
}
</span>

<h3>Solution 1.1: Blink an LED with the least delay time possible</h3>
<span class="code">
constexpr uint8_t ledPin = 2;
void setup()
{
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop()
{
  digitalWrite(ledPin, HIGH);
  delay(10);
  digitalWrite(ledPin, LOW);
  delay(10);
}
</span>

<h1>analogWrite</h1>
<h3>Solution 1.2: Control the voltage using PWM</h3>
<span class="code">
constexpr uint8_t ledPin = 2;
void setup()
{
  pinMode(ledPin, OUTPUT);
}

void loop()
{
  /*  Calculate on time
      100% - 255
      75%  - x

      x = 255/100*75
      x = 191         */

  analogWrite(ledPin, 191);
}
</span>

<h3>Solution 1.3: Fade the LED</h3>
<span class="code">
constexpr uint8_t ledPin = 2;
void setup()
{
  pinMode(ledPin, OUTPUT);
}

void loop()
{
  for(uint8_t i=0; i&lt;=255; i++)
    analogWrite(ledPin, i);
}
</span>

<h3>Solution 1.4: Create a binary 3 bit counter</h3>
<table>
  <thead>
    <tr>
      <th>Loop Iteration (i)</th>
      <th>Binary Representation</th>
      <th>LED Pin 1 (i &amp; 1)</th>
      <th>LED Pin 2 (i &amp; 2)</th>
      <th>LED Pin 3 (i &amp; 4)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>0</td><td>0000</td><td>Off (0)</td><td>Off (0)</td><td>Off (0)</td></tr>
    <tr><td>1</td><td>0001</td><td>Off (0)</td><td>Off (0)</td><td>On (1)</td></tr>
    <tr><td>2</td><td>0010</td><td>Off (0)</td><td>On (1)</td><td>Off (0)</td></tr>
    <tr><td>3</td><td>0011</td><td>Off (0)</td><td>On (1)</td><td>On (1)</td></tr>
    <tr><td>4</td><td>0100</td><td>On (1)</td><td>Off (0)</td><td>Off (0)</td></tr>
    <tr><td>5</td><td>0101</td><td>On (1)</td><td>Off (0)</td><td>On (1)</td></tr>
    <tr><td>6</td><td>0110</td><td>On (1)</td><td>On (1)</td><td>Off (0)</td></tr>
    <tr><td>7</td><td>0111</td><td>On (1)</td><td>On (1)</td><td>On (1)</td></tr>
  </tbody>
</table>

<span class="code">
constexpr int8_t ledPin1 = 2;
constexpr int8_t ledPin2 = 3;
constexpr int8_t ledPin3 = 4;

void setup() {
    pinMode(ledPin1, OUTPUT);
    pinMode(ledPin2, OUTPUT);
    pinMode(ledPin3, OUTPUT);
}

void loop() {
  for (int i = 0; i &lt; 8; i++) {
    digitalWrite(ledPin1, i &amp; 1);
    digitalWrite(ledPin2, i &amp; 2);
    digitalWrite(ledPin3, i &amp; 4);
    delay(1000);
  }
}
</span>
</div>
