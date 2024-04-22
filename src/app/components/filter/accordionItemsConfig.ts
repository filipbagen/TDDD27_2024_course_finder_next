// accordionItemsConfig.ts
import { AccordionItemProps } from './types';
import {
  BetweenHorizontalStart,
  AlignVerticalJustifyCenter,
  Blocks,
  Gauge,
  Network,
  SignpostBig,
  NotebookPen,
  School,
} from 'lucide-react';

export const accordionItems: AccordionItemProps[] = [
  {
    value: 'semester',
    title: 'Termin',
    filterType: 'semester',
    options: [7, 8, 9],
    displayValue: (semester: string | number) => `Termin ${semester}`,
    icon: BetweenHorizontalStart,
  },
  {
    value: 'period',
    title: 'Period',
    filterType: 'period',
    options: [1, 2],
    displayValue: (period: string | number) => `Period ${period}`,
    icon: AlignVerticalJustifyCenter,
  },
  {
    value: 'block',
    title: 'Block',
    filterType: 'block',
    options: [1, 2, 3, 4],
    displayValue: (block: string | number) => `Block ${block}`,
    icon: Blocks,
  },
  {
    value: 'studyPace',
    title: 'Studietakt',
    filterType: 'studyPace',
    options: ['Helfart', 'Halvfart'],
    displayValue: (pace: string | number) => pace.toString(),
    icon: Gauge,
  },
  {
    value: 'level',
    title: 'Utbildningsnivå',
    filterType: 'courseLevel',
    options: ['Grundnivå', 'Avancerad nivå'],
    displayValue: (level: string | number) => level.toString(),
    icon: Network,
  },
  {
    value: 'fieldOfStudy',
    title: 'Huvudområde',
    filterType: 'mainFieldOfStudy',
    options: ['Medieteknik', 'Datateknik', 'Programvaruteknik', 'Övrigt'],
    displayValue: (field: string | number) => field.toString(),
    icon: SignpostBig,
  },
  {
    value: 'examinations',
    title: 'Examination',
    filterType: 'examinations',
    options: ['Tentamen', 'Laboration', 'Projekt', 'Övrigt'],
    displayValue: (type: string | number) => type.toString(),
    icon: NotebookPen,
  },
  {
    value: 'campus',
    title: 'Campus',
    filterType: 'location',
    options: ['Norrköping', 'Linköping'],
    displayValue: (campus: string | number) => campus.toString(),
    icon: School,
  },
];