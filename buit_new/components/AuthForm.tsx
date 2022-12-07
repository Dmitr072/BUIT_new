import Head from 'next/head'
import Link from 'next/link'
import cn from 'classnames'
import style from './AuthForm.module.scss'

export default function AuthForm() {
    return (
        <div className={cn(style.section)}>
            <div className={cn(style.container)}>
                <div className={cn('row', 'full-height', 'justify-content-center')}>
                    <div className={cn('row', 'text-center')}>
                        <div className={cn(style.logotype_photo)}>
                            <svg width="120" height="120" viewBox="0 0 120 120" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M45.338 1.86224C13.4627 10.3261 -6.27556 42.955 1.81588 73.9893C7.70057 96.5597 23.5157 112.383 46.0736 118.271C65.6892 123.301 87.5116 117.167 102.346 102.325C125.885 78.7732 125.885 41.2377 102.346 17.686C87.2664 2.72089 65.3215 -3.41237 45.338 1.86224ZM70.1028 11.0621C96.0935 16.4594 113.993 42.587 109.211 68.224C105.288 89.4451 89.4732 105.269 68.1412 109.194C47.5448 112.997 25.232 101.712 15.4242 82.4532C-3.21062 45.531 29.6455 2.59822 70.1028 11.0621Z"
                                    fill="#1A547B" />
                                <path
                                    d="M34.1816 37.9886C36.1432 40.5782 40.5567 45.6339 43.8668 49.3332L49.7515 55.992L52.2035 51.7994L54.778 47.6069L48.6482 40.4549C42.8861 33.6728 42.3957 33.4261 36.511 33.4261H30.3811L34.1816 37.9886Z"
                                    fill="#1A547B" />
                                <path
                                    d="M72.9226 34.7825C70.8384 35.2758 67.6509 37.3721 65.9345 39.2217C63.1148 42.1812 34.3043 90.3957 34.3043 92.122C34.3043 92.492 43.1314 92.6153 53.7973 92.3686C72.5548 91.9987 73.5356 91.8754 76.4779 89.0393C81.5044 84.2301 80.8914 78.1879 74.5163 70.296C71.574 66.72 68.7543 63.6372 68.0187 63.3906C67.4057 63.2673 65.8119 64.747 64.7085 66.8433C62.5018 70.5426 62.5018 70.666 66.3023 75.3518C71.9418 82.3805 70.7158 83.9835 59.3142 83.9835H49.9968L52.4488 79.9143C53.7973 77.818 58.4561 69.5562 62.9922 61.6643C67.4057 53.7724 72.187 46.3737 73.6582 45.0173C75.2519 43.5376 78.8073 42.4278 83.0982 42.0579C89.2281 41.5646 90.2088 41.0714 92.293 37.3721L94.6224 33.4261L85.5501 33.5494C80.6462 33.5494 74.8841 34.166 72.9226 34.7825Z"
                                    fill="#1A547B" />
                            </svg>
                        </div>
                        <div className={cn(style.logotype_name)}>
                            Бизнес-учет ИТ <br />
                            Cлужба поддержки
                        </div>
                    </div>
                    <div className={cn('col-12', 'text-center', 'align-self-center', 'py-5')}>
                        <div className={cn('section', 'pb-5', 'pt-5', 'pt-sm-2', 'text-center')}>
                            <div className={cn(style.login)}>
                                <div className={cn(style['login--text'])}>
                                    <span>Авторизация</span>
                                    <span>Восстановление</span>
                                </div>
                            </div>
                            <input className={cn(style.checkbox)} type="checkbox" id="reg-log" name="reg-log" />
                            <label htmlFor="reg-log"></label>
                            <div className={cn(style['card--3d--wrap'], 'mx-auto')}>
                                <div className={cn(style['card--3d--wrapper'])}>
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <div className="title">Вход в личный кабинет</div>
                                                <div className="form-group">
                                                    <input type="email" name="logemail" className="form-style"
                                                        placeholder="Логин" id="logemail" autoComplete="off" />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" name="logpass" className="form-style"
                                                        placeholder="Пароль" id="logpass" autoComplete="off" />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <a href="http://help.andi24.ru/" className="btn">ВОЙТИ</a>
                                                {/* <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your
                                                    password?</a></p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <div className="title">Восстановление доступа</div>
                                                <div className="form-group">
                                                    <input type="text" name="logname" className="form-style"
                                                        placeholder="Электронная почта" id="logname" autoComplete="off" />
                                                    <i className="input-icon uil uil-user"></i>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="phonename" className="form-style"
                                                        placeholder="Номер телефона" id="phonename" autoComplete="off" />
                                                </div>
                                                <a href="http://help.andi24.ru/" className="btn">ВОССТАНОВИТЬ</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}