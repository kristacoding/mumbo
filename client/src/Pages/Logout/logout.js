import React from "react";
function logout() {

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    return (
        <div className="d-flex justify-content-center">
            <h3>Hope we cleared up all your SEO mumbo jumbo - Come back soon! </h3>
        </div>
    );
}
export default logout
