import './NavBtn.css'

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