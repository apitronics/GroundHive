#!/bin/sh

cd /root/Hive/

forever -a -l router.log -p /var/log/hive/ start /root/HiveRouter/server.js
forever -a -l redirect_port_80_to_beekeeper.log -p /var/log/hive/ start Router/redirect_port_80_to_beekeeper.js
forever -a -l beekeeper.log -p /var/log/hive/ start /root/HiveRouter/Beekeeper/server.js
forever -a -l honeycomb.log -p /var/log/hive/ start /root/HiveRouter/Honeycomb/server.js
forever -a -l queen.log -p /var/log/hive/ start /root/HiveRouter/Queen/server.js
