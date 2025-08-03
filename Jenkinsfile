pipeline {
  agent any

  environment {
    DOCKER_IMAGE = 'devopss-dev/todo-api:latest'
  }

  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/devopss-dev/todo-api.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $DOCKER_IMAGE .'
      }
    }

    stage('Push to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh '''
            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
            docker push asmiya/todo-api:latest
          '''
        }
      }
    }

    stage('Deploy to Swarm') {
      steps {
        sh 'docker stack deploy -c swarm-deploy.yml todoapp'
      }
    }
  }
}

