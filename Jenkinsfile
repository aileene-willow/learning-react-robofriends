pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // Clean dependencies
                sh 'rm -rf node_modules package-lock.json'
                sh 'npm cache clean --force'
                
                // Fresh install and build
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                // Deploy to nginx web directory
                sh '''
                    # Create directory for the React app
                    sudo mkdir -p /var/www/html/robofriends
                    
                    # Copy built React files to nginx web directory
                    sudo cp -r build/* /var/www/html/robofriends/
                    
                    # Set proper permissions for nginx (Ubuntu uses www-data)
                    sudo chown -R www-data:www-data /var/www/html/robofriends
                    sudo chmod -R 755 /var/www/html/robofriends
                    
                    # Reload nginx to pick up changes
                    sudo systemctl reload nginx
                '''
            }
        }
    }
}