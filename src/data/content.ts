import { contentFr } from './content.fr.ts'
import { contentEn } from './content.en.ts'
import type { Locale, SiteContent } from './content.types.ts'

export const contents: Record<Locale, SiteContent> = {
  fr: contentFr,
  en: contentEn,
}

export type { Locale, SiteContent } from './content.types.ts'
export type {
  Stat,
  Experience,
  AiCard,
  SkillGroup,
  EducationItem,
  LanguageItem,
  Company,
  NavItem,
  SavorFeature,
} from './content.types.ts'
