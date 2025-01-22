import { useEffect, useRef } from 'react';
const ScrollController = () => {
    const isScrolling = useRef(false); // Prevent overlapping scroll events
    useEffect(() => {
        const handleScroll = (event) => {
            if (isScrolling.current) {
                event.preventDefault();
                return; // Block any new scroll events during animation
            }
            const sections = document.querySelectorAll('.section');
            const currentScroll = window.scrollY;
            // Detect the current section
            const currentSectionIndex = Array.from(sections).findIndex((section) => section.offsetTop - 10 <= currentScroll && // Adjusted threshold
                section.offsetTop + section.offsetHeight - 10 > currentScroll);
            if (currentSectionIndex === -1)
                return; // No valid section found
            // Handle scrolling logic
            if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
                // Scroll down to the next section
                isScrolling.current = true;
                sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
            }
            else if (event.deltaY < 0 && currentSectionIndex > 0) {
                // Scroll up to the previous section
                isScrolling.current = true;
                sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
            }
            // Sync timeout with scroll animation duration
            setTimeout(() => {
                isScrolling.current = false; // Allow scrolling again
            }, 1000); // Match typical smooth scroll duration
            event.preventDefault(); // Prevent default browser scrolling
        };
        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);
    return null; // No visual component
};
export default ScrollController;
