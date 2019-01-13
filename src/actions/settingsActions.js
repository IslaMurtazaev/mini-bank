export const TOGGLE_DISABLE_BALANCE_ON_ADD = "TOGGLE_DISABLE_BALANCE_ON_ADD";
export const TOGGLE_DISABLE_BALANCE_ON_EDIT = "TOGGLE_DISABLE_BALANCE_ON_EDIT";
export const TOGGLE_ALLOW_REGISTRATION = "TOGGLE_ALLOW_REGISTRATION";

function toggleDisableBalanceOnAdd() {
  return { type: TOGGLE_DISABLE_BALANCE_ON_ADD };
}

function toggleDisableBalanceOnEdit() {
  return { type: TOGGLE_DISABLE_BALANCE_ON_EDIT };
}

function toggleAllowRegistration() {
  return { type: TOGGLE_ALLOW_REGISTRATION };
}

export default {
  toggleDisableBalanceOnAdd,
  toggleDisableBalanceOnEdit,
  toggleAllowRegistration
};
