# Ibmlab

The objective of this code is create a web server that works using NodeJs inside a Docker container. The deployment is performed on GCP(Google Cloud Provide) in a Kubernetes Cluster (GKE).

The Automated Deployments are performed with Cloud Build.

# Content Details:
/kubernetes/app.yaml:
Contains kubernetes build/deploy GCP pipeline.

# index.js: 
File with the NodeJs Code.

# package.json:
To specify the npm npm modules to download once the container is created.

# Dockerfile:
To create the docker image.

Deployment url in GCP after commit changes:
http://35.227.66.204

Test Scenario:
Modify the description on the index.js file, line 4: ('Hello World (from Docker!) IBM Demo'); 
Make a commit and check the new description here: http://35.227.66.204




