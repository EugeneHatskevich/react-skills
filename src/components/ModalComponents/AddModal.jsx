import React, {useState} from 'react'

export const AddModal = (props) => {

    const [coinValue, setValue] = useState('')

    const changeHandler = (event) => {
        setValue(event.target.value)
    }

    const buyCoinValue = () => {
        if (localStorage.getItem("current")) {
            let previous = localStorage.getItem("current")
            localStorage.setItem("previous", previous)
            let current = Number(coinValue) * Number(props.priceUsd).toFixed(2) + Number(previous)
            localStorage.setItem("current", current.toString())
            props.updatePortfolioValue(current, previous)
        } else {
            localStorage.setItem("previous", '0')
            let current = Number(coinValue) * Number(props.priceUsd).toFixed(2)
            localStorage.setItem("current", current.toString())
            props.updatePortfolioValue(current, '0')
        }
        if (localStorage.getItem('list')) {
            const oldList = JSON.parse(localStorage.getItem("list"))
            const newList = [...oldList, {
                name: props.name,
                count: coinValue,
                price: Number(props.priceUsd).toFixed(2),
                value: Number(coinValue) * Number(props.priceUsd).toFixed(2)
            }]
            localStorage.setItem("list", JSON.stringify(newList))
            props.setPortfolio(newList)
        } else {
            const newList = [{
                name: props.name,
                count: coinValue,
                price: Number(props.priceUsd).toFixed(2),
                value: Number(coinValue) * Number(props.priceUsd).toFixed(2)
            }]
            localStorage.setItem("list", JSON.stringify(newList))
            props.setPortfolio(newList)
        }
    }

    return (
        <div className="container">
            <div className="modal fade" id={`Modal${props.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{props.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <p>Введите количество криптовалюты:</p>
                                <input type="number" value={coinValue.coinValue} onChange={changeHandler}
                                       name="coinValue"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={buyCoinValue}>Приобрести
                            </button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}