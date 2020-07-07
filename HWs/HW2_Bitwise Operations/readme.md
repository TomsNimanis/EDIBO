**HW bit operācijas / bitwise operations https://en.wikipedia.org/wiki/Bitwise_operation **

[Bitwise Operations Tutorial](https://www.youtube.com/embed/h_bHdbk5Jh4)  

| Symbol | Definition | Description |
| --- | --- | ---|
| &#124; | or | Results is **true** if a *1* exists in **either** operand |
| & | and | Results is **true** if a *1* exists in **both** operands|
| ^ | xor | Results is **true** if a *1* exists in **only 1** operand|
| ~ | not | Operator is unary and has the effect of **flipping** a bit (complementing)|
| << | left shift | The left operand is moved to the left by the # of bits specified by the right operand|
| >> | right shift | The right operand is moved to the left by the # of bits specified by the right operand|

  
**true = 1**
**false = 0**  


Ja tev ir micorcontroller chips zirneklītis, tad vienā pusē tas ir 1 un otrā pusē 0. Teiksim zirneklītim ir 4 kājas.  

| Zirneklīša kreisās kājas | Zirneklīša labās kājas |
| --- | --- |
| 1 | 0|
| 0 | 1|
| 0 | 1|
| 1 | 0|

jeb 1001 pret 0110, bet ja teiksim tu vēlies 10**0**1 pārvērst, tu nevari vienkārši uzlikt to kā 10**1**0, un pretim 01**0**0, jo tie var būt mainīgi, līdz ar to tiek izmantotie Bitwise operanti.

![https://coolcapengineer.files.wordpress.com/2012/07/port.jpg](https://coolcapengineer.files.wordpress.com/2012/07/port.jpg)

  
  
( | )OR operation - is setBit operand
![Snippet no YT video https://i.imgur.com/U0v2W51.jpg](https://i.imgur.com/U0v2W51.jpg)

Augšējā rinda ir PortB
Otrā rinda ir MASK
Trešā rinda ir Result

PortB| = 0b0001 //operants OR uzstāda bitu uz 1. **0b** priekšā pasaka, ka ir binārs.  Skaitļi pēc 0b ir MASK.

( ^ )XOR operation - strikts OR. Nedrīkst būt abi, jābūt tikai vienā pusē 1. Pilda **FLIP/TOGGLE** bit funkciju.

![XOR](https://i.imgur.com/mP2Eybe.jpg)

PortB^ = 0b0010  

( & )AND operation - Abām vērtībām jābūt 1, ja abas ir 0, vai tikai viena ir 1, tad rezultāts būs 0.

( ~ )NOT operation - Paņem pilnīgi visus bitus un apgriež otrādāk. Bet lieliski strādā kopā ar ( & ) operantu.
0011 = 1100

PortB(0111)
PortB &=~(0b0010) // vispirms izpilda ( ~ ) komandu, un tad tās rezultāts tiks apstrādāts ar ( & )
