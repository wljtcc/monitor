#!/bin/bash

# Lista os 15 processos que estão consumindo memória e CPU

ps -e -o pid,uname,cmd,pmem,pcpu --sort=-pmem,-pcpu | head -15 > ps.txt