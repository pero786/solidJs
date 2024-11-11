import { createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";

export default function Stores() {

  const [db1, setDb1] = createSignal({
    name: "users",
    items: [
      { name: "Pero", surname: "Perić", bill: 100 },
      { name: "Mare", surname: "Perica", bill: 20 },
      { name: "Ivo", surname: "Perić", bill: 300 },
      { name: "Viktor", surname: "Ivić", bill: 500 },
    ],
  });

  const [db2, setDb2] = createStore({
    name: "users",
    items: [
      { name: "Matija", surname: "Perić", bill: 100 },
      { name: "Saša", surname: "Perica", bill: 20 },
      { name: "Tin", surname: "Perić", bill: 300 },
      { name: "Vanja", surname: "Ivić", bill: 500 },
    ],
  });

  function applyTax1() {
    const newItems = db1().items.map((element) => {
      const updatedElement = { ...element, bill: element.bill * 1.25 };
      return updatedElement;
    });
    setDb1({ ...db1(), items: newItems });
  }

  function applyTax2() {
    const newItems = db2.items.map((element) => {
      return { ...element, bill: element.bill * 1.25 };
    });
    setDb2("items", newItems); 
  }

  return (
    <>
      <h1>Korisnici</h1>
      <For each={db1().items}>
        {(item) => (
          <div style="margin-bottom: 10px; padding:10px;border:1px solid grey">
            <div>Ime: {item.name}</div>
            <div>Prezime: {item.surname}</div>
            <div>Račun: {item.bill} EUR</div>
          </div>
        )}
      </For>
      <button onClick={applyTax1}>Uračunaj porez</button>

      <h1>Korisnici verzija 2</h1>
      <For each={db2.items}>
        {(item) => (
          <div style="margin-bottom: 10px; padding:10px;border:1px solid grey">
            <div>Ime: {item.name}</div>
            <div>Prezime: {item.surname}</div>
            <div>Račun: {item.bill} EUR</div>
          </div>
        )}
      </For>
      <button onClick={applyTax2}>Uračunaj porez</button>
    </>
  );
}
