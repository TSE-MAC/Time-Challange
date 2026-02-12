import { useImperativeHandle, useRef } from "react"


export default function ResultModal({ ref , targetTime,remainingTime,onReset }) {
    const userLost = remainingTime <= 0;
const  formattedRemainingTime = (remainingTime / 1000).toFixed(2);
const score = Math.round((1-remainingTime /( targetTime * 1000)) * 100);

    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return{
            open(){
              dialog.current.showModal();
            }
        }
    })
    return(
        <dialog ref={dialog} className="result-modal" >
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>You Score {score}</h2>}
            <p>The Target time was <strong>{targetTime} seconds</strong></p>
            <p>You stopped TImer with <strong> {formattedRemainingTime} seconds</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
}