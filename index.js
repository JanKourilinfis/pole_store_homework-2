var polozky="jablko,hruška,banán,chleba,cukr,mouka,šunka,sýr,triko,rukavice,čepice,mléko,vejce,maso,brambory,rajče,okurka,paprika,cibule,česnek,olej,rýže,těstoviny,káva,čokoláda,džus,voda,limonáda,sůl,pepř,med,džem,salám,rohlík,bageta,mléčná čokoláda,hořká čokoláda,kečup,hořčice,majonéza,smetana,toastový chléb,koláč,sušenky,zmrzlina,pivo,víno,whisky,rum,gin,vodka"
var ceny="20,25,15,40,30,35,50,60,300,150,200,25,50,120,20,35,30,45,10,15,90,80,60,120,50,30,25,15,20,100,80,5,25,40,60,65,40,35,45,25,50,30,60,70,35,120,500,400,600,550,440"

var polePolozek=polozky.split(",")
var poleCen=ceny.split(",")

var akce=prompt("jakou akci chcete provézt")
if(akce==("přidat")){
var pridaniProdukt=prompt("jaký produkt chcete přidat")
alert(polePolozek.push(pridaniProdukt))
var pridaniCena=prompt("jakou cenu tohoto produktu chcete přidat???")
alert(poleCen.push(pridaniCena))
}
else if(akce=("odebrat")){
var odebraniProdukt=prompt("jaký produkt chcete odebrat???")
var odebProd=Number(alert(polePolozek.indexOf(odebraniProdukt)))
alert(pole.splice(odebProd,1))
var odebraniCena=prompt("jakou cenu tohoto produktu chcete odebrat???")
var odebCena=Number(alert(poleCen.indexOf(odebraniCena)))
alert(poleCen.splice(odebCena,1))
}
var vypis=prompt("chcete vypsat produkty i ceny ???")
if(vypis==("ano")){
for(var i=0; i<polePolozek.length; i++){
alert(polePolozek[i])
}
for(var j=0; i<poleCen.length; j++){
alert(poleCen[j])
}
}
