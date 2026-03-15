---
id: "class"
title: "class"
order: 14
locked: false
author: "1337encrypted"
label: "class"
---
<div class="container">
<h1 class="center pageTitle">Classes in C++ (Arduino)</h1>
<span class="note">
A class bundles data (attributes) and behaviour (methods) into a single unit.
Access modifiers:
  <strong>public</strong>  — accessible from anywhere
  <strong>private</strong> — only accessible inside the class (default)
</span>

<h3>Basic class structure</h3>
<span class="code">
class ClassName {
  private:
    int attribute;          // data member

  public:
    ClassName(int val) {    // constructor — called when object is created
      attribute = val;
    }

    void setVal(int v) { attribute = v; }   // setter
    int  getVal()      { return attribute; } // getter
};
</span>

<h3>Example: Led class</h3>
<span class="code">
class Led {
  private:
    uint8_t pin;
    bool    state;

  public:
    Led(uint8_t p) : pin(p), state(false) {
      pinMode(pin, OUTPUT);
    }

    void on()     { state = true;  digitalWrite(pin, HIGH); }
    void off()    { state = false; digitalWrite(pin, LOW);  }
    void toggle() { state ? off() : on(); }
    bool isOn()   { return state; }
};

Led myLed(2); // create object for pin 2

void setup() {}

void loop() {
  myLed.on();  delay(500);
  myLed.off(); delay(500);
}
</span>
</div>
