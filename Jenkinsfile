pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building..'
        sh 'npm --version'
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing..'
        sh 'npm test'
      }
    }
  }
}