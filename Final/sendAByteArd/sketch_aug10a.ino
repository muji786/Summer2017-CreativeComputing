int switch1 = 2;
int led = 12;
int switchstate = 0;
int knob = A0;

void setup() {
  pinMode(switch1, OUTPUT);
  pinMode(led, OUTPUT);
  Serial.begin(9600);// initialize serial communications
  while (Serial.available() <= 0)
  {
    Serial.print("hello");
    delay(500);
  }
}

void loop() {
  if (Serial.available() > 0) {
  int inbyte = Serial.read();
  int knobval = analogRead(knob);
  int mappedknob = map(knobval, 0, 1023, 0, 255);
  switchstate = digitalRead(switch1);
  if (switchstate == HIGH)
  {
    digitalWrite(led, HIGH);
    delay(10);
    digitalWrite(led, LOW);
  }

  Serial.print(mappedknob);
  Serial.print(",");
  Serial.println(switchstate);
  delay(500);
  }
}
