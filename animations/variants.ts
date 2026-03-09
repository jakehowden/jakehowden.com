import { Variants } from 'framer-motion'

export const getSectionVariants = (disabled: boolean): Variants => {
  if (disabled) return { hidden: {}, visible: {}, exit: {} }
  return {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  }
}

export const getListContainerVariants = (disabled: boolean): Variants => {
  if (disabled) return { hidden: {}, visible: {} }
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 }
    }
  }
}

export const getListItemVariants = (disabled: boolean): Variants => {
  if (disabled) return { hidden: {}, visible: {} }
  return {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
  }
}

export const getRowVariants = (disabled: boolean): Variants => {
  if (disabled) return { hidden: {}, visible: {} }
  return {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, staggerChildren: 0.08 }
    }
  }
}

export const getTechItemVariants = (disabled: boolean): Variants => {
  if (disabled) return { hidden: {}, visible: {} }
  return {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  }
}
