import { createSignal, mergeProps } from "solid-js";

export default function Pvp(){
    const [name,setName] = createSignal();
    return(
        <>
        <Local greeting="dobar dan" name="Pero"/>
        <Local name="Ivek"/>
        <Local greeting="Ćao"/>
        <Local name={name()}/>
        <button onClick={() => setName("Jura")}>Promjeni ime </button>
        </>
    )

}
 function Local(props){
    const merged = mergeProps({greeting: "Bok", name : "Ivan"}, props);

    return(
        <h1>{merged.greeting} {merged.name}</h1>

    )
 }