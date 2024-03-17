"use client";
import { useEffect } from "react";
import "./page.css";

import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const button__blue = document.querySelector(
      ".button__blue"
    ) as HTMLButtonElement;
    const popup__blue = document.getElementById(
      "popup__blue"
    ) as HTMLDivElement;
    const closeBtn = document.querySelector(".close") as HTMLSpanElement;

    const openPopup = () => {
      popup__blue.style.display = "block";
    };

    const closePopup = () => {
      popup__blue.style.display = "none";
    };

    button__blue.addEventListener("click", openPopup);
    // closeBtn.addEventListener("click", closePopup);

    window.addEventListener("click", (event) => {
      if (event.target === popup__blue) {
        closePopup();
      }
    });

    return () => {
      button__blue.removeEventListener("click", openPopup);
      // closeBtn.removeEventListener("click", closePopup);
      window.removeEventListener("click", (event) => {
        if (event.target === popup__blue) {
          closePopup();
        }
      });
    };
  }, []);

  useEffect(() => {
    const button__green = document.querySelector(
      ".button__green"
    ) as HTMLButtonElement;
    const popup__green = document.getElementById(
      "popup__green"
    ) as HTMLDivElement;
    const closeBtn = document.querySelector(".close") as HTMLSpanElement;

    const openPopup = () => {
      popup__green.style.display = "block";
    };

    const closePopup = () => {
      popup__green.style.display = "none";
    };

    button__green.addEventListener("click", openPopup);
    // closeBtn.addEventListener("click", closePopup);

    window.addEventListener("click", (event) => {
      if (event.target === popup__green) {
        closePopup();
      }
    });

    return () => {
      button__green.removeEventListener("click", openPopup);
      // closeBtn.removeEventListener("click", closePopup);
      window.removeEventListener("click", (event) => {
        if (event.target === popup__green) {
          closePopup();
        }
      });
    };
  }, []);

  return (
    <main>
      <Image
        src="../img/body__waves.svg"
        width={1650}
        height={78}
        alt="Волны"
        className="body__waves"
      />
      <div className="container">
        <div className="container__header">
          <Image
            src="../img/container__header-wave.svg"
            width={1335}
            height={110}
            alt="Волна"
            className="container__header-wave"
          />
          <h1 className="container__header-title">ХОБЛ: мифы и реальность</h1>
        </div>
        <div className="container__info">
          <div className="container__info-elements">
            <div className="container__info-container">
              <Image
                src="../img/person.svg"
                width={80}
                height={80}
                alt="Иконка стрелки"
                className="container__icon"
              />

              <div>
                <Image
                  src="../img/block.svg"
                  width={295}
                  height={115}
                  alt="Блок"
                  className="container__block container__header-wave2"
                />
                <h2 className="container__header-subtitle">
                  ХОБЛ болеют <b>преимущественно мужчины?</b>
                </h2>
              </div>

              <h2 className="container__description">
                В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ»
                (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет,
                было выявлено преобладание...
              </h2>
              <button className="button__blue"></button>
            </div>
          </div>
          <div className="container__info-elements">
            <div className="container__info-container2">
              <Image
                src="../img/arrow.svg"
                width={80}
                height={80}
                alt="Иконка человека"
                className="container__icon"
              />
              <div>
                <Image
                  src="../img/block.svg"
                  width={295}
                  height={115}
                  alt="Блок"
                  className="container__block container__header-wave2"
                />
                <h2 className="container__header-subtitle">
                  <b>Опасно</b> не наличие заболевания, а обострения?
                </h2>
              </div>
              <h2 className="container__description">
                Большинство пациентов с ХОБЛ столкнется с обострениями: как
                минимум одно среднетяжелое или тяжелое обострение случится в
                течение...
              </h2>
              <div className="button__container">
                <button className="button__green"></button>
                {/* <input className="btn__blue" type="button" value="" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container__header">
          <Image
            src="../img/container__header-wave.svg"
            width={1335}
            height={110}
            alt="Волна"
            className="container__header-wave"
          />
          <h1 className="container__header-title">
            Терапия ХОБЛ: что в фокусе?
          </h1>
        </div>

        <div className="container__info2">
          <h2 className="container__info2-text">
            Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
          </h2>
        </div>

        <div className="container__cards">
          <h2 className="container__cards-title">
            Приоритетные направления фармакотерапевтической стратегии при ХОБЛ
            <sup>1</sup>:
          </h2>
          <div className="angry-grid">
            <div className="children">
              <Image
                src="../img/inhaler1.svg"
                width={178}
                height={145}
                alt="Стрелка вниз"
                className="children__image"
              />
              <h2 className="children__title">
                Ингаляционный <b>антихолинергик</b>
              </h2>
              <p className="children__subtitle">
                Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с
                ним в конкурентный антагонизм за взаимодействие с эффекторными
                мускариновыми рецепторами, дополняет и потенцирует эффект
                β2-агонистов<sup>1</sup>
              </p>
            </div>
            <div className="children">
              <Image
                src="../img/inhaler2.svg"
                width={178}
                height={145}
                alt="Стрелка вниз"
                className="children__image"
              />
              <h2 className="children__title">
                Ингаляционный{" "}
                <b>
                  <br />
                  β2-агонист
                </b>
              </h2>
              <p className="children__subtitle">
                Вызывает бронходилатацию посредством релаксации гладкомышечных
                клеток бронхов независимо от характера констриктивных стимулов,
                т. е. выступают в качестве функциональных антагонистов
                бронхоконстрикции
              </p>
            </div>
            <div className="children">
              <Image
                src="../img/inhaler2.svg"
                width={178}
                height={145}
                alt="Стрелка вниз"
                className="children__image"
              />
              <h2 className="children__title">
                Ингаляционный <b>глюкокортикостероид</b> (ИГКС)
              </h2>
              <p className="children__subtitle">
                Снижает частоту обострений, особенно в сочетании с ДДБА,
                подавляют хроническое воспаление при астме и снижают
                гиперреактивность дыхательных путей
              </p>
            </div>
          </div>
          <div className="arrow__down-container">
            <Image
              src="../img/arrow__down.svg"
              width={425}
              height={54}
              alt="Ингалятор"
            />
            <Image
              src="../img/arrow__down.svg"
              width={425}
              height={54}
              alt="Стрелка вниз"
            />
          </div>
          <div className="angry-grid2">
            <div className="children2">
              <h3 className="children2__text">
                Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров
                с разными механизмами действия; Назначение 2-х бронходилататоров
                из группы длительнодействующих β2-агонистов (ДДБА) и
                длительнодействующих антихолинергиков (ДДАХ), действие которых
                дополняет и усиливает друг друга<sup>1</sup>.
              </h3>
            </div>
            <div className="children2">
              <h3 className="children2__text">
                Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых
                обострений в течение 1 года/1 тяжелое обострение, потребовавшее
                госпитализации) рекомендуется назначение ИГКС в дополнение к
                ДДБА; Последние исследования показали, что амбулаторное
                применение ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную
                летальность по сравнению с пациентами, принимавшими только ДДБА
                (8,1% vs 13,2%)<sup>1</sup>.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div id="popup__blue" className="popup">
        <div className="popup-content">
          {/* <span className="close">&times;</span> */}
          <div className="popup-content-text">
            <p>
              В десятилетнем исследовании{" "}
              <b>«Генетическая эпидемиология ХОБЛ» (COPDGene)</b> среди
              пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено{" "}
              <b>преобладание женщин (66%)</b>, а в возрасте 60-64 лет
              количество женщин и мужчин.
            </p>
            <p>
              Такое эпидемиологическое распределение заболеваемости ХОБЛ может
              быть связано с тем, что дыхательные пути курящих женщин имеют
              более <b>высокий процент площади стенок</b>, но меньшую площадь
              просвета, внутренний диаметр и толщину дыхательных путей по
              сравнению с курящими мужчинами.
            </p>
          </div>
          <Image
            src="../img/chart.svg"
            width={1211}
            height={389}
            alt="График"
            className="chart__image"
          />
        </div>
      </div>

      <div id="popup__green" className="popup">
        <div className="popup-content2">
          {/* <span className="close">&times;</span> */}
          <div className="popup-content-text">
            <p>
              <b>
                Большинство пациентов с ХОБЛ столкнется с обострениями: как
                минимум одно среднетяжелое или тяжелое обострение случится в
                течение 3 лет у 77% пациентов<sup>1</sup>
              </b>
              .
            </p>
            <p>
              В течение 5 лет после первого тяжёлого обострения в живых остаются
              только 40% пациентов.<sup>2</sup> Прогноз после обострений ХОБЛ
              схож с таковым при сердечной недостаточности, инфаркте миокарда и
              некоторых злокачественных опухолях.
            </p>
          </div>
          <h2 className="popup__cards-title">
            Пятилетняя выживаемость пациентов
          </h2>
          <div className="angry-grid-popup">
            <div className="children-popup">
              <Image
                src="../img/heart.svg"
                width={81.46}
                height={132.42}
                alt="Сердце"
                className="children__image-popup"
              />
              <h2 className="children__percent-popup">45,5%</h2>
              <h2 className="children__title-popup">
                пациентов с{" "}
                <b>
                  сердечной недостаточностью<sup>1</sup>
                </b>
              </h2>
              <p className="children__subtitle-popup">
                Популяционное когортное <br />
                исследование (N=385)
              </p>
            </div>
            <div className="children-popup">
              <Image
                src="../img/human.svg"
                width={103}
                height={134}
                alt="Человек"
                className="children__image-popup"
              />
              <h2 className="children__percent-popup">55,3%</h2>
              <h2 className="children__title-popup">
                пациентов с{" "}
                <b>
                  инфарктом миокарда<sup>1</sup>
                </b>
              </h2>
              <p className="children__subtitle-popup">
                Апостериорный анализ когортного исследования (N=2887)
              </p>
            </div>
            <div className="children-popup">
              <Image
                src="../img/joint.svg"
                width={117.92}
                height={134}
                alt="Сустав"
                className="children__image-popup"
              />
              <h2 className="children__percent-popup">50,5%</h2>
              <h2 className="children__title-popup">
                пациентов с <b>раком мочевого пузыря</b>
              </h2>
              <p className="children__subtitle-popup">
                Исследование Национальной статистической службы (N=42642)
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
