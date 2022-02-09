
const MainFooter = () => {
    return (
        <footer>
            <div className="custom-container mx-auto">
                <div>
                    <div id="footer-brand" className="f-row f2-center gap-2" style={{fontSize: "larger"}}>
                        <img alt="" className="img-spin" width="48" height="48" src="/img/logo-color.png" />
                        <span id="brand-name">FIRE</span>
                    </div>
                    <span id="copyright">© 2021 Copyright FIRE.financial</span>
                </div>
                <div id="links">
                    <div id="links">
                        <a href="/">Main</a> |
                        <a href="/disclaimer">Disclaimer</a>|
                        <a href="#">Docs</a>|
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div id="links">
                    <a href="#">Twitter</a> |
                    <a href="#">Telegram</a> |
                    <a href="#">Discord</a>
                </div>
            </div>
        </footer>
    );
}

export default MainFooter;

