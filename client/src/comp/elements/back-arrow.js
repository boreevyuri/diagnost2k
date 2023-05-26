import arrow from './img/arrow.svg';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";
import React, {Fragment} from "react";

const BackArrow = (props) => {
    const { t } = useTranslation();

    return (
        <Fragment>
            <div className='cool-fs-title'>
                <Link to={`/`}>
                    <div className='catalog-back-trigger common-back'>
                        <img src={arrow} alt='' />
                    </div>
                </Link>
                {t(props.title)}
            </div>
        </Fragment>
    );
}

export default BackArrow;