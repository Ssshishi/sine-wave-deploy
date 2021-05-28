import Canvas from 'app/components/canvas';

function App() {
    return (
        <div className="App">
            <div className="header-info">
                <h1 className="app-title">Sine Wave</h1>
                <p className="project-source">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="git@github.com:Ssshishi/sine-wave-deploy.git"
                    >
                        [ Find project on GitHub ]
                    </a>
                </p>
            </div>

            <Canvas />
        </div>
    );
}

export default App;
