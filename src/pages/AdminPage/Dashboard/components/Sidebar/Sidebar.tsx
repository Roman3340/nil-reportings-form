
import styles from './styles.module.css';

function Sidebar () {

    return (
        <div className={styles.side}>
            <div className={styles.logo}>
                <img src="../../public/logoSmall.png" alt="logo" />
            </div>
            <div className={styles.menu}>
                <ul className={styles.tasks}>
                    <li className={styles.task}>
                        <a href='#' className={styles.taskLink}>
                            <div className={styles.taskSvg}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5.22226H6.11114C5.43612 5.22226 4.88892 5.76947 4.88892 6.44448V11.3334C4.88892 12.0084 5.43612 12.5556 6.11114 12.5556H11C11.675 12.5556 12.2222 12.0084 12.2222 11.3334V6.44448C12.2222 5.76947 11.675 5.22226 11 5.22226Z" fill="#888888"/>
                                <path d="M23.2223 5.22226H18.3334C17.6583 5.22226 17.1111 5.76947 17.1111 6.44448V11.3334C17.1111 12.0084 17.6583 12.5556 18.3334 12.5556H23.2223C23.8973 12.5556 24.4445 12.0084 24.4445 11.3334V6.44448C24.4445 5.76947 23.8973 5.22226 23.2223 5.22226Z" fill="#888888"/>
                                <path d="M11 17.4445H6.11114C5.43612 17.4445 4.88892 17.9917 4.88892 18.6667V23.5556C4.88892 24.2306 5.43612 24.7778 6.11114 24.7778H11C11.675 24.7778 12.2222 24.2306 12.2222 23.5556V18.6667C12.2222 17.9917 11.675 17.4445 11 17.4445Z" fill="#888888"/>
                                <path d="M23.2223 17.4445H18.3334C17.6583 17.4445 17.1111 17.9917 17.1111 18.6667V23.5556C17.1111 24.2306 17.6583 24.7778 18.3334 24.7778H23.2223C23.8973 24.7778 24.4445 24.2306 24.4445 23.5556V18.6667C24.4445 17.9917 23.8973 17.4445 23.2223 17.4445Z" fill="#888888"/>
                                <path d="M11 5.22226H6.11114C5.43612 5.22226 4.88892 5.76947 4.88892 6.44448V11.3334C4.88892 12.0084 5.43612 12.5556 6.11114 12.5556H11C11.675 12.5556 12.2222 12.0084 12.2222 11.3334V6.44448C12.2222 5.76947 11.675 5.22226 11 5.22226Z" stroke="#888888" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M23.2223 5.22226H18.3334C17.6583 5.22226 17.1111 5.76947 17.1111 6.44448V11.3334C17.1111 12.0084 17.6583 12.5556 18.3334 12.5556H23.2223C23.8973 12.5556 24.4445 12.0084 24.4445 11.3334V6.44448C24.4445 5.76947 23.8973 5.22226 23.2223 5.22226Z" stroke="#888888" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11 17.4445H6.11114C5.43612 17.4445 4.88892 17.9917 4.88892 18.6667V23.5556C4.88892 24.2306 5.43612 24.7778 6.11114 24.7778H11C11.675 24.7778 12.2222 24.2306 12.2222 23.5556V18.6667C12.2222 17.9917 11.675 17.4445 11 17.4445Z" stroke="#888888" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M23.2223 17.4445H18.3334C17.6583 17.4445 17.1111 17.9917 17.1111 18.6667V23.5556C17.1111 24.2306 17.6583 24.7778 18.3334 24.7778H23.2223C23.8973 24.7778 24.4445 24.2306 24.4445 23.5556V18.6667C24.4445 17.9917 23.8973 17.4445 23.2223 17.4445Z" stroke="#888888" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className={styles.taskText}>Дашборд</div>
                        </a>
                    </li>
                    <li className={styles.task}>
                        <a href='#' className={styles.taskLink}>
                            <div className={styles.taskSvg}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6195 5.60967C13.1401 3.46344 16.1932 3.46344 16.7139 5.60967C16.792 5.93209 16.9452 6.23151 17.1609 6.48355C17.3766 6.7356 17.6488 6.93315 17.9553 7.06013C18.2617 7.18711 18.5939 7.23993 18.9246 7.21428C19.2554 7.18864 19.5754 7.08526 19.8587 6.91255C21.7446 5.76367 23.9042 7.92211 22.7554 9.80922C22.5829 10.0924 22.4797 10.4122 22.4541 10.7427C22.4285 11.0733 22.4813 11.4052 22.6081 11.7115C22.7349 12.0178 22.9323 12.2898 23.184 12.5055C23.4358 12.7212 23.7349 12.8744 24.057 12.9528C26.2032 13.4734 26.2032 16.5266 24.057 17.0472C23.7346 17.1253 23.4352 17.2785 23.1831 17.4942C22.9311 17.7099 22.7335 17.9821 22.6066 18.2886C22.4796 18.5951 22.4268 18.9272 22.4524 19.258C22.478 19.5887 22.5814 19.9087 22.7541 20.192C23.903 22.0779 21.7446 24.2376 19.8575 23.0887C19.5743 22.9162 19.2545 22.813 18.924 22.7874C18.5934 22.7618 18.2615 22.8146 17.9552 22.9414C17.6489 23.0683 17.3769 23.2656 17.1612 23.5173C16.9455 23.7691 16.7922 24.0682 16.7139 24.3903C16.1932 26.5366 13.1401 26.5366 12.6195 24.3903C12.5413 24.0679 12.3882 23.7685 12.1725 23.5164C11.9568 23.2644 11.6846 23.0668 11.3781 22.9399C11.0716 22.8129 10.7395 22.7601 10.4087 22.7857C10.078 22.8114 9.75794 22.9147 9.47469 23.0874C7.5888 24.2363 5.42913 22.0779 6.57802 20.1908C6.75048 19.9076 6.85369 19.5878 6.87928 19.2573C6.90486 18.9267 6.8521 18.5948 6.72526 18.2885C6.59843 17.9822 6.40112 17.7102 6.14935 17.4945C5.89759 17.2788 5.59849 17.1256 5.27635 17.0472C3.13013 16.5266 3.13013 13.4734 5.27635 12.9528C5.59878 12.8747 5.89819 12.7215 6.15024 12.5058C6.40229 12.2901 6.59984 12.0179 6.72682 11.7114C6.8538 11.4049 6.90662 11.0728 6.88097 10.742C6.85533 10.4113 6.75195 10.0913 6.57924 9.808C5.43035 7.92211 7.5888 5.76244 9.47591 6.91133C10.6981 7.65444 12.2821 6.99689 12.6195 5.60967Z" stroke="#121212" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.6667 18.6667C16.6917 18.6667 18.3333 17.025 18.3333 15C18.3333 12.975 16.6917 11.3333 14.6667 11.3333C12.6416 11.3333 11 12.975 11 15C11 17.025 12.6416 18.6667 14.6667 18.6667Z" stroke="#121212" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="task-text">Настройки</div>
                        </a>
                    </li>
                    <li className={styles.task}>
                        <a href='#' className={styles.taskLink}>
                            <div className={styles.taskSvg}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.1111 10.1111V7.66666C17.1111 7.01835 16.8536 6.3966 16.3952 5.93817C15.9367 5.47975 15.315 5.22221 14.6667 5.22221H6.11113C5.46282 5.22221 4.84107 5.47975 4.38265 5.93817C3.92423 6.3966 3.66669 7.01835 3.66669 7.66666V22.3333C3.66669 22.9816 3.92423 23.6034 4.38265 24.0618C4.84107 24.5202 5.46282 24.7778 6.11113 24.7778H14.6667C15.315 24.7778 15.9367 24.5202 16.3952 24.0618C16.8536 23.6034 17.1111 22.9816 17.1111 22.3333V19.8889" stroke="#121212" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.5556 15H25.6667M25.6667 15L22 11.3333M25.6667 15L22 18.6667" stroke="#121212" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="task-text">Выйти</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;