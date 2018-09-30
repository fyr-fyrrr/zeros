module.exports = function getZerosCount(number) {
  // your implementation
  const a = (Math.floor(number / 5)) * 5;
	let b = Math.log10(a) / Math.log10(5);
	b = Math.floor(b);
	const arr = [];
	for (i = 1; i <= b; i++) {
		arr[i - 1] = Math.floor(number / Math.pow(5,i));
	};
	let zerosCount = 0;
	for(var i = 0; i < arr.length; i++){
		zerosCount += arr[i];
    }
	return(zerosCount);
}
