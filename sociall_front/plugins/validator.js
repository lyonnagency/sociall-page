import Vue from 'vue';
import VeeValidate from 'vee-validate';

const config = {
  aria: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  },
  classes: true,
  delay: 0,
  dictionary: null,
  errorBagName: 'errors', // change if property conflicts
  events: 'input|blur',
  fieldsBagName: 'fields',
  i18n: null, // the vue-i18n plugin instance
  i18nRootKey: 'validations', // the nested key under which the validation messages will be located
  inject: true,
  locale: 'es',
  validity: false,
  useConstraintAttrs: true
};
Vue.use(VeeValidate, config);
