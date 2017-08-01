int redLED1 = 10;
int blueLED1 = 11;
int redLED2 = 4;
int blueLED2 = 3;
int speaker = 8;
int photosensor = A0;

int sensorMin = 1023;  // minimum sensor value
int sensorMax = 0;     // maximum sensor value
int sensorValue = 0;   // the sensor value


void setup() {
  Serial.begin(9600);
  pinMode(redLED1, OUTPUT);
  pinMode(blueLED1, OUTPUT);
  pinMode(redLED2, OUTPUT);
  pinMode(blueLED2, OUTPUT);
  pinMode(speaker, OUTPUT);
  pinMode(photosensor, INPUT);
}

void loop() {
  sensorValue = analogRead(photosensor);
  //sensorValue = map(sensorValue, sensorMin, sensorMax, 0, 255);
  //sensorValue = constrain(sensorValue, 0, 255);
  Serial.println(sensorValue);
  if (sensorValue == 1023)
  {
    noTone(speaker);
    digitalWrite(redLED1, HIGH);
    digitalWrite(redLED2, HIGH);
    digitalWrite(blueLED1, LOW);
    digitalWrite(blueLED2, LOW);
    tone(speaker, 440, 500);
    delay(500);
  
    noTone(speaker);
    
    digitalWrite(redLED1, LOW);
    digitalWrite(redLED2, LOW);
    digitalWrite(blueLED1, HIGH);
    digitalWrite(blueLED2, HIGH);
    tone(speaker, 523, 500);
    delay(500);
  }
}
