class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const mergeTwoLists = function(list1, list2) {
    let p1 = list1;
    let p2 = list2;

    let result = new ListNode(0);
    let current = result;

    while (p1 !== null && p2 !== null) {
        if (p1.val <= p2.val) {
            current.next = p1;
            current = current.next;
            p1 = p1.next;
        } else {
            current.next = p2;
            current = current.next;
            p2 = p2.next;
        }
    }

    if (p1 === null) {
        current.next = p2;
    } else {
        current.next = p1;
    }

    return result.next;
};
let output = [];
let node = result;

while (node !== null) {
    output.push(node.val);
    node = node.next;
}

console.log(output);
