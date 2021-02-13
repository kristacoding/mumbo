function logout() {
    
    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    return (
        <div>
            <h3>Hope we cleared up all your SEO mumbo jumbo - Come back soon! </h3>
        </div>
    );
} 
export default logout
