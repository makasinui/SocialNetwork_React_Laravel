import React from 'react'
import "../../sass/opportunities.scss";


export const Opportunities: React.FunctionComponent = () => {
    return(
        <section className="top">
            <div>
                <span className="top-content-div">Возможности</span>
            </div>
            <section className="top-content">
                <div className="top-content-special">
                    <img
                        src="img/supports.svg"
                        alt=""
                        className="special-icon"
                    />
                    <p>
                        Техническая помощь от <br /> адекватной, приятной
                        администрации.
                    </p>
                </div>
                <div className="top-content-special">
                    <img src="img/design.svg" alt="" className="special-icon" />
                    <p>
                        Играйся с кодом, пробуй многое, воплощай свои идеи в
                        реальность комбинируя HTML &amp; CSS!
                    </p>
                </div>
                <div className="top-content-special">
                    <img
                        src="img/documents.svg"
                        height="40"
                        alt=""
                        className="special-icon"
                    />
                    <p>Сохроняй свой код смело в надежном репозитории.</p>
                </div>
                <div className="top-content-special">
                    <img
                        src="img/download.svg"
                        alt=""
                        className="special-icon"
                    />
                    <p>Скачивай нужный тебе материал!</p>
                </div>
                <div className="top-content-special">
                    <img src="img/work.svg" alt="" className="special-icon" />
                    <p>
                        Мы стараемся улучшать наш сервис для вас, наши дорогие
                        юзеры.
                    </p>
                </div>
            </section>
        </section>
    );
}