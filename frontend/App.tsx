import { Button } from "./components/ui";

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
            <div>
                <h1>Bamo</h1>
                <p>Archivos base de Bamo, en desarrollo</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <Button variant="primary" size="lg">Primary Action</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline" size="sm">Outline Small</Button>
            </div>
        </div>
    )
}

export default App
