pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the Git repository
                git branch: 'main', url: 'https://github.com/kamlangek1devops/service1.git'
            }
        }

        stage('Build') {
            steps {
                //echo 'Building the project...'
                script {
                  bat 'echo "Building the project on Windows..."'
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
            // Actions that run after the pipeline completes
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
