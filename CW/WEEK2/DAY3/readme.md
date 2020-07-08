Python Fibonacci sekvence
Bubble sort metode tiks apskatīta

wget - komandas lietojums

curl - atsūta mājaslapas saturu
ifconfig

ps -a //parāda visus services

kill -9 [proces id] //aiztaisa visus saistītos procesus.

Klases uzdevums:

123 skaitlis ar suffix 1, to binary 

### While netradicionalie operatori

![https://i.imgur.com/zAtTz25.png](https://i.imgur.com/zAtTz25.png)


>#! /bin/bash  
n=123  
rezultats=0  
pakape=1  
  
while [ $n -ne 0 ]  
do  
        atlikums=$(( $n % 2 ))  
        rezultats=$(( $atlikums * $pakape + $rezultats ))  
        pakape=$(( $pakape * 10 ))  
        n=$(( $n / 2 ))  
done  
  
echo "Binārais skaitlis, skaitlim 123= $rezultats"  

Decimālajā skalā skaitļi ir no 0 .. 9
hexadecimal skaitļit ir no 0..9 un tad burti A(10)..F(15)



Izmantojot **read**

echo "Enter the number"
read n

##### HW
mkdir 20200708

'date'

Izveidot jaunu folderīti pēc USA date formāta izmantojot skriptu,vai komandu

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


  
  Atdot argumentu komanda skriptam 
  >#! /bin/bash  
  echo $0   

tad palaižot skriptu

>$ ./05.sh RTU  

arguments tiek atdots failā kā mainīgais un termināli printē

>RTU  

Var arī izmantot vairākus mainīgos
> #! /bin/bash  
echo $1 $2 $3  

tad atdodot vairākus argumentus
>$ ./05.sh RTU 20 DDD  
RTU 20 DDD  

ko tālāk var definēt

> #! /bin/bash  
echo $1 $2 $3  
kopa=$1+2  
  
echo $kopa  




