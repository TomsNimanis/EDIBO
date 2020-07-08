>#! /bin/bash   
#Skripts ar nosaukumu nf.sh (New Folder)   
cd   
if [ ! -d "$(date +"%Y%d%m")" ]  
then  
mkdir "$(date +"%Y%d%m")" && cd "$_"  
echo "Tika izveidota mape ar nosaukumu "$(date +"%Y%d%m")",kurā jūs tagad atrodaties"  
fi  

  
**Skripts ir jāpalaiž ar . nf.sh ,lai netiktu aktivizēts jauns child shell un tiktu izpildīta '$$ CD "$\_". Kā arī var izveidot funkciju vai alias bet lai tie nepazustu jāpievieno rindiņa iekš .bashrc**  
  
>#!/bin/bash  
\#  Šo skriptu vajag palaist ar komandas palidzibu caur .bashrc,  
\# pievienojot šo līniju  
\#   . /home/jokimazi/nf.sh  
\#  
function nf() {  
cd   
if [ ! -d "$(date +"%Y%d%m")" ]  
then    
mkdir "$(date +"%Y%d%m")" && cd "$\_"    
echo "Tika izveidota mape ar nosaukumu "$(date +"%Y%d%m")",kurā jūs tagad atrodaties"    
fi    
}  
 
**Alias iekš .bashrc**
 
>alias nf=". nf.sh"  
