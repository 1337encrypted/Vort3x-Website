---
id: "0x07-solution"
title: "0x07: LCD Solutions"
order: 107
locked: false
type: "solution"
author: "1337encrypted"
label: "0x07 lcd solutions"
---
<div class="container">
<h1 class="center pageTitle">0x07: LCD Solutions</h1>

<h3>Solution 7.0: Hello World</h3>
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

<h3>Solution 7.1: Scrolling text</h3>
<span class="code">
#include &lt;LiquidCrystal_I2C.h&gt;
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("  Welcome to Vort3x! The embedded way.  ");
}

void loop() {
  lcd.scrollDisplayLeft();
  delay(300);
}
</span>

<h3>Solution 7.2: Live uptime counter</h3>
<span class="code">
#include &lt;LiquidCrystal_I2C.h&gt;
LiquidCrystal_I2C lcd(0x27, 16, 2);

unsigned long lastUpdate = 0;
uint32_t      seconds    = 0;

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Uptime:");
}

void loop() {
  if(millis() - lastUpdate >= 1000) {
    lastUpdate = millis();
    seconds++;
    lcd.setCursor(0, 1);
    lcd.print("                ");
    lcd.setCursor(0, 1);
    lcd.print(seconds);
    lcd.print(" s");
  }
}
</span>
</div>
