int blueLED1 = 2;
int redLED1 = 3;
int greenLED1 = 4;

int blueLED2 = 13;
int redLED2 = 12;
int greenLED2 = 11;

int speaker = 8;

void setup() {
  Serial.begin(9600);// initialize serial communications
  pinMode(redLED1, OUTPUT);
  pinMode(blueLED1, OUTPUT);
  pinMode(greenLED1, OUTPUT);

  pinMode(redLED2, OUTPUT);
  pinMode(blueLED2, OUTPUT);
  pinMode(greenLED2, OUTPUT);

  pinMode(speaker, OUTPUT);
  
    digitalWrite(greenLED1, HIGH);
    digitalWrite(greenLED2, HIGH);
  }

void loop() {
  
  if (Serial.available() > 0) {//this waits for byte from P5.js
  int input = Serial.read();  // read the input from the buffer
  //Serial.println(input);
  if (input == 1)
  {
    digitalWrite(greenLED1, LOW);
    digitalWrite(greenLED2, LOW);
    noTone(speaker);
    digitalWrite(blueLED1, HIGH);
    digitalWrite(blueLED2, HIGH);
    delay(100);
    digitalWrite(redLED1, LOW);
    digitalWrite(redLED2, LOW);
    tone(speaker, 440, 500);
    delay(500);
    noTone(speaker);
    digitalWrite(blueLED1, LOW);
    digitalWrite(blueLED2, LOW);
    delay(100);
    digitalWrite(redLED1, HIGH);
    digitalWrite(redLED2, HIGH);
    tone(speaker, 523, 500);
    delay(500);
  } else if (input == 0){
    delay(100);
    digitalWrite(greenLED1, HIGH);
    digitalWrite(greenLED2, HIGH);
    digitalWrite(blueLED1, LOW);
    digitalWrite(blueLED2, LOW);
    digitalWrite(redLED1, LOW);
    digitalWrite(redLED2, LOW);
  }
}
}

