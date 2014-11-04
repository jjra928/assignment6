/*  File:  /~jraffa/public_html/assignment6JAVASCRIPT.js
  91.461 Assignment6 :  Creating an interactive and dynamic table
  Joseph Raffa, UMass Lowell Computer Science Undergradute, jraffa@cs.uml.edu
  Date: 10-22-2014
  Copyright (c) 2014 by Joseph Raffa.  All rights reserved.  
  This javascript file steals input from an html form and creates a multiplication
  table with it! It then sends it to the webpage to be displayed.	*/

//Wait for webpage to finish loading contents
$(document).ready(function() {
	
	//Code to execute on successful submit
	$('#target').submit(function( event ) {
		//grab 4 user entered values and store them 
		var in1 = parseInt($('#input1').val(), 10);
		var in2 = parseInt($('#input2').val(), 10);
		var in3 = parseInt($('#input3').val(), 10);
		var in4 = parseInt($('#input4').val(), 10);

		//Call table generating function and pass input values	
		tableGen(in1, in2, in3, in4);
		
		//Code to keep the submit function from clearing form and table immediately. 
		event.preventDefault();	
	}); 
		


});

function tableGen(in1, in2, in3, in4) {
	//Create javascript vars for table, the first row, all other rows, and a product.
	var table = "<table>";
	var initialRow = "<tr><td> </td>";
	var rows = " ";
	var product = 0;
	
	/* the following if statements are all cases of comparison between the 4 inputs.
			The code for all if statements are the same, with some loop parameters 
			switched up. What we are doing is concatenating a string of html for each row,
			and then concatenating all of the rows to a table. Then we display the table in
			place of the empty one our html file already has. 	*/
	
	if(in1 < in2 && in3 < in4) {
		for(var i = in3; i <= in4; i++) {
			initialRow += "<th>" + i + "</th>";
			}
	
		initialRow += "</tr>";
		table += initialRow;
	
		for(var i = in1; i <= in2; i++) {
			rows += "<tr><th>" + i + "</th>";
			for(var j = in3; j <= in4; j++) {
				product = i * j;
				rows += "<td>" + product + "</td>";
				}
			rows += "</tr>";
			}	
		
		table += rows;	
		table += "</table>";
		document.getElementById("Mytable").innerHTML = table;
		}
		
	if(in1 > in2 && in3 < in4) {
		for(var i = in3; i <= in4; i++) {
			initialRow += "<td>" + i + "</td>";
			}
	
		initialRow += "</tr>";
		table += initialRow;
	
		for(var i = in2; i <= in1; i++) {
			rows += "<tr><td>" + i + "</td>";
			for(var j = in3; j <= in4; j++) {
				product = i * j;
				rows += "<td>" + product + "</td>";
				}
			rows += "</tr>";
			}	
		
		table += rows;	
		table += "</table>";
		document.getElementById("Mytable").innerHTML = table;
		}
		
	if(in1 < in2 && in3 > in4) {
		for(var i = in4; i <= in3; i++) {
			initialRow += "<td>" + i + "</td>";
			}
	
		initialRow += "</tr>";
		table += initialRow;
	
		for(var i = in1; i <= in2; i++) {
			rows += "<tr><td>" + i + "</td>";
			for(var j = in4; j <= in3; j++) {
				product = i * j;
				rows += "<td>" + product + "</td>";
				}
			rows += "</tr>";
			}	
		
		table += rows;	
		table += "</table>";
		document.getElementById("Mytable").innerHTML = table;
		}
		
	if(in1 > in2 && in3 > in4) {
		for(var i = in4; i <= in3; i++) {
			initialRow += "<td>" + i + "</td>";
			}
	
		initialRow += "</tr>";
		table += initialRow;
	
		for(var i = in2; i <= in1; i++) {
			rows += "<tr><td>" + i + "</td>";
			for(var j = in4; j <= in3; j++) {
				product = i * j;
				rows += "<td>" + product + "</td>";
				}
			rows += "</tr>";
			}	
		
		table += rows;	
		table += "</table>";
		document.getElementById("Mytable").innerHTML = table;
		}
		
}