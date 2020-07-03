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

### Darbs ar 'Failu sistēmu'

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

### Noderīgi paņēmieni  

# day1  
echo $0 - noskaidro kāds shell tiek lietots
Ctrl + Alt + T - jauns Terminālis
Ctrl + Shift + T - jauns Tab
Ctrl + L - notīra ekrānu

ls -l - saraksts alfabētiskā secībā
ls -tl - saraksts pēc last tiem modified

# day2  
pwd, ls -cl, cd, mkdir
cat, tail, wc
date, history
t - time
l - list
a - all/abc

# day3  
nano
nano text1.txt - atver failu via uztaisa jaunu failu ar šādu nosaukumu
rwx - read write execute
drwxr-r--r-- ir samnieka tiesības, saimnieka grupas tiesības un visas pārējās tiesības (d ir directory)
sh zsh bash - dažādi shell  


echo $0 - nosaka bash
echo $USER - mainīgos pēc $ jāraksta ar lielajiem
echo $HOME - 
cd $HOME - 

**/** home/user/abc - pirmais '/'ir root iekš linux
**cd** /home/user/abc - cd ir root iekš win  

cd name_of_directory - change directory ‘cd desktop’
cd - bez argumenta ir aiziet mājās
cd .. - nākt atpakaļ
cd . - iet uz priekšu
cd ../../ - iet atpakaļ.

cd / TAB TAB - parāda opcijas uz kurieni var nomainīt

cp - copy

cp ../abc.txt ../ABC/abc2.txt - kopē no iepriekšējās dir uz ABCls 

Adreses - absolute (/), relative (. , .. , ~)

PS1="$ " - nomaina PROMPT simbolu

Izmantot 'TAB' lai pabeigtu daļēji uzrakstītas komandas
man command_name (quit with Q) - var noskaidrot par specifisko komandu
command_name -key(s) argument(s) - pareiza syntax 
command_name -key1 -key2 argument(s)

1 byte = 8 bits (0/1 - 2 states) => unique codes 2^8 = 256
Mājās apskatīties ASCII table
![http://www.ecowin.org/ascii.htm](http://www.ecowin.org/ascii.htm)

hexdump -C abc.txt - 
![hexdump komandas output](https://i.imgur.com/1jQcjud.png)

xxd -b abc1.txt -  attēlo binārā kodā  

![xxd output](https://i.imgur.com/PwtbPMR.png)

whereis ls - parāda, kur ir atrodams ls
*komandu apraksti un tiek meklēti failu ceļos (zem &PATH)*

echo $PATH

PATH=$path:~ -papildina path ar 
chmod 740 - pielikt permissions

time ./01.sh - palaist ar ms

Lai darbinātu komandu, tai jābīut atrodamai un izpildāmai zem permissons RWX



## For loop in bash

for i in {0..5}; do echo "$i"; done
for i in {0..5}; do echo "'date'"; done ###ar command
for i in {0..5}; do echo "$i $((i*i))"; done
for i in {0..5}; do echo "$i $((i*i)) $((i*i*i*))"; done


### HW Palasīt Bin to DEC metodes, DEC to BIN, BIN to HEX, HEX to BIN, HEX to DEC,





# VIM komandas  
Esc -> : -> wq! -> [Enter]
i = insert
a = append
x = delete selected character

d x2= delete line
shift + v - iezīmēt
y - copy
yy - cut
p - paste

g x2= sākums
shift+g = beigas

/ - find


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

  
  
( | )OR operation - is setBit operand
![Snippet no YT video https://i.imgur.com/U0v2W51.jpg](https://i.imgur.com/U0v2W51.jpg)

Augšējā rinda ir PortB
Otrā rinda ir MASK
Trešā rinda ir Result

PortB| = 0b0001 //operants OR uzstāda bitu uz 1. **0b** priekšā pasaka, ka ir binārs.  Skaitļi pēc 0b ir MASK.

( ^ )XOR operation - strikts OR. Nedrīkst būt abi, jābūt tikai vienā pusē 1. Pilda **FLIP/TOGGLE** bit funkciju.

![XOR](https://i.imgur.com/mP2Eybe.jpg)

PortB^ = 0b0010  

( & )AND operation - 

( ~ )NOT operation - Paņem pilnīgi visus bitus un apgriež otrādāk. Bet lieliski strādā kopā ar ( & ) operantu.
0011 = 1100

PortB(0111)
PortB &=~(0b0010) // vispirms izpilda ( ~ ) komandu, un tad tās rezultāts tiks apstrādāts ar ( & )


