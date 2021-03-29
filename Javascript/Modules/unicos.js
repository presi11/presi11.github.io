export function unicos(x){
    
    let array = x.split(' ');
    var auxArray = [];
	for (var i = 0; i < array.length; i++) {
		var count = 0;
		for (var j = 0; j < array.length; j++) {
			if (array[j] == array[i]) {
				count++;
			}
		}
		if (count >= 2) {
			auxArray.push(array[i]);
		}
	}
    console.log(auxArray);
    return auxArray;
    
}