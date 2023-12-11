import './Button.css'

const Button = () => {
    return (
        <div>
            <button id='btn1' className="btn" type="button">
                <strong>RESUME</strong>
                <div id="container-stars">
                    <div id="stars"></div>
                </div>

                <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </button>
        </div>
    );
};

export default Button;