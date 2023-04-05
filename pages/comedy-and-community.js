import { useCallback } from "react";
import Script from "next/script";

export default function Events() {
    const onDiceLoad = useCallback(() => {
        if (window.DiceEventListWidget) {
            window.DiceEventListWidget.create({"information":"simple","eventTitle":"event","showImages":true,"showAudio":false,"showNewBadge":false,"hidePostponed":false,"hideCancelled":true,"layout":"list","roundButtons":true,"theme":"dark","fontFamily":"inherit","partnerId":"c3d5496a","apiKey":"nkvo0ySBVc1OdE6tLTHO35ZF35vioOQV2chuvMob","version":2,"showPrice":true,"__p":false,"__pc":{},"highlightColour":"#fb00ff","numberOfEvents":"10","title":"Comedy & Community Events","venues":["SILO - Comedy & Community Events"]})
        
            return () => window.DiceEventListWidget.destroy();
        }
    }, [])   
 
    return (
        <div className='absolute text-center text-white w-full mt-40'>
            <div className='mx-auto w-9/12' id="dice-event-list-widget"></div>
            <Script src="https://widgets.dice.fm/dice-event-list-widget.js" type="text/javascript" onLoad={onDiceLoad}></Script>
        </div>
    );
}
