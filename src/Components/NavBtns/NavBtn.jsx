import './NavBtn.css'

// eslint-disable-next-line react/prop-types
const NavBtn = ({ text }) => {
    return (
        <button className="ui-btn">
            <span>
                {text}
            </span>
        </button>
    );
};

export default NavBtn;