import React from 'react';

const footer = () => {
    return (
        <footer>
            <div className="footer">
            <p>&copy; 2024 My Website. All Rights Reserved.</p>
                <div className="avatar-div">
                    <p>Check out the team on Github...</p>
                    <a href="https://github.com/jpquental90" target="_blank">
                    <img src="assets/images/avatar_1.png" alt="avatar icon" width="50px" class="avatar-icon"/>
                    </a>
                    <a href="https://github.com/chrisS-88" target="_blank">
                    <img src="assets/images/avatar_2.png" alt="avatar icon" width="50px" class="avatar-icon"/>
                    </a>
                    <a href="https://github.com/Avr99j" target="_blank">
                    <img src="assets/images/avatar_4.png" alt="avatar icon" width="50px" class="avatar-icon"/>
                    </a>
                    <a href="https://github.com/TheoBurton" target="_blank">
                    <img src="assets/images/avatar_3.png" alt="avatar icon" width="50px" class="avatar-icon"/>
                    </a>
                    <a href="https://github.com/swathi-mungala" target="_blank">
                    <img src="assets/images/avatar_3.png" alt="avatar icon" width="50px" class="avatar-icon"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default footer;