---
id: "0x04-solution"
title: "0x04: Class Solutions"
order: 104
locked: false
type: "solution"
author: "1337encrypted"
label: "0x04 class solutions"
---
<div class="container">
<h1 class="center pageTitle">0x04: Class Solutions</h1>

<h3>Solution 4.0: Led class</h3>
<span class="code">
class Led {
  private:
    uint8_t pin;
    bool    state;
  public:
    Led(uint8_t p) : pin(p), state(false) { pinMode(pin, OUTPUT); }
    void on()     { state = true;  digitalWrite(pin, HIGH); }
    void off()    { state = false; digitalWrite(pin, LOW);  }
    void toggle() { state ? off() : on(); }
};

Led led(2);

void setup() {}

void loop() {
  led.on();  delay(1000);
  led.off(); delay(1000);
}
</span>

<h3>Solution 4.1: Button class</h3>
<span class="code">
class Led {
  private:
    uint8_t pin; bool state;
  public:
    Led(uint8_t p) : pin(p), state(false) { pinMode(pin, OUTPUT); }
    void on()     { state = true;  digitalWrite(pin, HIGH); }
    void off()    { state = false; digitalWrite(pin, LOW);  }
    void toggle() { state ? off() : on(); }
};

class Button {
  private:
    uint8_t pin;
    bool    prev;
  public:
    Button(uint8_t p) : pin(p), prev(false) { pinMode(pin, INPUT_PULLUP); }
    bool isPressed() { return digitalRead(pin) == LOW; }
    bool wasJustPressed() {
      bool cur = isPressed();
      bool just = (cur &amp;&amp; !prev);
      prev = cur;
      return just;
    }
};

Led    led(2);
Button btn(7);

void setup() {}

void loop() {
  if(btn.wasJustPressed()) {
    led.toggle();
    delay(50);
  }
}
</span>

<h3>Solution 4.2: Non-blocking Blinker class</h3>
<span class="code">
class Blinker {
  private:
    uint8_t       pin;
    unsigned long interval;
    unsigned long lastTime;
    bool          state;
  public:
    Blinker(uint8_t p, unsigned long ms)
      : pin(p), interval(ms), lastTime(0), state(false) {
      pinMode(pin, OUTPUT);
    }
    void update() {
      if(millis() - lastTime >= interval) {
        lastTime = millis();
        state = !state;
        digitalWrite(pin, state ? HIGH : LOW);
      }
    }
};

Blinker fast(2, 200);
Blinker slow(3, 700);

void setup() {}

void loop() {
  fast.update();
  slow.update();
}
</span>
</div>
