# HW
uzlikt git bash uz savas ierīces
https://www.udemy.com/course/git-bash/

Iemācīties no galvas bināro skalu. Un HEX uz DEC konversijām
Apskatītites darbības ar python dictionary

| DEC | BIN | HEX |
| --- | --- | --- |
| 0 | 0000 | 0 |
| 1 | 0001 | 1 |
| 2 | 0010 | 2 |
| 3 | 0011 | 3 |
| 4 | 0100 | 4 |
| 5 | 0101 | 5 |
| 6 | 0110 | 6 |
| 7 | 0111 | 7 |
| 8 | 1000 | 8 |
| 9 | 1001 | 9 |
| 10 | 1010 | A |
| 11 | 1011 | B |
| 12 | 1100 | C |
| 13 | 1101 | D | 
| 14 | 1110 | E |
| 15 | 1111 | F | 
  

# Stundas pieraksti

echo A > a.dat //ieraksta failā A kopā ar \\n un tas aizņem 2 bytes  

printf A > b.dat // ierakstas failā tikai A un aizņem 1 byte  

hexdump  a.dat 
hexdump a.dat // ir dažādas atslēgas -c, -b, utt.

echo a | hexdump -C //var palaist pa PIPE, arī citas -key
  
curl google.com // curl output apskats  



imaginary numbers kā piemēram z=4+3j

# Python komandas

pievienot janu vars()  
a=123  
  
Kā izdzēst mainīgo?  
del a  

Teksti vienmēr ""
 
Ja vajag print() ar "" vai '', tad tekstu ieliek pretējās pēdiņās  
>print('"Hello World"')  

type(s) //pārbauda mainīgā tipu  

s2 = str(s) //konvertē uz str, integer  

ja lieto dubulto '//', tad ir darbība ar veseliem skaitļiem  

Kāpināšana ir ar ' ** '

Ja mainīgais ir 's''
s. [TAB]  //parāda visas iebūvētās metodes.  
s.count(a) //saskaitas visus a  

ja vajag lai saskaita visus:  
>from collections import Counter  
Counter(s)  

Lai sakārtotu secīgi ar visbiežāk lietoto.
>x = Counter(s)  
x.most_common()  

c = (11, 22, 77, 11) //Tips ir tuple jeb skaitļu komplekts
dir(c)  // parāda iespējamās comandas ar c

c.index.\_\_doc__ //pilda dokumentācijas funkciju par šo failu.

c.index(11) //parāda kurā vietā ir 11. 
c.index(11, 1) // parāda kur atrst nākošo 11
 

var izmantos arī []
c[2] / kā arī negatīvas vērtības
c[-2] /skaitas no beigām

c = [22, 3.14, 'EDIBO'] //definē sarakstu

Pieejamās komandas sarakstam ir ar c. TAB  

c.sort(reverse=True)  
c.sort()  

c.append() // pieliek sarakstā klāt beigās  
c = [] //izveidot tukšu listu  
c.pop() //izmet ārā

d = {} //izveidot dictionary  
d = {'abols':'apple'}  
>d['abols']  
'apple'  
  
d.update({"bumbieris":'birne'}) //pievieno
d.pop()
'
