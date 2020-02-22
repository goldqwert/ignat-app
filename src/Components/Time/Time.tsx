import React, { useState } from 'react';
import moment from 'moment';
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';

const Time = () => {

    const time = new Date()

    const [time1, setTime1] = useState(moment(time))
    const [time2, setTime2] = useState(moment(time))
    const newTime = moment.utc(time1.diff(time2))

    return (
        <div>
            <div>time</div>
            <div>{moment().format('HH:mm:ss')}</div>
            <div><input type="time" onChange={(e) => console.log(e.currentTarget.value)} /></div>
            <div>
                <div>
                    <TimePicker value={time1} onChange={setTime1} format={'dddd HH:mm:ss'} />
                </div>
                ---
                <div>
                    <TimePicker value={time2} onChange={setTime2} />
                </div>
                ===
                <div>
                    <TimePicker value={newTime} />
                </div>
            </div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <div>gwagwag</div>
            <button onClick={() => { window.window.scroll(0, 0) }}>^</button>
        </div>
    )

};

export default Time;