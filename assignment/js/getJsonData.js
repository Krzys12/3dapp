$(document).ready(function(){

    //AJAX service request to get the main text data from the json data store
    $.getJSON('./model/data.json', function(jsonObj) {
       console.log(jsonObj);
       //Text for first carousel image 
       $('#carousel1_title').html('<h2><strong>' + jsonObj.pageTextData[0].title + '</strong><h2>');
       $('#carousel1_text').html('<h6 style="font-color:black"><strong>' + jsonObj.pageTextData[0].description + '</strong></h6>');
       //Text for second carousel image
       $('#carousel2_title').html('<h2><strong>' + jsonObj.pageTextData[1].title + '</strong><h2>');
       $('#carousel2_text').html('<h6 style="font-color:black"><strong>' + jsonObj.pageTextData[1].description + '</strong></h6>');
       //Text for third carousel image
       $('#carousel3_title').html('<h2><strong>' + jsonObj.pageTextData[2].title + '</strong><h2>');
       $('#carousel3_text').html('<h6 style="font-color:black"><strong>' + jsonObj.pageTextData[2].description + '</strong></h6>');
       //Coca Cola Column for home page
       $('#title_coke').html('<h2>' + jsonObj.pageTextData[3].title + '<h2>');
       $('#subTitle_coke').html('<h3>' + jsonObj.pageTextData[3].subTitle + '</h3>');
       $('#description_coke').html('<p>' + jsonObj.pageTextData[3].description + '</p>');	
       //Sprite Column for home page
       $('#title_sprite').html('<h2>' + jsonObj.pageTextData[4].title + '<h2>');
       $('#subTitle_sprite').html('<h3>' + jsonObj.pageTextData[4].subTitle + '</h3>');
       $('#description_sprite').html('<p>' + jsonObj.pageTextData[4].description + '</p>');	
       //Dr Pepper Cola Column for home page
       $('#title_drpepper').html('<h2>' + jsonObj.pageTextData[5].title + '<h2>');
       $('#subTitle_drpepper').html('<h3>' + jsonObj.pageTextData[5].subTitle + '</h3>');
       $('#description_drpepper').html('<p>' + jsonObj.pageTextData[5].description + '</p>');	
       //Video description text
       $('#title_video').html('<h4>' + jsonObj.pageTextData[6].title + '<h4>');
       //Description of the Coca Cola Can X3D model
       $('#x3d_coke').html('<h2>' + jsonObj.pageTextData[7].x3dModelTitle + '<h2>');
       $('#x3d_cokemethod').html('<p>' + jsonObj.pageTextData[7].x3dCreationMethod + '<p>');
       $('#x3d_coketitle').html('<h2>' + jsonObj.pageTextData[7].title + '<h2>');
       $('#x3d_cokesubtitle').html('<h4>' + jsonObj.pageTextData[7].subTitle + '<h4>');
       $('#x3d_cokedescription').html('<p>' + jsonObj.pageTextData[7].description + '<p>');
       //Description of the Sprite Bottle X3D model
       $('#x3d_sprite').html('<h2>' + jsonObj.pageTextData[8].x3dModelTitle + '<h2>');
       $('#x3d_spritemethod').html('<p>' + jsonObj.pageTextData[8].x3dCreationMethod + '<p>');
       $('#x3d_spritetitle').html('<h2>' + jsonObj.pageTextData[8].title + '<h2>');
       $('#x3d_spritesubtitle').html('<h4>' + jsonObj.pageTextData[8].subTitle + '<h4>');
       $('#x3d_spritedescription').html('<p>' + jsonObj.pageTextData[8].description + '<p>');
       //Description of the Dr Pepper Cup X3D model
       $('#x3d_drpepper').html('<h2>' + jsonObj.pageTextData[9].x3dModelTitle + '<h2>');
       $('#x3d_drpeppermethod').html('<p>' + jsonObj.pageTextData[9].x3dCreationMethod + '<p>');
       $('#x3d_drpeppertitle').html('<h2>' + jsonObj.pageTextData[9].title + '<h2>');
       $('#x3d_drpeppersubtitle').html('<h4>' + jsonObj.pageTextData[9].subTitle + '<h4>');
       $('#x3d_drpepperdescription').html('<p>' + jsonObj.pageTextData[9].description + '<p>');
       //Text for gallery
       $('#gallery_title').html('<h2>' + jsonObj.pageTextData[10].galleryTitle + '<h2>');
       $('#gallery_description').html('<p>' + jsonObj.pageTextData[10].galleryDescription + '<p>');
       //Text for model interactions
       $('#cameraTitle').html('<h3>' + jsonObj.pageTextData[11].cameraTitle + '<h3>');
       $('#cameraText').html('<p>' + jsonObj.pageTextData[11].cameraText + '<p>');
       $('#animationTitle').html('<h3>' + jsonObj.pageTextData[11].animationTitle + '<h3>');
       $('#animationText').html('<p>' + jsonObj.pageTextData[11].animationText + '<p>');
       $('#interactionTitle').html('<h3>' + jsonObj.pageTextData[11].interactionTitle + '<h3>');
       $('#interactionText').html('<p>' + jsonObj.pageTextData[11].interactionText + '<p>');
        //Images for the website
        $('#cokeImage').html('<img class="card-img-top img-fluid img-thumbnail" src="' + jsonObj.pageTextData[12].cokeImage + '" alt="Coca Cola">');
        $('#spriteImage').html('<img class="card-img-top img-fluid img-thumbnail" src="' + jsonObj.pageTextData[12].spriteImage + '" alt="Sprite">');
        $('#drpepperImage').html('<img class="card-img-top img-fluid img-thumbnail" src="' + jsonObj.pageTextData[12].drPepperImage + '" alt="Dr Pepper">');
        $('#carouselImage1').html('<img class="d-block w-100" src="' + jsonObj.pageTextData[12].carousel1Image + '" alt="First slide">');
        $('#carouselImage2').html('<img class="d-block w-100" src="' + jsonObj.pageTextData[12].carousel2Image + '" alt="First slide">');
        $('#carouselImage3').html('<img class="d-block w-100" src="' + jsonObj.pageTextData[12].carousel3Image + '" alt="First slide">');
        //Contents for the Contact modal
        $('#modalTitle').html('<h4>' + jsonObj.pageTextData[13].modalTitle + '<h4>');
        $('#modalContent').html('<p>' + jsonObj.pageTextData[13].modalContent + '<p>');
        //Content for the about page
        $('#about_CocaCola').html('<h2>' + jsonObj.pageTextData[14].aboutCocaCola + '<h2>');
        $('#about_Sprite').html('<h2>' + jsonObj.pageTextData[14].aboutSprite + '<h2>');
        $('#about_DrPepper').html('<h2>' + jsonObj.pageTextData[14].aboutDrPepper + '<h2>');
        //References on the about page
        $('#references_title').html('<h2>' + jsonObj.pageTextData[15].references + '<h2>');
        $('#reference1').html('<p>' + jsonObj.pageTextData[15].reference1 + '<p>');
        $('#reference2').html('<p>' + jsonObj.pageTextData[15].reference2 + '<p>');
        $('#reference3').html('<p>' + jsonObj.pageTextData[15].reference3 + '<p>');
        $('#reference4').html('<p>' + jsonObj.pageTextData[15].reference4 + '<p>');
        $('#reference5').html('<p>' + jsonObj.pageTextData[15].reference5 + '<p>');
        $('#reference6').html('<p>' + jsonObj.pageTextData[15].reference6 + '<p>');
        $('#reference7').html('<p>' + jsonObj.pageTextData[15].reference7 + '<p>');
        $('#reference8').html('<p>' + jsonObj.pageTextData[15].reference8 + '<p>');
        //Content for the about page
        $('#coke_Description').html('<p>' + jsonObj.pageTextData[16].cocacolaDescription + '<p>');
        $('#sprite_Description').html('<p>' + jsonObj.pageTextData[16].spriteDescription + '<p>');
        $('#drpepper_Description').html('<p>' + jsonObj.pageTextData[16].drePepperDescription + '<p>');  
    });
});
    