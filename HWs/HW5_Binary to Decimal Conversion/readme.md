8 bit Binary vērtības ir no 0 - 255 vai -128 līdz 127.

Līdz ar to tabulā vērtības ir 2^7

![https://i.imgur.com/6yoFMYz.png](https://i.imgur.com/6yoFMYz.png)

Ja skaitlis iekļaujas <=255, tad skaitlis '153'
aprēķina šādi:  

>153 - 128 = 25 // Tāpēc ka izpildās liekas 1  
25 - 64 = Neizpildās liekas 0  
25 - 32 = Neizpildās liekas 0  
25 - 16 = 9 // Tāpēc, ka izpildās liekas 1  
9 - 8 = 1 // Tāpēc, ka izpildās liekas 1  
1 - 4  = Neizpildās liekas 0  
1 - 2  = Neizpildās liekas 0  
1 - 1 = 0 // Tāpēc, ka izpildās liekas 1  
  
![https://i.imgur.com/LCT740X.png](https://i.imgur.com/LCT740X.png)

Sevi pārbaudīt var reizinot Bitu 0/1 ar apakšējiem skaitļiem  1, 2, .. 64, 128 un sasummējot tas būs sākotnējais skaitlis.

Piemēram 1 * 1 + 1 * 8 + 1 * 16 + 1 * 128 = 153



Man vieglākais veids ir /2 metodi,ja ir ārpus 8 bit skalas.

Ņemam skaitli 1234  un dalam ar divie pierakstam atlikumu kā 1, ja tāds ir vai 0 ,ja nav

>1234/2 = 617  // 0   Least siginifact Bit(LSB)  
617/2 = 308   // 1  
308/2 = 154  // 0  
154/2 = 77 // 0
77/2 = 38 // 1  
38/2 = 19 // 0  
19/2 = 9 // 1  
9/2 = 4 // 1  
4/2 = 2 // 0  
2/2 = 0 // 0 Most significant Bit (MSB)  

Pieraksta no MSB uz LSB 
0b 0011010010 = 1234




