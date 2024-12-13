import React, { ReactNode } from "react";

type btype = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ContainerProps {
    children: ReactNode;
    className?: string; 
  } 

const Button: React.FC<ContainerProps> = ({children, className = '', ...rest}:btype)=>{
    return <button className={`font-poppins font-bold border border-black  hover:bg-[#B88E2F] hover:text-white hover:border-transparent ${className}`} {...rest}>
            {children}
    </button>
    
}


export default Button;