import { useEffect, useRef } from 'react';
const ScrollController = () => {
    const isScrolling = useRef(false);
    useEffect(() => {
        const handleScroll = (event) => {
            if (isScrolling.current) {
                event.preventDefault();
                return;
            }
            const sections = document.querySelectorAll('.section');
            const currentScroll = window.scrollY;
            const currentSectionIndex = Array.from(sections).findIndex((section) => section.offsetTop - 10 <= currentScroll &&
                section.offsetTop + section.offsetHeight - 10 > currentScroll);
            if (currentSectionIndex === -1)
                return;
            if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
                isScrolling.current = true;
                sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
            }
            else if (event.deltaY < 0 && currentSectionIndex > 0) {
                isScrolling.current = true;
                sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
            }
            setTimeout(() => {
                isScrolling.current = false;
            }, 1000);
            event.preventDefault();
        };
        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);
    return null;
};
export default ScrollController;
