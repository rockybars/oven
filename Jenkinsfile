pipeline {
  agent any

  stages {
    stage('Install') {
      steps {
        echo 'Installing...'
        source ~/.bashrc
        nvm use 6
        npm install
      }
    }

    stage('Test') {
      steps {
        echo 'Testing...'
        npm test
      }
    }
  }
}
