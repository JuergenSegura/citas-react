import React from 'react'

export const Paciente = () => {
    return (
        <div className="m-5 bg-white shadow-md rounded-md px-5 py-10">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Paciente: {''}
                <span className='font-normal normal-case'>Hook</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Dueño: {''}
                <span className='font-normal normal-case'>Juergen</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className='font-normal normal-case'>Juergen98s@gmail.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {''}
                <span className='font-normal normal-case'>18/02/2022</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {''}
                <span className='font-normal normal-case'>Sueño</span>
            </p>
        </div>
    )
}
