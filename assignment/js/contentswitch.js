$(document).ready(function() {
	
	selectPage();
	selectModel();

	function selectPage() {

		$('#home').show();
		$('#about').hide();
		$('#models').hide();
		$('#cameras').hide();
		$('#animation').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#drpepperDescription').hide(); 
		$('#imageGallery').hide();


		$('#navHome').click(function(){
			$('#home').show();
			$('#about').hide();
			$('#models').hide();
			$('#cameras').hide();
			$('#animation').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#drpepperDescription').hide(); 
			$('#imageGallery').hide();	  
		});

		$('#navAbout').click(function(){
			$('#home').hide();
			$('#about').show();
			$('#models').hide();
			$('#cameras').hide();
			$('#animation').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#drpepperDescription').hide(); 	  
			$('#imageGallery').hide();
		});

		$('#navModels').click(function(){
			$('#home').hide();
			$('#about').hide();
			$('#models').show();
			$('#cameras').show();
			$('#animation').show();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide(); 
			$('#drpepperDescription').hide(); 
			$('#imageGallery').show();
		});
	}

	function selectModel() {

		$('#navCoke').click(function(){
			$('#coke').show();
			$('#sprite').hide();
			$('#drpepper').hide();
			$('#cameras').show();
			$('#animation').show();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide(); 
			$('#drpepperDescription').hide(); 
			$('#imageGallery').show();
		});

		$('#navSprite').click(function(){
			$('#coke').hide();
			$('#sprite').show();
			$('#drpepper').hide();
			$('#cameras').show();
			$('#animation').show();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#spriteDescription').show();
			$('#drpepperDescription').hide();  	 
			$('#imageGallery').show(); 	  
		});

		$('#navPepper').click(function(){
			$('#coke').hide();
			$('#sprite').hide();
			$('#drpepper').show();
			$('#cameras').show();
			$('#animation').show();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#drpepperDescription').show(); 	
			$('#imageGallery').show();   
		});
	}

});

var counter = 0;

function changeLook() {
	counter += 1;
	switch (counter) {
        case 1:
            document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
			document.getElementById('headerColor').style.backgroundColor = '#FE001A';
			document.getElementById('footerColor').style.backgroundColor = '#FE001A';
            break;
        case 2:
			document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
			document.getElementById('headerColor').style.backgroundColor = '#008B47';
			document.getElementById('footerColor').style.backgroundColor = '#008B47';
            break;
        case 3:
			document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
			document.getElementById('headerColor').style.backgroundColor = '#D51143';
			document.getElementById('footerColor').style.backgroundColor = '#D51143';
            break;
        case 4:
			document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
			document.getElementById('headerColor').style.backgroundColor = '#F7941E';
			document.getElementById('footerColor').style.backgroundColor = '#F7941E';
            break;
		case 5:
			document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
			document.getElementById('headerColor').style.backgroundColor = '#2D3092';
			document.getElementById('footerColor').style.backgroundColor = '#2D3092';
            break;
		case 6:
            counter = 0;
			document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
			document.getElementById('headerColor').style.backgroundColor = '#8C002A';
			document.getElementById('footerColor').style.backgroundColor = '#8C002A';
            break;
    }
}

function changeBack() {
	document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
	document.getElementById('headerColor').style.backgroundColor = '#000000';
	document.getElementById('footerColor').style.backgroundColor = '#000000';
}