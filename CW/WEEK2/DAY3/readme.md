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

