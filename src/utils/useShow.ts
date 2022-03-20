import {useState} from "react";

export const useShow= () => {
    const [show, setShow] = useState(false)

    return{
        show,
        setShow: (value: boolean) =>  setShow(value)
    }
}