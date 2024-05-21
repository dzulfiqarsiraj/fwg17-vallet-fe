// import
import { FiPhone} from "react-icons/fi"
import { FiMail } from "react-icons/fi"
import walletIcon from "../assets/media/wallet.png"

const Footer = () => {
    return (
        <>
            <header className="bg-[#764abc] flex justify-center">
                <div className=" flex flex-col w-full max-w-[80%] py-[40px]">
                    <form className="flex md:flex-row flex-col justify-between gap-[40px] items-start mb-[100px]">
                        <div className="flex flex-col gap-[20px]">

                            <div className="flex items-center gap-2 w-fit">
                                <img src={walletIcon} alt="wallet icon"/>
                                <span className="text-lg text-white sm:text-3xl">Vallet</span>
                            </div>

                            <span className="text-white">Clarity gives you the blocks and components you need to create a truly
                                professional
                                website.</span>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <span className="text-white text-[18px]">GET IN TOUCH</span>
                            <div className="flex gap-[10px] items-center">
                                <div><FiPhone className="text-white" /></div>
                                <span className="text-white">+62 5637 8882 9901</span>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <div><FiMail className="text-white" /></div>
                                <span className="text-white">contact@vallet.com</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <span className="text-white text-[18px]">SOCIAL MEDIA</span>
                            <div className="flex gap-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="222" height="42" viewBox="0 0 222 42" fill="none">
                                    <circle cx="21" cy="21" r="21" fill="white"/>
                                    <path
                                        d="M30.3107 16.4747C29.6822 16.754 29.0187 16.9286 28.3203 17.0334C29.0187 16.6143 29.5774 15.9509 29.8218 15.1478C29.1584 15.5319 28.4251 15.8112 27.622 15.9858C26.9934 15.3223 26.0856 14.9033 25.1078 14.9033C23.2222 14.9033 21.6858 16.4397 21.6858 18.3253C21.6858 18.6047 21.7207 18.8491 21.7906 19.0935C18.9622 18.9539 16.4131 17.592 14.7021 15.4969C14.4228 16.0207 14.2482 16.5794 14.2482 17.2079C14.2482 18.3952 14.8418 19.4427 15.7846 20.0713C15.2259 20.0363 14.7021 19.8967 14.2133 19.6522V19.6872C14.2133 21.3632 15.4005 22.76 16.9718 23.0743C16.6925 23.1441 16.3782 23.179 16.0639 23.179C15.8544 23.179 15.61 23.1441 15.4005 23.1092C15.8544 24.471 17.1115 25.4836 18.613 25.4836C17.4258 26.3915 15.9592 26.9502 14.3529 26.9502C14.0736 26.9502 13.7942 26.9502 13.5498 26.9153C15.0862 27.893 16.8671 28.4517 18.8225 28.4517C25.1428 28.4517 28.5997 23.2139 28.5997 18.6745C28.5997 18.5348 28.5997 18.3603 28.5997 18.2206C29.2631 17.7666 29.8568 17.173 30.3107 16.4747Z"
                                        fill="#764abc" />
                                    <circle cx="81" cy="21" r="21" fill="white" />
                                    <path
                                        d="M79.0631 30.4557V22.1254H76.2598V18.8789H79.0631V16.4847C79.0631 13.7063 80.7601 12.1934 83.2386 12.1934C84.4259 12.1934 85.4463 12.2818 85.7436 12.3213V15.2249L84.0246 15.2257C82.6766 15.2257 82.4156 15.8662 82.4156 16.8062V18.8789H85.6304L85.2119 22.1254H82.4156V30.4557H79.0631Z"
                                        fill="#764abc" />
                                    <circle cx="141" cy="21" r="21" fill="white" />
                                    <path
                                        d="M141.001 12.6708C143.714 12.6708 144.035 12.681 145.107 12.7298C145.752 12.7377 146.39 12.8561 146.994 13.0797C147.433 13.2487 147.831 13.5077 148.163 13.8398C148.495 14.172 148.754 14.5701 148.923 15.0084C149.147 15.6128 149.265 16.2511 149.273 16.8955C149.321 17.9673 149.332 18.2886 149.332 21.0016C149.332 23.7147 149.322 24.036 149.273 25.1077C149.265 25.7522 149.147 26.3904 148.923 26.9948C148.754 27.4332 148.495 27.8312 148.163 28.1634C147.831 28.4956 147.433 28.7545 146.994 28.9236C146.39 29.1472 145.752 29.2655 145.107 29.2734C144.036 29.3218 143.715 29.3324 141.001 29.3324C138.288 29.3324 137.966 29.3223 136.895 29.2734C136.251 29.2655 135.612 29.1472 135.008 28.9236C134.57 28.7545 134.172 28.4956 133.839 28.1634C133.507 27.8312 133.248 27.4332 133.079 26.9948C132.856 26.3904 132.737 25.7522 132.729 25.1077C132.681 24.036 132.67 23.7147 132.67 21.0016C132.67 18.2886 132.68 17.9673 132.729 16.8955C132.737 16.2511 132.856 15.6128 133.079 15.0084C133.248 14.5701 133.507 14.172 133.839 13.8398C134.172 13.5077 134.57 13.2487 135.008 13.0797C135.612 12.8561 136.251 12.7377 136.895 12.7298C137.967 12.6815 138.288 12.6708 141.001 12.6708ZM141.001 10.8398C138.243 10.8398 137.896 10.8515 136.812 10.9008C135.968 10.9176 135.134 11.0773 134.344 11.3731C133.666 11.6284 133.053 12.0285 132.545 12.5455C132.028 13.0528 131.628 13.6669 131.372 14.345C131.076 15.135 130.917 15.9694 130.9 16.8127C130.851 17.8956 130.84 18.2431 130.84 21.0011C130.84 23.7592 130.851 24.1066 130.901 25.1905C130.918 26.0339 131.077 26.8683 131.373 27.6582C131.628 28.3362 132.028 28.9504 132.545 29.4577C133.053 29.9748 133.667 30.375 134.345 30.6302C135.135 30.926 135.969 31.0856 136.813 31.1024C137.897 31.1508 138.243 31.1634 141.002 31.1634C143.762 31.1634 144.108 31.1518 145.191 31.1024C146.035 31.0856 146.869 30.926 147.659 30.6302C148.334 30.3686 148.947 29.9691 149.458 29.4572C149.97 28.9453 150.369 28.3322 150.63 27.6573C150.926 26.8673 151.086 26.0329 151.102 25.1895C151.151 24.1066 151.162 23.7592 151.162 21.0011C151.162 18.2431 151.151 17.8956 151.101 16.8118C151.085 15.9684 150.925 15.134 150.629 14.344C150.374 13.666 149.974 13.0519 149.457 12.5445C148.949 12.0274 148.335 11.6273 147.657 11.3721C146.867 11.0763 146.033 10.9166 145.19 10.8998C144.107 10.8515 143.759 10.8398 141.001 10.8398Z"
                                        fill="#764abc" />
                                    <path
                                        d="M141.003 15.7852C139.971 15.7852 138.962 16.0912 138.104 16.6646C137.246 17.2379 136.577 18.0529 136.182 19.0064C135.787 19.9598 135.684 21.009 135.885 22.0212C136.087 23.0334 136.584 23.9632 137.313 24.6929C138.043 25.4227 138.973 25.9197 139.985 26.121C140.997 26.3224 142.047 26.219 143 25.8241C143.954 25.4291 144.769 24.7603 145.342 23.9022C145.915 23.0441 146.221 22.0353 146.221 21.0032C146.221 19.6193 145.672 18.2921 144.693 17.3135C143.714 16.3349 142.387 15.7852 141.003 15.7852ZM141.003 24.3903C140.333 24.3903 139.678 24.1917 139.121 23.8195C138.564 23.4473 138.13 22.9183 137.874 22.2994C137.618 21.6805 137.551 20.9995 137.681 20.3424C137.812 19.6854 138.134 19.0819 138.608 18.6082C139.082 18.1345 139.685 17.8119 140.342 17.6812C140.999 17.5505 141.68 17.6176 142.299 17.874C142.918 18.1303 143.447 18.5644 143.819 19.1215C144.192 19.6785 144.39 20.3333 144.39 21.0032C144.39 21.9015 144.033 22.7631 143.398 23.3983C142.763 24.0335 141.902 24.3903 141.003 24.3903Z"
                                        fill="#764abc" />
                                    <path
                                        d="M146.426 16.7971C147.1 16.7971 147.646 16.2512 147.646 15.5778C147.646 14.9043 147.1 14.3584 146.426 14.3584C145.753 14.3584 145.207 14.9043 145.207 15.5778C145.207 16.2512 145.753 16.7971 146.426 16.7971Z"
                                        fill="#764abc" />
                                    <circle cx="201" cy="21" r="21" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M201.913 10.8398C196.527 10.8398 192.193 15.1733 192.193 20.5597C192.193 24.8526 194.988 28.4976 198.835 29.7935C199.321 29.8745 199.483 29.591 199.483 29.3075C199.483 29.0646 199.483 28.4571 199.483 27.6471C196.77 28.2546 196.203 26.3511 196.203 26.3511C195.757 25.2171 195.109 24.9336 195.109 24.9336C194.218 24.3261 195.19 24.3261 195.19 24.3261C196.162 24.4071 196.689 25.3386 196.689 25.3386C197.539 26.8371 198.957 26.3916 199.524 26.1486C199.605 25.5006 199.848 25.0956 200.131 24.8526C197.985 24.6096 195.717 23.7591 195.717 20.0332C195.717 18.9802 196.081 18.0892 196.729 17.4412C196.648 17.1982 196.284 16.2263 196.81 14.8493C196.81 14.8493 197.62 14.6063 199.483 15.8618C200.253 15.6593 201.103 15.5378 201.913 15.5378C202.723 15.5378 203.574 15.6593 204.343 15.8618C206.206 14.6063 207.016 14.8493 207.016 14.8493C207.543 16.1858 207.219 17.1577 207.097 17.4412C207.705 18.1297 208.11 18.9802 208.11 20.0332C208.11 23.7591 205.842 24.5691 203.655 24.8121C204.019 25.0956 204.303 25.7031 204.303 26.5941C204.303 27.8901 204.303 28.9431 204.303 29.267C204.303 29.51 204.465 29.834 204.991 29.753C208.839 28.4976 211.633 24.8526 211.633 20.5597C211.633 15.1733 207.3 10.8398 201.913 10.8398Z"
                                        fill="#764abc" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[15px] w-full max-w-[300px]">
                            <span className="text-white text-[18px]">NEWSLETTER</span>
                            <div className="flex flex-col gap-3">
                                <div className="-mt-[5px] flex relative items-center">
                                    <div className="text-[#4F5665] absolute left-3"><FiMail /></div>
                                    <input  className="w-full text-[#4F5665] disabled:bg-transparent border-solid border-2 rounded-lg px-12 py-1 outline-none" name="email"
                                        id="email" type="email" placeholder="Enter Your Email" />
                                </div>
                            </div>
                            <button className="rounded-lg mt-2 py-2 bg-white w-full font-bold text-[#764abc] active:scale-95 transition-all">Subscribe</button>
                        </div>
                    </form>
                    <div className="mb-[25px]">
                        <div className="w-full h-1 bg-white"></div>
                    </div>
                    <span className="text-center text-white">© Copyright 2022, All Rights Reserved by ClarityUI</span>
                </div>
            </header>
        </>
    )
}

export default Footer