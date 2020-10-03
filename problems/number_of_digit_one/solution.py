class Solution(object):
    def countDigitOne(self, n):
        number = 0
        i = 1 
        while(i <= n): 
            divider = i * 10
            number += (int(n / divider) * i +
                 min(max(n % divider -i + 
                              1, 0), i)) 
            i *= 10 

        return number 