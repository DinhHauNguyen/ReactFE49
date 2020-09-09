import React, { Component } from 'react'
import XucXac from './XucXac'
import KetQuaTroChoi from './KetQuaTroChoi'
import './gameStyle/styleGame.css'

export default class BaiTapGameTaiXiu extends Component {
    render() {
        return (
            <div className="gameXucXac">
                <h3 className="text-center display-4 text-success py-4">BÀI TẬP GAME XÚC XẮC</h3>
                <XucXac></XucXac>
                <KetQuaTroChoi></KetQuaTroChoi>
            </div>
        )
    }
}
