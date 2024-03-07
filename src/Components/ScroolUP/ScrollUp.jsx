import { GrLinkTop } from "react-icons/gr";

const ScrollUp = () => {
    function scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    return (
        <div className="flex justify-end my-10 px-7">
            <div onClick={scrollToTop} className="btn">
                <GrLinkTop />
            </div>
        </div>
    );
};

export default ScrollUp;