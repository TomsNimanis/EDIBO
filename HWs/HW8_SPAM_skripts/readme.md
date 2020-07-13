[Saite uz pastebine](https://pastebin.com/Jq4YTJHi)




spam.py
 
#!/usr/bin/env python
# -*- coding: utf-8 -*-
 
spam_txt = """
Čau %s %s,
 
Tu mums esi parādā %s EUR.
 
Lūdzu nosūti mums īsziņā
 
Zelta Zivtiņas kredītu šadā summā
uz numuru %s.
"""
 
 
 
var_list2.py
 
#!/usr/bin/env python
# -*- coding: utf-8 -*-
 
 
vardi = ['Anna', 'Jānis', 'Pēteris', 'Jēkabs']
uzvardi = ['Bērziņa', "Bērziņš", 'Ozols', 'Liepa']
summa = [1500, 200, 1000, 400]
telefons = '+371 20136055'
 
 
spam_ready2.py
 
#!/usr/bin/env python
# -*- coding: utf-8 -*-
 
from __future__ import print_function
from spam import spam_txt
 
from var_list2 import vardi, uzvardi, summa, telefons
 
for i in range(3):
 print(spam_txt % (vardi[i], uzvardi[i], summa[i], telefons))
 
 
 with open('email_ready_to_be_sent%s.txt' %i, 'w') as f:
  print((spam_txt % (vardi[i], uzvardi[i], summa[i], telefons)), file=f)
 
# Meginaju ar file open, bet nesanaca
# file = open('email_ready_to_be_sent%s.txt' %i, 'w')
# file.write(print((spam_txt % (vardi[i], uzvardi[i], summa[i], telefons))))
# file.close()
