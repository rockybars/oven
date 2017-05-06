pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building..'
        sh -c 'export NVM_HOME=/var/lib/jenkins/.nvm'
        sh -c '[ -s $NVM_DIR/nvm.sh ] && \. $NVM_DIR/nvm.sh'
        sh -c 'nvm install 6'
        sh -c 'nvm use 6'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing..'
      }
    }
  }
}
