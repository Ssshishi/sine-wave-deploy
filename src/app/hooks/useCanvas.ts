import { createContext, useContext } from 'react';
// createContext  为了共享那些对于一个组件树而言是“全局”的数据

export const CanvasContext = createContext<{
    context: CanvasRenderingContext2D | undefined;
}>({
    context: undefined,
});

// 创建 useCanvasContext 类型为 CanvasRenderingContext2D  Canvas API的一部分，可为 元素的绘图表面提供2D渲染上下文
export const useCanvasContext = () => {
    return useContext(CanvasContext);
};
