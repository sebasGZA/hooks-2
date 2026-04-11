import { useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLightWithHook = () => {

    const {
        countDown,
        percentage,
        redLight,
        yellowLight,
        greenLight,
        setLight,
    } = useTrafficLight('green', 5)

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">

                <h1 className="text-white text-2xl">Traffic light with useEffect</h1>
                <h2 className="text-white text-xl">Countdown: {countDown}</h2>

                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
                        style={{ width: `${percentage}%` }}>
                    </div>
                </div>


                <div className={`w-32 h-32 ${redLight} rounded-full`}></div>
                <div className={`w-32 h-32 ${yellowLight} rounded-full`}></div>
                <div className={`w-32 h-32 ${greenLight} rounded-full`}></div>

                <div className="flex gap-2">
                    <button
                        onClick={() => setLight('red')}
                        name="red"
                        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Rojo
                    </button>
                    <button
                        onClick={() => setLight('yellow')}
                        name="yellow"
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Amarillo
                    </button>
                    <button
                        onClick={() => setLight('green')}
                        name="green"
                        className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Verde
                    </button>
                </div>
            </div>
        </div>
    );
};