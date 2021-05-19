import React, {useState} from 'react'

export const AddModal = (props) => {

    const [coinValue, setValue] = useState({coinValue: ''})

    const changeHandler = (event) => {
        setValue({...coinValue, [event.target.name]: event.target.value})
    }

    const buyCoinValue = () => {}

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
                                <input type="number" value={coinValue.coinValue} onChange={changeHandler} name="coinValue"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={buyCoinValue}>Приобрести</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}