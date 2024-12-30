import React, { useLayoutEffect, useState } from 'react'

const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [])

    return windowSize;
}

export default useWindowResize
