FROM python:3.6
# use base image of python 3.6
RUN  mkdir /app/
# create directory where code is stored
ADD . /app/
#put local parent directory into /app/ no dependencies installed yet
ENTRYPOINT ["tail", "-f", "/dev/null"]
#entry point is the command to run your container
#tail takes stout to /dev/null (trashcan for linux)
