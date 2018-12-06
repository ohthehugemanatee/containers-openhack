from __future__ import print_function
import time
import os
from mcstatus import MinecraftServer
import kubernetes.client
from kubernetes.client.rest import ApiException
from pprint import pprint

#    Memory usage per instance and or node.
#    CPU usage by instance or node.
#    Version of the container running on any given instance.
#    Number of container instances running.
#    Population of each Minecraft server.
#    Total current players and available capacity.


host="13.80.133.210"
kubernetes.config.load_kube_config()
# kubernetes.client.configuration.api_key['authorization'] = 'YOUR_API_KEY'
api_instance = kubernetes.client.AdmissionregistrationApi()

try:
    api_response = api_instance.get_api_group()
#    pprint(api_response)
except ApiException as e:
    print("Exception calling AdmissionregistrationApi->get_api_group: %s\n" % e)

# If you know the host and port, you may skip this and use 
server = MinecraftServer(host, 25565)

# 'status' is supported by all Minecraft servers that are version 1.7 or higher.
status = server.status()
print("The server has {0}/{1} players online".format(status.players.online, status.players.max))
os.system("kubectl top nodes")
os.system("kubectl top pods")
