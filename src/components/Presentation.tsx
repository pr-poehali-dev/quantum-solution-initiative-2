import { useState } from "react";
import Icon from "@/components/ui/icon";
import { generatePptx } from "@/lib/generatePptx";

const slides = [
  {
    id: 1,
    title: "Понятие и значение судебных прений",
    subtitle: "Ст. 190 ГПК РФ",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/4ebfe351-b4a3-46a7-b608-59434ee266ae.jpg",
    schema: {
      type: "definition",
      definition: "Самостоятельная стадия судебного разбирательства — устные выступления участников с подведением итогов спора",
      items: [
        { icon: "BookOpen", label: "Познавательное", desc: "Суд получает обобщённую и систематизированную информацию" },
        { icon: "Scale", label: "Убеждающее", desc: "Стороны обосновывают свою правовую позицию" },
        { icon: "Search", label: "Контрольное", desc: "Участники указывают на ошибки и пробелы" },
        { icon: "Shield", label: "Процессуальное", desc: "Реализация права на судебную защиту" },
      ],
    },
  },
  {
    id: 2,
    title: "Участники судебных прений",
    subtitle: "Кто вправе выступать",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/4a2f30ec-1ea3-4b37-9bbc-f6524550ab86.jpg",
    schema: {
      type: "two-columns",
      left: {
        label: "Участвуют в прениях",
        items: [
          "Истец",
          "Ответчик",
          "Заявители",
          "Заинтересованные лица",
          "Третьи лица",
          "Представители участников",
        ],
      },
      right: {
        label: "Не участвуют в прениях",
        items: [
          "Эксперты",
          "Специалисты",
          "Свидетели",
          "Переводчики",
          "Помощник судьи",
          "Секретарь судебного заседания",
        ],
      },
    },
  },
  {
    id: 3,
    title: "Порядок выступлений в прениях",
    subtitle: "Последовательность речей",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/8c99acd1-5e98-4132-b3fc-55a3148b5342.jpg",
    schema: {
      type: "steps",
      items: [
        { step: "1", label: "Истец", note: "Открывает прения" },
        { step: "2", label: "Третье лицо на стороне истца", note: "Без самостоятельных требований" },
        { step: "3", label: "Ответчик", note: "Излагает свою позицию" },
        { step: "4", label: "Третье лицо на стороне ответчика", note: "Без самостоятельных требований" },
        { step: "5", label: "Третье лицо с самостоятельными требованиями", note: "Завершает основные речи" },
      ],
    },
  },
  {
    id: 4,
    title: "Практические особенности прений",
    subtitle: "Правила проведения",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/26161225-41bd-4856-9cbf-496b81b8e594.jpg",
    schema: {
      type: "features",
      items: [
        { icon: "Clock", label: "Ограничение времени", desc: "Суд вправе ограничить продолжительность выступления" },
        { icon: "FileText", label: "Записи и документы", desc: "Разрешено использовать в ходе речи" },
        { icon: "Ban", label: "Контроль судьи", desc: "Судья вправе остановить при выходе за рамки дела" },
        { icon: "Users", label: "Равные условия", desc: "Все участники в равных процессуальных условиях" },
      ],
    },
  },
  {
    id: 5,
    title: "Реплики в судебных прениях",
    subtitle: "Краткие ответы на доводы оппонентов",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/8d089b74-0133-4c48-8819-db25b04c3ac8.jpg",
    schema: {
      type: "replica",
      definition: "Реплика — краткое выступление после основных речей, содержащее возражения, замечания или уточнения",
      rules: [
        "Очерёдность — как при основных выступлениях",
        "Последняя реплика — всегда за ответчиком",
        "От реплики можно отказаться",
        "Нельзя повторять содержание основной речи",
        "Ссылки допустимы только на уже обсуждённое",
        "Суд вправе ограничить число реплик и их длительность",
      ],
    },
  },
  {
    id: 6,
    title: "Ограничения в судебных прениях",
    subtitle: "Что нельзя использовать",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/e7c792aa-50da-465d-a156-82af188c0b9e.jpg",
    schema: {
      type: "prohibitions",
      reason: "Решение суда должно основываться только на проверенных и юридически значимых данных",
      items: [
        { icon: "XCircle", label: "Невыясненные обстоятельства", desc: "Факты, которые не рассматривались судом" },
        { icon: "XCircle", label: "Неисследованные доказательства", desc: "Доказательства, не изученные в ходе заседания" },
        { icon: "XCircle", label: "Недопустимые доказательства", desc: "Доказательства, признанные таковыми судом" },
      ],
    },
  },
  {
    id: 7,
    title: "Письменная форма прений",
    subtitle: "Фиксация позиции в деле",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/1431fa19-d82e-4692-bc88-1cfa32896d29.jpg",
    schema: {
      type: "flow",
      steps: [
        { icon: "Mic", label: "Устное выступление", desc: "Основная речь в ходе прений" },
        { icon: "PenLine", label: "Письменные тезисы", desc: "Составляются после устного выступления" },
        { icon: "Folder", label: "Приобщение к делу", desc: "Суд включает текст в материалы дела" },
        { icon: "Archive", label: "Фиксация аргументов", desc: "Правовая позиция закреплена в деле" },
      ],
    },
  },
  {
    id: 8,
    title: "Завершение прений и дальнейшие стадии",
    subtitle: "Переход к вынесению решения",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/2ddf3864-0d97-4ac0-8022-5bdd590134d5.jpg",
    schema: {
      type: "final",
      stages: [
        { icon: "MessageSquare", label: "Прения и реплики завершены" },
        { icon: "DoorClosed", label: "Суд удаляется в совещательную комнату" },
        { icon: "FileCheck", label: "Решение оглашается" },
      ],
      resumeReasons: [
        "Необходимость выяснить новые обстоятельства",
        "Исследование новых доказательств",
        "Выявление существенных противоречий",
        "Ошибки в оценке доказательств",
        "Сведения о фальсификации доказательств",
      ],
    },
  },
];

type SlideSchema = typeof slides[0]["schema"];

const SchemaDefinition = ({ schema }: { schema: SlideSchema }) => {
  if (schema.type === "definition") {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="rounded-xl border border-[#7170ff]/40 bg-[#7170ff]/10 px-5 py-4 text-sm text-slate-200 text-center leading-relaxed">
          {schema.definition}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {"items" in schema && schema.items?.map((item) => (
            <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/60 p-3">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#7170ff]/20">
                <Icon name={item.icon} size={14} className="text-[#7170ff]" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">{item.label}</div>
                <div className="text-xs text-slate-400 leading-relaxed mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (schema.type === "two-columns") {
    return (
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Icon name="CheckCircle" size={16} className="text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-400">{"left" in schema ? schema.left?.label : ""}</span>
          </div>
          <ul className="space-y-2">
            {"left" in schema && schema.left?.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Icon name="XCircle" size={16} className="text-rose-400" />
            <span className="text-sm font-semibold text-rose-400">{"right" in schema ? schema.right?.label : ""}</span>
          </div>
          <ul className="space-y-2">
            {"right" in schema && schema.right?.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (schema.type === "steps") {
    return (
      <div className="flex flex-col gap-2 w-full">
        {"items" in schema && schema.items?.map((item) => (
          "step" in item && (
            <div key={item.step} className="flex items-start gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7170ff] text-xs font-bold text-white mt-0.5">
                {item.step}
              </div>
              <div className="flex flex-1 flex-col rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2">
                <span className="text-sm font-medium text-white leading-snug">{item.label}</span>
                <span className="text-xs text-slate-400 mt-0.5">{"note" in item ? item.note : ""}</span>
              </div>
            </div>
          )
        ))}
      </div>
    );
  }

  if (schema.type === "features") {
    return (
      <div className="grid grid-cols-2 gap-3 w-full">
        {"items" in schema && schema.items?.map((item) => (
          "icon" in item && (
            <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/60 p-4">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#7170ff]/20">
                <Icon name={item.icon} size={16} className="text-[#7170ff]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white leading-snug">{item.label}</div>
                <div className="text-xs text-slate-400 mt-1 leading-relaxed">{"desc" in item ? item.desc : ""}</div>
              </div>
            </div>
          )
        ))}
      </div>
    );
  }

  if (schema.type === "replica") {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="rounded-xl border border-[#7170ff]/40 bg-[#7170ff]/10 px-5 py-3 text-sm text-slate-200 text-center leading-relaxed">
          {"definition" in schema ? schema.definition : ""}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {"rules" in schema && schema.rules?.map((rule) => (
            <div key={rule} className="flex items-start gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2">
              <Icon name="ArrowRight" size={12} className="mt-0.5 shrink-0 text-[#7170ff]" />
              <span className="text-xs text-slate-300 leading-relaxed">{rule}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (schema.type === "prohibitions") {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-5 py-3 text-xs text-amber-200 text-center leading-relaxed">
          <Icon name="AlertTriangle" size={14} className="inline mr-2 text-amber-400" />
          {"reason" in schema ? schema.reason : ""}
        </div>
        <div className="flex flex-col gap-3">
          {"items" in schema && schema.items?.map((item) => (
            "icon" in item && (
              <div key={item.label} className="flex items-start gap-4 rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-3">
                <Icon name="XCircle" size={20} className="mt-0.5 shrink-0 text-rose-400" />
                <div>
                  <div className="text-sm font-semibold text-rose-300 leading-snug">{item.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{"desc" in item ? item.desc : ""}</div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    );
  }

  if (schema.type === "flow") {
    const steps = "steps" in schema ? schema.steps : [];
    return (
      <div className="flex flex-col gap-2.5 w-full">
        {steps?.map((step, i) => (
          <div key={step.label} className="flex items-center gap-3">
            <div className="flex items-center gap-3 flex-1 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#7170ff]/20">
                <Icon name={step.icon} size={16} className="text-[#7170ff]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white leading-snug">{step.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{step.desc}</div>
              </div>
            </div>
            {i < (steps?.length ?? 0) - 1 && (
              <Icon name="ChevronDown" size={18} className="text-slate-500 shrink-0" />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (schema.type === "final") {
    const stages = "stages" in schema ? schema.stages : [];
    const resumeReasons = "resumeReasons" in schema ? schema.resumeReasons : [];
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between gap-2">
          {stages?.map((stage, i) => (
            <div key={stage.label} className="flex items-center gap-2 flex-1">
              <div className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2 py-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                  <Icon name={stage.icon} size={16} className="text-emerald-400" />
                </div>
                <span className="text-xs text-center font-medium text-emerald-300 leading-snug">{stage.label}</span>
              </div>
              {i < (stages?.length ?? 0) - 1 && (
                <Icon name="ChevronRight" size={16} className="text-slate-500 shrink-0" />
              )}
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Icon name="RefreshCw" size={14} className="text-amber-400" />
            <span className="text-xs font-semibold text-amber-400">Основания для возобновления рассмотрения дела</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {resumeReasons?.map((reason) => (
              <div key={reason} className="flex items-center gap-2 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                {reason}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export const Presentation = () => {
  const [current, setCurrent] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const slide = slides[current];

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await generatePptx();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Scale" size={18} className="text-[#7170ff]" />
            <span className="text-sm font-medium text-slate-400">Гражданский процесс · Судебные прения</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500">{current + 1} / {slides.length}</span>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-2 rounded-lg border border-[#7170ff]/50 bg-[#7170ff]/10 px-4 py-2 text-sm text-[#7170ff] transition hover:bg-[#7170ff]/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name={downloading ? "Loader" : "Download"} size={15} />
              {downloading ? "Генерация..." : "Скачать PPTX"}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#0f0f1a] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-2 min-h-[520px]">
            <div className="relative overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0f1a]" />
            </div>

            <div className="flex flex-col justify-between p-8 overflow-y-auto">
              <div>
                <div className="mb-1 text-xs font-medium text-[#7170ff] uppercase tracking-widest">
                  Слайд {slide.id}
                </div>
                <h2 className="mb-5 text-xl font-bold leading-snug text-white">
                  {slide.title}
                </h2>
                <SchemaDefinition schema={slide.schema} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-slate-300 transition hover:border-[#7170ff]/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Icon name="ChevronLeft" size={16} />
            Назад
          </button>

          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-8 bg-[#7170ff]" : "w-1.5 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-slate-300 transition hover:border-[#7170ff]/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Вперёд
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;