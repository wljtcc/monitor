#!/usr/bin/env bash

declare -a arr # declaring an array
while read line;do
        if grep -q " " <<< "$line";then
                arr+=$( echo "${line#*:}" )
        fi
done < ps.txt
echo ${arr[@]}