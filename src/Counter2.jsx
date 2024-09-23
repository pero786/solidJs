import { createMemo, createSignal } from "solid-js";

function fibonacci(num){
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

export default function Counter2(){

    const [count, setCount] = createSignal(10);
    const calc = createMemo(() => {
        console.log("Računam...");
        return fibonacci(count());
    });
    
    return (
        <div>
            <button onClick={() => setCount(count() + 1)}>Dodaj 1</button>
            <ul>
                <li> {calc()} {calc()}{calc()}{calc()}{calc()}</li>
                <li> {calc()} {calc()}{calc()}{calc()}{calc()}</li>
                <li> {calc()} {calc()}{calc()}{calc()}{calc()}</li>
                <li> {calc()} {calc()}{calc()}{calc()}{calc()}</li>
                <li> {calc()} {calc()}{calc()}{calc()}{calc()}</li>
                <li> {calc()} {calc()}{calc()}{calc()}{calc()}</li>
                <li> {calc()} {calc()}{calc()}{calc()}{calc()}</li>
                <li> {calc()} {calc()}{calc()}{calc()}{calc()}</li>
                <li> {calc()} {calc()}{calc()}{calc()}{calc()}</li>
                <li> {calc()} {calc()}{calc()}{calc()}{calc()}</li>
            </ul>
        </div>
    )

}