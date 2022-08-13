import { useEffect } from "react"
import './stules.css'


function Month() {

    useEffect(() => {
        console.log(new Date(now.getFullYear(), 6, 1).getDay())
    }, [])

    const months = new Date(2022, 6, 0).getDate()
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), 6, 1);
    const arr = []
    for (let i = 0; i < months; i++) {
        arr.push(i + 1)
    }
    const days = [1, 2, 3, 4, 5, 6, 7]

    return (

        <>
            <ul className="first">
                {
                    days.map((e) => {
                        return <li key={Math.random()}>{e}</li>
                    })
                }
            </ul>
            <ul className="second">
                {
                    arr.map((e) => {
                        return <li key={Math.random()}>{e}</li>
                    })
                }
            </ul>

        </>

    )
}

export default Month