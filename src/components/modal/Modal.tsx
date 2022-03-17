import React from "react";

type Modal = {
    show: boolean,
    setShow: (value: boolean) => void
}

export const Modal: React.FC<Modal> = ({
                                           show,
                                           setShow
                                       }) => {
    const onAddDishHandler = () => {
        setShow(false)
    }
    const onClose = () => {
        setShow(false)
    }

    return (
        <div>
            {show &&
            <div>
                <div>
                    <input/>
                </div>
                <div>
                    <input/>
                </div>
                <button onClick={onAddDishHandler}>Add Dish</button>
                <button onClick={onClose}>X</button>
            </div>
            }
        </div>
    )
}