$(document).ready(function() {
	var counter=1;
	while (counter < 101) {
		if (counter%3==0 && counter%5!=0) {
			$("<p>fizz</p>").appendTo('body');
			counter++;
		}else if (counter%5==0 && counter%3!=0) {
			$("<p>buzz</p>").appendTo('body');
			counter++;
		}else if (counter%3==0 && counter%5==0) {
			$("<p>fizzbuzz</p>").appendTo('body');
			counter++;
		}else {
			$("<p>"+counter+"</p>").appendTo('body');
			counter++;
		}
	}
});