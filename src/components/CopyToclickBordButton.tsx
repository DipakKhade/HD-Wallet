import { FaRegCopy } from "react-icons/fa6";


export default function CopyToClickBord({text}:{text:string}){
    return<>
    <div>
        <button onClick={async()=>{
            await navigator.clipboard.writeText(text)
            
        }}>
    <FaRegCopy className="text-blue-500 text-3xl pl-3"/>
    </button>
    </div>
    </>
}