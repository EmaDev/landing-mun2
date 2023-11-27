"use client"

interface Props {
    title:string;
    fun?: any;
}
export const Button = ({fun, title}:Props) => {
    
    return (
        <button onClick={(e) => {fun(e.target)}}>
            {title}
        </button>
    )
}