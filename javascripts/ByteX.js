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
  '0x03': `<div class="container"></div>`,
  '0x04': `<div class="container"></div>`,
  '0x05': `<div class="container"></div>`,
  '0x06': `<div class="container"></div>`,
  '0x07': `<div class="container"></div>`,
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