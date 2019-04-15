function myfunction(){

	var id,nombre,correo,fecha,cargo;
	id=document.getElementById("id");
	correo=document.getElementById("correo");
	fecha=document.getElementById("fecha");
	cargo=document.getElementById("cargo");
	nombre=document.getElementById("nombre");

	var p1,p2,p3,p4,p5,p6,p7,total=0;
	var r1,r2,r3,r4,r5,r6,r7;
	p1=document.getElementById("p1");
	if (p1.value=="artistico") {
		r1=10;
		total=total+10;
	}else if (p1.value=="deportivo") {
		r1=10;
		total=total+10;
	}
	else if (p1.value=="social") {
		r1=10;
		total=total+10;
	}else if (p1.value=="ninguno") {
		r1=1;
		total=total+1;
	}
	p2=document.getElementById("p2");
	if (p2.value=="relajarse") {
		r2=2;
		total=total+2;
	}else if (p2.value=="trabajar") {
		r2=8;
		total=total+8;
	}else if (p2.value=="stress") {
		r2=5;
		total=total+5;
	}else if (p2.value=="tiempo") {
		r2=10;
		total=total+10;
	}
	p3=document.getElementById("p3");
	if (p3.value=="1") {
		r3=10;
		total=total+10;
	}else if (p3.value=="2") {
		r3=8;
		total=total+8;
	}else if (p3.value=="3") {
		r3=5;
		total=total+5;
	}else if (p3.value=="4") {
		r3=1;
		total=total+1;
	}
	p4=document.getElementById("p4");
	if (p4.value=="futbol") {
		r4=10;
		total=total+10;
	}else if (p4.value=="baloncesto") {
		r4=10;
		total=total+10;
	}else if (p4.value=="otro") {
		r4=8;
		total=total+8;
	}else if (p4.value=="no") {
		r4=1;
		total=total+1;
	}
	p5=document.getElementById("p5");
	if (p5.value=="lider") {
		r5=10;
		total=total+10;
	}else if (p5.value=="ejecutivo") {
		r5=8;
		total=total+8;
	}
	else if (p5.value=="apoyo") {
		r5=8;
		total=total+8;
	}else if (p5.value=="no") {
		r5=0;
		total=total+0;
	}
	p6=document.getElementById("p6");
	if (p6.value=="propia") {
		r6=10;
		total=total+10;
	}else if (p6.value=="arrendada") {
		r6=8;
		total=total+8;
	}
	else if (p6.value=="familiar") {
		r6=3;
		total=total+3;
	}else if (p1.value=="otro") {
		r6=2;
		total=total+2;
	}
	p7=document.getElementById("p7");
	if (p7.value=="1") {
		r7=10;
		total=total+10;
	}else if (p7.value=="2") {
		r7=8;
		total=total+8;
	}
	else if (p7.value=="3") {
		r7=5;
		total=total+5;
	}else if (p7.value=="4") {
		r7=1;
		total=total+1;
	}

	var res;
	if (cargo.value=="operario") {
		if (total<55) {
			res="NO APTO";
		}else if (total>=55 && total<82.5) {
			res="APTO";
		}else if (total>=55 && total>82.5) {
			res="APTO SOBRESALIENTE";
		}
	}
	if (cargo.value=="supervisor") {
		if (total<65) {
			res="NO APTO";
		}else if (total>=65 && total<97.5) {
			res="APTO";
		}else if (total>=65 && total>97.5) {
			res="APTO SOBRESALIENTE";
		}
	}
	if (cargo.value=="auxiliar") {
		if (total<50) {
			res="NO APTO";
		}else if (total>=50 && total<75) {
			res="APTO";
		}else if (total>=50 && total>75) {
			res="APTO SOBRESALIENTE";
		}
	}
	if (cargo.value=="director") {
		if (total<70) {
			res="NO APTO";
		}else if (total>=70 && total<105) {
			res="APTO";
		}else if (total>=70 && total>105) {
			res="APTO SOBRESALIENTE";
		}
	}

	var tabla=document.getElementById("table");
	tabla.innerHTML=tabla.innerHTML+'<tr><td>'+id.value+'</td><td>'+nombre.value+'</td><td>'+correo.value+'</td>'+'<td>'+fecha.value+'</td><td>'+cargo.value+
		'</td><td>'+r1+'</td><td>'+r2+'</td><td>'+r3+'</td><td>'+r4+'</td><td>'+r5+'</td><td>'+r6+'</td><td>'+r7+'</td><td>'+res+'</td></tr>';
}