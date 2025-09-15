import { type NavigationProps } from "./NavigationCard.tsx";
import { type CardProps } from "./ContactCard.tsx";

export const softwareCards: CardProps[] = [
  {
    id: 1,
    imageSource: "/images/p1.png",
    text: "Консалтинговые услуги",
  },
  {
    id: 2,
    imageSource: "/images/p2.png",
    text: "Выбор/ закупка/ установка / настройка/ оптимизация ПО",
  },
  {
    id: 3,
    imageSource: "/images/p3.png",
    text: "Отслеживание необходимых обновлений",
  },
  {
    id: 4,
    imageSource: "/images/p4.png",
    text: "Ведение перечня существующего ПО",
  },
  {
    id: 5,
    imageSource: "/images/p5.png",
    text: "Организация системы управления программы обеспечением (SAM)",
  },
  {
    id: 6,
    imageSource: "/images/p6.png",
    text: "Программирование",
  },
  {
    id: 7,
    imageSource: "/images/p7.png",
    text: "Web — технологии (MS SharePoint, MS IIS,Apache, Nginx)",
  },
  {
    id: 8,
    imageSource: "/images/p8.png",
    text: "Программные шлюзы в сеть Интернет",
  },
  {
    id: 9,
    imageSource: "/images/p9.png",
    text: "Настройка файлового сервера",
  },
  {
    id: 10,
    imageSource: "/images/p10.png",
    text: "Работы с базами данных",
  },
  {
    id: 11,
    imageSource: "/images/p11.png",
    text: "Настройка почтовой системы",
  },
  {
    id: 12,
    imageSource: "/images/p12.png",
    text: "Настройка сетевых хранилищ",
  },
  {
    id: 13,
    imageSource: "/images/p13.png",
    text: "Установка систем визуализации",
  },
  {
    id: 14,
    imageSource: "/images/p14.png",
    text: "Системы безопасности",
  },
  {
    id: 15,
    imageSource: "/images/p15.png",
    text: "Службы удаленных рабочих столов",
  },
];

export const hardwareCard: CardProps[] = [
  {
    id: 1,
    imageSource: "/images/a1.png",
    text: "Консалтинговые\n" + "услуги",
  },
  {
    id: 2,
    imageSource: "/images/a2.png",
    text:
      "Выбор / закупка/\n" +
      "монтаж / настройка\n" +
      "аппаратного\n" +
      "обеспечения",
  },
  {
    id: 3,
    imageSource: "/images/a3.png",
    text: "Организация\n" + "систем\n" + "видеонаблюденя",
  },
  {
    id: 4,
    imageSource: "/images/a4.png",
    text:
      "Построение и\n" + "проектирование\n" + "локальных вычислительных сетей",
  },
  {
    id: 5,
    imageSource: "/images/a5.png",
    text: "Работа с АТС.\n" + "Настройка,\n" + "эксплуатация",
  },
  {
    id: 6,
    imageSource: "/images/a6.png",
    text: "Монтаж\n" + "систем контроля\n" + "и учета доступа",
  },
];

export const navigationCard: NavigationProps[] = [
  {
    id: 1,
    paragraph: "telephony",
    imageSource: "/images/w1.jpg",
    text: "СОКРАТИМ ЗАТРАТЫ\nНА СОТОВУЮ СВЯЗЬ",
  },
  {
    id: 2,
    paragraph: "software",
    imageSource: "/images/w2.jpg",
    text: "ПОДБЕРЕМ И ОПТИМИЗИРУЕМ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ",
  },
  {
    id: 3,
    paragraph: "hardware",
    imageSource: "/images/w3.jpg",
    text: "ПОДБЕРЕМ И УСТАНОВИМ\nАППАРАТНОЕ ОБЕСПЕЧЕНИЕ",
  },
];
