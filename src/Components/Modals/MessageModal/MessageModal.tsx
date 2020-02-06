import React, { CSSProperties, useEffect, useState } from "react";


const MessageModal: React.FC = () => {

    const [paddingTop, changeTop] = useState(-50)

    useEffect(() => { if (!(paddingTop <= -50)) showModal() }, [paddingTop])

    const showModal = () => {
        if (paddingTop < 150) {
            setTimeout(() => {
                changeTop(paddingTop + 1)
            }, 5)
        } else {
            changeTop(150)
            closeModal()
        }
    }

    const closeModal = () => {
        setTimeout(() => {
            setTimeout(() => {
                changeTop(-50)
            }, 5)
        }, 3000)
    }

    const message: CSSProperties = {
        width: 80,
        height: 50,
        backgroundColor: 'yellow',
        position: 'fixed',
        top: paddingTop,
    }

    const wrapper: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div style={wrapper}>
            <div style={message}>
                <span>message Modal</span>
            </div>
            <button onClick={showModal}>show message modal</button>
        </div>);
};


export default MessageModal;