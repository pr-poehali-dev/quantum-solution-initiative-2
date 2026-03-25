import { useState } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 1,
    title: "Понятие и значение судебных прений",
    subtitle: "Ст. 190 ГПК РФ",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/b6d5e366-4152-4cb3-b882-37f6465a34c4.jpg",
    schema: {
      type: "definition",
      definition: "Самостоятельная стадия судебного разбирательства — устные выступления участников с подведением итогов спора",
      items: [
        { icon: "BookOpen", label: "Познавательное", desc: "Суд получает обобщённую информацию" },
        { icon: "Scale", label: "Убеждающее", desc: "Стороны обосновывают свою позицию" },
        { icon: "Search", label: "Контрольное", desc: "Выявление ошибок и пробелов" },
        { icon: "Shield", label: "Процессуальное", desc: "Реализация права на защиту" },
      ],
    },
  },
  {
    id: 2,
    title: "Участники судебных прений",
    subtitle: "Кто вправе выступать",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/95e25b7c-b2ae-44c7-8563-13edef235791.jpg",
    schema: {
      type: "two-columns",
      left: {
        label: "Участвуют",
        color: "green",
        items: ["Истец", "Ответчик", "Заявители", "Заинтересованные лица", "Третьи лица", "Представители сторон"],
      },
      right: {
        label: "Не участвуют",
        color: "red",
        items: ["Эксперты", "Специалисты", "Свидетели", "Переводчики", "Помощник судьи", "Секретарь заседания"],
      },
    },
  },
  {
    id: 3,
    title: "Порядок выступлений",
    subtitle: "Последовательность речей в прениях",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/587966d8-d577-4377-9cd2-9b9bed5e9813.jpg",
    schema: {
      type: "steps",
      items: [
        { step: "1", label: "Истец", note: "Открывает прения" },
        { step: "2", label: "Третье лицо на стороне истца", note: "Без самост. требований" },
        { step: "3", label: "Ответчик", note: "Излагает свою позицию" },
        { step: "4", label: "Третье лицо на стороне ответчика", note: "Без самост. требований" },
        { step: "5", label: "Третье лицо с самост. требованиями", note: "Завершает основные речи" },
      ],
    },
  },
  {
    id: 4,
    title: "Практические особенности прений",
    subtitle: "Правила проведения",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/1fb572d8-5db9-43bb-aafc-812a6a059b4b.jpg",
    schema: {
      type: "features",
      items: [
        { icon: "Clock", label: "Ограничение времени", desc: "Суд вправе ограничить продолжительность выступления" },
        { icon: "FileText", label: "Записи и документы", desc: "Можно пользоваться в ходе речи" },
        { icon: "Ban", label: "Контроль судьи", desc: "Судья останавливает при выходе за рамки дела" },
        { icon: "Users", label: "Равные условия", desc: "Все участники в равных процессуальных условиях" },
      ],
    },
  },
  {
    id: 5,
    title: "Реплики в судебных прениях",
    subtitle: "Краткие ответы на доводы оппонентов",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/783cc785-5199-468c-bd11-ed1c0a6e91b7.jpg",
    schema: {
      type: "replica",
      definition: "Реплика — краткое выступление после основных речей с возражениями, замечаниями или уточнениями",
      rules: [
        "Очерёдность — как при основных выступлениях",
        "Последняя реплика — всегда у ответчика",
        "От реплики можно отказаться",
        "Нельзя повторять основную речь",
        "Ссылки только на уже обсуждённое",
        "Суд вправе ограничить число и длительность",
      ],
    },
  },
  {
    id: 6,
    title: "Ограничения в прениях",
    subtitle: "Что нельзя использовать",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/fd21235e-00b8-4a13-bdbe-4af41b4419c9.jpg",
    schema: {
      type: "prohibitions",
      reason: "Решение должно основываться только на проверенных и юридически значимых данных",
      items: [
        { icon: "XCircle", label: "Невыясненные обстоятельства", desc: "Факты, не рассматривавшиеся судом" },
        { icon: "XCircle", label: "Неисследованные доказательства", desc: "Не изученные в ходе заседания" },
        { icon: "XCircle", label: "Недопустимые доказательства", desc: "Признанные таковыми судом" },
      ],
    },
  },
  {
    id: 7,
    title: "Письменная форма прений",
    subtitle: "Фиксация аргументов",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/fd21235e-00b8-4a13-bdbe-4af41b4419c9.jpg",
    schema: {
      type: "flow",
      steps: [
        { icon: "Mic", label: "Устное выступление", desc: "Основная речь в прениях" },
        { icon: "PenLine", label: "Письменные тезисы", desc: "Составляются после устного выступления" },
        { icon: "Folder", label: "Приобщение к делу", desc: "Суд включает в материалы дела" },
        { icon: "Archive", label: "Фиксация аргументов", desc: "Позиция сохранена в деле" },
      ],
    },
  },
  {
    id: 8,
    title: "Завершение прений и дальнейшие стадии",
    subtitle: "Переход к вынесению решения",
    image: "https://cdn.poehali.dev/projects/b3692c24-792a-4518-8595-7132b3370a3f/files/cc2ec31b-4f7b-4683-92e0-11558cbb2063.jpg",
    schema: {
      type: "final",
      stages: [
        { icon: "MessageSquare", label: "Прения и реплики", status: "done" },
        { icon: "DoorClosed", label: "Совещательная комната", status: "done" },
        { icon: "FileCheck", label: "Оглашение решения", status: "done" },
      ],
      resumeReasons: [
        "Новые обстоятельства",
        "Новые доказательства",
        "Существенные противоречия",
        "Ошибки в оценке доказательств",
        "Фальсификация доказательств",
      ],
    },
  },
];

const SchemaDefinition = ({ schema }: { schema: typeof slides[0]["schema"] }) => {
  if (schema.type === "definition") {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="rounded-xl border border-[#7170ff]/40 bg-[#7170ff]/10 px-5 py-4 text-sm text-slate-200 text-center leading-relaxed">
          {schema.definition}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {schema.items?.map((item) => (
            <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/60 p-3">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#7170ff]/20">
                <Icon name={item.icon} size={14} className="text-[#7170ff]" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">{item.label}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
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
            <span className="text-sm font-semibold text-emerald-400">{schema.left?.label}</span>
          </div>
          <ul className="space-y-2">
            {schema.left?.items.map((item) => (
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
            <span className="text-sm font-semibold text-rose-400">{schema.right?.label}</span>
          </div>
          <ul className="space-y-2">
            {schema.right?.items.map((item) => (
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
        {schema.items?.map((item, i) => (
          <div key={item.step} className="flex items-center gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7170ff] text-xs font-bold text-white">
              {item.step}
            </div>
            <div className="flex flex-1 items-center justify-between rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2">
              <span className="text-sm font-medium text-white">{item.label}</span>
              <span className="text-xs text-slate-400">{item.note}</span>
            </div>
            {i < (schema.items?.length ?? 0) - 1 && (
              <div className="absolute" />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (schema.type === "features") {
    return (
      <div className="grid grid-cols-2 gap-3 w-full">
        {schema.items?.map((item) => (
          <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/60 p-4">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#7170ff]/20">
              <Icon name={item.icon} size={16} className="text-[#7170ff]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{item.label}</div>
              <div className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (schema.type === "replica") {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="rounded-xl border border-[#7170ff]/40 bg-[#7170ff]/10 px-5 py-3 text-sm text-slate-200 text-center leading-relaxed">
          {schema.definition}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {schema.rules?.map((rule) => (
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
          {schema.reason}
        </div>
        <div className="flex flex-col gap-3">
          {schema.items?.map((item) => (
            <div key={item.label} className="flex items-start gap-4 rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-3">
              <Icon name="XCircle" size={20} className="mt-0.5 shrink-0 text-rose-400" />
              <div>
                <div className="text-sm font-semibold text-rose-300">{item.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (schema.type === "flow") {
    return (
      <div className="flex flex-col gap-3 w-full">
        {schema.steps?.map((step, i) => (
          <div key={step.label} className="flex items-center gap-3">
            <div className="flex items-center gap-3 flex-1 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#7170ff]/20">
                <Icon name={step.icon} size={16} className="text-[#7170ff]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{step.label}</div>
                <div className="text-xs text-slate-400">{step.desc}</div>
              </div>
            </div>
            {i < (schema.steps?.length ?? 0) - 1 && (
              <Icon name="ChevronDown" size={18} className="text-slate-500 shrink-0" />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (schema.type === "final") {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between gap-2">
          {schema.stages?.map((stage, i) => (
            <div key={stage.label} className="flex items-center gap-2 flex-1">
              <div className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                  <Icon name={stage.icon} size={16} className="text-emerald-400" />
                </div>
                <span className="text-xs text-center font-medium text-emerald-300">{stage.label}</span>
              </div>
              {i < (schema.stages?.length ?? 0) - 1 && (
                <Icon name="ChevronRight" size={16} className="text-slate-500 shrink-0" />
              )}
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Icon name="RefreshCw" size={14} className="text-amber-400" />
            <span className="text-xs font-semibold text-amber-400">Основания для возобновления дела</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {schema.resumeReasons?.map((reason) => (
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
  const slide = slides[current];

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Scale" size={18} className="text-[#7170ff]" />
            <span className="text-sm font-medium text-slate-400">Гражданский процесс · Судебные прения</span>
          </div>
          <span className="text-sm text-slate-500">
            {current + 1} / {slides.length}
          </span>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#0f0f1a] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-2 min-h-[500px]">
            <div className="relative overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0f1a]" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f0f1a]/80 to-transparent p-6">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#7170ff]/40 bg-[#7170ff]/10 px-3 py-1 text-xs text-[#7170ff] mb-2">
                  <Icon name="BookMarked" size={11} />
                  {slide.subtitle}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-8">
              <div>
                <div className="mb-1 text-xs font-medium text-[#7170ff] uppercase tracking-widest">
                  Слайд {slide.id}
                </div>
                <h2 className="mb-6 text-xl font-bold leading-snug text-white">
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