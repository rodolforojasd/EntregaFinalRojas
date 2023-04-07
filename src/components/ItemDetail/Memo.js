import { memo } from "react"



const Memo = memo(() => {

    console.log("Me rendericé")

    let number = 0

    for (let i = 0; i < 100; i++) {
        number += i * i
        console.log(number)
    }

    return (
        <div>
            <h4>Soy un memo: {number}</h4>
        </div>
    )
})

export default Memo