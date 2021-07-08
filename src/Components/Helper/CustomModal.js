import React from 'react'   
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function CustomModal({open, text, onClose}) {


    return (
        <div>
            <Modal 
            open={open} 
            onClose={onClose} 
            center
            classNames = {{
                modal : 'customModal',
                overlay: 'customOverlay' 
            }}
            >
                {text}
            </Modal>
        </div>
    )
}

export default CustomModal
