#!/bin/bash

PROC=`cat /proc/cpuinfo | grep processor | awk '{print $3}' | tail -1`
CPU=`expr $PROC + 1`

echo "Total CPU: $CPU"

sqlite3 ../db/dashboard.sqlite "insert into cpu (qtde) values ($CPU);"
