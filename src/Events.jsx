export default function Events(){
    function handleEvent1 (event) {
        console.log(event.clientX, event, event.clientY);
    }
    return (
        <div>
        <div onMouseMove={handleEvent1}> TEST</div>
        <button onClick={() => {alert("GUMB JE KLIKNUT")}}>KLIKNI ME</button>
        </div>
    )
}