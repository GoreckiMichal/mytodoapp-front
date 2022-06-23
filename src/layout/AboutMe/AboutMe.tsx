import React from 'react';

import './AboutMe.css'

export const AboutMe = () => {

    return (
        <>
            <div className="AboutMe">
                <h2 className="AboutMe__heading">Kilka słow o mnie</h2>
                <div className="AboutMe__text-section">
                    <div>
                        <img className="AboutMe__text-section-img" src="https://gm.networkmanager.pl/img/ZdjecieCV.png"
                             width="200px" height="200px" alt="Michał Górecki"/>
                    </div>
                    <div className="AboutMe__text-section--info">
                        <p className="AboutMe__text-section-p">
                            Mam na imię Michał i w tym roku kończę 30 lat. Programowania uczę się od ponad roku.
                        </p>
                            <p className="AboutMe__text-section-p">
                                Moim celem w nauce programowania jest otrzymanie pierwszej pracy jako Junior.
                                W przyszłości chciałbym rozwijać swoje umiętnośći w kierunku FullStack.
                                Dlatego zależy mi bym mógł przyglądać się pracy i czerpać dobre wzorce programowania ze
                                strony Backend jak i Frontend.
                            </p>


                            <p className="AboutMe__text-section-p">
                                Zdecydowałem się napisać aplikację TODO - ponieważ zawiera podstawowe operacje na bazach
                                danych.
                                Frontend został napisany w React. Chciałbym lepiej poznać ten język bo ma naprawdę
                                ogromne
                                możliwości.

                            </p>

                            <p className="AboutMe__text-section-p">
                                Zdecydowałem się napisać aplikację TODO - ponieważ zawiera podstawowe operacje na bazach
                                danych.
                                Frontend został napisany w React. Chciałbym lepiej poznać ten język bo ma naprawdę
                                ogromne
                                możliwości.
                            </p>
                        <p className="AboutMe__text-section-p">
                            Zapraszam do pobrania CV: <a href="https://gm.networkmanager.pl/img/CV.pdf" target="_blank">Pobierz CV</a>
                        </p>

                    </div>

                </div>
                <h2 className="AboutMe__heading">Kilka słow o projekcie</h2>
                <div className="AboutMe__text-section--info">
                    <p className="AboutMe__text-section-p">
                        W przyszłości w aplikacji chciałbym dodać RWD oraz poszerzyć swoją wiedzę w React bym mógł zastosować SASS i lepiej zarządzać stylami CSS.
                    </p>
                    <p className="AboutMe__text-section-p">
                        Dodatkowo chciałbym poznać i zastosować na frontend Chakra UI. Natomiast na backend dodać JWT
                    </p>
                </div>
            </div>
        </>
    )
}