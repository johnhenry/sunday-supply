import { matchingPlans } from './plans.mjs';
const form = document.querySelector('#plan-finder');
const input = document.querySelector('#team-size');
const result = document.querySelector('#plan-result');
form.hidden = false;
form.addEventListener('submit', event => {
  event.preventDefault();
  const size = input.valueAsNumber;
  if (!form.reportValidity()) return;
  try {
    const matches = matchingPlans(size);
    result.textContent = matches.length
      ? matches.map(plan => plan.name + ': $' + plan.monthly + ' / month').join(' · ') + (matches.length > 1 ? '. Your team fits both ranges; compare the included supplies below.' : '. Compare the included supplies below.')
      : 'Our listed plans cover teams of 5–60 people. No listed plan matches this team size.';
  } catch (error) {
    result.textContent = error.message;
  }
});
