
int redLED = 9;
int yellowLED = 8;
int greenLED = 7;
int whiteLED = 2;
int buttonPIN = 6;
int buttonPressed = LOW;

void setup() {
  pinMode(redLED,OUTPUT);
  pinMode(yellowLED,OUTPUT);
  pinMode(greenLED,OUTPUT);
  pinMode(buttonPIN,INPUT);
  pinMode(whiteLED,OUTPUT);
}

void loop() {
  buttonPressed = digitalRead(buttonPIN);
  if (buttonPressed == LOW)
  {
    greenLight();
    yellowLight();
    redLight();  
  } 
   else if (buttonPressed == HIGH)
  {
    redLight();
  }
}

void redLight()
{
  digitalWrite(redLED, HIGH);   // turn the LED on (HIGH is the voltage level)
  digitalWrite(whiteLED, HIGH);
  delay(5000);               // wait for a second
  digitalWrite(redLED, LOW);    // turn the LED off by making the voltage LOW
  digitalWrite(whiteLED, LOW);
}

void yellowLight()
{
  buttonPressed = digitalRead(buttonPIN);
  if (buttonPressed == HIGH) return;

  digitalWrite(yellowLED, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);               // wait for a second
  digitalWrite(yellowLED, LOW);    // turn the LED off by making the voltage LOW
}

void greenLight()
{
  buttonPressed = digitalRead(buttonPIN);
  if (buttonPressed == HIGH) return;
  digitalWrite(greenLED, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(5000);
  digitalWrite(greenLED, LOW);   // turn the LED on (HIGH is the voltage level)
}
