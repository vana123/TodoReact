import React from "react";
import './AboutPage.scss'
// import {useHis} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    return <>   
        <div className="About">
            <h1 className="About__title title">page inform</h1>
            <div className="About__body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quis corporis cum incidunt eos molestias eius reprehenderit laboriosam rem nihil?</p>
                <button className="btn About__btn">back</button>
            </div>
        </div>
    </>
}