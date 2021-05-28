import { useCallback, useEffect, useState } from 'react';

// 自适应尺寸

const useAutoSize = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    // 利用useCallback 减少 re-render
    const setSizes = useCallback(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, [setWidth, setHeight])

    useEffect(() => {
        window.addEventListener('resize', setSizes)
        setSizes()
    }, [setSizes])

    return { width , height }
}

export default useAutoSize
