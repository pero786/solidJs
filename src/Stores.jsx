import { createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";

export default function Stores() {

    const [db1, setDb1] = createSignal({
        name: "users",
        items: [
            {name:"Pero", surname:"Perić", bill:100},
            {name:"Mare", surname:"Perica", bill:20},
            {name:"Ivo", surname:"Perić", bill:300},
            {name:"Viktor", surname:"Ivić", bill:500},
        ]
    });

    const [db2, setDb2] = createStore();

    function applyTax(){
        let newItems = [];
        for (let i = 0; i < db1(). items.length; i++){
            let element = {...db1().items[i]};
            element.bill *= 1.25;
            newItems.push(element);
        }
        let newObject = {
            ...db1(),
            ...{ items: newItems}
        }
        setDb1([]);
        setDb1(newObject);
    }

    return(
        <>
        <h1>Korisnici</h1>
        <For each  = {db1().items}>
            {item => (
                <div style="margin-bottom: 10px; padding:10px;border:1px solid grey">
                    <div>Ime: {item.name}</div>
                    <div>Prezime: {item.surname}</div>
                    <div>Račun: {item.bill}</div>
                </div>
            )}
        </For>
        <button onClick={applyTax}>Uračunaj porez</button>
        </>
    )
}