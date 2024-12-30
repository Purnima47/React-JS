import React, { useCallback, useState } from 'react'
import Counter from './counter';

const UseCallBackEx = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const memorizeSetCountOneFn = useCallback(() => setCountOne(countOne + 1), [countOne])
    const memorizeSetCountTwoFn = useCallback(() => setCountTwo(countTwo + 1), [countTwo])

    return (
        <div>
            <h1>Use Callback</h1>
            {/* <Counter countValue={countOne} onClick={() => setCountOne(countOne + 1)} />
            <Counter countValue={countTwo} onClick={() => setCountTwo(countTwo + 1)} /> */}

            <Counter countValue={countOne} onClick={memorizeSetCountOneFn} />
            <Counter countValue={countTwo} onClick={memorizeSetCountTwoFn} />
        </div>
    )
}

export default UseCallBackEx
