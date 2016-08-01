import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import 'foundation-sites/dist/foundation.js';

Template.body.onRendered(() => {
  $(document).foundation();
});
