"use client";

import React from 'react';

interface Props {
    action: (lado: "BACK" | "NEXT" | "NULL", posicion?: number) => void;
    length: number;
    active: number;
}

export const Paginador = ({ action, length, active}: Props) => {

    const renderPages = () => {
        const arr = Array.from({ length: length }, (_, index) => index);

        return arr.map((item) => (
            <li key={item}>
                <button className={`block w-10 h-10 text-center border border-gray-100 rounded leading-8
                ${active == item ? "bg-red-300" : ""}`}
                onClick={() => action("NULL", item)} >
                    {item}
                </button>
            </li>
        ))

    }

    return (
        <ol className="flex justify-center text-xs font-medium space-x-1 absolute bottom-0">
            <li>
                <button 
                onClick={() => action("BACK")}
                className="inline-flex items-center justify-center w-10 h-10 border border-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </button>
            </li>

            {renderPages()}

            <li>
                <button
                onClick={() => action("NEXT")}
                className="inline-flex items-center justify-center w-10 h-10 border border-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </button>
            </li>
        </ol>
    )
}
