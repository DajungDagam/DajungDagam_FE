import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Styles from './Writing.module.css';
import Button from '../../../components/Button';

function BarterWriting() {
    const navigate = useNavigate();

    const hadleWritingComplete = () => {
        navigate('/bartercontent', {from: 'BarterWriting'});
    }

    return (   
    <div className={Styles.pageContainer}>
        <Nav />
        <Button 
            type="button"
            title="작성완료"
            onClick={hadleWritingComplete}
        />
        <div className={Styles.photo}>

        </div>
        <div className={Styles.photo}>

        </div>
    </div>
    );
}

export default BarterWriting;