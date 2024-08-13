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
                // Example build step
                sh 'echo "Building the project..."'
            }
        }

        stage('Test') {
            steps {
                // Example test step
                sh 'echo "Running tests..."'
            }
        }

        stage('Deploy') {
            steps {
                // Example deploy step
                sh 'echo "Deploying the application..."'
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
