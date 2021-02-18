function logout() {

    logout = () => {
        req.logout();
        res.redirect("/");
    }

    return (
        <div className="d-flex justify-content-center">
            <h3>Hope we cleared up all your SEO mumbo jumbo - Come back soon! </h3>
        </div>
    );
}
export default logout
