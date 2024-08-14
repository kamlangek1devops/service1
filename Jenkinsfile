pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the Git repository
                git branch: 'main', url: 'https://github.com/kamlangek1devops/service1.git'
            }
        }

        stage('Build Docker') {
            steps {
                script {
                    bat '''
                        echo "Building the project on Windows..."
                        docker build -t kamlangek2devops/app1:1.0.2 .
                        '''
                }
            }
        }

        stage('Push Docker to Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'Docker_Hub_Credential', 
                usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    bat '''
                        echo "Logging into Docker registry..."
                        docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
                        
                        echo "Pushing Docker image to registry..."
                        docker push kamlangek2devops/app1:1.0.2
                    '''
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo ' "Deploying the application..."'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
        success {
            // Actions that run only if the pipeline succeeds
            echo 'Build succeeded!'
        }
        failure {
            // Actions that run only if the pipeline fails
            echo 'Build failed.'
        }
    }
}
