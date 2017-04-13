#!/bin/bash

# Lista os 15 processos que estão consumindo memória e CPU

ps -e -o pid,uname,cmd,pmem,pcpu --sort=-pmem,-pcpu | head -16 | tail -n 15 > ps_aux.txt

printf "[ \n" > ps.json

for i in {1..15};
do
        printf "\t{ \n" >> ps.json
        PID=`sed -r -n $i'p' ps_aux.txt | awk '{print $1}'`;
        printf "\t\t\"pid\": \"${PID}\",\n" >> ps.json

        UNAME=`sed -r -n $i'p' ps_aux.txt | awk '{print $2}'`;
        printf "\t\t\"uname\": \"${UNAME}\",\n" >> ps.json

        CMD=`sed -r -n $i'p' ps_aux.txt | awk '{print $3}'`;
        printf "\t\t\"cmd\": \"${CMD}\",\n" >> ps.json

        PMEM=`sed -r -n $i'p' ps_aux.txt | awk '{print $4}'`;
        printf "\t\t\"pmem\": \"${PMEM}\",\n" >> ps.json

        PCPU=`sed -r -n $i'p' ps_aux.txt | awk '{print $5}'`;
        printf "\t\t\"pcpu\": \"${PCPU}\"\n" >> ps.json

        if [ "$i" == "15" ];
        then
            printf "\t} \n" >> ps.json
        else
            printf "\t}, \n" >> ps.json
        fi

done

printf "] \n" >> ps.json

rm -rf ps_aux.txt

