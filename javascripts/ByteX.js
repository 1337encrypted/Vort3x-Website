var styleElement = document.createElement('style');

// Append the <style> element to the <head> section of the document
document.head.appendChild(styleElement);
// Object to store text contents and their corresponding IDs
var textContents = {
  '0x00': `
  <div class="container">
  <h1 class="center pageTitle">0x01: Basics of command-line</h1>

  <span class="center note">Note: User account should be created before attempting to solve the assignments</span>

  <h3 class="center">Assignment 0.0: File and Directory Operations</h3>
  
  <ul>  
  <input type="checkbox"> Create a new directory called <strong>folder1</strong> in your <strong>users home</strong> directory.
  <input type="checkbox"> Navigate into the folder1 directory using the <strong>cd</strong> command.
  <input type="checkbox"> Create three new empty files named <strong>file1.txt, file2.txt, and file3.txt</strong> using the <strong>touch</strong> command.
  <input type="checkbox"> List the contents of the folder1 directory to verify that the three files were created.
  <input type="checkbox"> Make a copy of file1.txt and name the copy file1_backup.txt using the <strong>cp</strong> command.
  <input type="checkbox"> Rename file2.txt to file2_renamed.txt using the <strong>mv</strong> command.
  <input type="checkbox"> Create a new subdirectory called <strong>backup</strong> inside the folder1 directory using the <strong>mkdir</strong> command.
  <input type="checkbox"> Move file1_backup.txt into the backup subdirectory using the <strong>mv</strong> command.
  <input type="checkbox"> Delete the <strong>file3.txt</strong> file using the <strong>rm</strong> command.
  <input type="checkbox"> Remove the backup subdirectory and its contents using the <strong>rm -r</strong> command.</ul>
 
  <h3 class="center">Assignment 0.1: Directory Navigation and Listing</h3>
  <ul>  
  <input type="checkbox"> Navigate to your <strong>users home</strong> directory using the cd command.
  <input type="checkbox"> List the contents of the current directory using the <strong>ls</strong> command.
  <input type="checkbox"> List the contents of the current directory, including hidden files and directories, using the <strong>ls -a</strong> command.
  <input type="checkbox"> List the contents of the current directory in a long format that displays permissions, ownership and other details using the <strong>ls -l</strong> command.
  <input type="checkbox"> Create a new directory called project in your home directory using the <strong>mkdir</strong> command.
  <input type="checkbox"> Navigate into the project directory using the <strong>cd</strong> command.
  <input type="checkbox"> Create three subdirectories called <strong>src, docs, and tests</strong> inside the project directory using the mkdir command.
  <input type="checkbox"> Navigate back to your home directory using the <strong>cd ..</strong> command (assuming project is a subdirectory of your home directory).
  <input type="checkbox"> Remove the project directory and all its contents using the <strong>rm -r</strong> command.
  <input type="checkbox"> Verify that the project directory has been removed by listing the contents of your home directory using the <strong>ls</strong> command.</ul>
  
  <h3 class="center">Assignment 0.2: File Copying and Moving</h3>
  <ul>  
  <input type="checkbox"> Navigate to your <strong>users home</strong> directory.
  <input type="checkbox"> Create a new directory called <strong>files</strong>.
  <input type="checkbox"> Navigate into the files directory.
  <input type="checkbox"> Create three new empty files named <strong>file1.txt, file2.txt, and file3.txt</strong>
  <input type="checkbox"> Make a copy of file1.txt and name the copy file1_copy.txt
  <input type="checkbox"> Create a new subdirectory called <strong>backup</strong> inside the files directory
  <input type="checkbox"> Move <strong>file2.txt and file3.txt</strong> into the <strong>backup</strong> subdirectory
  <input type="checkbox"> Navigate back to your home directory.
  <input type="checkbox"> Copy the entire files directory to a new directory called files_backup
  <input type="checkbox"> Remove the original files directory and its contents</ul>
  </div>
    `,

  '0x01': `
  <div class="container">
  <h1 class="center pageTitle">0x01: LEDs</h1>
  <span class="note"><h3>Resources</h3>
  <a href="https://www.digikey.in/en/resources/conversion-calculators/conversion-calculator-led-series-resistor">LED Series Resistor Calculator</a>
  <a href="https://www.digikey.in/en/resources/conversion-calculators/conversion-calculator-resistor-color-code">Resistor Color Code Calculator</a>

  <strong>Red</strong> led use <strong>120 ohms</strong> resistor
  <strong>Yellow</strong> led use <strong>120 ohms</strong> resistor
  <strong>Green</strong> led use <strong>100 ohms</strong> resistor

  <strong>Long leg</strong> of the led is anode and connects to the <strong>digital pin</strong> of arduino.
  <strong>Short leg</strong> of led is cathode and connects to <strong>GND pin</strong> of arduino.
  The <strong>Resistor</strong> can come anywhere in the circuit but its ideal to place it <strong>between the digital pin and long</strong> leg of led.
  </span>
  <h1 class="pageTitle">digitalWrite</h1>
  <h3><input type="checkbox"> Assignment 1.0: Random number</h3>
  <li>Connect an LED to pin number 2 of arduino</li>
  <li>Generate a random numbers using the random function between 0 to 10 in arduino and store it in a variable</li>
  <span class="code">Example: int randNum = random(0,10)</span>
  <li>Turn the <strong>led on</strong> if its a even number</li>
  <li>Turn the <strong>led off</strong> if its a odd number</li>
  <li>Use a delay of 1 second</li>
  <h3><input type="checkbox"> Assignment 1.1: Blink an LED with the least delay time possible</h3>
  <li>Connect an LED to pin 4 and turn it on and off using digitalWrite</li>
  <li>You need to determine the least dealy time possible without he LED completely turning on.</li>
  <h1 class="pageTitle">analogWrite</h1>
  <h3><input type="checkbox"> Assignment 1.2: Control the voltage using PWM </h3>
  <li>Connect an LED to pin 3</li>
  <li>You need to set the PWM <strong>On time</strong> to 75% dutycycle and <strong>Off time</strong> to 25% dutycycle</li>
  <h3><input type="checkbox"> Assignment 1.3: Fade the LED</h3>
  <li>Connect an LED to any of the PWM pins on the arduino uno</li>
  <li>You need to start from 0 dutycycle all the way to 255 dutycycle and back again to 0 in an infinite loop using PWM</li>
  <h1 class="pageTitle">Intermediate Challenges</h1>
  <h3><input type="checkbox"> Assignment 1.4: Create a binary 3 bit counter</h3>
  <li>Connect the LED's to pin number 3, 4 and 5</li>   
  <li>Create a binary counter which counts from 0 to 7 in binary, use suitable delay between the count.</li>
  <p class="text center">
  000
  001
  010
  011
  100
  101
  110
  111
  </p>
  <h3><input type="checkbox"> Assignment 1.5: Random binary generator</h3>
  <li>Connect 3 LED's to pin numbers 2, 3 and 4 of arduino</li>
  <li>Generate a random numbers between 0 to 8 and store it in a variable</li>
  <li>Generate the equivalent binary sequence using the LED's</li>
  <p>  Input: 0
  Output:000

  Input: 4
  Output:100

  Input: 6
  Output:110</p>
  <h3><input type="checkbox"> Assignment 1.6: Create a traffic light simulator</h3>
  <li>Connect redLed to pin 3, yellowLed to pin 4 and greenLed to pin 5</li>
  <li>Use the digitalWrite function to control the sequence in which the LEDs turn on and off, creating a traffic light effect.</li>
  </div>
  `,

  '0x02': `<div class="container">
  <h1 class="center pageTitle">0x02: State Machines</h1>

  <span class="note">
  <h3>Example syntax to create a state machine</h3>
  enum states : int8_t {
    STATE0 = 0,
    STATE1 = 1,
    STATE2 = 2
  };

  states status = STATE1;

  <h3>Switch between states</h3>
  switch(status) {
    case STATE1:
      //code
    break;

    case STATE2:
      //code
    break;

    case STATE3:
      //code
    break;

    default:
      Serial.println("CODE SHOULD NEVER ENTER THE DEFAULT CASE");
  }
  </span>

  <h3><input type="checkbox"> Assignment 2.0: Control the LED</h3><span class="text">
  Create a pushbutton state machine which has the states
  <strong>PRESSED,</strong>
  <strong>RELEASED</strong>
  Create a LED state machine which has the states
  <strong>ON,</strong>
  <strong>OFF</strong>
  When the pushbutton state is <strong>PRESSED</strong> change the led state to <strong>ON</strong>
  When the pushbutton state is <strong>RELEASED</strong> change the led state to <strong>OFF</strong>
  </span>
  <h3><input type="checkbox"> Assignment 2.1: Toggle LED with Pushbutton</h3><span class="text">
  <strong>Modify Assignment 2.1</strong> code to
  Change the state of led to <strong>ON</strong> when the pushbutton is pressed once,
  Change the state of led to <strong>OFF</strong> when the pushbutton is pressed again.
  Likewise keep toggling the state of the LED every time the push button is pressed.
  </span>
  <h3><input type="checkbox"> Assignment 2.2: Fade LED brightness using Pushbutton</h3><span class="text">
  Design a state machine to set the PWM duty cycle of the LED
  The state machine should contain the following states
  <strong>ZERO_PERCENT = 0,
  TWENTY_PERCENT = 1,
  FORTY_PERCENT = 2,
  SIXTY_PERCENT = 3,
  EIGHTY_PERCENT = 4,
  HUNDRED_PERCENT = 5</strong>
  Print the duty cycle on the serial monitor
  </span>
  <h3><input type="checkbox"> Assignment 2.3: User input</h3><span class="text">
  <strong>Modify Assignment 2.2</strong> to make it compatible with user inputs.
  When the user types <strong>0</strong> in the Serial monitor then the LED should set to <strong>ZERO_PERCENT</strong> state.
  When the user types <strong>1</strong> in the Serial monitor then the LED should set to <strong>TWENTY_PERCENT</strong> state.
  Helper boilerplate logic to read user inputs.
  <span class="code">
  if(Serial.available() > 0) {
    pushButtonStatus = (pushButtonStates)Serial.read();
  }
  </span>
  </div>`,
  '0x03': `
  <div class="container">
  <h1 class="center pageTitle">0x03: Pushbutton</h1>
  <span class="note">
  <h3>Resources</h3>
  <a href="./Documentation.html">Pushbutton wiring reference</a>

  Use a <strong>pull-down resistor (10kΩ)</strong> — pin reads LOW when open, HIGH when pressed.
  Or use <strong>INPUT_PULLUP</strong> — pin reads HIGH when open, LOW when pressed (no external resistor needed).
  </span>

  <h3><input type="checkbox"> Assignment 3.0: Read a pushbutton</h3>
  <li>Connect a pushbutton to pin 7 with a pull-down resistor</li>
  <li>Set pin 7 as INPUT using pinMode</li>
  <li>Read the button state using <strong>digitalRead(7)</strong></li>
  <li>Print <strong>"PRESSED"</strong> to serial monitor when HIGH, <strong>"RELEASED"</strong> when LOW</li>

  <h3><input type="checkbox"> Assignment 3.1: Toggle LED with pushbutton (debounced)</h3>
  <li>Connect a pushbutton to pin 7 and an LED to pin 2</li>
  <li>Each press <strong>toggles</strong> the LED (ON → OFF → ON)</li>
  <li>Debounce the button: only act on the LOW-to-HIGH transition, add a 50ms delay after change</li>
  <p id=hint>Hint: Store the previous button state. Only toggle when current != previous.</p>

  <h3><input type="checkbox"> Assignment 3.2: Button press counter</h3>
  <li>Count how many times the button has been pressed</li>
  <li>Print the count to the serial monitor on each press</li>
  <li>Reset the counter to 0 when the count reaches 10</li>

  <h3><input type="checkbox"> Assignment 3.3: Multi-mode LED</h3>
  <li>Each button press cycles the LED through 3 modes: <strong>OFF → DIM (25%) → BRIGHT (100%) → OFF</strong></li>
  <li>Use <strong>analogWrite</strong> for brightness control on a PWM pin (pin 3, 5, 6, 9, 10, or 11)</li>
  <li>Print the current mode name to the serial monitor</li>
  </div>
  `,

  '0x04': `
  <div class="container">
  <h1 class="center pageTitle">0x04: Classes</h1>
  <span class="note">
  <h3>Basic class syntax</h3>
  class MyClass {
    private:
      int attribute;
    public:
      MyClass(int val) { attribute = val; } // constructor
      void setVal(int v) { attribute = v; }
      int  getVal()      { return attribute; }
  };
  MyClass obj(42); // create an object
  obj.getVal();    // call a method
  </span>

  <h3><input type="checkbox"> Assignment 4.0: Led class</h3>
  <li>Create a class called <strong>Led</strong> with a private attribute <strong>pin</strong></li>
  <li>Add a constructor that accepts the pin number and calls pinMode(pin, OUTPUT)</li>
  <li>Add public methods: <strong>on()</strong>, <strong>off()</strong>, <strong>toggle()</strong></li>
  <li>Instantiate the Led class for pin 2 and blink it every second in loop()</li>

  <h3><input type="checkbox"> Assignment 4.1: Button class</h3>
  <li>Create a class called <strong>Button</strong> with a private attribute <strong>pin</strong></li>
  <li>Add a constructor that sets up the pin as INPUT_PULLUP</li>
  <li>Add a public method <strong>isPressed()</strong> that returns true when the button is pressed</li>
  <li>Add a method <strong>wasJustPressed()</strong> that returns true only on the falling edge (debounced)</li>
  <li>Use the Button class to toggle the Led class from Assignment 4.0</li>

  <h3><input type="checkbox"> Assignment 4.2: Non-blocking Blinker class</h3>
  <li>Create a class called <strong>Blinker</strong> that blinks an LED without using delay()</li>
  <li>Private attributes: pin, interval (ms), lastTime, state</li>
  <li>Add an <strong>update()</strong> method that checks millis() and toggles the LED when the interval has passed</li>
  <li>Create two Blinker objects on different pins and different rates (e.g., 200ms and 700ms)</li>
  <li>Call both update() methods in loop() — they should blink simultaneously</li>
  <p id=hint>Hint: unsigned long lastTime = 0; if(millis() - lastTime >= interval) { lastTime = millis(); toggle; }</p>
  </div>
  `,

  '0x05': `
  <div class="container">
  <h1 class="center pageTitle">0x05: Buzzer</h1>
  <span class="note">
  <h3>tone() function syntax</h3>
  tone(pin, frequency);             // play indefinitely
  tone(pin, frequency, duration_ms); // play for duration then stop
  noTone(pin);                       // stop tone

  <strong>Common note frequencies (Hz)</strong>
  C4=262  D4=294  E4=330  F4=349
  G4=392  A4=440  B4=494  C5=523

  Connect buzzer: one leg to digital pin, other leg to GND.
  <strong>Passive buzzers</strong> require a frequency signal (use tone).
  <strong>Active buzzers</strong> just need power (use digitalWrite).
  </span>

  <h3><input type="checkbox"> Assignment 5.0: Generate a single tone</h3>
  <li>Connect a passive buzzer to pin 8</li>
  <li>Play a 440Hz tone for 1 second, then silence for 1 second, in an infinite loop</li>

  <h3><input type="checkbox"> Assignment 5.1: Play a musical scale</h3>
  <li>Play the C-major scale: C4 D4 E4 F4 G4 A4 B4 C5 (frequencies: 262 294 330 349 392 440 494 523)</li>
  <li>Each note lasts 300ms with a 50ms gap between notes</li>
  <li>Store frequencies in an array and loop through it</li>

  <h3><input type="checkbox"> Assignment 5.2: Play a melody</h3>
  <li>Program the buzzer to play <strong>Mary Had a Little Lamb</strong></li>
  <span class="code">Notes: E D C D E E E | D D D | E G G | E D C D E E E E D D E D C</span>
  <li>Store the note frequencies and durations in two parallel arrays</li>

  <h3><input type="checkbox"> Assignment 5.3: Police siren</h3>
  <li>Sweep the frequency from 800Hz up to 1200Hz and back down repeatedly</li>
  <li>Use a for loop with tone() and a small delay (5ms) between each step</li>
  <li>The effect should sound like a continuous wailing siren</li>
  </div>
  `,

  '0x06': `
  <div class="container">
  <h1 class="center pageTitle">0x06: 7-Segment Display</h1>
  <span class="note">
  <h3>Segment layout and pin mapping (Common Cathode)</h3>
     aaa
    f   b
    f   b
     ggg
    e   c
    e   c
     ddd

  Segment: a   b   c   d   e   f   g
  Pin:     2   3   4   5   6   7   8

  Common Cathode: segments turn ON with digitalWrite(pin, HIGH)
  Common Anode:   segments turn ON with digitalWrite(pin, LOW)

  Digit patterns (segments a,b,c,d,e,f,g):
  0=1111110  1=0110000  2=1101101  3=1111001  4=0110011
  5=1011011  6=1011111  7=1110000  8=1111111  9=1111011
  </span>

  <h3><input type="checkbox"> Assignment 6.0: Display a single digit</h3>
  <li>Connect a 7-segment display (Common Cathode) to pins 2–8 (segments a–g)</li>
  <li>Store all 10 digit patterns in a 2D array: <strong>uint8_t digits[10][7]</strong></li>
  <li>Write a <strong>displayDigit(uint8_t d)</strong> function that drives all 7 segments</li>
  <li>Display the digit <strong>5</strong> on startup</li>

  <h3><input type="checkbox"> Assignment 6.1: Count 0 to 9</h3>
  <li>Cycle through digits 0–9 with a 1-second delay between each</li>
  <li>After 9, wrap back to 0 and repeat</li>

  <h3><input type="checkbox"> Assignment 6.2: Button-controlled counter</h3>
  <li>Add a pushbutton on pin 9 to increment the displayed digit</li>
  <li>Add a second pushbutton on pin 10 to decrement it</li>
  <li>Keep the value within the range 0–9 (wrap around)</li>
  <li>Debounce both buttons</li>
  </div>
  `,

  '0x07': `
  <div class="container">
  <h1 class="center pageTitle">0x07: LCD 16x2</h1>
  <span class="note">
  <h3>LiquidCrystal_I2C library setup</h3>
  #include &lt;LiquidCrystal_I2C.h&gt;
  LiquidCrystal_I2C lcd(0x27, 16, 2); // address 0x27, 16 cols, 2 rows

  void setup() {
    lcd.init();
    lcd.backlight();
  }

  Wiring (I2C backpack): VCC→5V  GND→GND  SDA→A4  SCL→A5
  Install library: Sketch → Include Library → Manage Libraries → "LiquidCrystal I2C"
  If display is blank, try I2C address 0x3F instead of 0x27.
  </span>

  <h3><input type="checkbox"> Assignment 7.0: Hello World</h3>
  <li>Connect the LCD via I2C backpack</li>
  <li>Display <strong>"Hello World!"</strong> on row 0 and <strong>"Vort3x"</strong> on row 1</li>

  <h3><input type="checkbox"> Assignment 7.1: Scrolling text</h3>
  <li>Display a message longer than 16 characters on the first row</li>
  <li>Use <strong>lcd.scrollDisplayLeft()</strong> with a 300ms delay to scroll it</li>
  <li>Make it loop continuously</li>

  <h3><input type="checkbox"> Assignment 7.2: Live uptime counter</h3>
  <li>Display <strong>"Uptime:"</strong> on row 0 (static)</li>
  <li>Display the number of seconds since startup on row 1, updating every second</li>
  <li>Use millis()/1000 for the elapsed seconds</li>
  <p id=hint>Hint: Use lcd.print("      ") or lcd.clear() to erase old digits before printing new ones.</p>
  </div>
  `,

  '0x08': `<div class="container"></div>`,




  '0x00-solution': `
  <div class="container">
  <h1 class="center pageTitle">0x00: command-line-solutions</h1>



  <h3 class="center">Assignment 1.0 Solutions: File and Directory Operations</h3> 



  <span class="text">1. Create a new directory called <strong>folder1</strong> in your <strong>users home</strong> directory.</span>

  <span class="code">cd /home/user</span>
  <span class="text">2. Navigate into the folder1 directory using the <strong>cd</strong> command.</span>

  <span class="code">cd folder1</span>
  <span class="text">3. Create three new empty files named <strong>file1.txt, file2.txt, and file3.txt</strong> using the <strong>touch</strong> command.</span>

  <span class="code">touch file1.txt file2.txt file3.txt</span>
  <span class="text">4. List the contents of the folder1 directory to verify that the three files were created.</span>

  <span class="code">ls</span>
  <span class="text">5. Make a copy of file1.txt and name the copy file1_backup.txt using the <strong>cp</strong> command.</span>

  <span class="code">cp file1.txt file1_backup.txt</span>
  <span class="text">6. Rename file2.txt to file2_renamed.txt using the <strong>mv</strong> command.</span>

  <span class="code">mv file2.txt file2_renamed.txt</span>
  <span class="text">7. Create a new subdirectory called <strong>backup</strong> inside the folder1 directory using the <strong>mkdir</strong> command.</span>

  <span class="code">mkdir backup</span>
  <span class="text">8. Move file1_backup.txt into the backup subdirectory using the <strong>mv</strong> command.</span>

  <span class="code">mv file1_backup.txt backup/</span>
  <span class="text">9. Delete the <strong>file3.txt</strong> file using the <strong>rm</strong> command.</span>

  <span class="code">rm file3.txt</span>
  <span class="text">10. Remove the backup subdirectory and its contents using the <strong>rm -r</strong> command.</span>

  <span class="code">rm -r backup</span>




  <h3 class="center">Assignment 1.1 Solutions: Directory Navigation and Listing</h3> 



  <span class="text">1. Navigate to your user's home directory using the <strong>cd</strong> command.</span>

  <span class="code">cd /home/user</span>
  <span class="text">2. List the contents of the current directory (home) using the <strong>ls</strong> command.</span>

  <span class="code">ls</span>
  <span class="text">3. List the contents of the current directory (home), including hidden files and directories, using the <strong>ls -a</strong> command.</span>

  <span class="code">ls -a</span>
  <span class="text">4. List the contents of the current directory (home) in a long format that displays permissions, ownership and other details using the <strong>ls -l</strong> command.</span>

  <span class="code">ls -l</span>
  <span class="text">5. Create a new directory called <strong>project</strong> in your home directory using the <strong>mkdir</strong> command.</span>

  <span class="code">mkdir project</span>
  <span class="text">6. Navigate into the project directory using the <strong>cd</strong> command.</span>

  <span class="code">cd project</span>
  <span class="text">7. Create three subdirectories called <strong>src, docs, and tests</strong> inside the project directory using the <strong>mkdir</strong> command.</span>

  <span class="code">mkdir src docs tests</span>
  <span class="text">8. Navigate back to your user's home directory using the <strong>cd ..</strong> command (assuming project is a subdirectory of your home directory).</span>

  <span class="code">cd ..</span>
  <span class="text">9. Remove the project directory and all its contents using the <strong>rm -r</strong> command. Use with caution!</span>

  <span class="code">rm -r project</span>
  <span class="text">10. Verify that the project directory has been removed by listing the contents of your home directory using the <strong>ls</strong> command.</span>

  <span class="code">ls</span>



  <h3 class="center">Assignment 1.2 Solutions: File Copying and Moving</h3> 



  <span class="text">1. Navigate to your user's home directory using the <strong>cd</strong> command.</span>

  <span class="code">cd /home/user</span>
  <span class="text">2. Create a new directory called <strong>files</strong> in your home directory using the <strong>mkdir</strong> command.</span>

  <span class="code">mkdir files</span>
  <span class="text">3. Navigate into the <strong>files</strong> directory using the <strong>cd</strong> command.</span>

  <span class="code">cd files</span>
  <span class="text">4. Create three new empty files named <strong>file1.txt, file2.txt, and file3.txt</strong> using the <strong>touch</strong> command.</span>

  <span class="code">touch file1.txt file2.txt file3.txt</span>
  <span class="text">5. Make a copy of <strong>file1.txt</strong> and name the copy <strong>file1_copy.txt</strong> using the <strong>cp</strong> command.</span>

  <span class="code">cp file1.txt file1_copy.txt</span>
  <span class="text">6. Create a new subdirectory called <strong>backup</strong> inside the <strong>files</strong> directory using the <strong>mkdir</strong> command.</span>

  <span class="code">mkdir backup</span>
  <span class="text">7. Move <strong>file2.txt</strong> and <strong>file3.txt</strong> into the <strong>backup</strong> subdirectory using the <strong>mv</strong> command.</span>

  <span class="code">mv file2.txt file3.txt backup/</span>
  <span class="text">8. Navigate back to your user's home directory using the <strong>cd ..</strong> command (assuming files is a subdirectory of your home directory).</span>

  <span class="code">cd ..</span>
  <span class="text">9. Copy the entire <strong>files</strong> directory to a new directory called <strong>files_backup</strong> using the <strong>cp -r</strong> command.</span>

  <span class="code">cp -r files files_backup</span>
  <span class="text">10. Remove the original <strong>files</strong> directory and its contents using the <strong>rm -r</strong> command. Use with caution!</span>

  <span class="code">rm -r files</span>
  </div>`,

  '0x02-solution': `
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
  pushButtonStatus = digitalRead(buttonPin) ? RELEASED : PRESSED; // INPUT_PULLUP inverts logic

  if(prevButtonStatus == RELEASED && pushButtonStatus == PRESSED)
    ledStatus = (ledStates)!ledStatus; // toggle

  prevButtonStatus = pushButtonStatus;
  digitalWrite(ledPin, ledStatus == ON ? HIGH : LOW);
  delay(50); // debounce
}
  </span>

  <h3>Solution 2.2: Fade LED brightness using Pushbutton</h3>
  <span class="code">
constexpr uint8_t ledPin    = 3; // PWM pin
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
  if(pressed && !prevPressed) {
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
    int8_t input = Serial.read() - '0'; // ASCII digit → int
    if(input >= 0 && input <= 5) {
      pwmStatus = (pwmStates)input;
      Serial.println(pwmNames[pwmStatus]);
    }
  }
  analogWrite(ledPin, pwmValues[pwmStatus]);
}
  </span>
  </div>
  `,

  '0x03-solution': `
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
  if(pressed && !prevButton) {
    ledState = !ledState;
    digitalWrite(ledPin, ledState ? HIGH : LOW);
    delay(50); // debounce
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
  if(pressed && !prevButton) {
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
constexpr uint8_t ledPin    = 3; // PWM pin
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
  if(pressed && !prevButton) {
    mode = (mode + 1) % 3;
    analogWrite(ledPin, brightness[mode]);
    Serial.println(modeNames[mode]);
    delay(50);
  }
  prevButton = pressed;
}
  </span>
  </div>
  `,

  '0x04-solution': `
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
      bool just = (cur && !prev);
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
  `,

  '0x05-solution': `
  <div class="container">
  <h1 class="center pageTitle">0x05: Buzzer Solutions</h1>

  <h3>Solution 5.0: Generate a single tone</h3>
  <span class="code">
constexpr uint8_t buzzerPin = 8;

void setup() { pinMode(buzzerPin, OUTPUT); }

void loop() {
  tone(buzzerPin, 440, 1000);
  delay(2000);
}
  </span>

  <h3>Solution 5.1: Play a musical scale</h3>
  <span class="code">
constexpr uint8_t  buzzerPin    = 8;
const    uint16_t  scale[]      = {262, 294, 330, 349, 392, 440, 494, 523};

void setup() { pinMode(buzzerPin, OUTPUT); }

void loop() {
  for(uint8_t i = 0; i < 8; i++) {
    tone(buzzerPin, scale[i], 300);
    delay(350);
  }
  delay(1000);
}
  </span>

  <h3>Solution 5.2: Mary Had a Little Lamb</h3>
  <span class="code">
constexpr uint8_t buzzerPin = 8;

#define E4 330
#define D4 294
#define C4 262
#define G4 392

const uint16_t melody[]    = {E4,D4,C4,D4,E4,E4,E4, D4,D4,D4, E4,G4,G4, E4,D4,C4,D4,E4,E4,E4,E4,D4,D4,E4,D4,C4};
const uint8_t  durations[] = { 4, 4, 4, 4, 4, 4, 2,  4, 4, 2,  4, 4, 2,  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2};

void setup() { pinMode(buzzerPin, OUTPUT); }

void loop() {
  for(uint8_t i = 0; i < 26; i++) {
    tone(buzzerPin, melody[i], 1000 / durations[i]);
    delay(1000 / durations[i] + 50);
  }
  delay(2000);
}
  </span>

  <h3>Solution 5.3: Police siren</h3>
  <span class="code">
constexpr uint8_t buzzerPin = 8;

void setup() { pinMode(buzzerPin, OUTPUT); }

void loop() {
  for(uint16_t f = 800; f <= 1200; f += 10) { tone(buzzerPin, f); delay(5); }
  for(uint16_t f = 1200; f >= 800; f -= 10) { tone(buzzerPin, f); delay(5); }
}
  </span>
  </div>
  `,

  '0x06-solution': `
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
  for(uint8_t s = 0; s < 7; s++)
    digitalWrite(segPins[s], digits[d][s]);
}

void setup() {
  for(uint8_t i = 0; i < 7; i++)
    pinMode(segPins[i], OUTPUT);
}

void loop() {
  displayDigit(5); // display digit 5
}
  </span>

  <h3>Solution 6.1: Count 0 to 9</h3>
  <span class="code">
// (same setup and displayDigit as above)
void loop() {
  for(uint8_t d = 0; d <= 9; d++) {
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
  for(uint8_t i = 0; i < 7; i++) pinMode(segPins[i], OUTPUT);
  pinMode(btnUp,   INPUT_PULLUP);
  pinMode(btnDown, INPUT_PULLUP);
}

void loop() {
  bool up   = (digitalRead(btnUp)   == LOW);
  bool down = (digitalRead(btnDown) == LOW);

  if(up   && !prevUp)   { count = (count + 1) % 10; delay(50); }
  if(down && !prevDown) { count = (count + 9) % 10; delay(50); } // +9 mod 10 = -1

  prevUp   = up;
  prevDown = down;
  displayDigit(count);
}
  </span>
  </div>
  `,

  '0x07-solution': `
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
    lcd.print("                "); // clear row
    lcd.setCursor(0, 1);
    lcd.print(seconds);
    lcd.print(" s");
  }
}
  </span>
  </div>
  `,

  '0x01-solution': `
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
  for(uint8_t i=0; i<=255; i++)
    analogWrite(ledPin, i);
}
</span>

<h3>Solution 1.4: Create a binary 3 bit counter</h3>
<table>
  <thead>
    <tr>
      <th>Loop Iteration (i)</th>
      <th>Binary Representation</th>
      <th>LED Pin 1 (i & 1)</th>
      <th>LED Pin 2 (i & 2)</th>
      <th>LED Pin 3 (i & 4)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0000</td>
      <td>Off (0)</td>
      <td>Off (0)</td>
      <td>Off (0)</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0001</td>
      <td>Off (0)</td>
      <td>Off (0)</td>
      <td>On (1)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>0010</td>
      <td>Off (0)</td>
      <td>On (1)</td>
      <td>Off (0)</td>
    </tr>
    <tr>
      <td>3</td>
      <td>0011</td>
      <td>Off (0)</td>
      <td>On (1)</td>
      <td>On (1)</td>
    </tr>
    <tr>
      <td>4</td>
      <td>0100</td>
      <td>On (1)</td>
      <td>Off (0)</td>
      <td>Off (0)</td>
    </tr>
    <tr>
      <td>5</td>
      <td>0101</td>
      <td>On (1)</td>
      <td>Off (0)</td>
      <td>On (1)</td>
    </tr>
    <tr>
      <td>6</td>
      <td>0110</td>
      <td>On (1)</td>
      <td>On (1)</td>
      <td>Off (0)</td>
    </tr>
    <tr>
      <td>7</td>
      <td>0111</td>
      <td>On (1)</td>
      <td>On (1)</td>
      <td>On (1)</td>
    </tr>
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
  // count from 0 to 7 in binary:
  for (int i = 0; i < 8; i++) {
    digitalWrite(ledPin1, i & 1);  // least significant bit
    digitalWrite(ledPin2, i & 2);  // second least significant bit
    digitalWrite(ledPin3, i & 4);  // third least significant bit
    delay(1000);  // wait for 1 second
  }
}
</span>
</div>
`,
  
};

function displayText(contentId) {
    var articleHeaderBottom = document.querySelector(".articleHeaderBottom");
    articleHeaderBottom.innerHTML = contentId;

    var textBox = document.getElementById("textBox");
    textBox.innerHTML = textContents[contentId] || `<center><img src="../images/lock.png" alt="🔒"><center>`;
}