import React, { useEffect, useRef } from 'react'

const Hooks = () => {
    const countValue = useRef(0);
    const divElementRef = useRef();
    const inputRefElement = useRef();

    function handleClick() {
        countValue.current++;
        console.log(countValue.current);
    }

    useEffect(() => {
        const getDivRefernce = divElementRef.current;
        inputRefElement.current.focus();

        getDivRefernce.style.color = 'red';

        setTimeout(() => {
            getDivRefernce.style.color = 'green';

            setTimeout(() => {
                getDivRefernce.style.color = 'blue';
            }, 1000)

        }, 2000)

        console.log(getDivRefernce);
    }, []);

    return (
        <div>
            <h1>Use ref, use callback and use memo hook</h1>
            <button onClick={handleClick}>Click me</button>
            <div ref={divElementRef}>Some random text</div>
            <input name='name' placeholder='Enter your name' ref={inputRefElement} />
        </div>
    )
}

export default Hooks