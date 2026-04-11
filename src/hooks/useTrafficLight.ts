import { useEffect, useState } from "react";

import type { TrafficLightColor } from "../shared/types/color.type";
import { colors } from "../shared/colors";

export const useTrafficLight = (color: TrafficLightColor, initialCounterValue: number) => {
    const [light, setLight] = useState<TrafficLightColor>(color)
    const [countDown, setCountDown] = useState<number>(initialCounterValue);

    useEffect(() => {
        if (countDown === 0) return;
        const intervalId = setInterval(() => {
            setCountDown(prev => prev - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId)
        };
    }, [countDown]);

    useEffect(() => {
        if (countDown === 0) {
            setCountDown(5);
            switch (light) {
                case 'red':
                    setLight('green');
                    break;
                case 'green':
                    setLight('yellow');
                    break;
                default:
                    setLight('red');
                    break;
            };
            return;
        };
    }, [countDown, light])

    return {
        countDown,
        percentage: (countDown / 5) * 100,
        redLight: light === 'red' ? colors[light] : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors[light] : 'bg-gray-500',
        greenLight: light === 'green' ? colors[light] : 'bg-gray-500',
        setLight,
    }
}