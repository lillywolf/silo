import { useEffect } from "react";

export default function Events() {
    useEffect(() => {
        if (window.DiceEventListWidget) {
            window.DiceEventListWidget.create({"information":"simple","eventTitle":"event","showImages":true,"showAudio":true,"showNewBadge":false,"hidePostponed":false,"hideCancelled":true,"layout":"gallery","roundButtons":true,"theme":"dark","fontFamily":"inherit","partnerId":"c3d5496a","apiKey":"nkvo0ySBVc1OdE6tLTHO35ZF35vioOQV2chuvMob","version":2,"showPrice":true,"__p":false,"__pc":{},"highlightColour":"#fb00ff","numberOfEvents":"10","venues":["Silo Brooklyn"]})
    
            return () => window.DiceEventListWidget.destroy();
        }
    }, [])   
 
    return (
        <div className='absolute text-center text-white w-full mt-40'>
            <div className='mx-auto w-10/12 md:w-7/12' id="dice-event-list-widget"></div>
            <script src="https://widgets.dice.fm/dice-event-list-widget.js" type="text/javascript"></script>
        </div>
    );
}
