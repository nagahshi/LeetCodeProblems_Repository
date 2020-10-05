class Solution:
    '''
    Solution using Floyd's cycle-finding algorithm (tortoise and hare)
    '''

    def hasCycle(self, head: ListNode) -> bool:
        if not head or not head.next:
            return False

        fast = slow = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

            # If there is a cycle, fast will inevitably be on the same node as
            # slow.
            if fast is slow:
                return True
        return False