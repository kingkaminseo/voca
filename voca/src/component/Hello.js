// const Hello = () => {
//     <p>Hello</p>;
// };

import World from "./World";
import styles from"./Hello.module.css";

// export default Hello;

export default function Hello() {
    return <div>
                <h1
                style={{
                    color: '#f00',
                    borderRight: '12px solid #000',
                    marginBottom: '50px',
                    opacity: 1,
                }}>Hello</h1>
                <div className={styles.box}></div>
            </div>
}