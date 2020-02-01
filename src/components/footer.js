import React from 'react'
import logo from '../images/Ramadan-Logo-Dark.jpg'

import './footer.css'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="site-footer-inner has-top-divider">
                    <div className="brand footer-brand">
                        <a href="https://www.ramadanmakers.com">
                            <img border={0} alt="Ramadan" src={logo} />
                        </a>
                    </div>
                    <ul className="footer-links list-reset">
                        <li>
                            <a href="https://getmakerlog.com/products/ramadan-makers"> Makerlog</a>
                        </li>
                        <li>
                            <a href="https://t.me/ramadanmakers"> Telegram</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/ramadanmakers"> Twitter</a>
                        </li>
                    </ul>
                    <ul className="footer-social-links list-reset">
                        <li>
                            <a href="https://getmakerlog.com/products/ramadan-makers/">
                                <span className="screen-reader-text">Makerlog</span>
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.9274 3.98429C14.212 2.75868 13.2416 1.78829 12.0159 1.07292C10.79 0.357591 9.45182 0 8.00025 0C6.54883 0 5.21022 0.357591 3.98457 1.07292C2.75884 1.78818 1.78844 2.75857 1.07303 3.98429C0.357593 5.21009 0 6.54869 0 8C0 9.45138 0.357702 10.7898 1.07293 12.0156C1.78829 13.2412 2.75869 14.2116 3.98442 14.9271C5.21022 15.6424 6.54872 16 8.00011 16C9.4515 16 10.7901 15.6424 12.0159 14.9271C13.2415 14.2119 14.2119 13.2412 14.9272 12.0156C15.6424 10.7899 16 9.45131 16 8C16 6.54855 15.6424 5.2099 14.9274 3.98429ZM13.1875 6.78125L7.53131 12.4374C7.39934 12.5695 7.23972 12.6354 7.05211 12.6354C6.87158 12.6354 6.71539 12.5695 6.58338 12.4374L2.8124 8.66666C2.68755 8.54155 2.62498 8.38561 2.62498 8.19793C2.62498 8.00354 2.68733 7.8437 2.8124 7.71866L3.76033 6.78125C3.89244 6.64932 4.04849 6.58335 4.22916 6.58335C4.40984 6.58335 4.56611 6.64935 4.698 6.78125L7.05222 9.13538L11.3022 4.89584C11.4342 4.76387 11.5904 4.69787 11.7709 4.69787C11.9514 4.69787 12.1078 4.76387 12.2397 4.89584L13.1876 5.8334C13.3128 5.95832 13.3751 6.11802 13.3751 6.31241C13.3751 6.49998 13.3128 6.65625 13.1875 6.78125Z"
                                        fill="white"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/ramadanmakers">
                                <span className="screen-reader-text">Telegram</span>
                                <svg
                                    width={16}
                                    height={14}
                                    viewBox="0 0 16 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.282608 6.67971L3.96933 8.05572L5.39632 12.6449C5.48763 12.9388 5.84704 13.0475 6.0856 12.8524L8.14064 11.1771C8.35606 11.0016 8.66288 10.9928 8.88801 11.1563L12.5946 13.8473C12.8498 14.0328 13.2113 13.8929 13.2753 13.5846L15.9906 0.523705C16.0604 0.186852 15.7295 -0.0941621 15.4087 0.0298914L0.278288 5.86675C-0.0950996 6.01075 -0.0918463 6.53939 0.282608 6.67971ZM5.16635 7.32323L12.3716 2.88552C12.5011 2.806 12.6343 2.9811 12.5231 3.08424L6.5767 8.61172C6.36768 8.80628 6.23286 9.06665 6.19467 9.34926L5.99211 10.8504C5.96528 11.0508 5.68373 11.0707 5.62843 10.8767L4.84939 8.1394C4.76016 7.82718 4.89019 7.49369 5.16635 7.32323Z"
                                        fill="white"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/ramadanmakers">
                                <span className="screen-reader-text">Twitter</span>
                                <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                                        fill="#FFF"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="footer-copyright">© 2019-2020 RamadanMakers.com</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
