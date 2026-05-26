import { useState } from "react";

function Home() {
    const [count, setCount] = useState(0);

    let award = "";

    if (count >= 5) {
        award = "Great Job";
    }

    return (
        <div>
            <h1>HomePage</h1>
            <h3>Counter</h3>
            <h3>{count}</h3>
            <h3>{award}</h3>
            
            <button onClick={() => {
                if (count < 5) {
                    setCount(count + 1);
                }
            }}>
                Increase
            </button>

            <button onClick={() => {
                if (count > 0) {
                    setCount(count - 1);
                }
            }}>
                Decrease
            </button>
        </div>
    );
}

export default Home;