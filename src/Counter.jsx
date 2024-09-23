import { createEffect, createSignal } from "solid-js";

export default function Counter() {
    const [counter, setCounter ] = createSignal(0);

    createEffect(()=>{

        if (counter() % 2 == 0){
            console.log(counter() + "je djeljiv s dva");
        }

    });




    setInterval(()=>{
        setCounter(counter()+1);
    },1000);
    
    return (
        <div>
            Brojač: {counter()}
        </div>
    )
}