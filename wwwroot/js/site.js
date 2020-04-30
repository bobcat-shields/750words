// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
(function(){
	var wordcounter = document.getElementById('wordcounter')
	var counteroutput = document.getElementById('counteroutput')
	// var counteroutputFoot = document.getElementById('counteroutput-foot')
	var words, chars

	function countemwords(){
		words = (wordcounter.value == '')? 0 : wordcounter.value.split(' ').length
		chars = wordcounter.value.length
        counteroutput.innerHTML = 'Words: <span class="text-muted">' + words + '</span> <input type="hidden" name="WordCount" value="' + words + '"/> Chars: <span class="text-muted">' + chars + '</span>'
		// counteroutputFoot.innerHTML = '<b>Words: </b>' + words + '<b>Chars: </b>' + chars
	}

	wordcounter.addEventListener('input', function(e){
		countemwords()
	}, false)


  document.addEventListener("DOMContentLoaded", function(event) {
		countemwords()
  }, false)

  window.addEventListener("load", function(event) {
		countemwords()
  }, false)
	
})()

// Graph starts here
window.onload = function () {
// function loadGrid() {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Simple Line Chart"
        },
        axisY: {
            includeZero: false
        },
        data: [{
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: [
                { y: 450 },
                { y: 414 },
                { y: 520, indexLabel: "\u2191 highest", markerColor: "red", markerType: "triangle" },
                { y: 460 },
                { y: 450 },
                { y: 500 },
                { y: 480 },
                { y: 480 },
                { y: 410, indexLabel: "\u2193 lowest", markerColor: "DarkSlateGrey", markerType: "cross" },
                { y: 500 },
                { y: 480 },
                { y: 510 }
            ]
        }]
    });
    chart.render();

}