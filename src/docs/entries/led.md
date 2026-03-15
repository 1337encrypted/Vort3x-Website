---
id: "led"
title: "led"
order: 8
locked: false
author: "1337encrypted"
label: "led"
---
<div class="container">
<h1 class="center pageTitle">led</h1>
<span class="note">
<h3>  RESOURCES</h3>
<a href="https://www.digikey.in/en/resources/conversion-calculators/conversion-calculator-led-series-resistor">LED Series Resistor Calculator</a>

<strong>pinMode(pin, INPUT/OUTPUT/INPUT_PULLUP);</strong>

INPUT - 0
OUTPUT - 1
INPUT_PULLUP - 2

<strong>digitalWrite(pin, LOW/HIGH);</strong>

LOW - 0
HIGH - 1</span>
<h3>Led part 1: led.ino</h3>
<span class="code">
void setup()
{
  pinMode(2, OUTPUT);
}

void loop()
{
  digitalWrite(2, HIGH);
}
</span>
<h3>Led part 2: Blink.ino</h3>
<span class="code">
constexpr int8_t ledPin = 2;
void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(1000);
  digitalWrite(ledPin, LOW);
  delay(1000);
}
</span>
<h3>Led part 3: SOS.ino</h3>
<span class="code">
constexpr int8_t ledPin = 2;
void setup()
{
  pinMode(ledPin, OUTPUT);
}

void loop()
{
  digitalWrite(ledPin,HIGH); delay(500);
  digitalWrite(ledPin,LOW);  delay(500);
  digitalWrite(ledPin,HIGH); delay(500);
  digitalWrite(ledPin,LOW);  delay(500);
  digitalWrite(ledPin,HIGH); delay(500);
  digitalWrite(ledPin,LOW);  delay(500);

  digitalWrite(ledPin,HIGH); delay(1000);
  digitalWrite(ledPin,LOW);  delay(1000);
  digitalWrite(ledPin,HIGH); delay(1000);
  digitalWrite(ledPin,LOW);  delay(1000);
  digitalWrite(ledPin,HIGH); delay(1000);
  digitalWrite(ledPin,LOW);  delay(1000);

  digitalWrite(ledPin,HIGH); delay(500);
  digitalWrite(ledPin,LOW);  delay(500);
  digitalWrite(ledPin,HIGH); delay(500);
  digitalWrite(ledPin,LOW);  delay(500);
  digitalWrite(ledPin,HIGH); delay(500);
  digitalWrite(ledPin,LOW);  delay(500);
}
</span>
<h3>Led part 4: control_brightness.ino</h3>
<span class="code">
int ledPin = 2;
void setup()
{
  pinMode(ledPin, OUTPUT);
}

void loop()
{
  analogWrite(ledPin,127);    //Control the brightness at 50% dutycycle
}
</span>
</div>
