pipeline {
    agent any
      tools {nodejs "nodejs"}

    stages {
        stage('Deploy') {
            when {
              expression {
                currentBuild.result == null || currentBuild.result == 'SUCCESS' 
              }
            }
            steps {
                sh 'npm install'
                sh 'npm start'
            }
        }
    }
}