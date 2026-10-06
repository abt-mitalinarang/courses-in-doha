export interface IHeroDetails {
    title: string
    subTitle: string
    CTA: { label?: string; href?: string }[]
    trustStats: { key?: string; value?: string }[]
}