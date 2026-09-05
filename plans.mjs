export const plans = [
  { name: 'The Studio', min: 5, max: 12, monthly: 120 },
  { name: 'The Floor', min: 12, max: 30, monthly: 240 },
  { name: 'The Whole Crew', min: 30, max: 60, monthly: 360 },
];
export function matchingPlans(size) {
  if (!Number.isSafeInteger(size) || size < 1) throw new RangeError('Enter a positive whole number.');
  return plans.filter(plan => size >= plan.min && size <= plan.max);
}
