import { useState } from "react";



export default function Toast({ message }: { message: string }) {
    const [responseMessage, setResponseMessage] = useState("");
    
    setTimeout(() => {
        setResponseMessage("")
    }, 3000)
    
    return (
        <div className={`${message == ""? 'hidden':'flex'} pointer-events-none w-full flex`}>
            <p className="p-2 px-4 mt-6 bg-stone-700">{message}</p>
        </div>
    )
}