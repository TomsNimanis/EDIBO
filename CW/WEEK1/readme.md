### Terminal Commands

Open Terminal
Ctrl + alt + t 


Firefox & 
‘&’ lai turpinātu komunicēt ar terminālu


Ctrl + L  Terminal Clear


uz Mac cmd + L nodzēš iepriekšejo līniju


exit vai ctrl + D


Klasēs tiek lietots Ubuntu 18.04.3 LTS

pwd - shows directory (print working directory)
clear - nodzēš ekrānu

ls - list contents

ls .
ls .. - iet atpakaļ uz directory

ls /  - list home directory.

ls -l 	-rāda ,kad izveidots fails/dir
ls -l ABC - rāda,kas konkrēti atrodajas tajā izvēlētajā folderī

ls /home/ - uzrāda visu kas ir iekšā

ls | head - scroll uz augšu top 10
ls | tails - scroll uz leju top 10

‘ | ‘ = pipe symbol

ls | head -n 3| wc -l

[Head command options linux](https://www.geeksforgeeks.org/head-command-linux-examples/)

cd - change directory ‘cd desktop’
cd .. - nākt atpakaļ

cd / TAB. TAB - parāda opcijas uz kurieni var nomainīt


mkdir - izveidot jaunu folderi ‘mkdir 428’


### Python

2**3
2 bāze, kāpinātājs , pakāpe.

3 ir logaritms., pie pakāpes bāzes

2**10 = 1024 jāzin


linux shell

a=123 //definē vērtību
echo $a //atgriež vērtību
echo $a $b $c

echo ‘date’ — komandu ieliek back ticks

a=44
b=133
echo $((a+b)) - ((expressions))  starp diviem skaitļiem

[Paraugs](https://stackoverflow.com/questions/4750763/how-do-i-echo-a-sum-of-a-variable-and-a-number)

>cat a.txt  
head a.txt  
tail a.txt  
ls -l *.txt  


Line break ir double spacebar  
￼

![Image example for ls](https://i.imgur.com/JFjl4fJ.png)

## Notes

Mājas darbs ir WSL + windows terminal

Windows 10 20.04 versija tad pieejams WSL 2.0

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


