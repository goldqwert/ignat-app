import React, { CSSProperties, useState } from 'react';
interface IProps {

}

const Color = (props: IProps) => {

    const [color, setColor] = useState('#00ffff')

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div>Color</div>
            <div><input type="color" value={color} onChange={(e) => setColor(e.currentTarget.value)} /></div>
            <div style={{ width: '100px', height: '100px', background: color }}></div>
            <div
                style={{
                    width: '300px',
                    height: '100px',
                    background: `linear-gradient(to top, #E4AF9D 20%, #E4E4D8 50%, #A19887 80%)`,
                }}
            />
        </div >
    )

};

export default Color;