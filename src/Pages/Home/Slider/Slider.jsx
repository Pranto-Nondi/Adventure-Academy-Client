


import { useEffect, useRef } from "react";

const Slider = () => {
    const buttons = (
        <>
            <button className="btn btn-secondary mr-2">Enroll Now</button>
            <button className="btn btn-outline btn-info">Learn More</button>
        </>
    );

    const carouselRef = useRef(null);
    const slideButtonsRef = useRef([]);

    useEffect(() => {
        const carousel = carouselRef.current;
        const slides = carousel.querySelectorAll('.carousel-item');
        const slideButtons = slideButtonsRef.current;

        let currentIndex = 0;
        let timer;

        const slideInterval = () => {
            timer = setTimeout(() => {
                slides[currentIndex]?.classList.remove('active');
                slideButtons[currentIndex]?.classList?.remove('show');
                currentIndex = (currentIndex + 1) % slides.length;
                slides[currentIndex]?.classList.add('active');
                slideButtons[currentIndex]?.classList.add('show');
                slideInterval();
            }, 5000);
        };

        slideInterval();

        const resetTimer = () => {
            clearTimeout(timer);
            slideInterval();
        };

        slideButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                slides[currentIndex]?.classList.remove('active');
                slideButtons[currentIndex]?.classList.remove('show');
                currentIndex = index;
                slides[currentIndex]?.classList.add('active');
                slideButtons[currentIndex]?.classList.add('show');
                resetTimer();
            });
        });

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <div className="flex justify-center items-center container mx-auto">
                <div className="carousel w-full h-[600px]" ref={carouselRef}>
                    <div id="slide1" className="carousel-item relative w-full active">
                        <img
                            src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwY2FtcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                            className="w-full"
                            alt="Slide 1"
                        />
                        <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className="space-y-8 text-center">
                                <h1 className="text-6xl text-center text-white font-semibold">
                                    Join the Summer Camp Photography School
                                </h1>
                                <p className="text-2xl text-white font-semibold">
                                    Discover the art of photography and capture the world through your lens
                                </p>
                                <div className="flex justify-center">{buttons}</div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle mr-4">
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle mr-4">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwY2FtcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                            className="w-full"
                            alt="Slide 2"
                        />
                        <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className="space-y-8 text-center">
                                <h1 className="text-6xl text-white font-semibold">
                                    Unleash Your Creativity with Photography
                                </h1>
                                <p className="text-2xl text-white font-semibold">
                                    Learn composition, lighting, and editing techniques from industry professionals
                                </p>
                                <div className="flex justify-center">{buttons}</div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle mr-4">
                                ❮
                            </a>
                            <a href="#slide3" className="btn btn-circle mr-4">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwY2FtcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                            className="w-full"
                            alt="Slide 3"
                        />
                        <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className="space-y-8 text-center">
                                <h1 className="text-6xl text-white font-semibold">
                                    Capture Beautiful Moments at Summer Camp
                                </h1>
                                <p className="text-2xl text-white font-semibold">
                                    Join us for an unforgettable experience and document memories that last a lifetime
                                </p>
                                <div className="flex justify-center">{buttons}</div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle mr-4">
                                ❮
                            </a>
                            <a href="#slide4" className="btn btn-circle mr-4">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwY2FtcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                            className="w-full"
                            alt="Slide 4"
                        />
                        <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className="space-y-8 text-center">
                                <h1 className="text-6xl text-white font-semibold">Become a Master of Photography</h1>
                                <p className="text-2xl text-white font-semibold">
                                    Develop your skills, build your portfolio, and embark on a lifelong passion
                                </p>
                                <div className="flex justify-center">{buttons}</div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle mr-4">
                                ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle mr-4">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;



