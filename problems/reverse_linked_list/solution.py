class Solution(object):
    def reverseList(self, head, auxNode=None): #recursive mode
            if(head==None):
                return auxNode
            else:
                return self.reverseList(head.next, ListNode(head.val, auxNode))
            """
            :type head: ListNode
            :rtype: ListNode
            """ 