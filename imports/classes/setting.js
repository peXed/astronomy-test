import { Class } from 'meteor/jagi:astronomy';
import Settings from '/imports/collections/settings.js';

export default Class.create({
  name: 'Setting',
  collection: Settings,
  fields: {
    defaultName: {
      type: String
    },
  }
});
