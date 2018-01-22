

# use base image of python 3.6
FROM python:3.6

#Set Env
ENV HOMEDIR=/
ENV FRONTENDDIR=/frontend

# create directory where code is stored
RUN  mkdir /app/

# Set the working directory to /app
WORKDIR /app

#put local parent directory into /app/ no dependencies installed yet
ADD . /app/

# Set proxy server, replace host:port with values for your servers
ENV http_proxy 8000:80
#ENV https_proxy host:port

ADD requirements.txt /app/

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Run app.py when the container launches
#CMD ["python", "monami/manage.py", "runserver"]


#entry point is the command to run your container
#tail takes stout to /dev/null (trashcan for linux)
#ENTRYPOINT ["tail", "-f", "/dev/null"]
