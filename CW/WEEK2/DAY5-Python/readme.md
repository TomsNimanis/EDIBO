# Darbs ar Python un google collabs

[Saite uz google collab](https://colab.research.google.com/drive/1ajQTMctVeOEALDnyUK5j_8E4yJioeOih)

b=b'123' //type ir Bytes 

ord('A') // The ord() function returns an integer representing the Unicode character.
 
 
//  parāda characteru hex formātā   
  
>hex(ord('A'))  
'0x41'  
  
// Parāda characteru binārā formātā
  
>bin(ord('A'))  
'0b1000001'  

s = set() // kopa , tāpat kā dictionary bet bez pāriem, kopa automātiski 'sort', be viss ir unikāls, nevar pievienot duplikātus
 
 
s.add(11) // pievieno vērtību

s.difference(s2) //salīdzina divas kopas vai arī var s2-s via otrādāk.  

** ':' ** //sauc par preampulu

## For loop  

for i in range(3,10): print(i)  // printē skaitļus no 3 līdz 10, ja ievada range(9) vienu argumentu,tad sākas no 0-8, jo sākas ar 0,bet beidzas par 1 mazāk
  
Ja vienā rindā jāraksta, vairākas rindas, tad 
>for i in range(3,10): print(i); print('a')
  
   
   
 Paskāla trijstūris. //bet mans kods darbojas tikai līdz bāzes 11 pakāpei 4.
 
>In [217]: for i in range(5):  
     ...:     print(" "*(4-i), " ".join(str(11**i)))  
     ...:       
     1  
    1 1  
   1 2 1  
  1 3 3 1  
 1 4 6 4 1  
  


In [252]: s = """  
     ...: Godājamais x,  
     ...: Jums ir pienācis naudas pārvedums  
     ...: ar vērtību y EUR  
     ...: Lai saņemtu naudu, atsūtiet  
     ...: īsziņu uz tlf. numuru z  
     ...:   
     ...: Cieņā,  
     ...:         atraitne  
     ...: """  
  
t = "Summa = %s, valūta = %s"%(2, 'EUR') // pievieno mainīgos stringā  
 
 
 ###Spam skripts
 
 
In [296]: s = """  
     ...: Godājamais %s,  
     ...: Jums ir pienācis naudas pārvedums  
     ...: ar vērtību %d EUR  
     ...: Lai saņemtu naudu, atsūtiet  
     ...: īsziņu uz tlf. numuru %s  
     ...:   
     ...: Cieņā,  
     ...:         atraitne  
     ...: """%('Jāni', 1000, '+371 20136055') #aizpilda visus mainīgos  
       
  
In [297]: print(s)  
  
Godājamais Jāni,  
Jums ir pienācis naudas pārvedums  
ar vērtību 1000 EUR  
Lai saņemtu naudu, atsūtiet  
īsziņu uz tlf. numuru +371 20136055  
  
Cieņā,  
        atraitne  


 
