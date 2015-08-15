import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed.notEmpty('model.description'),
  actions: {
    save: function () {
      if (this.get('isValid')) {
        return true;
      }
      else {
        this.set('errorMessage', 'You have to fill the description');
      }
    }
  }
});
