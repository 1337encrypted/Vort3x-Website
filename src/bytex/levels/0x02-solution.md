---
id: "0x02-solution"
title: "0x02: State Machine Solutions"
order: 102
locked: false
type: "solution"
author: "1337encrypted"
label: "0x02 state machine solutions"
---
<div class="container">
<h1 class="center pageTitle">0x02: State Machine Solutions</h1>

<h3>Solution 2.0: Control the LED</h3>
<span class="code">
constexpr uint8_t ledPin    = 2;
constexpr uint8_t buttonPin = 7;

enum pushButtonStates : int8_t { PRESSED = 0, RELEASED = 1 };
enum ledStates        : int8_t { ON = 0, OFF = 1 };

pushButtonStates pushButtonStatus = RELEASED;
ledStates        ledStatus        = OFF;

void setup() {
  pinMode(ledPin,    OUTPUT);
  pinMode(buttonPin, INPUT);
}

void loop() {
  pushButtonStatus = digitalRead(buttonPin) ? PRESSED : RELEASED;

  switch(pushButtonStatus) {
    case PRESSED:  ledStatus = ON;  break;
    case RELEASED: ledStatus = OFF; break;
    default: Serial.println("CODE SHOULD NEVER ENTER THE DEFAULT CASE");
  }

  switch(ledStatus) {
    case ON:  digitalWrite(ledPin, HIGH); break;
    case OFF: digitalWrite(ledPin, LOW);  break;
    default: Serial.println("CODE SHOULD NEVER ENTER THE DEFAULT CASE");
  }
}
</span>

<h3>Solution 2.1: Toggle LED with Pushbutton</h3>
<span class="code">
constexpr uint8_t ledPin    = 2;
constexpr uint8_t buttonPin = 7;

enum pushButtonStates : int8_t { PRESSED = 0, RELEASED = 1 };
enum ledStates        : int8_t { ON = 0, OFF = 1 };

pushButtonStates pushButtonStatus = RELEASED;
pushButtonStates prevButtonStatus = RELEASED;
ledStates        ledStatus        = OFF;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin,    OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  pushButtonStatus = digitalRead(buttonPin) ? RELEASED : PRESSED;

  if(prevButtonStatus == RELEASED &amp;&amp; pushButtonStatus == PRESSED)
    ledStatus = (ledStates)!ledStatus;

  prevButtonStatus = pushButtonStatus;
  digitalWrite(ledPin, ledStatus == ON ? HIGH : LOW);
  delay(50);
}
</span>

<h3>Solution 2.2: Fade LED brightness using Pushbutton</h3>
<span class="code">
constexpr uint8_t ledPin    = 3;
constexpr uint8_t buttonPin = 7;

enum pwmStates : int8_t {
  ZERO_PERCENT     = 0,
  TWENTY_PERCENT   = 1,
  FORTY_PERCENT    = 2,
  SIXTY_PERCENT    = 3,
  EIGHTY_PERCENT   = 4,
  HUNDRED_PERCENT  = 5
};

pwmStates        pwmStatus   = ZERO_PERCENT;
const uint8_t    pwmValues[] = {0, 51, 102, 153, 204, 255};
const char*      pwmNames[]  = {"0%","20%","40%","60%","80%","100%"};
bool             prevPressed = false;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin,    OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  bool pressed = (digitalRead(buttonPin) == LOW);
  if(pressed &amp;&amp; !prevPressed) {
    pwmStatus = (pwmStates)((pwmStatus + 1) % 6);
    Serial.println(pwmNames[pwmStatus]);
  }
  prevPressed = pressed;
  analogWrite(ledPin, pwmValues[pwmStatus]);
  delay(50);
}
</span>

<h3>Solution 2.3: User input via Serial</h3>
<span class="code">
constexpr uint8_t ledPin = 3;

enum pwmStates : int8_t {
  ZERO_PERCENT = 0, TWENTY_PERCENT = 1, FORTY_PERCENT = 2,
  SIXTY_PERCENT = 3, EIGHTY_PERCENT = 4, HUNDRED_PERCENT = 5
};

pwmStates     pwmStatus   = ZERO_PERCENT;
const uint8_t pwmValues[] = {0, 51, 102, 153, 204, 255};
const char*   pwmNames[]  = {"0%","20%","40%","60%","80%","100%"};

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  if(Serial.available() > 0) {
    int8_t input = Serial.read() - '0';
    if(input >= 0 &amp;&amp; input &lt;= 5) {
      pwmStatus = (pwmStates)input;
      Serial.println(pwmNames[pwmStatus]);
    }
  }
  analogWrite(ledPin, pwmValues[pwmStatus]);
}
</span>
</div>
