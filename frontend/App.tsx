import { Button } from "./components/ui";
import { Header } from "./components/layout/header";

function App() {
    return (
        <>
            <Header />
            <main className="container">
                <div>
                    <h1>Bamo</h1>
                    <p>Archivos base de Bamo, en desarrollo</p>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button variant="primary" size="lg">Acción Principal</Button>
                    <Button variant="secondary">Secundario</Button>
                </div>
            </main>
        </>
    )
}

export default App
