
import {useState} from "react";

function useCategory(initialValue) {
    const [state, setState] = useState(initialValue);

    function handleChange(e) {
        setState(e.target.value);
    }

    function reset() {
        setState("");
    }

    return [state, handleChange, reset];
}

export default useCategory;