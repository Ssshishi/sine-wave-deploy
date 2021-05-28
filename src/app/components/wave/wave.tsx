import { FC } from 'react';
import { useCanvasContext } from 'app/hooks/useCanvas';
import useAutoSize from 'app/hooks/useAutoSize';
import { default as WaveObj } from 'app/lib/wave';

const Wave: FC = () => {
    const { context } = useCanvasContext();
    console.log(111,context)
    // 自适应尺寸
    const { width, height } = useAutoSize();
    let frequency = 0.013;
    const waves = {
        frontWave: new WaveObj([0.0211, 0.028, 0.015], 'rgba(255,179,0,0.88)'),
        backWave: new WaveObj([0.0122, 0.018, 0.005], 'rgba(255,179,0,0.48)'),
    };

    const render = () => {
        context?.clearRect(0, 0, width, height);
        Object.entries(waves).forEach(([, wave]) => {
            wave.draw(context!, width, height, frequency);
        });
        frequency += 0.013;
        requestAnimationFrame(render);
    };
    if (context) render();
    return null;
};

export default Wave;
