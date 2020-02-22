import React, { CSSProperties, useState, useRef } from 'react';
interface IProps {

}

const Chat = (props: IProps) => {

    const inputRef: any = useRef()

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <input ref={inputRef} />
            <button>Play</button>
        </div >
    )

};

export default Chat;