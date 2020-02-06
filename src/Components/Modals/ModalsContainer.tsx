import React from 'react';
// import s from './Modal.module.css'
import SimpleModal from './SimpleModal/SimpleModal';
import QuestionModal from './QuestionModal/QuestionModal';
import InputModal from './InputModal/InputModal';
import MessageModal from './MessageModal/MessageModal';

interface IProps {
}

const ModalsContainer: React.FC<IProps> = () => {

    return (
        <div>
            <SimpleModal />
            <QuestionModal />
            <InputModal />
            <MessageModal />
        </div>
    )

};

export default ModalsContainer;