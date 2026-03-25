import pptxgen from "pptxgenjs";

const DARK_BG = "0A0A0F";
const ACCENT = "7170FF";
const WHITE = "FFFFFF";
const LIGHT_GRAY = "94A3B8";
const CARD_BG = "1E293B";
const CARD_BORDER = "334155";
const GREEN = "34D399";
const GREEN_BG = "064E3B";
const RED = "FB7185";
const RED_BG = "4C0519";
const AMBER = "FBBF24";
const AMBER_BG = "451A03";

const imageUrls: Record<number, string> = {
  1: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/4ebfe351-b4a3-46a7-b608-59434ee266ae.jpg",
  2: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/4a2f30ec-1ea3-4b37-9bbc-f6524550ab86.jpg",
  3: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/8c99acd1-5e98-4132-b3fc-55a3148b5342.jpg",
  4: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/26161225-41bd-4856-9cbf-496b81b8e594.jpg",
  5: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/8d089b74-0133-4c48-8819-db25b04c3ac8.jpg",
  6: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/e7c792aa-50da-465d-a156-82af188c0b9e.jpg",
  7: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/1431fa19-d82e-4692-bc88-1cfa32896d29.jpg",
  8: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/2ddf3864-0d97-4ac0-8022-5bdd590134d5.jpg",
};

async function fetchImageAsBase64(url: string): Promise<string> {
  const res = await fetch(url);
  const blob = await res.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function addSlideHeader(slide: pptxgen.Slide, title: string, slideNum: number) {
  slide.addText(`СЛАЙД ${slideNum}`, {
    x: 5.1, y: 0.25, w: 4.5, h: 0.22,
    fontSize: 7, bold: true, color: ACCENT,
    charSpacing: 3, fontFace: "Arial",
  });
  slide.addText(title, {
    x: 5.1, y: 0.47, w: 4.6, h: 0.55,
    fontSize: 14, bold: true, color: WHITE,
    fontFace: "Arial", wrap: true,
  });
}

function card(slide: pptxgen.Slide, x: number, y: number, w: number, h: number, fill = CARD_BG, border = CARD_BORDER) {
  slide.addShape("rect" as pptxgen.ShapeType, {
    x, y, w, h,
    fill: { color: fill },
    line: { color: border, width: 0.75 },
    rectRadius: 0.08,
  });
}

export async function generatePptx() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_WIDE";
  pptx.title = "Судебные прения";
  pptx.author = "Гражданский процесс";

  const slideData = [
    {
      id: 1,
      title: "Понятие и значение судебных прений",
      draw: (slide: pptxgen.Slide) => {
        card(slide, 5.1, 1.15, 4.65, 0.65, "1A1A3A", ACCENT);
        slide.addText("Самостоятельная стадия судебного разбирательства — устные выступления участников с подведением итогов спора", {
          x: 5.2, y: 1.18, w: 4.45, h: 0.6,
          fontSize: 8.5, color: "CBD5E1", fontFace: "Arial", wrap: true,
        });

        const items = [
          { label: "Познавательное", desc: "Суд получает обобщённую и систематизированную информацию" },
          { label: "Убеждающее", desc: "Стороны обосновывают свою правовую позицию" },
          { label: "Контрольное", desc: "Участники указывают на ошибки и пробелы" },
          { label: "Процессуальное", desc: "Реализация права на судебную защиту" },
        ];
        const cols = [0, 1];
        const rows = [0, 1];
        rows.forEach((r) => cols.forEach((c) => {
          const item = items[r * 2 + c];
          const x = 5.1 + c * 2.38;
          const y = 1.92 + r * 0.82;
          card(slide, x, y, 2.25, 0.75);
          slide.addText(item.label, { x: x + 0.1, y: y + 0.06, w: 2.1, h: 0.22, fontSize: 8.5, bold: true, color: WHITE, fontFace: "Arial" });
          slide.addText(item.desc, { x: x + 0.1, y: y + 0.28, w: 2.1, h: 0.42, fontSize: 7.5, color: LIGHT_GRAY, fontFace: "Arial", wrap: true });
        }));
      },
    },
    {
      id: 2,
      title: "Участники судебных прений",
      draw: (slide: pptxgen.Slide) => {
        const leftItems = ["Истец", "Ответчик", "Заявители", "Заинтересованные лица", "Третьи лица", "Представители участников"];
        const rightItems = ["Эксперты", "Специалисты", "Свидетели", "Переводчики", "Помощник судьи", "Секретарь судебного заседания"];

        card(slide, 5.1, 1.1, 2.2, 2.55, GREEN_BG, "065F46");
        slide.addText("✓  Участвуют в прениях", { x: 5.2, y: 1.15, w: 2.0, h: 0.28, fontSize: 8.5, bold: true, color: GREEN, fontFace: "Arial" });
        leftItems.forEach((item, i) => {
          slide.addText(`• ${item}`, { x: 5.2, y: 1.5 + i * 0.33, w: 2.0, h: 0.28, fontSize: 8.5, color: "D1FAE5", fontFace: "Arial" });
        });

        card(slide, 7.45, 1.1, 2.3, 2.55, RED_BG, "9F1239");
        slide.addText("✕  Не участвуют в прениях", { x: 7.55, y: 1.15, w: 2.1, h: 0.28, fontSize: 8.5, bold: true, color: RED, fontFace: "Arial" });
        rightItems.forEach((item, i) => {
          slide.addText(`• ${item}`, { x: 7.55, y: 1.5 + i * 0.33, w: 2.1, h: 0.28, fontSize: 8.5, color: "FFE4E6", fontFace: "Arial" });
        });
      },
    },
    {
      id: 3,
      title: "Порядок выступлений в прениях",
      draw: (slide: pptxgen.Slide) => {
        const steps = [
          { step: "1", label: "Истец", note: "Открывает прения" },
          { step: "2", label: "Третье лицо на стороне истца", note: "Без самостоятельных требований" },
          { step: "3", label: "Ответчик", note: "Излагает свою позицию" },
          { step: "4", label: "Третье лицо на стороне ответчика", note: "Без самостоятельных требований" },
          { step: "5", label: "Третье лицо с самостоятельными требованиями", note: "Завершает основные речи" },
        ];
        steps.forEach((s, i) => {
          const y = 1.1 + i * 0.62;
          slide.addShape("ellipse" as pptxgen.ShapeType, { x: 5.1, y: y + 0.06, w: 0.38, h: 0.38, fill: { color: ACCENT }, line: { color: ACCENT, width: 0 } });
          slide.addText(s.step, { x: 5.1, y: y + 0.06, w: 0.38, h: 0.38, fontSize: 9, bold: true, color: WHITE, fontFace: "Arial", align: "center", valign: "middle" });
          card(slide, 5.55, y, 4.2, 0.5);
          slide.addText(s.label, { x: 5.65, y: y + 0.05, w: 2.6, h: 0.22, fontSize: 9, bold: true, color: WHITE, fontFace: "Arial" });
          slide.addText(s.note, { x: 5.65, y: y + 0.27, w: 4.0, h: 0.18, fontSize: 7.5, color: LIGHT_GRAY, fontFace: "Arial" });
        });
      },
    },
    {
      id: 4,
      title: "Практические особенности прений",
      draw: (slide: pptxgen.Slide) => {
        const items = [
          { label: "Ограничение времени", desc: "Суд вправе ограничить продолжительность выступления" },
          { label: "Записи и документы", desc: "Разрешено использовать в ходе речи" },
          { label: "Контроль судьи", desc: "Судья вправе остановить при выходе за рамки дела" },
          { label: "Равные условия", desc: "Все участники в равных процессуальных условиях" },
        ];
        const cols = [0, 1];
        const rows = [0, 1];
        rows.forEach((r) => cols.forEach((c) => {
          const item = items[r * 2 + c];
          const x = 5.1 + c * 2.38;
          const y = 1.1 + r * 1.1;
          card(slide, x, y, 2.25, 0.95);
          slide.addShape("rect" as pptxgen.ShapeType, { x: x + 0.1, y: y + 0.1, w: 0.38, h: 0.38, fill: { color: "1E1E4A" }, line: { color: ACCENT, width: 0.5 }, rectRadius: 0.05 });
          slide.addText(item.label, { x: x + 0.58, y: y + 0.1, w: 1.6, h: 0.28, fontSize: 9, bold: true, color: WHITE, fontFace: "Arial", wrap: true });
          slide.addText(item.desc, { x: x + 0.1, y: y + 0.52, w: 2.1, h: 0.38, fontSize: 7.5, color: LIGHT_GRAY, fontFace: "Arial", wrap: true });
        }));
      },
    },
    {
      id: 5,
      title: "Реплики в судебных прениях",
      draw: (slide: pptxgen.Slide) => {
        card(slide, 5.1, 1.1, 4.65, 0.55, "1A1A3A", ACCENT);
        slide.addText("Реплика — краткое выступление после основных речей, содержащее возражения, замечания или уточнения", {
          x: 5.2, y: 1.13, w: 4.45, h: 0.48, fontSize: 8.5, color: "CBD5E1", fontFace: "Arial", wrap: true,
        });

        const rules = [
          "Очерёдность — как при основных выступлениях",
          "Последняя реплика — всегда за ответчиком",
          "От реплики можно отказаться",
          "Нельзя повторять содержание основной речи",
          "Ссылки допустимы только на уже обсуждённое",
          "Суд вправе ограничить число реплик и их длительность",
        ];
        const cols = [0, 1];
        const rows = [0, 1, 2];
        rows.forEach((r) => cols.forEach((c) => {
          const rule = rules[r * 2 + c];
          if (!rule) return;
          const x = 5.1 + c * 2.38;
          const y = 1.75 + r * 0.65;
          card(slide, x, y, 2.25, 0.55);
          slide.addText(`→  ${rule}`, { x: x + 0.1, y: y + 0.08, w: 2.1, h: 0.4, fontSize: 8, color: "CBD5E1", fontFace: "Arial", wrap: true });
        }));
      },
    },
    {
      id: 6,
      title: "Ограничения в судебных прениях",
      draw: (slide: pptxgen.Slide) => {
        card(slide, 5.1, 1.1, 4.65, 0.5, AMBER_BG, "92400E");
        slide.addText("⚠  Решение суда должно основываться только на проверенных и юридически значимых данных", {
          x: 5.2, y: 1.13, w: 4.45, h: 0.44, fontSize: 8.5, color: "FEF3C7", fontFace: "Arial", wrap: true,
        });

        const items = [
          { label: "Невыясненные обстоятельства", desc: "Факты, которые не рассматривались судом" },
          { label: "Неисследованные доказательства", desc: "Доказательства, не изученные в ходе заседания" },
          { label: "Недопустимые доказательства", desc: "Доказательства, признанные таковыми судом" },
        ];
        items.forEach((item, i) => {
          const y = 1.72 + i * 0.78;
          card(slide, 5.1, y, 4.65, 0.65, RED_BG, "9F1239");
          slide.addText("✕", { x: 5.18, y: y + 0.16, w: 0.3, h: 0.3, fontSize: 13, color: RED, fontFace: "Arial" });
          slide.addText(item.label, { x: 5.52, y: y + 0.08, w: 4.1, h: 0.24, fontSize: 9.5, bold: true, color: RED, fontFace: "Arial" });
          slide.addText(item.desc, { x: 5.52, y: y + 0.33, w: 4.1, h: 0.24, fontSize: 8, color: LIGHT_GRAY, fontFace: "Arial" });
        });
      },
    },
    {
      id: 7,
      title: "Письменная форма прений",
      draw: (slide: pptxgen.Slide) => {
        const steps = [
          { label: "Устное выступление", desc: "Основная речь в ходе прений" },
          { label: "Письменные тезисы", desc: "Составляются после устного выступления" },
          { label: "Приобщение к делу", desc: "Суд включает текст в материалы дела" },
          { label: "Фиксация аргументов", desc: "Правовая позиция закреплена в деле" },
        ];
        steps.forEach((s, i) => {
          const y = 1.1 + i * 0.72;
          card(slide, 5.1, y, 4.65, 0.58);
          slide.addShape("rect" as pptxgen.ShapeType, { x: 5.18, y: y + 0.1, w: 0.36, h: 0.36, fill: { color: "1E1E4A" }, line: { color: ACCENT, width: 0.5 }, rectRadius: 0.05 });
          slide.addText(String(i + 1), { x: 5.18, y: y + 0.1, w: 0.36, h: 0.36, fontSize: 9, bold: true, color: ACCENT, fontFace: "Arial", align: "center", valign: "middle" });
          slide.addText(s.label, { x: 5.62, y: y + 0.07, w: 4.0, h: 0.22, fontSize: 9.5, bold: true, color: WHITE, fontFace: "Arial" });
          slide.addText(s.desc, { x: 5.62, y: y + 0.3, w: 4.0, h: 0.22, fontSize: 8, color: LIGHT_GRAY, fontFace: "Arial" });
          if (i < steps.length - 1) {
            slide.addText("↓", { x: 5.1, y: y + 0.6, w: 4.65, h: 0.12, fontSize: 9, color: CARD_BORDER, fontFace: "Arial", align: "center" });
          }
        });
      },
    },
    {
      id: 8,
      title: "Завершение прений и дальнейшие стадии",
      draw: (slide: pptxgen.Slide) => {
        const stages = [
          "Прения и реплики завершены",
          "Суд удаляется в совещательную комнату",
          "Решение оглашается",
        ];
        stages.forEach((label, i) => {
          const x = 5.1 + i * 1.6;
          card(slide, x, 1.1, 1.45, 1.0, "0A2A1A", "065F46");
          slide.addText(String(i + 1), { x, y: 1.15, w: 1.45, h: 0.3, fontSize: 16, bold: true, color: GREEN, fontFace: "Arial", align: "center" });
          slide.addText(label, { x: x + 0.07, y: 1.5, w: 1.32, h: 0.55, fontSize: 8, color: "D1FAE5", fontFace: "Arial", align: "center", wrap: true });
          if (i < stages.length - 1) {
            slide.addText("→", { x: x + 1.45, y: 1.45, w: 0.15, h: 0.3, fontSize: 12, color: LIGHT_GRAY, fontFace: "Arial" });
          }
        });

        card(slide, 5.1, 2.25, 4.65, 1.35);
        slide.addText("Основания для возобновления рассмотрения дела", {
          x: 5.2, y: 2.3, w: 4.45, h: 0.25, fontSize: 8.5, bold: true, color: AMBER, fontFace: "Arial",
        });
        const reasons = [
          "Необходимость выяснить новые обстоятельства",
          "Исследование новых доказательств",
          "Выявление существенных противоречий",
          "Ошибки в оценке доказательств",
          "Сведения о фальсификации доказательств",
        ];
        const col1 = reasons.slice(0, 3);
        const col2 = reasons.slice(3);
        col1.forEach((r, i) => {
          slide.addText(`• ${r}`, { x: 5.2, y: 2.62 + i * 0.3, w: 2.2, h: 0.26, fontSize: 8, color: "CBD5E1", fontFace: "Arial" });
        });
        col2.forEach((r, i) => {
          slide.addText(`• ${r}`, { x: 7.45, y: 2.62 + i * 0.3, w: 2.2, h: 0.26, fontSize: 8, color: "CBD5E1", fontFace: "Arial" });
        });
      },
    },
  ];

  for (const data of slideData) {
    const slide = pptx.addSlide();

    slide.background = { color: DARK_BG };

    const imgBase64 = await fetchImageAsBase64(imageUrls[data.id]);
    slide.addImage({ data: `image/jpeg;base64,${imgBase64}`, x: 0, y: 0, w: 5.0, h: 3.75, sizing: { type: "cover", w: 5.0, h: 3.75 } });

    slide.addShape("rect" as pptxgen.ShapeType, {
      x: 3.5, y: 0, w: 1.6, h: 3.75,
      fill: { type: "gradient", gradType: "linear", stops: [{ position: 0, color: DARK_BG, transparency: 100 }, { position: 100, color: DARK_BG, transparency: 0 }], angle: 90 },
      line: { color: DARK_BG, width: 0 },
    });

    slide.addText("Гражданский процесс  ·  Судебные прения", {
      x: 5.1, y: 0.05, w: 4.6, h: 0.2,
      fontSize: 7, color: LIGHT_GRAY, fontFace: "Arial",
    });

    addSlideHeader(slide, data.title, data.id);

    slide.addShape("line" as pptxgen.ShapeType, {
      x: 5.1, y: 1.07, w: 4.65, h: 0,
      line: { color: CARD_BORDER, width: 0.5 },
    });

    data.draw(slide);

    slide.addText(`${data.id} / 8`, {
      x: 9.3, y: 3.55, w: 0.6, h: 0.18,
      fontSize: 7, color: LIGHT_GRAY, fontFace: "Arial", align: "right",
    });
  }

  await pptx.writeFile({ fileName: "Судебные_прения.pptx" });
}
