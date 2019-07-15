var doctor1;
var doctor2;
var doctor3;
var doctor4;
var doctor5;
var doctor6;
var doctor7;
var doctor8;
var doctor9;
var doctor10;
var doctor11;
var doctor12;
var doctor13;
var doctor14;
var doctor15;
var doctor16;
var doctor17;
var doctor18;
var doctor19;
var doctor20;
var doctor21;
var doctor22;
var doctor23;
var doctor24;
var doctor25;
var doctor26;
var doctor27;
var doctor28;
var doctor29;
var doctor30;
        

        var doctor1c = null;
        var doctor2c;
        var doctor3c;
        var doctor4c;
        var doctor5c;
        var doctor6c;
        var doctor7c;
        var doctor8c;
        var doctor9c;
        var doctor10c;
        var doctor11c;
        var doctor12c;
        var doctor14c;
        var doctor15c;
        var doctor16c;
        var doctor17c;
        var doctor18c;
        var doctor19c;
        var doctor20c;
        var doctor21c;
        var doctor22c;
        var doctor23c;
        var doctor24c;
        var doctor25c;
        var doctor26c;
        var doctor27c;
        var doctor28c;
        var doctor29c;
        var doctor30c;
        

        var count = 0;




        function MyFunction(estado){
            alert(estado);
            var mapSection = document.getElementById("paginationSection");
            mapSection.scrollIntoView();
            // alert(estado);
            if(estado === 1){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=clinica%20merida&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
            }
            else if(estado === 2){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=abc%20observatorio%20hospital&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
                }
            else if(estado === 3){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20espa%C3%B1ol&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
            }
            else if(estado === 4){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=torre%20medica%20dalinde&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
                }
            else if(estado === 5){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=imss%20la%20raza&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
            }
            else if(estado === 6){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '';
            }
            else if(estado === 7){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=san%20angel%20inn%20universidad&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
                }
            else if(estado === 8){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20bernadette&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
            }
            else if(estado === 9){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=medica%20san%20luis&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
                }
            else if(estado === 10){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=angeles%20chihuahua&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
            }
            else if(estado === 11){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=angeles%20acoxpa&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
            }
            else if(estado === 12){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '';
                }
            else if(estado === 13){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=inmegen&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
            }
            else if(estado === 14){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=medica%20sur%20tlalpan&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
                }
            else if(estado === 15){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20espa%C3%B1ol&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
            }
            else if(estado === 16){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=angeles%20puebla&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
            }
            else if(estado === 17){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=abc%20observatorio%20hospital&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>'
                }
            else if(estado === 18){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=nucleo%20especialidades%20oncologicas&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
            }
            else if(estado === 19){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=agua%20caliente%20tijuana1844&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
                }
            else if(estado === 20){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=angeles%20interlomas&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>      </div>        ';
            }
            else if(estado === 21){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=cinvestav%203c&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
            }
            else if(estado === 22){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=virrey%20de%20mendoza%201998&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
                }
            else if(estado === 23){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="974" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20espa%C3%B1ol&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://ultimatewp.net">ultimate wp</a></div><style>.mapouter{position:relative;text-align:right;height:400px;width:974px;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:974px;}</style></div>'
            }
            else if(estado === 24){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=duque%20de%20rivas%20179&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
                }
            else if(estado === 25){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20angeles%20culiacan&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
            }
            else if(estado === 26){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=anaya%201905%20culiacan&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
            }
            else if(estado === 27){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=isste%20zona%20norte&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
                }
            else if(estado === 28){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=clinica%20del%20centro%20chihuahua&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>'
            }
            else if(estado === 29){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=imss%20la%20raza&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
                }
            else if(estado === 30){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=mariano%20escobedo%20339%20culiacan&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>';
            }
            else if(estado === 31){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20san%20jose%20el%20jacal&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
            }
            else if(estado === 32){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20angeles%20brocratas&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
                }
            else if(estado === 33){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20star%20medica%20chihuaha&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
            }
            else if(estado === 34){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=abc%20observatorio%20hospital&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>'
                }
            else if(estado === 35){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20angeles%20queretaro&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
            }
            else if(estado === 36){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=abc%20observatorio%20hospital&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
            }
            else if(estado === 37){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=angeles%20interlomas&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>      </div>'
                }
            else if(estado === 38){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=lopez%20mateos%201401%20guadalajara&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>'
            }
            else if(estado === 39){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=san%20angel%20inn%20universidad&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
                }
            else if(estado === 40){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=clinica%20merida&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/">embedgooglemap.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
            }
            else if(estado === 41){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20lomas%20san%20luis&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/">embedgooglemap.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
            }
            else if(estado === 42){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=medica%20sur%20tlalpan&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
                }
            else if(estado === 43){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=venustiano%20carranza%201138%20san%20luis&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/">embedgooglemap.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
            }
            else if(estado === 44){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=angeles%20interlomas&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div></div> ';
                }
            else if(estado === 45){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20angeles%20pedregal&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/">embedgooglemap.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
            }
            else if(estado === 46){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=instituto%20nacional%20de%20cancerologia&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/">embedgooglemap.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
            }
            else if(estado === 47){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20star%20medica%20ciudad%20juarez&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/">embedgooglemap.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
                }
            else if(estado === 48){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=angeles%20interlomas&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div></div>';
            }
            else if(estado === 49){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=angeles%20interlomas&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div></div>';
                }
            else if(estado === 50){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%20hospital%20san%20jose%20hermosillo&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/">embedgooglemap.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
            }
            else if(estado === 51){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20puebla%20ramblas&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/">embedgooglemap.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
            }
            else if(estado === 52){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20espa%C3%B1ol&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div>';
                }
            else if(estado === 53){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1022" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=angeles%20interlomas&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1022px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1022px;}</style></div></div>';
            }
            else if(estado === 54){
                celarDivMap();
                var newMapDiv = document.getElementById("newMapDiv");
                newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="1020" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=abc%20observatorio%20hospital&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.bitgeeks.net/embed-google-map/">how to embed location on google map</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1020px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1020px;}</style></div>';
            }
            else{
                alert('Fuera de rango')
            }
        }

function celarDivMap(){
    var divHomeMap = document.getElementById("newMapDiv");
    divHomeMap.innerHTML = "";
}

function findDoctor(city){



         doctor1 = document.getElementById("item2");
         doctor2 = document.getElementById("item3");
         doctor3 = document.getElementById("item4");
         doctor4 = document.getElementById("item5");
         doctor5 = document.getElementById("item6");
         doctor6 = document.getElementById("item7");
         doctor7 = document.getElementById("item9");
         doctor8 = document.getElementById("item11");
         doctor9 = document.getElementById("item13");
         doctor10 = document.getElementById("item14");
         doctor11 = document.getElementById("item16");
         doctor12 = document.getElementById("item19");
         doctor13 = document.getElementById("item20");
         doctor14 = document.getElementById("item22");
         doctor15 = document.getElementById("item26");
         doctor16 = document.getElementById("item28");
         doctor17 = document.getElementById("item33");
         doctor18 = document.getElementById("item35");
         doctor19 = document.getElementById("item36");
         doctor20 = document.getElementById("item38");
         doctor21 = document.getElementById("item41");
         doctor22 = document.getElementById("item43");
         doctor23 = document.getElementById("item44");
         doctor24 = document.getElementById("item45");
         doctor25 = document.getElementById("item47");
         doctor26 = document.getElementById("item48");
         doctor27 = document.getElementById("item51");
         doctor28 = document.getElementById("item52");
         doctor29 = document.getElementById("item53");
         doctor30 = document.getElementById("item54");

         doctor1c = doctor1.cloneNode(true);
         doctor2c = doctor2.cloneNode(true);
         doctor3c = doctor3.cloneNode(true);
         doctor4c = doctor4.cloneNode(true);
         doctor5c = doctor5.cloneNode(true);
         doctor6c = doctor6.cloneNode(true);
         doctor7c = doctor7.cloneNode(true);
         doctor8c = doctor8.cloneNode(true);
         doctor9c = doctor9.cloneNode(true);
         doctor10c = doctor10.cloneNode(true);
         doctor11c = doctor11.cloneNode(true);
         doctor12c = doctor12.cloneNode(true);
         doctor13c = doctor13.cloneNode(true);
         doctor14c = doctor14.cloneNode(true);
         doctor15c = doctor15.cloneNode(true);
         doctor16c = doctor16.cloneNode(true);
         doctor17c = doctor17.cloneNode(true);
         doctor18c = doctor18.cloneNode(true);
         doctor19c = doctor19.cloneNode(true);
         doctor20c = doctor20.cloneNode(true);
         doctor21c = doctor21.cloneNode(true);
         doctor22c = doctor22.cloneNode(true);
         doctor23c = doctor23.cloneNode(true);
         doctor24c = doctor24.cloneNode(true);
         doctor25c = doctor25.cloneNode(true);
         doctor26c = doctor26.cloneNode(true);
         doctor27c = doctor27.cloneNode(true);
         doctor28c = doctor28.cloneNode(true);
         doctor29c = doctor29.cloneNode(true);
         doctor30c = doctor30.cloneNode(true);

         doctor1c.id = "1";
         doctor2c.id = "2";
         doctor3c.id = "3";
         doctor4c.id = "4";
         doctor5c.id = "5";
         doctor6c.id = "6";
         doctor7c.id = "7";
         doctor8c.id = "8";
         doctor9c.id = "9";
         doctor10c.id = "10";
         doctor11c.id = "11";
         doctor12c.id = "12";
         doctor13c.id = "13";
         doctor14c.id = "14";
         doctor15c.id = "15";
         doctor16c.id = "16";
         doctor17c.id = "17";
         doctor18c.id = "18";
         doctor19c.id = "19";
         doctor20c.id = "20";
         doctor21c.id = "21";
         doctor22c.id = "22";
         doctor23c.id = "23";
         doctor24c.id = "24";
         doctor25c.id = "25";
         doctor26c.id = "26";
         doctor27c.id = "27";
         doctor28c.id = "28";
         doctor29c.id = "29";
         doctor30c.id = "30";


    // alert(city)
    paginationMove(1);
    if(city === 'cdmx'){
        document.getElementById("btn2").style.display = "block";
        document.getElementById("btn3").style.display = "block";
        document.getElementById("btn4").style.display = "block";
        document.getElementById("btn5").style.display = "block";
        document.getElementById("btn6").style.display = "none";
        document.getElementById("btn7").style.display = "none";
        document.getElementById("btn8").style.display = "none";
        document.getElementById("btn9").style.display = "none";

        hideAllDoctors();

        

        
        doctor1c.style.display = "block";
        doctor2c.style.display = "block";
        doctor3c.style.display = "block";
        doctor4c.style.display = "block";
        doctor5c.style.display = "block";
        doctor6c.style.display = "block";
        doctor7c.style.display = "block";
        doctor8c.style.display = "block";
        doctor9c.style.display = "block";
        doctor10c.style.display = "block";
        doctor11c.style.display = "block";
        doctor12c.style.display = "block";
        doctor13c.style.display = "block";
        doctor14c.style.display = "block";
        doctor15c.style.display = "block";
        doctor16c.style.display = "block";
        doctor17c.style.display = "block";
        doctor18c.style.display = "block";
        doctor19c.style.display = "block";
        doctor20c.style.display = "block";
        doctor21c.style.display = "block";
        doctor22c.style.display = "block";
        doctor23c.style.display = "block";
        doctor24c.style.display = "block";
        doctor25c.style.display = "block";
        doctor26c.style.display = "block";
        doctor27c.style.display = "block";
        doctor28c.style.display = "block";
        doctor29c.style.display = "block";
        doctor30c.style.display = "block";

        if(count === 0){
            document.getElementById("row1").append(doctor1c);
            document.getElementById("row1").append(doctor2c);
            document.getElementById("row1").append(doctor3c);
            document.getElementById("row2").append(doctor4c);
            document.getElementById("row2").append(doctor5c);
            document.getElementById("row2").append(doctor6c);
            document.getElementById("row3").append(doctor7c);
            document.getElementById("row3").append(doctor8c);
            document.getElementById("row3").append(doctor9c);
            document.getElementById("row4").append(doctor10c);
            document.getElementById("row4").append(doctor11c);
            document.getElementById("row4").append(doctor12c);
            document.getElementById("row5").append(doctor13c);
            document.getElementById("row5").append(doctor14c);
            document.getElementById("row5").append(doctor15c);
            document.getElementById("row6").append(doctor16c);
            document.getElementById("row6").append(doctor17c);
            document.getElementById("row6").append(doctor18c);
            document.getElementById("row7").append(doctor19c);
            document.getElementById("row7").append(doctor20c);
            document.getElementById("row7").append(doctor21c);
            document.getElementById("row8").append(doctor22c);
            document.getElementById("row8").append(doctor23c);
            document.getElementById("row8").append(doctor24c);
            document.getElementById("row9").append(doctor25c);
            document.getElementById("row9").append(doctor26c);
            document.getElementById("row9").append(doctor27c);
            document.getElementById("row10").append(doctor28c);
            document.getElementById("row10").append(doctor29c);
            document.getElementById("row10").append(doctor30c);
            count++;
        }
        else{
            document.getElementById("1").style.display = "block";
            document.getElementById("2").style.display = "block";
            document.getElementById("3").style.display = "block";
            document.getElementById("4").style.display = "block";
            document.getElementById("5").style.display = "block";
            document.getElementById("6").style.display = "block";
            document.getElementById("7").style.display = "block";
            document.getElementById("8").style.display = "block";
            document.getElementById("9").style.display = "block";
            document.getElementById("10").style.display = "block";
            document.getElementById("11").style.display = "block";
            document.getElementById("12").style.display = "block";
            document.getElementById("13").style.display = "block";
            document.getElementById("14").style.display = "block";
            document.getElementById("15").style.display = "block";
            document.getElementById("16").style.display = "block";
            document.getElementById("17").style.display = "block";
            document.getElementById("18").style.display = "block";
            document.getElementById("19").style.display = "block";
            document.getElementById("20").style.display = "block";
            document.getElementById("21").style.display = "block";
            document.getElementById("22").style.display = "block";
            document.getElementById("23").style.display = "block";
            document.getElementById("24").style.display = "block";
            document.getElementById("25").style.display = "block";
            document.getElementById("26").style.display = "block";
            document.getElementById("27").style.display = "block";
            document.getElementById("28").style.display = "block";
            document.getElementById("29").style.display = "block";
            document.getElementById("30").style.display = "block";
        }
        

    }
    else if(city === 'chihuahua'){
        clearFrames();
        ocultarUltimosBotonesDesplazamiento();
        document.getElementById("frameA").style.display = "block";
    }
    else if(city === 'bajacalifornia'){
        clearFrames();
        ocultarUltimosBotonesDesplazamiento();
        document.getElementById("frameB").style.display = "block";
    }
    else if(city === 'jalisco'){
        clearFrames();
        ocultarUltimosBotonesDesplazamiento();
        document.getElementById("frameC").style.display = "block";
    }
    else if(city === 'michoacan'){
        clearFrames();
        ocultarUltimosBotonesDesplazamiento();
        document.getElementById("frameD").style.display = "block";
    }
    else if(city === 'nuevoleon'){
        clearFrames();
        ocultarUltimosBotonesDesplazamiento();
        document.getElementById("frameE").style.display = "block";
    }
    else if(city === 'puebla'){
        clearFrames();
        ocultarUltimosBotonesDesplazamiento();
        document.getElementById("frameF").style.display = "block";
    }
    else if(city === 'queretaro'){
        clearFrames();
        ocultarUltimosBotonesDesplazamiento();
        document.getElementById("frameH").style.display = "block";
    }
    else if(city === 'sanluis'){
        clearFrames();
        ocultarUltimosBotonesDesplazamiento();
        document.getElementById("frameI").style.display = "block";
    }
    else if(city  === 'sinaloa'){
        clearFrames();
        ocultarUltimosBotonesDesplazamiento();
        document.getElementById("frameJ").style.display = "block";
    }
    else if(city === 'sonora'){
        clearFrames();
        ocultarUltimosBotonesDesplazamiento();
        document.getElementById("frameK").style.display = "block";
    }
    else if(city === 'yucatan'){
        clearFrames();
        ocultarUltimosBotonesDesplazamiento();
        document.getElementById("frameL").style.display = "block";
    }
    else if(city === 'all'){
        findDoctor('cdmx');
        clearFrames();
        ocultarResultados();
        showAllDoctors();
        document.getElementById("btn1").style.display = "block";
        document.getElementById("btn2").style.display = "block";
        document.getElementById("btn3").style.display = "block";
        document.getElementById("btn4").style.display = "block";
        document.getElementById("btn5").style.display = "block";
        document.getElementById("btn6").style.display = "block";
        document.getElementById("btn7").style.display = "block";
        document.getElementById("btn8").style.display = "block";
        document.getElementById("btn9").style.display = "block";

        document.getElementById("frame1").style.display = "block";

    }
}

    function getAllFrames(){
    document.getElementById("frame1").style.display = "block";
    document.getElementById("frame2").style.display = "block";
    document.getElementById("frame3").style.display = "block";
    document.getElementById("frame4").style.display = "block";
    document.getElementById("frame5").style.display = "block";
    document.getElementById("frame6").style.display = "block";
    document.getElementById("frame7").style.display = "block";
    document.getElementById("frame8").style.display = "block";
    document.getElementById("frame9").style.display = "block";
    }

// function clearDoctorsList(){
//     var docotrsList = document.getElementById("idContainer")
//     docotrsList.innerHTML = "";
// }



// function listenersPagination(){
//     document.getElementById("page1").addEventListener("click", function(){paginationMove(1);})
//     document.getElementById("page2").addEventListener("click", function(){paginationMove(2);})
// }

$(document).ready(function() {
    $("#home-slider").owlCarousel({
        autoPlay: 2500,
        //autoPlay: true, <-- if you want to set default slide time (5000)
    
        slideSpeed: 300,
        paginationSpeed: 500,
        singleItem: true,
        navigation: true,
        scrollPerPage: true
    });

    // function changeColor(){
    //     document.getElementById("slideText1").style.borderBottom = b3ff00;
    //     document.getElementById("slideText1").style.borderBottomStyle = dotted;
    //     document.getElementById("slideText1").style.borderBottomWidth = 1px;

    // }
});

//Controla el movimiento entre las pestañas de los doctores
function paginationMove(pagina){
    noFill();
    //Verificamos la pagina a la que queremos ir
    if(pagina === 2){
        clearFrames();        
        document.getElementById("frame2").style.display = "block" 
        document.getElementById("btn2").classList.add("active");
    }
    else if(pagina === 1){
        clearFrames();        
        document.getElementById("frame1").style.display = "block" 
        document.getElementById("btn1").classList.add("active");
    }
    else if(pagina === 3){
        clearFrames();        
        document.getElementById("frame3").style.display = "block" 
        document.getElementById("btn3").classList.add("active");
    }
    else if(pagina === 4){
        clearFrames();        
        document.getElementById("frame4").style.display = "block" 
        document.getElementById("btn4").classList.add("active");
    }
    else if(pagina === 5){
        clearFrames();        
        document.getElementById("frame5").style.display = "block" 
        document.getElementById("btn5").classList.add("active");
    }
    else if(pagina === 6){
        clearFrames();        
        document.getElementById("frame6").style.display = "block" 
        document.getElementById("btn6").classList.add("active");
    }
    else if(pagina === 7){
        clearFrames();        
        document.getElementById("frame7").style.display = "block" 
        document.getElementById("btn7").classList.add("active");
    }
    else if(pagina === 8){
        clearFrames();        
        document.getElementById("frame8").style.display = "block" 
        document.getElementById("btn8").classList.add("active");
    }
    else if(pagina === 9){
        clearFrames();        
        document.getElementById("frame9").style.display = "block" 
        document.getElementById("btn9").classList.add("active");
    }
}


//Quita la marca de seleccionado para todos los botones
function noFill(){
    document.getElementById("btn1").classList.remove("active");
    document.getElementById("btn2").classList.remove("active");
    document.getElementById("btn3").classList.remove("active");
    document.getElementById("btn4").classList.remove("active");
    document.getElementById("btn5").classList.remove("active");
    document.getElementById("btn6").classList.remove("active");
    document.getElementById("btn7").classList.remove("active");
    document.getElementById("btn8").classList.remove("active");
    document.getElementById("btn9").classList.remove("active");

}

//Oculta los frames para mostrar el nuevo
function clearFrames(){
    document.getElementById("frame1").style.display = "none";
    document.getElementById("frame2").style.display = "none";
    document.getElementById("frame3").style.display = "none";
    document.getElementById("frame4").style.display = "none";
    document.getElementById("frame5").style.display = "none";
    document.getElementById("frame6").style.display = "none";
    document.getElementById("frame7").style.display = "none";
    document.getElementById("frame8").style.display = "none";
    document.getElementById("frame9").style.display = "none";
    document.getElementById("frameA").style.display = "none";
    document.getElementById("frameB").style.display = "none";
    document.getElementById("frameC").style.display = "none";
    document.getElementById("frameD").style.display = "none";
    document.getElementById("frameE").style.display = "none";
    document.getElementById("frameF").style.display = "none";
    document.getElementById("frameH").style.display = "none";
    document.getElementById("frameI").style.display = "none";
    document.getElementById("frameJ").style.display = "none";
    document.getElementById("frameK").style.display = "none";
    document.getElementById("frameL").style.display = "none";
    
    
}

function showFrames(){
    document.getElementById("frame1").style.display = "block";
    document.getElementById("frame2").style.display = "block";
    document.getElementById("frame3").style.display = "block";
    document.getElementById("frame4").style.display = "block";
    document.getElementById("frame5").style.display = "block";
    document.getElementById("frame6").style.display = "block";
    document.getElementById("frame7").style.display = "block";
    document.getElementById("frame8").style.display = "block";
    document.getElementById("frame9").style.display = "block";
}

function showAllDoctors(){
    document.getElementById("item1").style.display = "block";
    document.getElementById("item2").style.display = "block";
    document.getElementById("item3").style.display = "block";
    document.getElementById("item4").style.display = "block";
    document.getElementById("item5").style.display = "block";
    document.getElementById("item6").style.display = "block";
    document.getElementById("item7").style.display = "block";
    document.getElementById("item8").style.display = "block";
    document.getElementById("item9").style.display = "block";
    document.getElementById("item10").style.display = "block";
    document.getElementById("item11").style.display = "block";
    document.getElementById("item12").style.display = "block";
    document.getElementById("item13").style.display = "block";
    document.getElementById("item14").style.display = "block";
    document.getElementById("item15").style.display = "block";
    document.getElementById("item16").style.display = "block";
    document.getElementById("item17").style.display = "block";
    document.getElementById("item18").style.display = "block";
    document.getElementById("item19").style.display = "block";
    document.getElementById("item20").style.display = "block";
    document.getElementById("item21").style.display = "block";
    document.getElementById("item22").style.display = "block";
    document.getElementById("item23").style.display = "block";
    document.getElementById("item24").style.display = "block";
    document.getElementById("item25").style.display = "block";
    document.getElementById("item26").style.display = "block";
    document.getElementById("item27").style.display = "block";
    document.getElementById("item28").style.display = "block";
    document.getElementById("item29").style.display = "block";
    document.getElementById("item30").style.display = "block";
    document.getElementById("item31").style.display = "block";
    document.getElementById("item32").style.display = "block";
    document.getElementById("item33").style.display = "block";
    document.getElementById("item34").style.display = "block";
    document.getElementById("item35").style.display = "block";
    document.getElementById("item36").style.display = "block";
    document.getElementById("item37").style.display = "block";
    document.getElementById("item38").style.display = "block";
    document.getElementById("item39").style.display = "block";
    document.getElementById("item40").style.display = "block";
    document.getElementById("item41").style.display = "block";
    document.getElementById("item42").style.display = "block";
    document.getElementById("item43").style.display = "block";
    document.getElementById("item44").style.display = "block";
    document.getElementById("item45").style.display = "block";
    document.getElementById("item46").style.display = "block";
    document.getElementById("item47").style.display = "block";
    document.getElementById("item48").style.display = "block";
    document.getElementById("item49").style.display = "block";
    document.getElementById("item50").style.display = "block";
    document.getElementById("item51").style.display = "block";
    document.getElementById("item52").style.display = "block";
    document.getElementById("item53").style.display = "block";
    document.getElementById("item54").style.display = "block";
    
}

function hideAllDoctors(){
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "none";
    document.getElementById("item4").style.display = "none";
    document.getElementById("item5").style.display = "none";
    document.getElementById("item6").style.display = "none";
    document.getElementById("item7").style.display = "none";
    document.getElementById("item8").style.display = "none";
    document.getElementById("item9").style.display = "none";
    document.getElementById("item10").style.display = "none";
    document.getElementById("item11").style.display = "none";
    document.getElementById("item12").style.display = "none";
    document.getElementById("item13").style.display = "none";
    document.getElementById("item14").style.display = "none";
    document.getElementById("item15").style.display = "none";
    document.getElementById("item16").style.display = "none";
    document.getElementById("item17").style.display = "none";
    document.getElementById("item18").style.display = "none";
    document.getElementById("item19").style.display = "none";
    document.getElementById("item20").style.display = "none";
    document.getElementById("item21").style.display = "none";
    document.getElementById("item22").style.display = "none";
    document.getElementById("item23").style.display = "none";
    document.getElementById("item24").style.display = "none";
    document.getElementById("item25").style.display = "none";
    document.getElementById("item26").style.display = "none";
    document.getElementById("item27").style.display = "none";
    document.getElementById("item28").style.display = "none";
    document.getElementById("item29").style.display = "none";
    document.getElementById("item30").style.display = "none";
    document.getElementById("item31").style.display = "none";
    document.getElementById("item32").style.display = "none";
    document.getElementById("item33").style.display = "none";
    document.getElementById("item34").style.display = "none";
    document.getElementById("item35").style.display = "none";
    document.getElementById("item36").style.display = "none";
    document.getElementById("item37").style.display = "none";
    document.getElementById("item38").style.display = "none";
    document.getElementById("item39").style.display = "none";
    document.getElementById("item40").style.display = "none";
    document.getElementById("item41").style.display = "none";
    document.getElementById("item42").style.display = "none";
    document.getElementById("item43").style.display = "none";
    document.getElementById("item44").style.display = "none";
    document.getElementById("item45").style.display = "none";
    document.getElementById("item46").style.display = "none";
    document.getElementById("item47").style.display = "none";
    document.getElementById("item48").style.display = "none";
    document.getElementById("item49").style.display = "none";
    document.getElementById("item50").style.display = "none";
    document.getElementById("item51").style.display = "none";
    document.getElementById("item52").style.display = "none";
    document.getElementById("item53").style.display = "none";
    document.getElementById("item54").style.display = "none";
}

function ocultarResultados(){
    if(doctor1c === null){
        alert("Elemento nulo")

    }
    else if (dcotor1c =! null){
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "none";
        document.getElementById("7").style.display = "none";
        document.getElementById("8").style.display = "none";
        document.getElementById("9").style.display = "none";
        document.getElementById("10").style.display = "none";
        document.getElementById("11").style.display = "none";
        document.getElementById("12").style.display = "none";
        document.getElementById("13").style.display = "none";
        document.getElementById("14").style.display = "none";
        document.getElementById("15").style.display = "none";
        document.getElementById("16").style.display = "none";
        document.getElementById("17").style.display = "none";
        document.getElementById("18").style.display = "none";
        document.getElementById("19").style.display = "none";
        document.getElementById("20").style.display = "none";
        document.getElementById("21").style.display = "none";
        document.getElementById("22").style.display = "none";
        document.getElementById("23").style.display = "none";
        document.getElementById("24").style.display = "none";
        document.getElementById("25").style.display = "none";
        document.getElementById("26").style.display = "none";
        document.getElementById("27").style.display = "none";
        document.getElementById("28").style.display = "none";
        document.getElementById("29").style.display = "none";
        document.getElementById("30").style.display = "none";
    }
        
}

function ocultarUltimosBotonesDesplazamiento(){
        document.getElementById("btn2").style.display = "none";
        document.getElementById("btn3").style.display = "none";
        document.getElementById("btn4").style.display = "none";
        document.getElementById("btn5").style.display = "none";
        document.getElementById("btn6").style.display = "none";
        document.getElementById("btn7").style.display = "none";
        document.getElementById("btn8").style.display = "none";
        document.getElementById("btn9").style.display = "none";

}