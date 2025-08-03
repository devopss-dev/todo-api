pipeline {
  agent any
  stages {
    stage('Clone') {
       steps {
        git 'https://github.com/devopss-dev/todo-api.git'
      }
    }
    stage('Build Image') {
      steps {
        sh 'docker build -t todo-api .'
      }
    }
    stage('Deploy to Swarm') {
      steps {
        sh 'docker stack deploy -c swarm-deploy.yml todo_stack'
      }
    }
  }
}

