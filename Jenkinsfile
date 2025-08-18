pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                // Clean dependencies
                sh 'rm -rf node_modules package-lock.json'
                sh 'npm cache clean --force'
                
                // Fresh install
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}