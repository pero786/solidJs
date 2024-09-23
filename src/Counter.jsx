import { createEffect, createSignal } from "solid-js";

export default function Counter() {
    const [counter, setCounter ] = createSignal(0);

    createEffect(()=>{

        if (counter() % 2 == 0){
            console.log(counter() + "je djeljiv s dva");
        }

    });

    const doubleCount = () => counter() * 2;




    setInterval(()=>{
        setCounter(counter()+1);
    },1000);
    
    return (
        <div>
            Brojač: {counter()}
            <br />
            Dupli brojač: {doubleCount()}
        </div>
    )
}