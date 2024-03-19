
import "./CardBtn.css"
// eslint-disable-next-line react/prop-types
const CardBtn = ({ text }) => {
    return (
        <div>
            <button className="ui-btn">
                <span className="text-xs md:text-xl lg:text-xl">
                    {text}
                </span>
            </button>
        </div>
    );
};

export default CardBtn;