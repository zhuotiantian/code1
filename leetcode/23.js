var mergeKLists = function (lists) {
  let first = new ListNode(0);
  first.next = lists[0];
  if (lists.length > 1) {
    combineList(first, lists.slice(1, lists.length));
  };
  return first.next
};
var combineList = function (list, lists) {
  if (lists.length == 0) {
    return
  } else {
    let current = lists[0];
    while (current.next) {
      if (list.val > current.val) {
        list.next = current.next;
      };
      current = current.next;
    };
    combineList(list, lists.slice(1, lists.length));
  }
};

function ListNode(val) {
  this.val = val;
  this.next = null;
  return this;
};


mergeKLists([{
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}, {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}]);
