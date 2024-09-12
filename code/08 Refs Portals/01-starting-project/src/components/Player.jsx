import {useState, useRef} from "react";

export default function Player() {
    const [name, setName] = useState(null);
    const nameRef = useRef();
    function btnClick(e) {
        setName(nameRef.current.value);
    }

    return (
    <section id="player">
      <h2>Welcome {name ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={nameRef} />
        <button onClick={btnClick}>Set Name</button>
      </p>
    </section>
  );
}
