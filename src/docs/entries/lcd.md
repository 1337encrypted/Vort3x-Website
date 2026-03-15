---
id: "lcd"
title: "lcd 16x2"
order: 19
locked: false
author: "1337encrypted"
label: "lcd 16x2"
---
<div class="container">
<h1 class="center pageTitle">LCD 16×2 (I2C)</h1>
<span class="note">
The LCD 16×2 has 16 columns and 2 rows.
Using the I2C backpack module reduces wiring to just 4 wires.

Wiring (I2C backpack):
  VCC → 5V    GND → GND    SDA → A4    SCL → A5

Install library: Sketch → Include Library → Manage Libraries → "LiquidCrystal I2C" by Frank de Brabander
If the display is blank, try I2C address 0x3F instead of 0x27.
</span>

<h3>LCD part 1: Hello World</h3>
<span class="code">
#include &lt;LiquidCrystal_I2C.h&gt;
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Hello World!");
  lcd.setCursor(0, 1);
  lcd.print("Vort3x");
}

void loop() {}
</span>

<h3>LCD part 2: Live data display</h3>
<span class="code">
#include &lt;LiquidCrystal_I2C.h&gt;
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
}

void loop() {
  lcd.setCursor(0, 0);
  lcd.print("Uptime(s):      ");
  lcd.setCursor(0, 1);
  lcd.print(millis() / 1000);
  lcd.print("       ");
  delay(500);
}
</span>

<h3>Useful LCD methods</h3>
<span class="code">
lcd.init();               // initialize LCD
lcd.backlight();          // turn on backlight
lcd.noBacklight();        // turn off backlight
lcd.clear();              // clear display and reset cursor
lcd.setCursor(col, row);  // set cursor (0-indexed, col first)
lcd.print("text");        // print text at current cursor
lcd.print(number);        // print a number
lcd.scrollDisplayLeft();  // scroll content left one position
lcd.scrollDisplayRight(); // scroll content right one position
lcd.home();               // move cursor to (0,0)
</span>
</div>
