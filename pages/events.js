import { useEffect } from "react";

export default function Events() {
    useEffect(() => {
        window.DiceEventListWidget.create({"information":"simple","eventTitle":"event","showImages":true,"showAudio":true,"showNewBadge":false,"hidePostponed":false,"hideCancelled":true,"layout":"gallery","roundButtons":true,"theme":"dark","fontFamily":"inherit","partnerId":"c3d5496a","apiKey":"0fmc87mV4m1WZHIUtCtN7GDlM0b2_Pqx4JsFZARHFUgIb0yY","version":2,"showPrice":true,"__p":false,"__pc":{},"highlightColour":"#fb00ff","numberOfEvents":"10"});
    }, []);

    return (
        <div className='absolute text-center text-white w-full mt-40 mx-auto'>
            <div id="dice-event-list-widget"></div>
            <script src="https://widgets.dice.fm/dice-event-list-widget.js" type="text/javascript"></script>
        </div>
    );
}
