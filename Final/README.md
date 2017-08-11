# Final Assignment

My final assignment was a bit challenging for me because I wanted to create a game of bouncing balls which could be controlled from all 4 sides top, bottom, left and right. It turned out that my math was inaccurate and all effort to use collide2d library failed. 

I remembered Scott telling us to concentrate on MVP, minimal viable product. I did exactly that and reinvented my final project. I call it Memories. I started off with the physical aspect of it. Rather than making it too complicated, I have a switch, an LED, and a potentiometer.... When the switch is clicked, it triggers a serial event in P5 and a flash light from the breadboard tell us that it worked. The potentiometer basically controls a range between 1-255 which I use for color and size on p5.

on the p5 side, it waits for the click event to go any further in the draw loop. I found a really nice library that does face detection. I mask everything else in the video and allow for the user to experience their own memories while drawing nice artwork. There's a left over mirage which I found to be cool. The potentiometer changes the size of the art work as illustrated in the videos and images. 

A mouse click ends the experience. I am pretty happy with the result. It requires a strong 