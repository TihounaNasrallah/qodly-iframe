import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';

const commonSettings: TSetting[] = [
  {
    key: 'name',
    label: 'Name',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'iframe',
  },
  {
    key: 'srcdoc',
    label: 'HTML Content',
    type: ESetting.TEXT_FIELD,
    defaultValue: '<p>Hello World !<p>',
  },
  {
    key: 'height',
    label: 'Height',
    type: ESetting.UNITFIELD,
    hasLabel: true,
    defaultValue: '100%',
  },
  {
    key: 'width',
    label: 'Width',
    type: ESetting.UNITFIELD,
    hasLabel: true,
    defaultValue: '100%',
  },
  {
    key: 'allowfullscreen',
    label: 'Allow Fullscreen',
    type: ESetting.CHECKBOX,
    defaultValue: true,
  },
  {
    key: 'allow',
    label: 'Permissions',
    titleProperty: 'Permission',
    type: ESetting.DATAGRID,
    data: [
      {
        key: 'permission',
        label: 'Permission',
        type: ESetting.TEXT_FIELD,
        defaultValue: '',
      },
    ],
  },
  {
    key: 'referrerpolicy',
    label: 'Referrer Policy',
    type: ESetting.SELECT,
    defaultValue: '',
    options: [
      { label: 'no-referrer-when-downgrade', value: 'no-referrer-when-downgrade' },
      { label: 'no-referrer', value: 'no-referrer' },
      { label: 'same-origin', value: 'same-origin' },
      { label: 'origin', value: 'origin' },
      { label: 'strict-origin', value: 'strict-origin' },
      { label: 'origin-when-cross-origin', value: 'origin-when-cross-origin' },
      { label: 'strict-origin-when-cross-origin', value: 'strict-origin-when-cross-origin' },
      { label: 'unsafe-url', value: 'unsafe-url' },
    ],
  },
  {
    key: 'sandbox',
    label: 'Sandbox',
    type: ESetting.SELECT,
    defaultValue: '',
    options: [
      { label: 'allow-forms', value: 'allow-forms' },
      { label: 'allow-pointer-lock', value: 'allow-pointer-lock' },
      { label: 'allow-popups', value: 'allow-popups' },
      { label: 'allow-same-origin', value: 'allow-same-origin' },
      { label: 'allow-scripts', value: 'allow-scripts' },
      { label: 'allow-top-navigation', value: 'allow-top-navigation' },
    ],
  },
  {
    key: 'loading',
    label: 'Loading',
    type: ESetting.SELECT,
    defaultValue: '',
    options: [
      { label: 'eager', value: 'eager' },
      { label: 'lazy', value: 'lazy' },
    ],
  },
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  ...DEFAULT_SETTINGS,
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('style.overflow'),
];

export default Settings;