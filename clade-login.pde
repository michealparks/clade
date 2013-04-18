// Sound variables
var mySound = soundManager.createSound(
{
	id: 'aSound', 
	url: 'assets/audio/clade_intro1.mp3'
});

var mySound2 = soundManager.createSound(
{
	id: 'aSound1', 
	url: 'assets/audio/clade_intro2.mp3'
});

soundManager.setup(
{
	url: '',
	flashVersion: 9, // optional: shiny features (default = 8)
	preferFlash: false, // optional: ignore Flash where possible, use 100% HTML5 mode
	onready: function() 
	{
		mySound.load();
	}
});

// Counting variables
int count = 0; 
int iterate = 0;
int maxTime = 430;

// Background color variables.
int bg_color1 = 255, bg_color2 = 255, bg_color3 = 255; 
int bg_dec1 = random(100, 155), bg_dec2 = random(100, 155), bg_dec3 = random(100, 155);

// Organism counting variables
int numOrgs = 20; 
float radius = 50.0;
int[] X = new int[numOrgs]; 
int[] Y = new int[numOrgs]; 
int[] nX = new int[numOrgs]; 
int[] nY = new int[numOrgs]; 
int delay = 60; 

// Organism specific variables
int[] orgColor1 = new int[numOrgs]; 
int[] orgColor2 = new int[numOrgs]; 
int[] orgColor3 = new int[numOrgs]; 
int[] pulseRate = new int[numOrgs]; 

// Organism offshoot specific variables
float[] lineX = new float[numOrgs]; 
float[] lineY = new float[numOrgs]; 
float[] newLineX = new float[numOrgs]; 
float[] newLineY = new float[numOrgs]; 
int orgSelected = 0; 

// Setup the Processing Canvas
void setup()
{
	if (jQuery(document).height() > jQuery(window).height())
		setupHeight = jQuery(document).height() - 30;
	else 
		setupHeight = jQuery(window).height() - 30; 

	jQuery('canvas').width(jQuery(window).width()); 
	jQuery('canvas').height(setupHeight); 

	size( jQuery(window).width(), setupHeight );	
	strokeWeight( 2 ); 
	frameRate( 90 ); 

	for (int i = 0; i < numOrgs; i++)
	{
		X[i] = width / 2;
		Y[i] = height / 2;
		nX[i] = X[i];
		nY[i] = Y[i];  

		orgColor1[i] = random(100, 155);	// We want colorful circles.
		orgColor2[i] = random(100, 155);
		orgColor3[i] = random(100, 155);

		pulseRate = 4;

		lineX[i] = X[i];
		lineY[i] = Y[i];
		newLineX[i] = X[i];
		newLineY[i] = Y[i];
	}
}

// Main draw loop.
void draw()
{
	
	for (int i = 0; i < numOrgs; i++) 
	{
		// Track circles to new destination.
		X[i]+=(nX[i]-X[i])/delay;
		Y[i]+=(nY[i]-Y[i])/delay;

		// Track line to new destination.
		lineX[i]+=(newLineX[i]-lineX[i])/delay;
		lineY[i]+=(newLineY[i]-lineY[i])/delay;
	}	

	newLineX[i] = (X[i] + radius * cos(random(0, PI * 2))) * 2;
	newLineY[i] = (Y[i] + radius * sin(random(0, PI * 2))) * 2; 

	// Bring the canvas color back to default.
	if (bg_color1 > bg_dec1)
		bg_color1--;
	if (bg_color2 > bg_dec2)
		bg_color2--;
	if (bg_color3 > bg_dec3)
		bg_color3--;

	background( bg_color1, bg_color2 , bg_color3 );

	// Draw circles.
	for (int i = 0; i < numOrgs; i++) 
	{
		if (count % 10 == 0)
			radius = radius + (sin( frameCount / 2 )/2);

		fill( orgColor1[i], orgColor2[i], orgColor3[i] );

		stroke ( 255 );
		line( X[i], Y[i], lineX[i], lineY[i] );

		//noStroke();
		ellipse( X[i], Y[i], radius, radius );
	} 
	if (count == 0)
	{

		// Reset background color values.
		bg_dec1 = random(100, 155);
		bg_dec2 = random(100, 155);
		bg_dec3 = random(100, 155);

		// Start background "explosion".
		bg_color1 = 255;
		bg_color2 = 255;
		bg_color3 = 255;

		mySound.play();
		count++;
	}
	if (count == 1) 
	{
		mySound2.play();
		for (int i = 0; i < numOrgs; i++) 
		{
			nX[i] = random(width);
			nY[i] = random(height); 

			orgColor1[i] = random(255);
			orgColor2[i] = random(255);
			orgColor3[i] = random(255);

			// div size: 288 by 160
			if ((width/2 - 144) < nX[i] && nX[i] < (width/2))
				nX[i] -= 160;
			else if ((width/2) < nX[i] && nX[i] < (width/2 + 144))
				nX[i] += 160;

			if ((height/2 - 144) < nY[i] && nY[i] < (height/2))
				nY[i] -= 100;
			else if((height/2) < nY[i] && nY[i] < (height/2 + 144)) 
				nX[i] += 100;
		} 
	}	
	if (count == maxTime - 55)
	{
		delay = 10;
		for (int i = 0; i < numOrgs; i++)
		{
			nX[i] = width / 2;
			nY[i] = height / 2;
		}
	}
	if (count == (maxTime - 10)) 
	{
		delay = 60;
	}	
	if (count == maxTime)
	{
		count = 0;
		iterate++;
	}

	if (count > 0)
		count++;                 
}


// Set circle's next destination
void mouseClicked()
{

}