var selected = [0,0,0,0,0,0];
var mic, fft;
var correct;
var toohigh;
var toolow;
var loudestFreq;

function setup() {
  var canvas = createCanvas(300,100);
  canvas.parent('sketch-div');
  noFill();
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.8,16384);
  fft.setInput(mic);
}

function draw() {
  var spectrum = fft.analyze();
  background("#15273a");
  textSize(43);
  if (correct) {
    fill(3, 255, 1);
  }else{
    fill(255);
  }
  textAlign(CENTER,CENTER);
  text(indicator(),150,50);
  console.log(getLoudestFrequency(selected[3],selected[4]));
}

function getLoudestFrequency(low,high) {
    var halfsampleRate = sampleRate() / 2; // 22050
    var spectrum = fft.analyze(); // array of amplitudes in bins
    var bins = spectrum.length;  // 16384 bins
    var maxAmp = 0;
    var largestBin;
  // each bin equal to 22050/16384 = 1.346 Hz
    for (var i = low; i < high; i++) { //for loop to find the largest amplitude of bin
        var thisAmp = spectrum[i]; // amplitude of current bin
        if (thisAmp > maxAmp) {
            maxAmp = thisAmp;
            largestBin = i; //store the location of largestbin
        }
    }
    loudestFreq = largestBin * (halfsampleRate / bins);
    return loudestFreq;
}

function indicator(){

}

// pitch frequency
function checkchrod(){
  if(getLoudestFrequency(selected[3],selected[4])<selected[2] && getLoudestFrequency(selected[3],selected[4])>selected[1]){
    correct = true;
    return selected[5];
  }else if (selected[5]!== 0 ) {
    correct = false;
    return selected[5];
  }else{
    return "Select a string";
  }
}







//Check user is clicking Guitar string or Ukulele string.
function readstringinfo(){
  if(this.className === 'gs'){
    if(this.id === freq_gs1[0]){
      selected = freq_gs1;
    }
    else if (this.id === freq_gs2[0]){
      selected = freq_gs2;
    }
    else if (this.id === freq_gs3[0]){
      selected = freq_gs3;
    }
    else if (this.id === freq_gs4[0]){
      selected = freq_gs4;
    }
    else if (this.id === freq_gs5[0]){
      selected = freq_gs5;
    }
    else if (this.id === freq_gs6[0]){
      selected = freq_gs6;
    }
  }else if (this.className ==='ukulele') {

  }
}

// Change color when select the string
function selectstring(){
  var counter = 0;
  for (var i = 0; i < gs.length; i++) { //chech any string is selected or not.
    if(gs[i].style.background === "blue"){
      counter = counter +1;
    }
  }
  if (counter == 6 ) {   // no strings have been selected
    this.style.background = "red";
  }else{   // some string have been selected
    for (var i = 0; i < gs.length; i++) {
      gs[i].style.background = "blue" //change all back to blue
    }
    this.style.background = "red";  //change the select one to red
  }
}
