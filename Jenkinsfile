pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building..'
        sh '''nvm use 6
npm install'''
      }
    }
    stage('Test') {
      steps {
        echo 'Testing..'
      }
    }
  }
}