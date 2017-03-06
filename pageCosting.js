//MANDATORY MATERIALIZE LIBRARY INITIALIZATION
$(document).ready(function() {
	$('select').material_select();
});

//PRICE TABLE INFORMATION
const PRICES = {
	A4BWSS: {
		BREAK1: 5,
		BREAK2: 4.5,
		BREAK3: 4,
		BREAK4: 3.5
	},
	A4BWDS: {
		BREAK1: 9,
		BREAK2: 8,
		BREAK3: 7,
		BREAK4: 6
	},
	A4COLSS: {
		BREAK1: 16,
		BREAK2: 15,
		BREAK3: 14,
		BREAK4: 13
	},
	A4COLDS: {
		BREAK1: 30,
		BREAK2: 28,
		BREAK3: 26,
		BREAK4: 24
	},
	A3BWSS: {
		BREAK1: 9,
		BREAK2: 8,
		BREAK3: 7,
		BREAK4: 6
	},
	A3BWDS: {
		BREAK1: 16,
		BREAK2: 14,
		BREAK3: 12,
		BREAK4: 10
	},
	A3COLSS: {
		BREAK1: 32,
		BREAK2: 30,
		BREAK3: 28,
		BREAK4: 26
	},
	A3COLDS: {
		BREAK1: 48,
		BREAK2: 46,
		BREAK3: 44,
		BREAK4: 42
	}
};

// MAIN ARRAY INITIALIZATION
var database = [];

// THIS CONSTRUCTOR FUNCTION ENTERS DETAILS INTO THE DATABASE, ENTERS A DUMMY PRICE OF ZERO
// IS CALLED FROM 'MAIN INPUT' FUNCTION
function printJob(A4COLSS, A4COLDS, A4BWSS, A4BWDS, A3COLSS, A3COLDS, A3BWSS, A3BWDS, paperType, paperSize) {
	this.A4COLSS = A4COLSS;
	this.A4COLDS = A4COLDS;
	this.A4BWSS = A4BWSS;
	this.A4BWDS = A4BWDS;
	this.A3COLSS = A3COLSS;
	this.A3COLDS = A3COLDS;
	this.A3BWSS = A3BWSS;
	this.A3BWDS = A3BWDS;
	this.paperSize = paperSize;
	this.paperType = paperType;
	this.price = 0;
	database.push(this);
};

// THIS FUNCTION TAKES HELD INFORMATION AND PRINTS IT TO THE SCREEN
// IS CALLED AT THE END OF THE COSTING FUNCTION
var printscreen = function(totA4COLSS, totA4COLDS, totA4BWSS, totA4BWDS, totA3COLSS, totA3COLDS, totA3BWSS, totA3BWDS) {
	$('.data').remove();
	var totalPrice = 0;
	for (i = 0; i < database.length; i++) {
		var formatedPrice = (database[i].price/100).toFixed(2);
		var prCOLSS = database[i].A4COLSS + database[i].A3COLSS;
		var prCOLDS = database[i].A4COLDS + database[i].A3COLDS;
		var prBWSS = database[i].A4BWSS + database[i].A3BWSS;
		var prBWDS = database[i].A4BWDS + database[i].A3BWDS;
		$('<tr class="data" id="dtp' + i + '"><td>' + prCOLSS + '</td><td>' + prCOLDS + '</td><td>' + prBWSS + '</td><td>' + prBWDS + '</td><td>' + database[i].paperSize + ' ' + database[i].paperType + '</td><td>&#163;' + formatedPrice + '</td><td><a id="del' + i + '" class="btn-floating waves-effect waves-light" onclick="deleteRow(' + i + ');"></a></td></tr>').appendTo('#dataTable');
		totalPrice += database[i].price;
	}
	totalPrice = (totalPrice/100).toFixed(2);
	$('#totValue').text(totalPrice);
	$('#totA4COLSS').text(totA4COLSS);
	$('#totA4COLDS').text(totA4COLDS);
	$('#totA4BWSS').text(totA4BWSS);
	$('#totA4BWDS').text(totA4BWDS);
	$('#totA3COLSS').text(totA3COLSS);
	$('#totA3COLDS').text(totA3COLDS);
	$('#totA3BWSS').text(totA3BWSS);
	$('#totA3BWDS').text(totA3BWDS);
	if(totA4COLSS >= 250){
		$('#priceA4COLSS').text(PRICES.A4COLSS.BREAK4.toString());
	}else if(totA4COLSS >= 50){
		$('#priceA4COLSS').text(PRICES.A4COLSS.BREAK3.toString());
	}else if(totA4COLSS >= 10){
		$('#priceA4COLSS').text(PRICES.A4COLSS.BREAK2.toString());
	}else{
		$('#priceA4COLSS').text(PRICES.A4COLSS.BREAK1.toString());
	}
	if(totA4COLDS >= 250){
		$('#priceA4COLDS').text(PRICES.A4COLDS.BREAK4.toString());
	}else if(totA4COLDS >= 50){
		$('#priceA4COLDS').text(PRICES.A4COLDS.BREAK3.toString());
	}else if(totA4COLDS >= 10){
		$('#priceA4COLDS').text(PRICES.A4COLDS.BREAK2.toString());
	}else{
		$('#priceA4COLDS').text(PRICES.A4COLDS.BREAK1.toString());
	}
	if(totA4BWSS >= 1000){
		$('#priceA4BWSS').text(PRICES.A4BWSS.BREAK4.toString());
	}else if(totA4BWSS >= 500){
		$('#priceA4BWSS').text(PRICES.A4BWSS.BREAK3.toString());
	}else if(totA4BWSS >= 100){
		$('#priceA4BWSS').text(PRICES.A4BWSS.BREAK2.toString());
	}else{
		$('#priceA4BWSS').text(PRICES.A4BWSS.BREAK1.toString());
	}
	if(totA4BWDS >= 1000){
		$('#priceA4BWDS').text(PRICES.A4BWDS.BREAK4.toString());
	}else if(totA4BWDS >= 500){
		$('#priceA4BWDS').text(PRICES.A4BWDS.BREAK3.toString());
	}else if(totA4BWDS >= 100){
		$('#priceA4BWDS').text(PRICES.A4BWDS.BREAK2.toString());
	}else{
		$('#priceA4BWDS').text(PRICES.A4BWDS.BREAK1.toString());
	}
	if(totA3COLSS >= 250){
		$('#priceA3COLSS').text(PRICES.A3COLSS.BREAK4.toString());
	}else if(totA3COLSS >= 50){
		$('#priceA3COLSS').text(PRICES.A3COLSS.BREAK3.toString());
	}else if(totA3COLSS >= 10){
		$('#priceA3COLSS').text(PRICES.A3COLSS.BREAK2.toString());
	}else{
		$('#priceA3COLSS').text(PRICES.A3COLSS.BREAK1.toString());
	}
	if(totA3COLDS >= 250){
		$('#priceA3COLDS').text(PRICES.A3COLDS.BREAK4.toString());
	}else if(totA3COLDS >= 50){
		$('#priceA3COLDS').text(PRICES.A3COLDS.BREAK3.toString());
	}else if(totA3COLDS >= 10){
		$('#priceA3COLDS').text(PRICES.A3COLDS.BREAK2.toString());
	}else{
		$('#priceA3COLDS').text(PRICES.A3COLDS.BREAK1.toString());
	}
	if(totA3BWSS >= 1000){
		$('#priceA3BWSS').text(PRICES.A3BWSS.BREAK4.toString());
	}else if(totA3BWSS >= 500){
		$('#priceA3BWSS').text(PRICES.A3BWSS.BREAK3.toString());
	}else if(totA3BWSS >= 100){
		$('#priceA3BWSS').text(PRICES.A3BWSS.BREAK2.toString());
	}else{
		$('#priceA3BWSS').text(PRICES.A3BWSS.BREAK1.toString());
	}
	if(totA3BWDS >= 1000){
		$('#priceA3BWDS').text(PRICES.A3BWDS.BREAK4.toString());
	}else if(totA3BWDS >= 500){
		$('#priceA3BWDS').text(PRICES.A3BWDS.BREAK3.toString());
	}else if(totA3BWDS >= 100){
		$('#priceA3BWDS').text(PRICES.A3BWDS.BREAK2.toString());
	}else{
		$('#priceA3BWDS').text(PRICES.A3BWDS.BREAK1.toString());
	}
};

// COSTING FUNCTION - CALCULATES TOTAL NUMBER OF PAGES, USES THAT INFO TO COST PER ITERATION, UPDATES DATABASE WITH THAT VALUE. CALLS PRINTSCREEN AT END.
// IS CALLED FROM 'MAIN INPUT' AND 'DELETE ROW FUNCTION'
var costing = function() {
	var totA4COLSS = 0;
	var totA4COLDS = 0;
	var totA4BWSS = 0;
	var totA4BWDS = 0;
	var totA3COLSS = 0;
	var totA3COLDS = 0;
	var totA3BWSS = 0;
	var totA3BWDS = 0;
	for (i = 0; i < database.length; i++) {
		totA4COLSS += database[i].A4COLSS;
		totA4COLDS += database[i].A4COLDS;
		totA4BWSS += database[i].A4BWSS;
		totA4BWDS += database[i].A4BWDS;
		totA3COLSS += database[i].A3COLSS;
		totA3COLDS += database[i].A3COLDS;
		totA3BWSS += database[i].A3BWSS;
		totA3BWDS += database[i].A3BWDS;
	}
	for (i = 0; i < database.length; i++) {
		var price = 0;
		var myPaper = database[i].paperType;
		var myA4paper = database[i].A4COLSS + database[i].A4COLDS + database[i].A4BWSS + database[i].A4BWDS;
		var myA3paper = database[i].A3COLSS + database[i].A3COLDS + database[i].A3BWSS + database[i].A3BWDS;
		if(totA4COLSS >= 250){
			price += (database[i].A4COLSS * PRICES.A4COLSS.BREAK4);
		}else if(totA4COLSS >= 50){
			price += (database[i].A4COLSS * PRICES.A4COLSS.BREAK3);
		}else if(totA4COLSS >= 10){
			price += (database[i].A4COLSS * PRICES.A4COLSS.BREAK2);
		}else{
			price += (database[i].A4COLSS * PRICES.A4COLSS.BREAK1);
		}
		if(totA4COLDS >= 250){
			price += (database[i].A4COLDS * PRICES.A4COLDS.BREAK4);
		}else if(totA4COLDS >= 50){
			price += (database[i].A4COLDS * PRICES.A4COLDS.BREAK3);
		}else if(totA4COLDS >= 10){
			price += (database[i].A4COLDS * PRICES.A4COLDS.BREAK2);
		}else{
			price += (database[i].A4COLDS * PRICES.A4COLDS.BREAK1);
		}
		if(totA4BWSS >= 1000){
			price += (database[i].A4BWSS * PRICES.A4BWSS.BREAK4);
		}else if(totA4BWSS >= 500){
			price += (database[i].A4BWSS * PRICES.A4BWSS.BREAK3);
		}else if(totA4BWSS >= 100){
			price += (database[i].A4BWSS * PRICES.A4BWSS.BREAK2);
		}else{
			price += (database[i].A4BWSS * PRICES.A4BWSS.BREAK1);
		}
		if(totA4BWDS >= 1000){
			price += (database[i].A4BWDS * PRICES.A4BWDS.BREAK4);
		}else if(totA4BWDS >= 500){
			price += (database[i].A4BWDS * PRICES.A4BWDS.BREAK3);
		}else if(totA4BWDS >= 100){
			price += (database[i].A4BWDS * PRICES.A4BWDS.BREAK2);
		}else{
			price += (database[i].A4BWDS * PRICES.A4BWDS.BREAK1);
		}
		if(totA3COLSS >= 250){
			price += (database[i].A3COLSS * PRICES.A3COLSS.BREAK4);
		}else if(totA3COLSS >= 50){
			price += (database[i].A3COLSS * PRICES.A3COLSS.BREAK3);
		}else if(totA3COLSS >= 10){
			price += (database[i].A3COLSS * PRICES.A3COLSS.BREAK2);
		}else{
			price += (database[i].A3COLSS * PRICES.A3COLSS.BREAK1);
		}
		if(totA3COLDS >= 250){
			price += (database[i].A3COLDS * PRICES.A3COLDS.BREAK4);
		}else if(totA3COLDS >= 50){
			price += (database[i].A3COLDS * PRICES.A3COLDS.BREAK3);
		}else if(totA3COLDS >= 10){
			price += (database[i].A3COLDS * PRICES.A3COLDS.BREAK2);
		}else{
			price += (database[i].A3COLDS * PRICES.A3COLDS.BREAK1);
		}
		if(totA3BWSS >= 1000){
			price += (database[i].A3BWSS * PRICES.A3BWSS.BREAK4);
		}else if(totA3BWSS >= 500){
			price += (database[i].A3BWSS * PRICES.A3BWSS.BREAK3);
		}else if(totA3BWSS >= 100){
			price += (database[i].A3BWSS * PRICES.A3BWSS.BREAK2);
		}else{
			price += (database[i].A3BWSS * PRICES.A3BWSS.BREAK1);
		}
		if(totA3BWDS >= 1000){
			price += (database[i].A3BWDS * PRICES.A3BWDS.BREAK4);
		}else if(totA3BWDS >= 500){
			price += (database[i].A3BWDS * PRICES.A3BWDS.BREAK3);
		}else if(totA3BWDS >= 100){
			price += (database[i].A3BWDS * PRICES.A3BWDS.BREAK2);
		}else{
			price += (database[i].A3BWDS * PRICES.A3BWDS.BREAK1);
		}
		if(database[i].paperType == "160tint"){
			price += (myA4paper * 8) + (myA3paper * 16);
		}else if(database[i].paperType == "80tint"){
			price += (myA4paper * 2) + (myA3paper * 4);
		}else if(database[i].paperType == "silk"){
			price += (myA4paper * 6) + (myA3paper * 12);
		}else if(database[i].paperType == "250gsm"){
			price += (myA4paper * 10) + (myA3paper * 20);
		}else if(database[i].paperType == "200gsm"){
			price += (myA4paper * 8) + (myA3paper * 16);
		}else if(database[i].paperType == "160gsm"){
			price += (myA4paper * 6) + (myA3paper * 12);
		}else if(database[i].paperType == "120gsm"){
			price += (myA4paper * 4) + (myA3paper * 8);
		}else if(database[i].paperType == "100gsm"){
			price += (myA4paper * 2) + (myA3paper * 4);
		}else if(database[i].paperType == "90gsm"){
			price += (myA4paper * 1) + (myA3paper * 2);
		}else{
			
		}
		database[i].price = price;
	}
	printscreen(totA4COLSS, totA4COLDS, totA4BWSS, totA4BWDS, totA3COLSS, totA3COLDS, totA3BWSS, totA3BWDS);
};

// THIS FUNCTION DELETES A ROW OUT OF THE DATABASE THEN RE-CALCULATES
// IS CALLED FROM CLICKING ROW DELETETION BUTTON
var deleteRow = function(n) {
	database.splice(n, 1);
	costing();
};

// MASTER RESET - WIPES PRINTED TABLE, SETS TOTAL TO ZERO, RESETS DATABASE AS BLANK
// CALLED FROM CLICKING 'CLEAR' BUTTON
$('#allClear').click(function() {
	database = [];
	costing();
	$('#totPages').focus();
});

// MAIN INPUT - TAKES ENTERED VALUES AND PASSES THEM TO DATABASE, THEN CALLS COSTING. RESETS INPUT FIELDS.
// CALLED BY CLICKING 'ENTER' BUTTON
$('#printSubmit').click(function() {
	var A4COLSS = 0;
	var A4COLDS = 0;
	var A4BWSS = 0;
	var A4BWDS = 0;
	var A3COLSS = 0;
	var A3COLDS = 0;
	var A3BWSS = 0;
	var A3BWDS = 0;
	var totalPages = 0;
	var totalColour = 0;
	var paperType = $('#paperType').val();
	if($('#totPages').val() != ''){
		totalPages = parseInt($('#totPages').val());
	}
	if($('#totColour').val() != ''){
		totalColour = parseInt($('#totColour').val());
	}
	var duplexStatus = $('input[name = "duplex"]:checked').val();
	var paperSize = $('input[name = "size"]:checked').val();
	var totalBW = totalPages - totalColour;
	if(paperSize == 'A4') {
		if(duplexStatus == 'duplex') {
			A4COLDS = 0 + totalColour / 2;
			A4BWDS = 0 + totalBW / 2;
		} else if(duplexStatus == 'simplex') {
			A4COLSS = 0 + totalColour;
			A4BWSS = 0 + totalBW;
		}
	} else if (paperSize == 'A3') {
		if(duplexStatus == 'duplex') {
			A3COLDS = 0 + totalColour / 2;
			A3BWDS = 0 + totalBW / 2;
		} else if(duplexStatus == 'simplex') {
			A3COLSS = 0 + totalColour;
			A3BWSS = 0 + totalBW;
		}
	}
	var entry = new printJob(A4COLSS, A4COLDS, A4BWSS, A4BWDS, A3COLSS, A3COLDS, A3BWSS, A3BWDS, paperType, paperSize);
	costing();
	$('#totPages').val('');
	$('#totColour').val('');
	$('#totPages').focus();
});