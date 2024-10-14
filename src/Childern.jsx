export default function Children(){
return(
    <>
    <Local>
        <p>Ja sam dijete 1</p>
        <p>Ja sam dijete 2</p>
        <p>Ja sam dijete 3</p>
        <p>Ja sam dijete 4</p>
        <p>Ja sam dijete 5</p>
        <p>Ja sam dijete 6</p>
        <p>Ja sam dijete 7</p>
        <p>Ja sam dijete 8</p>
        <p>Ja sam dijete 9</p>
        <p>Ja sam dijete 10</p>
        <p>Ja sam dijete 11</p>
        <p>Ja sam dijete 12</p>
        <p>Ja sam dijete 13</p>
        <p>Ja sam dijete 14</p>

    </Local>
    </>

);
}
function Local(props){
    return(
        <>
        <h2>Ovo su moja djeca:</h2>
        <div style= "background-color:violet; padding: 10px;">{props.children}</div>
        </>
    );
}