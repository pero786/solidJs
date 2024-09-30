import { createSignal } from "solid-js"
import { Dynamic } from "solid-js/web"

 
const Red= () => <div style={{"background-color": "red"}}>Crveni</div>
const Blue= () => <div style={{"background-color": "blue"}}>Plavi</div>
const Green= () => <div style={{"background-color": "green"}}>Zeleni</div>

const options = {
    red: Red,
    blue: Blue,
    green: Green
}

 export default function Dynamo(){
    const [selected, setSelected] = createSignal("red");
    return(
        <div>
            <select value={selected()} onInput={e => setSelected(e.currentTarget.value)}>
                <For each={Object.keys(options)}>
                    {
                        color => <option value={color}>{color}</option>
                    }
                </For>
            </select>
            <Dynamic component={options[selected()]}/>
        </div>
    );
  }