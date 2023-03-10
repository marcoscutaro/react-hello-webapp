import React from "react";

const Carousel = (props) => {
    return (
        <section className="carouselSection">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props.fondo1} className="centerSlider w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={props.fondo2} className="centerSlider w-100 middleImage" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={props.fondo3} className="centerSlider w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={props.fondo5} className="centerSlider w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
};

export default Carousel;