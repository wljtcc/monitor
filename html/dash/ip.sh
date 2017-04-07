#!/bin/bash

IFACE="enp3s0"

# Internal IP
IIP=`ifconfig ${IFACE}| awk '/inet addr/{print substr($2,6)}'`

# External IP
EIP=`curl -s http://ipinfo.io/ip`

echo ${IIP} > ip.txt
echo ${EIP} >> ip.txt