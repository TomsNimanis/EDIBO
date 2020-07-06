ls -h //parāda izmērus failiem priekš 'humans'

df

du -h //parāda cik aizņem faili

grep // pielietojums 
>df -h | grep  

awk - arī skatīt
sed - arī skatīt  [Pamācība par SED](https://www.tutorialspoint.com/sed/sed_basic_commands.htm)

regex - nākamnedēļ

man [command] - pamācības, tās var operēt ar Gx2 vai Shift + G, kār arī izmanto '/' lai search funkciju, vai ar N iet cauri meklēšanas rezultātiem


#### Klases darbs

df -h --output=avail /dev/mapper/ubuntu--vg-root | tail -n 1

df -h --output=pcent /dev/mapper/ubuntu--vg-root | tail -n 1
