import React from 'react';
import Image from 'next/image'
import volver from '../../public/arrow-left.png'

const GoBackButton = () => {
    const handleGoBack = () => {
        // Navegar hacia atrás en el historial del navegador
        window.history.back();
    };

    return (
        <button onClick={handleGoBack} className='showButton'>
            <Image
                id='ocultarBack'
                className='back'
                alt='Indicador to volver'
                src={volver}
                width={45}
                height={45}
            />
        </button>
    );
};

export default GoBackButton;
