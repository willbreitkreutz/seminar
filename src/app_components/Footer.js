import React, { useEffect, useState} from 'react';

function Footer() {

    const [ width, setWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize)
        }
      }, [])

    return (
        <>
        <p>{ `The screen width is ${width}` }</p>
        <p>This app brought to you by the KC React Seminar</p>
        </>
    )
}

export default Footer;