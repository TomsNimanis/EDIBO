>#! /bin/bash   
#Skripts ar nosaukumu nf.sh (New Folder)  
  
cd  
if [ ! -d "$(date +"%Y%d%m")" ]  
  
then  
mkdir "$(date +"%Y%d%m")" && cd "$_"  
echo "Tika izveidota mape ar nosaukumu "$(date +"%Y%d%m")",kurā jūs tagad atrodaties"  
fi  

  
**Skripts ir jāpalaiž ar . nf.sh ,lai netiktu aktivižet jauns child shell un tiktu izpildīta '$$ CD "$\_" var arī izveidot funkciju**  
  
>#!/bin/bash  
\#  Šo skriptu vajag palaist ar komandas palidzibu caur .bashrc,  
\# pievienojot šo līniju  
\#   . ~/bin/nf.sh  
\#  
  
function nf() {  
cd   
if [ ! -d "$(date +"%Y%d%m")" ]  
   
then    
mkdir "$(date +"%Y%d%m")" && cd "$\_"    
echo "Tika izveidota mape ar nosaukumu "$(date +"%Y%d%m")",kurā jūs tagad atrodaties"    
fi    
}  
  
