import {Route, Routes} from "react-router-dom";
import BackArrow from "./back-arrow";
import React from "react";

const FirstScreenRenderer = (props) => {
    let fsName = 'firstscreen-common fs-common-' + props.page;
    return (
        <div className={fsName}>
            <div className='mask'>
                <div className='text-container'>
                    <Routes>
                        <Route exact path={`/`} element={
                            <BackArrow title={props.title}/>
                        } />
                    </Routes>
                </div>
            </div>
            <div className='fader-common'></div>
        </div>
    );
};

export default FirstScreenRenderer;