var l,m;
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(success,error);
}
else{
  alert('Geolocation is not supported');
}

function error()
{
  alert("That's weird! We couldn't find you!");
}

function success(position) 
{
      l = position.coords.latitude;
      m = position.coords.longitude;
  
      var key = '7a591f22a5503a0b60dbb185e699ac13';
  	  var url = 'https://api.darksky.net/forecast/';
      var Weather = url + key + "/" + l + "," + m;

      $.ajax({
          url : Weather,
          dataType : "jsonp",
         
          success : function(parsed_json)
          {
              // get all the information
             
              var location = parsed_json['timezone'];
              var temp     = parsed_json['currently']['temperature'];
              var img      = parsed_json['currently']['icon'];
              var desc     = parsed_json['currently']['summary'];
              var wind     = parsed_json['currently']['windSpeed'];
             
            //setting the spans to the correct parameters
            
               $('#location').html(location);
                 if (document.getElementById('f').checked)
                {
                   $('#temp').html(temp);
                   $('#corf').html('°F');
                }
               else if (document.getElementById('c').checked)
                {
                   $('#temp').html(Math.round((temp -32)*5/9));
                   $('#corf').html('°C');
                }
               
               $('#desc').html(desc);
               $('#wind').html(wind);
            
             //filling the image src attribute with the image url
               
                 desc = desc.toLowerCase();
   
                 switch (desc)
                 {
                   case 'drizzle':
                   $('#imgdiv').css("background-image", "url(http://cloud-maven.com/wp-content/uploads/2014/11/DSC_0061.jpg)");
                   break;
                   case 'partly cloudy':
                   $('#imgdiv').css("background-image", "url(http://www.pd4pic.com/images/sky-blue-cloud-cloudy-background-weather-sunny.jpg)");    
                   break;
                   case 'rain':
                   $('#imgdiv').css("background-image", "url(https://wallpaperscraft.com/image/rain_drops_splashes_heavy_rain_dullness_bad_weather_60638_3840x2400.jpg)");
                   break;
                   case 'snow':
                   $('#imgdiv').css("background-image", "url(https://www.walldevil.com/wallpapers/a52/snow-wallpaper-scene-nature-weather-scenery-albums.jpg)");
                   break;
                   case 'clear':
                   $('#imgdiv').css("background-image", "url(http://cache3.asset-cache.net/xd/479233488.jpg?v=1&c=IWSAsset&k=2&d=62CA815BFB1CE480904DC2BDF8D84279DD9BE2D9A1DB104C6FCD593B398CCC9B4C7E1CCD6B915F7E)");
                   break;
                   case 'thunderstom':
                   $('#imgdiv').css("background-image", "url(https://s-media-cache-ak0.pinimg.com/564x/7e/fb/1e/7efb1e6d25184aac0998fb966732325d.jpg)");
                   break;
                   default:
                   $('#imgdiv').css("background-image", "url(http://exchangedownloads.smarttech.com/public/content/c7/c7b7d2f6-0e68-41bc-b320-063ae2783f69/previews/medium/0001.png)");
                   break;
                 
              }
            }
            


        
              });
         
  
}

$(document).ready(function() {
   
   $(".HEAD").addClass("animated slideInLeft");
    $("#forecast").addClass("animated rotateInDownLeft"); 
  $("#well2").addClass("animated slideInLeft");  
  $("#well3").addClass("animated rotateInUpRight");
   
});

   
 
