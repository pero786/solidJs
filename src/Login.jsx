import { createSignal, Show } from "solid-js";

export default function Login(){
    const [loggedIn, setLoggedIn] = createSignal(false);
    const toggle = () => setLoggedIn(!loggedIn());

    return (

        <div>
            <Show when={loggedIn()} 
            fallback={<button onclick={toggle}>Log in</button>}>
            <button onclick={toggle}>Log out</button>
            </Show>
        </div>
    )
}