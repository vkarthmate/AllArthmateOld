# AllArthmateOld

Now we work on Python DWH 
Start the virtual enivronment => .\venv\Scripts\Activate
(venv) PS C:\Users\Vikas\Desktop\Airhtmate\DataScience\AlternateData\src> flask run
Ubuntu Username Password
username - ubuntu 
password - 1234
C:\Users\Vikas>wsl --install -d Ubuntu
Installing: Ubuntu
Ubuntu has been installed.
Launching Ubuntu...
Installing, this may take a few minutes...
Please create a default UNIX user account. The username does not need to match your Windows username.
For more information visit: https://aka.ms/wslusers
Enter new UNIX username: ubuntu
New password:
Retype new password:
passwd: password updated successfully
Installation successful!
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 5.15.146.1-microsoft-standard-WSL2 x86_64)




==================
# Run this ubuntu in window laptop
cmd  ==> run wsl 
wsl -d Ubuntu
sudo ufw allow 5430

sudo lsof -i :5430

sudo kill -9 <37631> replace with PID
chmod 400 bastion_host_new_dwh.pem
pgadmin DB start below commmand and pgadmin folder 
sudo ssh -i "bastion_host_new_dwh.pem" -f -N -L 5430:new-dwh-instance-1-ap-south-1c.cc5fbzqkrha4.ap-south-1.rds.amazonaws.com:5432 ubuntu@ec2-52-66-138-242.ap-south-1.compute.amazonaws.com
=>
For EC2 Connect command (Repo : vikas, sourabh ...)

sudo ssh -i "bastion_host_new_dwh.pem" ubuntu@ec2-52-66-138-242.ap-south-1.compute.amazonaws.com
***********************************************************************
DWH general read only
Username: dwh_read_only
Pass: Arth^prod@24
port: 5430





