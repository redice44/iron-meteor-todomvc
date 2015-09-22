var ENTER_KEY = 13;
/*****************************************************************************/
/* Header: Event Handlers */
/*****************************************************************************/
Template.Header.events({
  'keypress .new-todo': function(event) {
    if(event.type === 'keypress' && event.which === ENTER_KEY) {
      Meteor.call('addTask', event.target.value);
      event.target.value = '';
    }
  }
});

/*****************************************************************************/
/* Header: Helpers */
/*****************************************************************************/
Template.Header.helpers({
});

/*****************************************************************************/
/* Header: Lifecycle Hooks */
/*****************************************************************************/
Template.Header.onCreated(function () {
});

Template.Header.onRendered(function () {
});

Template.Header.onDestroyed(function () {
});