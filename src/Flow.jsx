import { createSignal, Index } from "solid-js";

export default function Flow() {
    const [users, setUsers] = createSignal([
        {
            id: "1", name: "Pero Perić"
        },
        {
            id: "2", name: "Ana Anić"
        },
        {
            id: "3", name: "Ivan Ivić"
        },
        { id: "4", name: "Marko Markec"}

    ]);

    return (
        <>
        <div>
            <For each={users()}>
                {(user, i) => 
                <div>
                    <h3>{user.name}</h3>
                    <p>Korisnik s indeksom {i} ima id {user.id}</p>
                    </div>}
            </For>
        </div>
        <div>
            <Index each={users()}>
                {
                    (user, i) => 
                        <div>
                            <h3>{user().name}</h3>
                            <p>{i}: id={user().id}</p>
                        </div>
                }

            </Index>
        </div>
        </>
        
    );
}