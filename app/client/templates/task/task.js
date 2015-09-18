var ENTER_KEY = 13;
var ESC_KEY = 27;
/*****************************************************************************/
/* Task: Event Handlers */
/*****************************************************************************/
Template.Task.events({
  'click .toggle': function(event) {
    console.log('Toggling');
    Meteor.call('setComplete', this._id, !this.completed);
  },
  'dblclick .view': function(event) {
    console.log('Double Clicked Task');
    Session.set('editing', this._id);
  },
  'keydown .edit, blur .edit': function(event) {
    if(event.type === "keydown" && event.which === ESC_KEY || event.type === "blur") {
      console.log('Discarding Changes');
      event.target.value = this.title;
      Session.set('editing', null);
    } 
    else if (event.which === ENTER_KEY) {
      console.log('Saving Changes');
      Session.set('editing', null);
      Meteor.call('setTodo', this._id, event.target.value);
    }
  },
  'click .destroy': function(event) {
    event.preventDefault();
    Meteor.call('removeTask', this._id);
  }
});

/*****************************************************************************/
/* Task: Helpers */
/*****************************************************************************/
Template.Task.helpers({
  isComplete: function() {
    return (this.completed) ? 'checked' : '';
  },
  getState: function() {
    if(this.completed) {
      return 'completed';
    } 
    if(Session.equals('editing', this._id)) {
      return 'editing';
    }
  }
});

/*****************************************************************************/
/* Task: Lifecycle Hooks */
/*****************************************************************************/
Template.Task.onCreated(function () {
});

Template.Task.onRendered(function () {
});

Template.Task.onDestroyed(function () {
});
