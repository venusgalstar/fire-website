
const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto">
                <div class="contractHolder">Contract: <a href="https://snowtrace.io/address/0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5" target="_blank" rel="noreferrer noopener">0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5</a></div>
                <div className="footer-main">
                    <div className="flex align-center">
                        <img className="img-spin logo-img" src="/img/logo.png" alt="" />
                        <span id="brand-name" className="logo-title" data-nsfw-filter-status="swf">Phoenix <span>Community Capital</span></span>
                    </div>
                    <div className="link-div">
                        <div className="link-container">
                            <span className="footer-link fs-30 noto-bold c-w mobile-show">Menu</span>
                            <span className="footer-link fs-20"><a className="c-gray" href="/" >Home</a></span>
                            <span className="footer-link fs-20"><a className="c-gray" href="mailto:help@thephoenix.finance" >Contact</a></span>
                            <span className="footer-link fs-20"><a className="c-gray" href="/#section-faq" >FAQ</a></span>
                            <span className="footer-link fs-20"><a className="c-gray" href="/app" >App</a></span>
                        </div>
                        <div className="footer-privacy">
                            <span className="footer-link fs-20 fs-30 noto-bold c-w">About</span>
                            <span className="footer-link fs-20 cursor-pointer"><a title="Please read our whitepaper" className="c-gray" onClick={() => { window.open("/docs/Phoenix Community Capital White Paper.pdf") }}>Documentation</a></span>
                            <span className="footer-link fs-20 cursor-pointer"><a title="Please read our whitepaper" className="c-gray" onClick={() => { window.open("/docs/Phoenix Community Capital White Paper.pdf") }}>Whitepaper</a></span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center mobile-show">
                        <div className="c-w fs-30 flex justify-center">
                            Join the Community
                        </div>
                        <div className="flex justify-center m-t-50 footerSocial">
                            <span className="m-r-20">
                            <a href="https://twitter.com/phoenix_fi" target="_blank" rel="noreferrer noopener"><i className="fab fa-twitter"></i></a>
                            </span>
                            <span>
                            <a href="https://discord.gg/uUaZgsZXM5" target="_blank" rel="noreferrer noopener"><i className="fab fa-discord"></i></a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom m-t-20 mobile-hidden">
                    <span className="copy-right">2022, All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

