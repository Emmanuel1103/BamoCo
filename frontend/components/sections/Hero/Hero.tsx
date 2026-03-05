import "./Hero.css";
import Button from "../../ui/Button/Button";
import ImgHero from "../../../public/assets/Hero/hero1.png"

export const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Descubre rutas de bus en tiempo real</h1>
                        <p>Encuentra fácilmente los buses cercanos y planifica tu trayecto en Barranquilla</p>
                    </div>
                    <div className="hero-actions">
                        <Button variant="primary" size="lg">Ver rutas cercanas</Button>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={ImgHero} alt="BamoApp" />
                </div>

                <div className="scroll-indicador">
                    <span>↓</span>
                </div>
            </div>
        </section>
    );
};