//Buatlah rekursive function untuk menghitung angka faktorial



function faktorial(n){
	let angka=1;
	let faktor=1;
	 while(angka<=n){
		 faktor=faktor*angka;
		 angka=angka+1;
	 }
	 console.log(faktor)
}
faktorial(10)



//Buatlah rekursive function yang dapat menampilkan deret angka genap sampai N input. 


function genap(i, n) {
    if ( i >= n ) {
      console.log(i)
      genap(i-2, n)
    } else if (i == n) {
      console.log(i)
    }
}

genap(10,2)






//Buatlah rekursive function yang dapat menghasilkan angka seperti ini

f(1) = 3
f(2) = 6
f(3) = 12
f(4) = 24
f(5) = 48
f(n) =  ...


function func(i, n) {
    if ( i <= n ) {
      console.log(i)
     func(i*2, n)
    } else if (i == n) {
      console.log(i)
    }
}

func(3,48)


