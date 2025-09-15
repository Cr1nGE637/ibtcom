import { type NavigationProps } from "./NavigationCard.tsx";
import { type CardProps } from "./ContactCard.tsx";

export const softwareCards: CardProps[] = [
  {
    id: 1,
    imageSource: `${import.meta.env.BASE_URL}images/p1.png`,
    text: "Консалтинговые услуги",
  },
  {
    id: 2,
    imageSource: `${import.meta.env.BASE_URL}images/p2.png`,
    text: "Выбор/ закупка/ установка / настройка/ оптимизация ПО",
  },
  {
    id: 3,
    imageSource: `${import.meta.env.BASE_URL}images/p3.png`,
    text: "Отслеживание необходимых обновлений",
  },
  {
    id: 4,
    imageSource: `${import.meta.env.BASE_URL}images/p4.png`,
    text: "Ведение перечня существующего ПО",
  },
  {
    id: 5,
    imageSource: `${import.meta.env.BASE_URL}images/p5.png`,
    text: "Организация системы управления программы обеспечением (SAM)",
  },
  {
    id: 6,
    imageSource: `${import.meta.env.BASE_URL}images/p6.png`,
    text: "Программирование",
  },
  {
    id: 7,
    imageSource: `${import.meta.env.BASE_URL}images/p7.png`,
    text: "Web — технологии (MS SharePoint, MS IIS,Apache, Nginx)",
  },
  {
    id: 8,
    imageSource: `${import.meta.env.BASE_URL}images/p8.png`,
    text: "Программные шлюзы в сеть Интернет",
  },
  {
    id: 9,
    imageSource: `${import.meta.env.BASE_URL}images/p9.png`,
    text: "Настройка файлового сервера",
  },
  {
    id: 10,
    imageSource: `${import.meta.env.BASE_URL}images/p10.png`,
    text: "Работы с базами данных",
  },
  {
    id: 11,
    imageSource: `${import.meta.env.BASE_URL}images/p11.png`,
    text: "Настройка почтовой системы",
  },
  {
    id: 12,
    imageSource: `${import.meta.env.BASE_URL}images/p12.png`,
    text: "Настройка сетевых хранилищ",
  },
  {
    id: 13,
    imageSource: `${import.meta.env.BASE_URL}images/p13.png`,
    text: "Установка систем визуализации",
  },
  {
    id: 14,
    imageSource: `${import.meta.env.BASE_URL}images/p14.png`,
    text: "Системы безопасности",
  },
  {
    id: 15,
    imageSource: `${import.meta.env.BASE_URL}images/p15.png`,
    text: "Службы удаленных рабочих столов",
  },
];

export const hardwareCard: CardProps[] = [
  {
    id: 1,
    imageSource: `${import.meta.env.BASE_URL}images/a1.png`,
    text: "Консалтинговые\n" + "услуги",
  },
  {
    id: 2,
    imageSource: `${import.meta.env.BASE_URL}images/a2.png`,
    text:
      "Выбор / закупка/\n" +
      "монтаж / настройка\n" +
      "аппаратного\n" +
      "обеспечения",
  },
  {
    id: 3,
    imageSource: `${import.meta.env.BASE_URL}images/a3.png`,
    text: "Организация\n" + "систем\n" + "видеонаблюденя",
  },
  {
    id: 4,
    imageSource: `${import.meta.env.BASE_URL}images/a4.png`,
    text:
      "Построение и\n" + "проектирование\n" + "локальных вычислительных сетей",
  },
  {
    id: 5,
    imageSource: `${import.meta.env.BASE_URL}images/a5.png`,
    text: "Работа с АТС.\n" + "Настройка,\n" + "эксплуатация",
  },
  {
    id: 6,
    imageSource: `${import.meta.env.BASE_URL}images/a6.png`,
    text: "Монтаж\n" + "систем контроля\n" + "и учета доступа",
  },
];

export const navigationCard: NavigationProps[] = [
  {
    id: 1,
    paragraph: "telephony",
    imageSource: `${import.meta.env.BASE_URL}images/w1.jpg`,
    text: "СОКРАТИМ ЗАТРАТЫ\nНА СОТОВУЮ СВЯЗЬ",
  },
  {
    id: 2,
    paragraph: "software",
    imageSource: `${import.meta.env.BASE_URL}images/w2.jpg`,
    text: "ПОДБЕРЕМ И ОПТИМИЗИРУЕМ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ",
  },
  {
    id: 3,
    paragraph: "hardware",
    imageSource: `${import.meta.env.BASE_URL}images/w3.jpg`,
    text: "ПОДБЕРЕМ И УСТАНОВИМ\nАППАРАТНОЕ ОБЕСПЕЧЕНИЕ",
  },
];