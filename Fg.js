
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;
slider1.oninput = function() {
 output1.innerHTML = this.value;
}
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;
slider2.oninput = function() {
 output2.innerHTML = this.value;
}
var xmin=-2,ymin=-2,scale=140;
var x,y,i,iq,xt,il;
var cx,cy;
var color,colo3r,colo2r;
var canvas = document.getElementById('myCanvas');
canvas.addEventListener("mousedown",zoom,false);
var context = canvas.getContext('2d');
mandel();
var img = ctx.createImageData(canvas.width, 1);
var image = context.getImageData(0, 0, width, height);
var pixels = image.data;


function addRGB(v, w)
{
  v[0] += w[0];
  v[1] += w[1];
  v[2] += w[2];
  v[3] += w[3];
  return v;
}

function divRGB(v, div)
{
  v[0] /= div;
  v[1] /= div;
  v[2] /= div;
  v[3] /= div;
  return v;
}
function getColorPicker()
{
  var p = $("colorScheme").value;
  if ( p == "pickColorHSV1" ) return pickColorHSV1;
  if ( p == "pickColorHSV2" ) return pickColorHSV2;
  if ( p == "pickColorHSV3" ) return pickColorHSV3;
  if ( p == "pickColorGrayscale2" ) return pickColorGrayscale2;
  return pickColorGrayscale;
}

function zoom(event)
        {
                xmin=xmin+Math.floor(event.pageX/5)/scale;
                ymin=-Math.floor(event.pageY/5)/scale+220/scale+ymin;
                scale=scale*2;
                mandel();
        }



function mandel(){
                for(x=0;x<500;x++){
                        for(y=0;y<500;y++){
                                i=0;
                                iq = 255;
                                il = 100;
                                flag = false;
                                cx=xmin+x/scale;
                                cy=ymin+y/scale;
                                zx=0;
                                zy=0;

			                    do{
                                    xt=zx*zy;
                                    zx=zx*zx-zy*zy+cx;
                                    zy=2*xt+cy;
                                    i++;
                                    //iq--;
                                    //il++;

                                }
                                while(i<255&&il<255&&(zx*zx+zy*zy)<2);
                                context.beginPath();
                                context.rect(x, 1000-y, 1, 1);
<!--                                context.fillStyle = "rgb("+i+","+i+","+i+")";-->
                            var output = document.getElementById("demo");
                            output.innerHTML = slider.value;
                            slider.oninput = function() {
                            output.innerHTML = this.value;

}
                             var r1 = slider.value;
                             var g1 = slider1.value;
                             var b1 = slider2.value;
                             document.querySelector("#submit").onclick = function(){r1 = slider.value;};
                                if (i > 40 && i<245){
                                  for(h=40;h<245;h++){
                                    context.fillStyle = `rgba(${h/5},${h/6},${h/4}, ${1})`;
                                  }
                                }else{
                                  context.fillStyle = `rgba(${i*r1},${i*g1},${i*b1}, ${1})`;
                                }
                                context.fill();


                        }
                }
        }