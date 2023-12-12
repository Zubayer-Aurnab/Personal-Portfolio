

const ContactBtn = () => {


    return (
        <div>
            <button  id='btn1' className="btn" type="button">
                <strong>Contact</strong>
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

export default ContactBtn;