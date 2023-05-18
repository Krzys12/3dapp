//adapted from example code 'benskitchen.com'

var spinning = false;

function spin()
{
	spinning = !spinning;
	document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());

	document.getElementById('model1__RotationTimer').setAttribute('enabled', spinning.toString());

	document.getElementById('model2__RotationTimer').setAttribute('enabled', spinning.toString());
}

function spinY()
{
	spinning = !spinning;
	document.getElementById('model__RotationTimer2').setAttribute('enabled', spinning.toString());

	document.getElementById('model1__RotationTimer2').setAttribute('enabled', spinning.toString());

	document.getElementById('model2__RotationTimer2').setAttribute('enabled', spinning.toString());
}

function Coke()
{
	document.getElementById('model__imageTexture').setAttribute('url', "can_texture");
	document.getElementById('model1__imageTexture').setAttribute('url', "coca_cola_bottle");
	document.getElementById('model1__materialSprite').setAttribute('diffuseColor', "0 0 0");
	document.getElementById('model2__imageTexture').setAttribute('url', "cocacola1");
}

function Sprite()
{
	document.getElementById('model__imageTexture').setAttribute('url', "spritecan");
	document.getElementById('model1__imageTexture').setAttribute('url', "spritebottlelabel");
	document.getElementById('model1__materialSprite').setAttribute('diffuseColor', "0.1 0.4 0.1");
	document.getElementById('model2__imageTexture').setAttribute('url', "spritelabel");
}

function DrPepper()
{
	document.getElementById('model__imageTexture').setAttribute('url', "drpeppercan");
	document.getElementById('model1__imageTexture').setAttribute('url', "dr_pepper_label");
	document.getElementById('model1__materialSprite').setAttribute('diffuseColor', "0 0 0");
	document.getElementById('model2__imageTexture').setAttribute('url', "dr_pepper_label");
}


function spinZ()
{
	spinning = !spinning;
	document.getElementById('model__RotationTimer3').setAttribute('enabled', spinning.toString());

	document.getElementById('model1__RotationTimer3').setAttribute('enabled', spinning.toString());

	document.getElementById('model2__RotationTimer3').setAttribute('enabled', spinning.toString());
}

function special()
{
	spinning = !spinning;
	document.getElementById('model__RotationTimer1').setAttribute('enabled', spinning.toString());

	document.getElementById('model1__RotationTimer1').setAttribute('enabled', spinning.toString());

	document.getElementById('model2__RotationTimer1').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
	document.getElementById('model__RotationTimer1').setAttribute('enabled', spinning.toString());
	document.getElementById('model__RotationTimer2').setAttribute('enabled', spinning.toString());
	document.getElementById('model__RotationTimer3').setAttribute('enabled', spinning.toString());

	document.getElementById('model1__RotationTimer').setAttribute('enabled', spinning.toString());
	document.getElementById('model1__RotationTimer1').setAttribute('enabled', spinning.toString());
	document.getElementById('model1__RotationTimer2').setAttribute('enabled', spinning.toString());
	document.getElementById('model1__RotationTimer3').setAttribute('enabled', spinning.toString());

	document.getElementById('model2__RotationTimer').setAttribute('enabled', spinning.toString());
	document.getElementById('model2__RotationTimer1').setAttribute('enabled', spinning.toString());
	document.getElementById('model2__RotationTimer2').setAttribute('enabled', spinning.toString());
	document.getElementById('model2__RotationTimer3').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if(document.getElementById('model__RotationTimer').getAttribute('enabled')!= 'true')
        document.getElementById('model__RotationTimer').setAttribute('enabled', 'true');
    else
        document.getElementById('model__RotationTimer').setAttribute('enabled', 'false');

	if(document.getElementById('model1__RotationTimer').getAttribute('enabled')!= 'true')
        document.getElementById('model1__RotationTimer').setAttribute('enabled', 'true');
    else
        document.getElementById('model1__RotationTimer').setAttribute('enabled', 'false');

		if(document.getElementById('model2__RotationTimer').getAttribute('enabled')!= 'true')
        document.getElementById('model2__RotationTimer').setAttribute('enabled', 'true');
    else
        document.getElementById('model2__RotationTimer').setAttribute('enabled', 'false');
}

function wireframe()
{
	var e = document.getElementById('model');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);

	var e = document.getElementById('model1');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);

	var e = document.getElementById('model2');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;

function headlight()
{
	lightOn = !lightOn;
	document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());

	document.getElementById('model1__headlight').setAttribute('headlight', lightOn.toString());

	document.getElementById('model2__headlight').setAttribute('headlight', lightOn.toString());
}

function cameraFront()
{
	document.getElementById('model__CA_Camera_Front_').setAttribute('bind', 'true');

	document.getElementById('model1__CA_Camera_Front').setAttribute('bind', 'true');

	document.getElementById('model2__CA_Camera_Front').setAttribute('bind', 'true');
}

function cameraBack()
{
	document.getElementById('model__CA_Camera_Back_').setAttribute('bind', 'true');

	document.getElementById('model1__CA_Camera_Back').setAttribute('bind', 'true');

	document.getElementById('model2__CA_Camera_Back').setAttribute('bind', 'true');
}

function cameraLeft()
{
	document.getElementById('model__CA_Camera_Left').setAttribute('bind', 'true');

	document.getElementById('model1__CA_Camera_Left').setAttribute('bind', 'true');

	document.getElementById('model2__CA_Camera_Left').setAttribute('bind', 'true');
}

function cameraRight()
{
	document.getElementById('model__CA_Camera_Right').setAttribute('bind', 'true');

	document.getElementById('model1__CA_Camera_Right').setAttribute('bind', 'true');

	document.getElementById('model2__CA_Camera_Right').setAttribute('bind', 'true');
}

function cameraTop()
{
	document.getElementById('model__CA_Camera_Up').setAttribute('bind', 'true');

	document.getElementById('model1__CA_Camera_Up').setAttribute('bind', 'true');

	document.getElementById('model2__CA_Camera_Top').setAttribute('bind', 'true');
}

function cameraBottom()
{
	document.getElementById('model__CA_Camera_Down').setAttribute('bind', 'true');

	document.getElementById('model1__CA_Camera_Down').setAttribute('bind', 'true');

	document.getElementById('model2__CA_Camera_Bottom').setAttribute('bind', 'true');
}