export const SOMETHINGLOL = 'SOMETHINGLOL';

export const somethingLol = (value) => ({
  type: SOMETHINGLOL,
  value
})

export const INCREASE_COUNT = 'INCREASE_COUNT';

export const increaseCount = (count) => ({
  type: INCREASE_COUNT,
  count
})

export const NAVIGATE_BRANCH = 'NAVIGATE_BRANCH';

export const navigateBranch = (router) => ({
  type: INCREASE_COUNT,
  router
})
