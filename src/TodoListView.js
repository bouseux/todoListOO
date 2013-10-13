function TodoListView(opts) {
  var opts = opts || {};
  this.list = [];
  this.element = opts.element || 'div';
}

TodoListView.prototype.add = function(itemView) {
  itemView = itemView || new ItemView();
  this.list.push(itemView);
};

TodoListView.prototype.remove = function(index) {
  this.list.splice(index, 1);
};

TodoListView.prototype.render = function() {
  return "<"  + this.element + ">" +
         "</" + this.element + ">";
};
