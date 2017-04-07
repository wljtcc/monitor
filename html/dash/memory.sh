#!/bin/bash

#for i in {1..1000}
#    do
        TOTAL=`free -m | awk '{print $2}' |sed -n '2p'`
        USED=`free -m | awk '{print $3}' |sed -n '2p'`
        FREE=`free -m | awk '{print $4}' |sed -n '2p'`
        CACHE=`free -m | awk '{print $6}' |sed -n '2p'`

        let "TOTAL=$TOTAL"
        let "USED=$USED"
        let "FREE=$FREE"
        let "CACHE=$CACHE"

        #sqlite3 ../db/dashboard.sqlite "insert into memory (free,used,cache,total) values ($FREE,$USED,$CACHE,$TOTAL);"
        #sqlite3 dashboard.sqlite "select * from memory LIMIT 5;"
        echo $TOTAL > memory.txt
        echo $USED >> memory.txt
        echo $FREE >> memory.txt
        echo $CACHE >> memory.txt

        sleep 2
#done

