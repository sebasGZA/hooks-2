import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubtitle } from "./ui/MySubtitle";



export const MemoHook = () => {

    const [title, setTitle] = useState('World');
    const [subtitle, setSubtitle] = useState('Hello');
    const handleMyAPICall = useCallback(() => {
        console.log('call my API', subtitle)
    }, [subtitle])

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl front-thin text-white">
                Memo App
            </h1>

            <MyTitle title={title} />

            <MySubtitle
                subtitle={subtitle}
                callMyAPI={handleMyAPICall}
            />

            <button
                onClick={() => setTitle('hello')}
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
                Change title
            </button>

            <button
                onClick={() => setSubtitle('hello2')}
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
                Change subtitle
            </button>
        </div>
    )
}