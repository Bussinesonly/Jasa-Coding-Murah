export interface ServiceItem {
  id: string
  number: string
  title: string
  shortDesc: string
  fullDesc: string
  deliverables: string[]
  techStack: string[]
  idealFor: string
  badge: string
}

export interface PortfolioProject {
  id: string
  title: string
  category: string
  description: string
  fullDescription: string
  clientType: string
  features: string[]
  techStack: string[]
  highlightMetric: string
  highlightLabel: string
  livePreviewType: 'business' | 'school' | 'ecommerce' | 'dashboard'
  accentColor: string
}

export interface ProcessStep {
  number: string
  title: string
  desc: string
  deliverables: string
  duration: string
}

export interface PricingTier {
  name: string
  priceDisplay: string
  priceDesc: string
  suitableFor: string
  features: string[]
  isPopular?: boolean
}
