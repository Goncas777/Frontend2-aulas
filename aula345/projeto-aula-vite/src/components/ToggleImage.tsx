import {useState} from 'react';

function ToggleImage() {
    const [toggle, setToggle] = useState(false);
    return (<div>
        <button onClick={() => setToggle(!toggle)}>Toggle Image</button>
        {toggle ? <img src="public/NELZ.jpeg" alt="TOMASMIGUELL" /> : null}
    </div>
    )
}

export default ToggleImage;