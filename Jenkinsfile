pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // Clean dependencies
                sh 'rm -rf node_modules package-lock.json'
                sh 'npm cache clean --force'
                
                // Fresh install and build
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                // Deploy to nginx web directory
                sh '''
                    # Create directory for the React app
                    sudo mkdir -p /usr/share/nginx/html/robofriends
                    
                    # Copy built React files to nginx web directory
                    sudo cp -r build/* /usr/share/nginx/html/robofriends/
                    
                    # Set proper permissions for nginx (Amazon Linux uses nginx user)
                    sudo chown -R nginx:nginx /usr/share/nginx/html/robofriends
                    sudo chmod -R 755 /usr/share/nginx/html/robofriends
                    
                    # Reload nginx to pick up changes
                    sudo systemctl reload nginx
                '''
            }
        }
    }
}