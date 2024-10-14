import { onMount } from "solid-js";

export default function Spreads(){
    const objekt1={
        ime:"Pero",
        prezime:"Perić",
        adresa:"Trg slobode 7"
    };
    const objekt2={
        ime:"Ivo",
        oib:"1234567"
    };
    const spoj = {...objekt1, ...objekt2};
    const polje1 = [1,2,3];
    const polje2= ["pon","uto","sri"];
    const spojPolja = [...polje1, ...polje2];
    const elNaPoc = [0,...spojPolja];
    const elNaKra = [...spojPolja,"cet"];
    onMount(() => {
        console.log("objekt1", objekt1);
        console.log("objekt2", objekt2);
        console.log("objekt1 + objekt2", spoj);
        console.log("polje1 + polje2", spojPolja);
        console.log("Spajanje elementa", elNaKra, elNaPoc);

    });
    
    return(
        <>
        <Local ime= "petar" prezime="sarec" adresa="tkt" />
        <Local ime= {objekt1.ime} prezime= {objekt1.prezime} adresa= {objekt1.adresa}/>
        <Local {...objekt1} />
        </>
    );
}

function Local(props){
    return(
        <>
        <p>Podaci su sljedeći:</p>
        <ul>
            <li>Ime:{props.ime}</li>
            <li>Prezime:{props.prezime}</li>
            <li>Adresa:{props.adresa}</li>

        </ul>
        <p>Ova komponenta je primila podatke iz vana</p>
        </>
    );

}